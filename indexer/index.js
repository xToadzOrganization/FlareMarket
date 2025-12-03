// ==============================
// TOADZ FLARE INDEXER
// With Referral & Social Tracking
// ==============================
const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// ==================== CONFIG ====================
const PORT = process.env.PORT || 8080;
const RPC_URL = process.env.FLARE_RPC || 'http://116.202.51.39:9650/ext/bc/C/rpc';
const FALLBACK_RPC = 'https://flare-api.flare.network/ext/C/rpc';
const POLL_INTERVAL = 3000;
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '2000');
const INDEX_DELAY = 50;

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

// Normalize addresses
const normalizeAddress = (addr) => {
    try {
        return ethers.utils.getAddress(addr.toLowerCase());
    } catch {
        return addr.toLowerCase();
    }
};

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
    -- NFT ownership
    CREATE TABLE IF NOT EXISTS nft_ownership (
        collection TEXT NOT NULL,
        token_id INTEGER NOT NULL,
        owner TEXT NOT NULL,
        block_number INTEGER DEFAULT 0,
        updated_at INTEGER DEFAULT (strftime('%s', 'now')),
        PRIMARY KEY (collection, token_id)
    );
    
    -- Sync state
    CREATE TABLE IF NOT EXISTS sync_state (
        collection TEXT PRIMARY KEY,
        last_block INTEGER NOT NULL,
        is_synced INTEGER DEFAULT 0,
        updated_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    CREATE TABLE IF NOT EXISTS global_sync (
        id INTEGER PRIMARY KEY,
        last_block INTEGER NOT NULL,
        updated_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Events
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
    
    -- Floors
    CREATE TABLE IF NOT EXISTS floors (
        collection TEXT PRIMARY KEY,
        floor_price TEXT,
        updated_at INTEGER
    );
    
    -- Storefronts
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
    
    -- Artist NFTs
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
    
    -- ==================== REFERRAL SYSTEM ====================
    
    -- Referral relationships (who referred whom)
    CREATE TABLE IF NOT EXISTS referrals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        referrer TEXT NOT NULL,
        referred TEXT NOT NULL UNIQUE,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Referral clicks (track link visits)
    CREATE TABLE IF NOT EXISTS referral_clicks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        referrer TEXT NOT NULL,
        visitor_ip TEXT,
        user_agent TEXT,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Referral sales (track conversions)
    CREATE TABLE IF NOT EXISTS referral_sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        referrer TEXT NOT NULL,
        buyer TEXT NOT NULL,
        nft_id INTEGER,
        sale_price REAL NOT NULL,
        referral_amount REAL NOT NULL,
        tx_hash TEXT,
        referral_tx_hash TEXT,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Twitter shares (track social posts)
    CREATE TABLE IF NOT EXISTS twitter_shares (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        wallet TEXT NOT NULL,
        nft_id INTEGER,
        share_type TEXT DEFAULT 'general',
        clicks INTEGER DEFAULT 0,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Competition periods
    CREATE TABLE IF NOT EXISTS competitions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        start_date INTEGER NOT NULL,
        end_date INTEGER NOT NULL,
        prize_pool REAL DEFAULT 0,
        prize_token TEXT DEFAULT 'POND',
        status TEXT DEFAULT 'active',
        winner_1 TEXT,
        winner_2 TEXT,
        winner_3 TEXT,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- User social stats (cached for performance)
    CREATE TABLE IF NOT EXISTS user_social_stats (
        wallet TEXT PRIMARY KEY,
        total_referrals INTEGER DEFAULT 0,
        total_sales INTEGER DEFAULT 0,
        total_earnings REAL DEFAULT 0,
        total_clicks INTEGER DEFAULT 0,
        total_shares INTEGER DEFAULT 0,
        weekly_points INTEGER DEFAULT 0,
        weekly_referrals INTEGER DEFAULT 0,
        weekly_sales INTEGER DEFAULT 0,
        last_activity INTEGER DEFAULT (strftime('%s', 'now')),
        updated_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    -- Indexes
    CREATE INDEX IF NOT EXISTS idx_ownership_owner ON nft_ownership(owner);
    CREATE INDEX IF NOT EXISTS idx_ownership_collection ON nft_ownership(collection);
    CREATE INDEX IF NOT EXISTS idx_events_block ON events(block_number DESC);
    CREATE INDEX IF NOT EXISTS idx_referrals_referrer ON referrals(referrer);
    CREATE INDEX IF NOT EXISTS idx_referral_sales_referrer ON referral_sales(referrer);
    CREATE INDEX IF NOT EXISTS idx_user_social_points ON user_social_stats(weekly_points DESC);
    CREATE INDEX IF NOT EXISTS idx_user_social_earnings ON user_social_stats(total_earnings DESC);
`);

// ==================== PREPARED STATEMENTS ====================
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
    forceUpsertOwnership: db.prepare(`
        INSERT INTO nft_ownership (collection, token_id, owner, block_number, updated_at)
        VALUES (?, ?, ?, ?, strftime('%s', 'now'))
        ON CONFLICT(collection, token_id) DO UPDATE SET
            owner = excluded.owner,
            block_number = excluded.block_number,
            updated_at = strftime('%s', 'now')
    `),
    getUserNfts: db.prepare(`
        SELECT collection, token_id FROM nft_ownership 
        WHERE LOWER(owner) = LOWER(?) 
        ORDER BY collection, token_id
    `),
    getCollectionSyncState: db.prepare(`SELECT * FROM sync_state WHERE collection = ?`),
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
    getRecentEvents: db.prepare(`SELECT * FROM events ORDER BY block_number DESC, id DESC LIMIT ?`),
    getCollectionEvents: db.prepare(`SELECT * FROM events WHERE LOWER(collection) = LOWER(?) ORDER BY block_number DESC LIMIT ?`),
    insertNotification: db.prepare(`
        INSERT INTO notifications (user_address, type, urgency, title, message, collection, token_id)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `),
    getUserNotifications: db.prepare(`SELECT * FROM notifications WHERE LOWER(user_address) = LOWER(?) ORDER BY created_at DESC LIMIT ?`),
    getUnreadNotifications: db.prepare(`SELECT * FROM notifications WHERE LOWER(user_address) = LOWER(?) AND is_read = 0 ORDER BY created_at DESC`),
    markNotificationsRead: db.prepare(`UPDATE notifications SET is_read = 1 WHERE LOWER(user_address) = LOWER(?) AND is_read = 0`),
    getFloors: db.prepare(`SELECT * FROM floors`),
    updateFloor: db.prepare(`INSERT OR REPLACE INTO floors (collection, floor_price, updated_at) VALUES (?, ?, strftime('%s', 'now'))`),
    getCollectionOwnerCount: db.prepare(`SELECT COUNT(DISTINCT owner) as owners, COUNT(*) as total FROM nft_ownership WHERE LOWER(collection) = LOWER(?)`),
    getStorefront: db.prepare(`SELECT * FROM storefronts WHERE LOWER(wallet) = LOWER(?)`),
    getAllStorefronts: db.prepare(`SELECT * FROM storefronts ORDER BY verified DESC, created_at DESC`),
    
    // Referral statements
    getReferrer: db.prepare(`SELECT referrer FROM referrals WHERE LOWER(referred) = LOWER(?)`),
    insertReferral: db.prepare(`INSERT OR IGNORE INTO referrals (referrer, referred) VALUES (LOWER(?), LOWER(?))`),
    insertClick: db.prepare(`INSERT INTO referral_clicks (referrer, visitor_ip, user_agent) VALUES (LOWER(?), ?, ?)`),
    insertSale: db.prepare(`
        INSERT INTO referral_sales (referrer, buyer, nft_id, sale_price, referral_amount, tx_hash, referral_tx_hash)
        VALUES (LOWER(?), LOWER(?), ?, ?, ?, ?, ?)
    `),
    insertShare: db.prepare(`INSERT INTO twitter_shares (wallet, nft_id, share_type) VALUES (LOWER(?), ?, ?)`),
    
    // Stats
    getUserStats: db.prepare(`SELECT * FROM user_social_stats WHERE LOWER(wallet) = LOWER(?)`),
    upsertUserStats: db.prepare(`
        INSERT INTO user_social_stats (wallet, total_referrals, total_sales, total_earnings, total_clicks, total_shares, weekly_points, weekly_referrals, weekly_sales, last_activity, updated_at)
        VALUES (LOWER(?), ?, ?, ?, ?, ?, ?, ?, ?, strftime('%s', 'now'), strftime('%s', 'now'))
        ON CONFLICT(wallet) DO UPDATE SET
            total_referrals = excluded.total_referrals,
            total_sales = excluded.total_sales,
            total_earnings = excluded.total_earnings,
            total_clicks = excluded.total_clicks,
            total_shares = excluded.total_shares,
            weekly_points = excluded.weekly_points,
            weekly_referrals = excluded.weekly_referrals,
            weekly_sales = excluded.weekly_sales,
            last_activity = strftime('%s', 'now'),
            updated_at = strftime('%s', 'now')
    `),
    
    // Leaderboards
    getWeeklyLeaderboard: db.prepare(`
        SELECT wallet, weekly_points, weekly_referrals, weekly_sales, total_earnings
        FROM user_social_stats 
        WHERE weekly_points > 0
        ORDER BY weekly_points DESC 
        LIMIT ?
    `),
    getEarningsLeaderboard: db.prepare(`
        SELECT wallet, total_earnings, total_referrals, total_sales
        FROM user_social_stats 
        WHERE total_earnings > 0
        ORDER BY total_earnings DESC 
        LIMIT ?
    `),
    getAllParticipants: db.prepare(`
        SELECT wallet, weekly_points, total_earnings, last_activity
        FROM user_social_stats 
        WHERE weekly_points > 0 OR total_earnings > 0
        ORDER BY weekly_points DESC
        LIMIT 50
    `)
};

// ==================== PROVIDER ====================
let provider = null;
let providerFailed = 0;

async function getProvider() {
    if (provider && providerFailed < 3) return provider;
    
    try {
        provider = new ethers.providers.JsonRpcProvider(RPC_URL);
        await provider.getBlockNumber();
        providerFailed = 0;
        return provider;
    } catch (err) {
        providerFailed++;
        console.log(`Primary RPC failed, trying fallback...`);
        provider = new ethers.providers.JsonRpcProvider(FALLBACK_RPC);
        return provider;
    }
}

// ==================== INDEXING ====================
let indexingProgress = { synced: false, lastBlock: 0, currentBlock: 0 };

async function indexTransfers() {
    try {
        const p = await getProvider();
        const currentBlock = await p.getBlockNumber();
        
        const syncState = stmts.getGlobalSync.get();
        let lastBlock = syncState?.last_block || currentBlock - 100000;
        
        if (lastBlock >= currentBlock) {
            indexingProgress.synced = true;
            return;
        }
        
        const fromBlock = lastBlock + 1;
        const toBlock = Math.min(fromBlock + BATCH_SIZE - 1, currentBlock);
        
        indexingProgress = { synced: false, lastBlock, currentBlock, fromBlock, toBlock };
        
        const transferTopic = ethers.utils.id('Transfer(address,address,uint256)');
        const collectionAddresses = Object.keys(COLLECTIONS).map(a => a.toLowerCase());
        
        const logs = await p.getLogs({
            fromBlock,
            toBlock,
            topics: [transferTopic]
        });
        
        let relevantCount = 0;
        const batchInsert = db.transaction(() => {
            for (const log of logs) {
                const addr = log.address.toLowerCase();
                if (!collectionAddresses.includes(addr)) continue;
                
                relevantCount++;
                const from = '0x' + log.topics[1].slice(26);
                const to = '0x' + log.topics[2].slice(26);
                const tokenId = parseInt(log.topics[3], 16);
                
                stmts.upsertOwnership.run(addr, tokenId, to.toLowerCase(), log.blockNumber);
                
                if (from !== '0x0000000000000000000000000000000000000000') {
                    stmts.insertEvent.run(
                        log.transactionHash,
                        log.blockNumber,
                        Math.floor(Date.now() / 1000),
                        'transfer',
                        addr,
                        tokenId,
                        from.toLowerCase(),
                        to.toLowerCase(),
                        null
                    );
                }
            }
        });
        batchInsert();
        
        stmts.setGlobalSync.run(toBlock);
        
        if (toBlock >= currentBlock) {
            indexingProgress.synced = true;
        }
        
        if (relevantCount > 0) {
            console.log(`Indexed ${relevantCount} transfers from blocks ${fromBlock}-${toBlock}`);
        }
        
    } catch (err) {
        console.error('Indexing error:', err.message);
    }
}

// ==================== HELPERS ====================
function getCollectionName(address) {
    if (!address) return 'Unknown';
    const col = COLLECTIONS_NORMALIZED[address] || COLLECTIONS_NORMALIZED[address.toLowerCase()];
    return col ? col.name : 'NFT';
}

function formatEvent(e) {
    if (!e) return null;
    return { ...e, collection_name: getCollectionName(e.collection) };
}

// Get week start (Sunday midnight UTC)
function getWeekStart() {
    const now = new Date();
    const dayOfWeek = now.getUTCDay();
    const diff = now.getUTCDate() - dayOfWeek;
    const sunday = new Date(now.setUTCDate(diff));
    sunday.setUTCHours(0, 0, 0, 0);
    return Math.floor(sunday.getTime() / 1000);
}

// Calculate points
function calculatePoints(referrals, sales, clicks, shares) {
    return (referrals * 5) + (sales * 50) + clicks + (shares * 2);
}

// Update user stats
function updateUserStats(wallet) {
    const weekStart = getWeekStart();
    
    // Count stats
    const weeklyReferrals = db.prepare(`
        SELECT COUNT(*) as count FROM referrals 
        WHERE LOWER(referrer) = LOWER(?) AND created_at >= ?
    `).get(wallet, weekStart)?.count || 0;
    
    const weeklySales = db.prepare(`
        SELECT COUNT(*) as count, COALESCE(SUM(referral_amount), 0) as earnings 
        FROM referral_sales 
        WHERE LOWER(referrer) = LOWER(?) AND created_at >= ?
    `).get(wallet, weekStart);
    
    const weeklyClicks = db.prepare(`
        SELECT COUNT(*) as count FROM referral_clicks 
        WHERE LOWER(referrer) = LOWER(?) AND created_at >= ?
    `).get(wallet, weekStart)?.count || 0;
    
    const weeklyShares = db.prepare(`
        SELECT COUNT(*) as count FROM twitter_shares 
        WHERE LOWER(wallet) = LOWER(?) AND created_at >= ?
    `).get(wallet, weekStart)?.count || 0;
    
    // Total stats
    const totalReferrals = db.prepare(`SELECT COUNT(*) as count FROM referrals WHERE LOWER(referrer) = LOWER(?)`).get(wallet)?.count || 0;
    const totalSalesData = db.prepare(`SELECT COUNT(*) as count, COALESCE(SUM(referral_amount), 0) as earnings FROM referral_sales WHERE LOWER(referrer) = LOWER(?)`).get(wallet);
    const totalClicks = db.prepare(`SELECT COUNT(*) as count FROM referral_clicks WHERE LOWER(referrer) = LOWER(?)`).get(wallet)?.count || 0;
    const totalShares = db.prepare(`SELECT COUNT(*) as count FROM twitter_shares WHERE LOWER(wallet) = LOWER(?)`).get(wallet)?.count || 0;
    
    const weeklyPoints = calculatePoints(weeklyReferrals, weeklySales?.count || 0, weeklyClicks, weeklyShares);
    
    stmts.upsertUserStats.run(
        wallet,
        totalReferrals,
        totalSalesData?.count || 0,
        totalSalesData?.earnings || 0,
        totalClicks,
        totalShares,
        weeklyPoints,
        weeklyReferrals,
        weeklySales?.count || 0
    );
}

// ==================== API ====================
const app = express();
app.use(cors({ origin: '*', credentials: true }));
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

// ==================== NFT ENDPOINTS ====================
app.get('/user/:address/nfts', async (req, res) => {
    try {
        const addr = req.params.address.toLowerCase();
        let nfts = stmts.getUserNfts.all(addr);
        
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
        
        res.json({ total: nfts.length, collections: Object.values(grouped), synced: indexingProgress.synced || false });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

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

app.get('/collections', (req, res) => {
    const collections = Object.entries(COLLECTIONS).map(([addr, data]) => ({ address: addr, ...data }));
    res.json(collections);
});

app.get('/nfts/:collectionAddress', (req, res) => {
    try {
        const addr = req.params.collectionAddress.toLowerCase();
        const limit = Math.min(parseInt(req.query.limit) || 100, 500);
        const nfts = db.prepare(`
            SELECT token_id, owner, block_number, updated_at 
            FROM nft_ownership WHERE collection = ?
            ORDER BY token_id ASC LIMIT ?
        `).all(addr, limit);
        res.json(nfts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/nft/:collectionAddress/:tokenId', (req, res) => {
    try {
        const addr = req.params.collectionAddress.toLowerCase();
        const tokenId = parseInt(req.params.tokenId);
        const nft = db.prepare(`SELECT * FROM nft_ownership WHERE collection = ? AND token_id = ?`).get(addr, tokenId);
        
        if (!nft) return res.status(404).json({ error: 'NFT not found' });
        
        const col = COLLECTIONS_NORMALIZED[addr];
        res.json({ ...nft, collection_name: col?.name || 'Unknown', symbol: col?.symbol || '???' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Activity
app.get('/activity', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 50, 100);
        const events = stmts.getRecentEvents.all(limit);
        res.json(events.map(formatEvent).filter(e => e !== null));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Notifications
app.get('/user/:address/notifications', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 50, 100);
        res.json(stmts.getUserNotifications.all(req.params.address, limit));
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

// ==================== REFERRAL ENDPOINTS ====================

// Track a click
app.post('/api/referral/click', (req, res) => {
    try {
        const { referrer } = req.body;
        if (!referrer) return res.status(400).json({ error: 'Missing referrer' });
        
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
        const ua = req.headers['user-agent'] || 'unknown';
        
        stmts.insertClick.run(referrer, ip.split(',')[0], ua.substring(0, 255));
        updateUserStats(referrer);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Register referral relationship
app.post('/api/referral/register', (req, res) => {
    try {
        const { referrer, referred } = req.body;
        if (!referrer || !referred) return res.status(400).json({ error: 'Missing fields' });
        if (referrer.toLowerCase() === referred.toLowerCase()) return res.status(400).json({ error: 'Cannot refer yourself' });
        
        stmts.insertReferral.run(referrer, referred);
        updateUserStats(referrer);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Track a sale with referral
app.post('/api/referral/sale', (req, res) => {
    try {
        const { referrer, buyer, nftId, salePrice, referralAmount, txHash, referralTxHash } = req.body;
        if (!referrer || !buyer || !salePrice) return res.status(400).json({ error: 'Missing fields' });
        
        stmts.insertSale.run(referrer, buyer, nftId || null, salePrice, referralAmount || 0, txHash || null, referralTxHash || null);
        updateUserStats(referrer);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Track Twitter share
app.post('/api/referral/twitter-share', (req, res) => {
    try {
        const { wallet, nftId, shareType } = req.body;
        if (!wallet) return res.status(400).json({ error: 'Missing wallet' });
        
        stmts.insertShare.run(wallet, nftId || null, shareType || 'general');
        updateUserStats(wallet);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get user's referral stats
app.get('/api/referral/stats/:wallet', (req, res) => {
    try {
        const wallet = req.params.wallet.toLowerCase();
        
        // Update stats first
        updateUserStats(wallet);
        
        const stats = stmts.getUserStats.get(wallet);
        
        if (!stats) {
            return res.json({
                referrals: 0,
                sales: 0,
                earnings: 0,
                clicks: 0,
                shares: 0,
                weeklyPoints: 0,
                weeklyReferrals: 0,
                weeklySales: 0,
                rank: null
            });
        }
        
        // Get rank
        const rank = db.prepare(`
            SELECT COUNT(*) + 1 as rank FROM user_social_stats 
            WHERE weekly_points > (SELECT weekly_points FROM user_social_stats WHERE LOWER(wallet) = LOWER(?))
        `).get(wallet)?.rank || 1;
        
        res.json({
            referrals: stats.total_referrals,
            sales: stats.total_sales,
            earnings: stats.total_earnings,
            clicks: stats.total_clicks,
            shares: stats.total_shares,
            weeklyPoints: stats.weekly_points,
            weeklyReferrals: stats.weekly_referrals,
            weeklySales: stats.weekly_sales,
            rank
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Weekly leaderboard
app.get('/api/referral/leaderboard/weekly', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 20, 50);
        const leaders = stmts.getWeeklyLeaderboard.all(limit);
        res.json(leaders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// All-time earnings leaderboard
app.get('/api/referral/leaderboard/earnings', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 20, 50);
        const leaders = stmts.getEarningsLeaderboard.all(limit);
        res.json(leaders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all participants for the race visualization
app.get('/api/referral/race', (req, res) => {
    try {
        const participants = stmts.getAllParticipants.all();
        
        // Calculate max points for normalization
        const maxPoints = participants.length > 0 ? Math.max(...participants.map(p => p.weekly_points)) : 1;
        
        // Add position data (0 = center/winner, 1 = edge)
        const raceData = participants.map((p, i) => ({
            wallet: p.wallet,
            points: p.weekly_points,
            earnings: p.total_earnings,
            position: maxPoints > 0 ? 1 - (p.weekly_points / maxPoints) * 0.9 : 1, // 0.1 to 1.0 (never quite at center)
            rank: i + 1
        }));
        
        res.json({
            participants: raceData,
            maxPoints,
            weekEnd: getWeekStart() + (7 * 24 * 60 * 60) // Next Sunday
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Competition info
app.get('/api/competition/current', (req, res) => {
    try {
        const weekStart = getWeekStart();
        const weekEnd = weekStart + (7 * 24 * 60 * 60);
        
        let competition = db.prepare(`SELECT * FROM competitions WHERE start_date = ?`).get(weekStart);
        
        if (!competition) {
            // Create this week's competition
            db.prepare(`INSERT INTO competitions (start_date, end_date, prize_pool, prize_token) VALUES (?, ?, 10000, 'POND')`).run(weekStart, weekEnd);
            competition = db.prepare(`SELECT * FROM competitions WHERE start_date = ?`).get(weekStart);
        }
        
        res.json({
            id: competition.id,
            startDate: competition.start_date,
            endDate: competition.end_date,
            prizePool: competition.prize_pool,
            prizeToken: competition.prize_token,
            status: competition.status,
            timeRemaining: Math.max(0, competition.end_date - Math.floor(Date.now() / 1000))
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== STOREFRONT ENDPOINTS ====================
app.get('/api/storefronts', (req, res) => {
    try {
        res.json(stmts.getAllStorefronts.all());
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/storefront/:wallet', (req, res) => {
    try {
        const storefront = stmts.getStorefront.get(req.params.wallet);
        if (!storefront) return res.status(404).json({ error: 'Not found' });
        res.json(storefront);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/storefront/:wallet', (req, res) => {
    try {
        const { name, tagline, bio, avatar, banner, twitter, website } = req.body;
        const wallet = req.params.wallet.toLowerCase();
        
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

// ==================== WEEKLY RESET ====================
function checkWeeklyReset() {
    const now = Math.floor(Date.now() / 1000);
    const weekStart = getWeekStart();
    
    // If we're in a new week, reset weekly stats
    const lastReset = db.prepare(`SELECT value FROM kv WHERE key = 'last_weekly_reset'`).get();
    
    if (!lastReset || parseInt(lastReset?.value || 0) < weekStart) {
        console.log('Resetting weekly stats...');
        db.prepare(`UPDATE user_social_stats SET weekly_points = 0, weekly_referrals = 0, weekly_sales = 0`).run();
        db.prepare(`INSERT OR REPLACE INTO kv (key, value) VALUES ('last_weekly_reset', ?)`).run(now.toString());
        
        // TODO: Distribute prizes to top 3 from previous week
    }
}

// Create KV table for misc storage
db.exec(`CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value TEXT)`);

// ==================== SEED DATA ====================
function seedFakeUsers() {
    const seeded = db.prepare(`SELECT value FROM kv WHERE key = 'seeded'`).get();
    if (seeded) {
        console.log('Already seeded');
        return;
    }
    
    console.log('Seeding fake users...');
    
    // Realistic wallet addresses (random hex)
    const fakeUsers = [
        { wallet: '0x1a4b8c2d9e3f5678901234567890abcdef123456', points: 3847, earnings: 892.45, refs: 67, sales: 23, clicks: 1247 },
        { wallet: '0x2b5c9d3e0f4a6789012345678901bcdef234567', points: 3214, earnings: 654.32, refs: 52, sales: 18, clicks: 987 },
        { wallet: '0x3c6d0e4f1a5b7890123456789012cdef3456789', points: 2876, earnings: 523.18, refs: 44, sales: 15, clicks: 834 },
        { wallet: '0x4d7e1f5a2b6c8901234567890123def45678901', points: 2543, earnings: 412.67, refs: 38, sales: 12, clicks: 723 },
        { wallet: '0x5e8f2a6b3c7d9012345678901234ef567890123', points: 2187, earnings: 367.89, refs: 31, sales: 10, clicks: 612 },
        { wallet: '0x6f903b7c4d8e0123456789012345f6789012345', points: 1854, earnings: 289.34, refs: 26, sales: 8, clicks: 534 },
        { wallet: '0x7a014c8d5e9f1234567890123456078901234567', points: 1567, earnings: 234.56, refs: 22, sales: 7, clicks: 456 },
        { wallet: '0x8b125d9e6f0a2345678901234567189012345678', points: 1298, earnings: 187.23, refs: 18, sales: 5, clicks: 389 },
        { wallet: '0x9c236e0f7a1b3456789012345678290123456789', points: 1043, earnings: 145.67, refs: 14, sales: 4, clicks: 312 },
        { wallet: '0x0d347f1a8b2c4567890123456789301234567890', points: 876, earnings: 112.34, refs: 11, sales: 3, clicks: 267 },
        { wallet: '0x1e458a2b9c3d5678901234567890412345678901', points: 654, earnings: 87.65, refs: 8, sales: 2, clicks: 198 },
        { wallet: '0x2f569b3c0d4e6789012345678901523456789012', points: 487, earnings: 65.43, refs: 6, sales: 2, clicks: 145 },
        { wallet: '0x3a670c4d1e5f7890123456789012634567890123', points: 321, earnings: 43.21, refs: 4, sales: 1, clicks: 98 },
        { wallet: '0x4b781d5e2f6a8901234567890123745678901234', points: 198, earnings: 28.76, refs: 3, sales: 1, clicks: 67 },
        { wallet: '0x5c892e6f3a7b9012345678901234856789012345', points: 124, earnings: 15.43, refs: 2, sales: 0, clicks: 43 },
        { wallet: '0x6d903f7a4b8c0123456789012345967890123456', points: 87, earnings: 8.92, refs: 1, sales: 0, clicks: 28 },
    ];
    
    const now = Math.floor(Date.now() / 1000);
    const weekStart = getWeekStart();
    
    const insertStats = db.prepare(`
        INSERT OR REPLACE INTO user_social_stats 
        (wallet, total_referrals, total_sales, total_earnings, total_clicks, total_shares, weekly_points, weekly_referrals, weekly_sales, last_activity, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    const insertBatch = db.transaction(() => {
        for (const user of fakeUsers) {
            insertStats.run(
                user.wallet.toLowerCase(),
                user.refs,
                user.sales,
                user.earnings,
                user.clicks,
                Math.floor(user.clicks * 0.3),
                user.points,
                Math.floor(user.refs * 0.7),
                Math.floor(user.sales * 0.6),
                now - Math.floor(Math.random() * 3600),
                now
            );
        }
    });
    
    insertBatch();
    db.prepare(`INSERT OR REPLACE INTO kv (key, value) VALUES ('seeded', '1')`).run();
    console.log(`Seeded ${fakeUsers.length} fake users`);
}

// Endpoint to reseed (for testing)
app.post('/api/seed', (req, res) => {
    try {
        db.prepare(`DELETE FROM kv WHERE key = 'seeded'`).run();
        db.prepare(`DELETE FROM user_social_stats`).run();
        seedFakeUsers();
        res.json({ success: true, message: 'Reseeded fake users' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== START ====================
app.listen(PORT, () => {
    console.log(`Toadz Flare Indexer running on port ${PORT}`);
    console.log(`Tracking ${Object.keys(COLLECTIONS).length} collections`);
    console.log(`RPC: ${RPC_URL}`);
    
    // Seed fake users on first run
    seedFakeUsers();
    
    // Check for weekly reset
    checkWeeklyReset();
    
    // Start indexing
    indexTransfers();
    
    setInterval(indexTransfers, POLL_INTERVAL);
    setInterval(checkWeeklyReset, 60000); // Check every minute
    
    const catchUp = setInterval(() => {
        if (indexingProgress.synced) {
            clearInterval(catchUp);
            console.log('Initial sync complete!');
        } else {
            indexTransfers();
        }
    }, INDEX_DELAY);
});
