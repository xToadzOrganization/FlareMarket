// ==============================
// TOADZ FLARE INDEXER
// ==============================
const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// ==================== CONFIG ====================
const PORT = process.env.PORT || 8080;
const RPC_URL = process.env.FLARE_RPC || 'https://flare-api.flare.network/ext/C/rpc';
const FALLBACK_RPC = 'https://rpc.ankr.com/flare';
const POLL_INTERVAL = 3000; // 3 seconds
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '30'); // Blocks per query - public RPC limited to 30
const INDEX_DELAY = 100; // ms between batches (rate limiting)

// Flare Mainnet Collections
const COLLECTIONS = {
    '0xd1eF6460D9d06a4Ce74d9800b1BC11Ade822b349': { name: 'Block Bonez', symbol: 'BONEZ' },
    '0x4FD29d6c713a390Aa38b650254D0cD38a4982dBD': { name: 'Focus Pass', symbol: 'FOCUS' },
    '0x862B713fEcEbC5304eD7aF993D79A3a6AE8747Dd': { name: 'Flare Apes', symbol: 'FAPES' },
    '0x94Aa172076A59bAa1B5D63Ae4DBF722F74E45e57': { name: 'Block Bonez Traits', symbol: 'TRAITS' },
    '0xc5F0C8b27dd920F4F469a857D6F0fEcF0fA2bDb8': { name: 'Flare Punks', symbol: 'FPUNKS' },
    '0x9d8644A5D8A4ed0B4Ca462Ef32A6d47Eb03c59db': { name: 'Lucky Claw', symbol: 'CLAW' },
    '0x595FA9efFad5c0c214b00b1e3004302519BfC1Db': { name: 'Flaremingo Frens', symbol: 'FRENS' },
    '0x93365AACe3db5407B0976C0a6C5F46B21BAd3923': { name: 'The Fat Kittens', symbol: 'KITTEN' },
    '0x2959D636871D9714dD6E00F4e9700CCc346CC39E': { name: 'Doodle Bunny', symbol: 'BUNNY' },
    '0xE2432F1e376482Ec914ebBb910D3BfD8E3F3F29e': { name: 'The Flaremingos', symbol: 'MINGO' },
    '0x01269ec72CDC62EB5e90a30363264029A45f43d1': { name: 'The Phoenix Project - Founders Edition', symbol: 'PHOENIX' },
    '0xe6E5fa0b12D9E8ed12Cb8AB733E6444f3c74c68c': { name: 'Poodle & Friends', symbol: 'POODLE' },
    '0x5F4283Cf126a4dCcE16b66854Cc9A713893c0000': { name: 'Smuggler Chimps', symbol: 'CHIMP' },
    '0x127bB21A24B8Ea5913F1c8c9868800fbCeF1316E': { name: 'Super Bad Monsters', symbol: 'SBM' },
    '0xd2516A06D1fAbB9ba84b5fD1de940F6F0EaE3673': { name: 'Minerals', symbol: 'MINERAL' },
    '0xa574dD4393e828B8CF7c3C379861C748d321bBFd': { name: 'FlareRock', symbol: 'FROCK' },
    '0x9f338Ac5D000BAAB73F619fc75115F2FE9773736': { name: 'Mutant Ape Flare Serum', symbol: 'MAFS' },
    '0xf799F44bf672f5c2a141778c328e386eCD867330': { name: 'The Phoenix Project - Liquidity Edition', symbol: 'PHOENIX-LIQ' },
    '0xBc25d2997a7a7b42D2501A4c4d0169f135743a64': { name: 'PoodleFriendIslands', symbol: 'ISLAND' },
    '0xbC42e9a6C24664749b2a0D571Fd67f23386e34b8': { name: 'Floor-Sweeper', symbol: 'SWEEP' }
};

// Normalize addresses to checksummed format
const normalizeAddress = (addr) => {
    try {
        return ethers.utils.getAddress(addr.toLowerCase());
    } catch {
        return addr.toLowerCase();
    }
};

// Create normalized lookup
const COLLECTIONS_NORMALIZED = {};
for (const [addr, data] of Object.entries(COLLECTIONS)) {
    COLLECTIONS_NORMALIZED[normalizeAddress(addr)] = data;
    COLLECTIONS_NORMALIZED[addr.toLowerCase()] = data;
}

// ==================== DATABASE ====================
const dbPath = fs.existsSync('/data') ? '/data/flare-indexer.db' : './flare-indexer.db';
console.log(`Using database path: ${dbPath}`);

let db;
try {
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    db.pragma('synchronous = NORMAL');
    console.log('Database connected successfully');
} catch (err) {
    console.error('Database connection failed:', err.message);
    db = new Database(':memory:');
}

// Initialize tables
db.exec(`
    -- NFT ownership (the core table)
    CREATE TABLE IF NOT EXISTS nft_ownership (
        collection TEXT NOT NULL,
        token_id INTEGER NOT NULL,
        owner TEXT NOT NULL,
        block_number INTEGER DEFAULT 0,
        updated_at INTEGER DEFAULT (strftime('%s', 'now')),
        PRIMARY KEY (collection, token_id)
    );
    
    -- Sync state per collection
    CREATE TABLE IF NOT EXISTS sync_state (
        collection TEXT PRIMARY KEY,
        last_block INTEGER NOT NULL,
        is_synced INTEGER DEFAULT 0,
        updated_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Global sync state
    CREATE TABLE IF NOT EXISTS global_sync (
        id INTEGER PRIMARY KEY,
        last_block INTEGER NOT NULL,
        updated_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Marketplace events (for activity feed)
    CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tx_hash TEXT NOT NULL,
        block_number INTEGER NOT NULL,
        timestamp INTEGER NOT NULL,
        event_type TEXT NOT NULL,
        collection TEXT,
        token_id INTEGER,
        from_address TEXT,
        to_address TEXT,
        price TEXT,
        created_at INTEGER DEFAULT (strftime('%s', 'now')),
        UNIQUE(tx_hash, event_type, collection, token_id)
    );
    
    -- Notifications
    CREATE TABLE IF NOT EXISTS notifications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_address TEXT NOT NULL,
        type TEXT NOT NULL,
        urgency TEXT NOT NULL,
        title TEXT NOT NULL,
        message TEXT,
        collection TEXT,
        token_id INTEGER,
        is_read INTEGER DEFAULT 0,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Floor prices
    CREATE TABLE IF NOT EXISTS floors (
        collection TEXT PRIMARY KEY,
        floor_price TEXT,
        updated_at INTEGER
    );
    
    -- Artist storefronts
    CREATE TABLE IF NOT EXISTS storefronts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        wallet TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        tagline TEXT,
        bio TEXT,
        avatar TEXT,
        banner TEXT,
        twitter TEXT,
        website TEXT,
        verified INTEGER DEFAULT 0,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Artist NFTs (for 1/1 marketplace)
    CREATE TABLE IF NOT EXISTS artist_nfts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        token_id TEXT,
        contract_address TEXT,
        artist_wallet TEXT NOT NULL,
        name TEXT NOT NULL,
        description TEXT,
        image_url TEXT,
        metadata_url TEXT,
        price REAL DEFAULT 0,
        sale_type TEXT DEFAULT 'fixed',
        status TEXT DEFAULT 'minted',
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Indexes for fast queries
    CREATE INDEX IF NOT EXISTS idx_ownership_owner ON nft_ownership(owner);
    CREATE INDEX IF NOT EXISTS idx_ownership_collection ON nft_ownership(collection);
    CREATE INDEX IF NOT EXISTS idx_events_block ON events(block_number DESC);
    CREATE INDEX IF NOT EXISTS idx_events_collection ON events(collection);
    CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_address, is_read);
`);

// Prepared statements
const stmts = {
    upsertOwnership: db.prepare(`
        INSERT INTO nft_ownership (collection, token_id, owner, block_number, updated_at)
        VALUES (?, ?, ?, ?, strftime('%s', 'now'))
        ON CONFLICT(collection, token_id) DO UPDATE SET
            owner = excluded.owner,
            block_number = excluded.block_number,
            updated_at = strftime('%s', 'now')
        WHERE excluded.block_number >= nft_ownership.block_number
    `),
    getUserNfts: db.prepare(`
        SELECT collection, token_id FROM nft_ownership 
        WHERE LOWER(owner) = LOWER(?) 
        ORDER BY collection, token_id
    `),
    getCollectionSyncState: db.prepare(`
        SELECT * FROM sync_state WHERE collection = ?
    `),
    upsertCollectionSync: db.prepare(`
        INSERT INTO sync_state (collection, last_block, is_synced, updated_at)
        VALUES (?, ?, ?, strftime('%s', 'now'))
        ON CONFLICT(collection) DO UPDATE SET
            last_block = excluded.last_block,
            is_synced = excluded.is_synced,
            updated_at = strftime('%s', 'now')
    `),
    getGlobalSync: db.prepare(`SELECT last_block FROM global_sync WHERE id = 1`),
    setGlobalSync: db.prepare(`
        INSERT OR REPLACE INTO global_sync (id, last_block, updated_at)
        VALUES (1, ?, strftime('%s', 'now'))
    `),
    insertEvent: db.prepare(`
        INSERT OR IGNORE INTO events (tx_hash, block_number, timestamp, event_type, collection, token_id, from_address, to_address, price)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `),
    getRecentEvents: db.prepare(`
        SELECT * FROM events ORDER BY block_number DESC, id DESC LIMIT ?
    `),
    getCollectionEvents: db.prepare(`
        SELECT * FROM events WHERE LOWER(collection) = LOWER(?) ORDER BY block_number DESC LIMIT ?
    `),
    insertNotification: db.prepare(`
        INSERT INTO notifications (user_address, type, urgency, title, message, collection, token_id)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `),
    getUserNotifications: db.prepare(`
        SELECT * FROM notifications WHERE LOWER(user_address) = LOWER(?) ORDER BY created_at DESC LIMIT ?
    `),
    getUnreadNotifications: db.prepare(`
        SELECT * FROM notifications WHERE LOWER(user_address) = LOWER(?) AND is_read = 0 ORDER BY created_at DESC
    `),
    markNotificationsRead: db.prepare(`
        UPDATE notifications SET is_read = 1 WHERE LOWER(user_address) = LOWER(?) AND is_read = 0
    `),
    getFloors: db.prepare(`SELECT * FROM floors`),
    updateFloor: db.prepare(`
        INSERT OR REPLACE INTO floors (collection, floor_price, updated_at)
        VALUES (?, ?, strftime('%s', 'now'))
    `),
    getCollectionOwnerCount: db.prepare(`
        SELECT COUNT(DISTINCT owner) as owners, COUNT(*) as total 
        FROM nft_ownership WHERE LOWER(collection) = LOWER(?)
    `),
    getStorefront: db.prepare(`
        SELECT * FROM storefronts WHERE LOWER(wallet) = LOWER(?)
    `),
    getAllStorefronts: db.prepare(`
        SELECT * FROM storefronts ORDER BY created_at DESC
    `)
};

// ==================== PROVIDER ====================
let provider = new ethers.providers.JsonRpcProvider(RPC_URL);
let usingFallback = false;

async function getProvider() {
    try {
        await provider.getBlockNumber();
        return provider;
    } catch (err) {
        if (!usingFallback) {
            console.log('Primary RPC failed, switching to fallback...');
            provider = new ethers.providers.JsonRpcProvider(FALLBACK_RPC);
            usingFallback = true;
        }
        return provider;
    }
}

// ERC721 Transfer event signature
const TRANSFER_TOPIC = ethers.utils.id('Transfer(address,address,uint256)');

// ==================== INDEXER ====================
let isIndexing = false;
let indexingProgress = {};

async function indexTransfers() {
    if (isIndexing) return;
    isIndexing = true;
    
    try {
        const p = await getProvider();
        const currentBlock = await p.getBlockNumber();
        
        // Get global sync state
        const syncRow = stmts.getGlobalSync.get();
        let fromBlock = syncRow ? syncRow.last_block + 1 : 0;
        
        // If starting fresh, start from recent blocks
        // With public RPC (30 block limit), we start close to current
        // Set START_BLOCK env var + private node to backfill history
        if (fromBlock === 0) {
            const startBlock = process.env.START_BLOCK;
            if (startBlock) {
                fromBlock = parseInt(startBlock);
            } else {
                // Default: start 50k blocks back (~1 day of Flare blocks)
                fromBlock = Math.max(0, currentBlock - 50000);
            }
        }
        
        if (fromBlock >= currentBlock) {
            isIndexing = false;
            return;
        }
        
        const toBlock = Math.min(fromBlock + BATCH_SIZE, currentBlock);
        
        console.log(`Indexing blocks ${fromBlock} to ${toBlock} (${currentBlock - fromBlock} behind)...`);
        
        // Query each collection separately (some RPCs don't support address arrays)
        let logs = [];
        for (const address of Object.keys(COLLECTIONS)) {
            try {
                const filter = {
                    address: address,
                    topics: [TRANSFER_TOPIC],
                    fromBlock,
                    toBlock
                };
                const collectionLogs = await p.getLogs(filter);
                logs = logs.concat(collectionLogs);
            } catch (err) {
                console.log(`  Error querying ${COLLECTIONS[address]?.name || address}: ${err.message}`);
            }
        }
        
        console.log(`  Found ${logs.length} Transfer events`);
        
        // Process in transaction for speed
        const processTransfers = db.transaction(() => {
            for (const log of logs) {
                try {
                    const collection = normalizeAddress(log.address);
                    const from = ethers.utils.getAddress('0x' + log.topics[1].slice(26));
                    const to = ethers.utils.getAddress('0x' + log.topics[2].slice(26));
                    const tokenId = ethers.BigNumber.from(log.topics[3]).toNumber();
                    
                    // Update ownership
                    stmts.upsertOwnership.run(
                        collection.toLowerCase(),
                        tokenId,
                        to.toLowerCase(),
                        log.blockNumber
                    );
                    
                    // If not a mint (from != 0x0), record as transfer event
                    if (from !== '0x0000000000000000000000000000000000000000') {
                        stmts.insertEvent.run(
                            log.transactionHash,
                            log.blockNumber,
                            Math.floor(Date.now() / 1000), // Approximate timestamp
                            'transfer',
                            collection.toLowerCase(),
                            tokenId,
                            from.toLowerCase(),
                            to.toLowerCase(),
                            '0'
                        );
                    }
                } catch (err) {
                    // Skip malformed events
                }
            }
        });
        
        processTransfers();
        
        // Update sync state
        stmts.setGlobalSync.run(toBlock);
        
        indexingProgress = {
            currentBlock: toBlock,
            targetBlock: currentBlock,
            behind: currentBlock - toBlock,
            synced: toBlock >= currentBlock - 10
        };
        
    } catch (err) {
        console.error('Indexing error:', err.message);
    } finally {
        isIndexing = false;
    }
}

// On-demand ownership check (fallback)
async function verifyOwnership(collection, tokenId) {
    try {
        const p = await getProvider();
        const contract = new ethers.Contract(collection, [
            'function ownerOf(uint256 tokenId) view returns (address)'
        ], p);
        
        const owner = await contract.ownerOf(tokenId);
        
        // Update DB
        const currentBlock = await p.getBlockNumber();
        stmts.upsertOwnership.run(
            collection.toLowerCase(),
            tokenId,
            owner.toLowerCase(),
            currentBlock
        );
        
        return owner.toLowerCase();
    } catch (err) {
        return null;
    }
}

// Batch verify (for user's NFTs)
async function verifyUserNfts(userAddress) {
    const nfts = stmts.getUserNfts.all(userAddress.toLowerCase());
    const p = await getProvider();
    
    const verified = [];
    const toRemove = [];
    
    // Check in parallel, batches of 10
    for (let i = 0; i < nfts.length; i += 10) {
        const batch = nfts.slice(i, i + 10);
        const results = await Promise.all(batch.map(async (nft) => {
            try {
                const contract = new ethers.Contract(nft.collection, [
                    'function ownerOf(uint256 tokenId) view returns (address)'
                ], p);
                const owner = await contract.ownerOf(nft.token_id);
                return { ...nft, currentOwner: owner.toLowerCase() };
            } catch {
                return { ...nft, currentOwner: null };
            }
        }));
        
        for (const result of results) {
            if (result.currentOwner === userAddress.toLowerCase()) {
                verified.push(result);
            } else if (result.currentOwner) {
                // Owner changed, update DB
                stmts.upsertOwnership.run(
                    result.collection,
                    result.token_id,
                    result.currentOwner,
                    0
                );
            }
        }
    }
    
    return verified;
}

// ==================== HELPERS ====================
function getCollectionName(address) {
    if (!address) return 'Unknown';
    const col = COLLECTIONS_NORMALIZED[address] || COLLECTIONS_NORMALIZED[address.toLowerCase()];
    return col ? col.name : 'NFT';
}

function formatEvent(e) {
    if (!e) return null;
    return {
        ...e,
        collection_name: getCollectionName(e.collection)
    };
}

// ==================== API ====================
const app = express();
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.json());

// Health check
app.get('/', (req, res) => {
    res.json({ 
        status: 'ok', 
        service: 'toadz-flare-indexer',
        chain: 'flare',
        collections: Object.keys(COLLECTIONS).length,
        sync: indexingProgress
    });
});

// Get user's NFTs (main endpoint)
app.get('/user/:address/nfts', async (req, res) => {
    try {
        const addr = req.params.address.toLowerCase();
        const verify = req.query.verify === 'true';
        
        let nfts = stmts.getUserNfts.all(addr);
        
        // Optional: verify on-chain (slower but accurate)
        if (verify && nfts.length > 0 && nfts.length <= 50) {
            nfts = await verifyUserNfts(addr);
        }
        
        // Group by collection
        const grouped = {};
        for (const nft of nfts) {
            const colAddr = nft.collection;
            if (!grouped[colAddr]) {
                const col = COLLECTIONS_NORMALIZED[colAddr] || COLLECTIONS_NORMALIZED[colAddr.toLowerCase()];
                grouped[colAddr] = {
                    collection: colAddr,
                    name: col?.name || 'Unknown',
                    symbol: col?.symbol || '???',
                    tokenIds: []
                };
            }
            grouped[colAddr].tokenIds.push(nft.token_id);
        }
        
        res.json({
            total: nfts.length,
            collections: Object.values(grouped),
            synced: indexingProgress.synced || false
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get collection stats
app.get('/collection/:address', (req, res) => {
    try {
        const addr = req.params.address.toLowerCase();
        const col = COLLECTIONS_NORMALIZED[addr];
        const stats = stmts.getCollectionOwnerCount.get(addr);
        
        res.json({
            address: addr,
            name: col?.name || 'Unknown',
            symbol: col?.symbol || '???',
            owners: stats?.owners || 0,
            totalIndexed: stats?.total || 0
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all collections
app.get('/collections', (req, res) => {
    const collections = Object.entries(COLLECTIONS).map(([addr, data]) => ({
        address: addr,
        ...data
    }));
    res.json(collections);
});

// Activity feed
app.get('/activity', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 50, 100);
        const events = stmts.getRecentEvents.all(limit);
        res.json(events.map(formatEvent).filter(e => e !== null));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/activity/:collection', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 50, 100);
        const events = stmts.getCollectionEvents.all(req.params.collection, limit);
        res.json(events.map(formatEvent).filter(e => e !== null));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Notifications
app.get('/user/:address/notifications', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 50, 100);
        const notifications = stmts.getUserNotifications.all(req.params.address, limit);
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/user/:address/notifications/unread', (req, res) => {
    try {
        const notifications = stmts.getUnreadNotifications.all(req.params.address);
        res.json({
            count: notifications.length,
            notifications
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/user/:address/notifications/read', (req, res) => {
    try {
        stmts.markNotificationsRead.run(req.params.address);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Floors
app.get('/floors', (req, res) => {
    try {
        const floors = stmts.getFloors.all();
        res.json(floors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Sync status
app.get('/sync', (req, res) => {
    res.json(indexingProgress);
});

// Force reindex (admin)
app.post('/admin/reindex', (req, res) => {
    const { fromBlock, adminKey } = req.body;
    
    if (adminKey !== process.env.ADMIN_KEY) {
        return res.status(403).json({ error: 'Unauthorized' });
    }
    
    if (typeof fromBlock === 'number') {
        stmts.setGlobalSync.run(fromBlock);
        res.json({ success: true, message: `Will reindex from block ${fromBlock}` });
    } else {
        res.status(400).json({ error: 'fromBlock required' });
    }
});

// Storefronts
app.get('/api/storefront/:wallet', (req, res) => {
    try {
        const storefront = stmts.getStorefront.get(req.params.wallet);
        if (!storefront) {
            return res.status(404).json({ error: 'Storefront not found' });
        }
        res.json(storefront);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/storefronts', (req, res) => {
    try {
        const storefronts = stmts.getAllStorefronts.all();
        res.json(storefronts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/storefront/:wallet', (req, res) => {
    try {
        const { name, tagline, bio, avatar, banner, twitter, website } = req.body;
        const wallet = req.params.wallet.toLowerCase();
        
        // Check if exists
        const existing = stmts.getStorefront.get(wallet);
        
        if (existing) {
            db.prepare(`
                UPDATE storefronts SET name = ?, tagline = ?, bio = ?, avatar = ?, banner = ?, twitter = ?, website = ?
                WHERE LOWER(wallet) = LOWER(?)
            `).run(name || existing.name, tagline || null, bio || null, avatar || null, banner || null, twitter || null, website || null, wallet);
        } else {
            db.prepare(`
                INSERT INTO storefronts (wallet, name, tagline, bio, avatar, banner, twitter, website)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `).run(wallet, name || 'Artist', tagline || null, bio || null, avatar || null, banner || null, twitter || null, website || null);
        }
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== START ====================
app.listen(PORT, () => {
    console.log(`Toadz Flare Indexer running on port ${PORT}`);
    console.log(`Tracking ${Object.keys(COLLECTIONS).length} collections`);
    console.log(`RPC: ${RPC_URL}`);
    
    // Start indexing
    indexTransfers();
    
    // Poll for new blocks
    setInterval(indexTransfers, POLL_INTERVAL);
    
    // Catch up faster initially
    const catchUp = setInterval(() => {
        if (indexingProgress.synced) {
            clearInterval(catchUp);
            console.log('Initial sync complete!');
        } else {
            indexTransfers();
        }
    }, INDEX_DELAY);
});
