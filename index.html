// ==============================
const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');
const Database = require('better-sqlite3');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

// Log env vars at startup
console.log('=== ENV VARS CHECK ===');
console.log('MINTER_PRIVATE_KEY:', process.env.MINTER_PRIVATE_KEY ? 'SET (' + process.env.MINTER_PRIVATE_KEY.slice(0,10) + '...)' : 'NOT SET');
console.log('TOADZ_ORIGINALS_ADDRESS:', process.env.TOADZ_ORIGINALS_ADDRESS || 'NOT SET');
console.log('======================');

// File upload config - store in memory then save to disk
const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB max for videos
});

// ==================== CONFIG ====================
const PORT = process.env.PORT || 8080;
// Private node - no rate limits!
const RPC_URL = 'http://135.181.215.126:9650/ext/bc/C/rpc';
const FALLBACK_RPC = 'https://songbird-api.flare.network/ext/C/rpc';
const POLL_INTERVAL = 5000; // 5 seconds - faster with private node

// Contract addresses
const CONTRACTS = {
    marketplace: '0xc99c294224BCB259F1860F0EeaABa664b29d1633',
    nftStaking: '0xAC3E3651a4FA87784dee501a962aBD5005EebB64',
    pondToken: '0x39fec3F97668e393862Dbb3C442f3Dd3d5016D69'
};

// Collections
const COLLECTIONS = {
    '0x35afb6Ba51839dEDD33140A3b704b39933D1e642': { name: 'sToadz', symbol: 'STOADZ', supply: 10000 },
    '0x91Aa85a172DD3e7EEA4ad1A4B33E90cbF3B99ed8': { name: 'Luxury Lofts', symbol: 'LOFT', supply: 10000 },
    '0x360f8B7d9530F55AB8E52394E6527935635f51E7': { name: 'Songbird City', symbol: 'SBCITY', supply: 10000 },
    '0x0e759aa7166ab3b2b81abd6d9ed16ac83368f97e': { name: 'The Fat Cats', symbol: 'FATCAT', supply: 1000 },
    '0x12c40516c7bf32002FF0e3431082C9e28Ab76066': { name: 'The Fat Leopards', symbol: 'FATLEOPARD', supply: 3000 },
    '0xFdD87A263ba929E14Dd0A2D879D9C66d5c8fF3ae': { name: 'Fat Tigers', symbol: 'FATTIGER', supply: 6000 },
    '0xCdB019C0990c033724DA55f5A04bE6fd6ec1809d': { name: 'The Oracles', symbol: 'ORACLE', supply: 22222 },
    '0xd167c20575c284dF75BCfe1794d54d3E057Cd4EC': { name: 'Sparkles Genesis', symbol: 'SPARKLE', supply: 9999 },
    '0xd83Ae2C70916a2360e23683A0d3a3556b2c09935': { name: 'Songbird Punks', symbol: 'SBPUNK', supply: 20000 },
    '0x279a222a18C033124Ab02290dDec97912A8b7185': { name: 'doodcats', symbol: 'DOODCAT', supply: 10000 },
    '0x2972ea6e6CC45c5837CE909DeF032DD325B48415': { name: 'Bazooka Chicks', symbol: 'BAZOOKA', supply: 10000 },
    '0x972edfF4D09a4fd8ABDe8e8f669B7e1E3B1f7e3D': { name: 'Grumpy Monkeys', symbol: 'GRUMPY', supply: 1000 },
    '0x34FF649D709ccCEc77bCf433317176fD13246296': { name: 'CYBRs', symbol: 'CYBR', supply: 20000 },
    '0x23A18A46c67301864f5b341e87f89B8Ccb690c44': { name: 'Super Bad Babies', symbol: 'SBB', supply: 3333 },
    '0xf4b4D366f9B4855690Bb7530abC76C857B259093': { name: 'Super Bad Genesis Seed', symbol: 'SBGS', supply: 666 },
    '0xff063937523c4514179a4d9a6769694baab357a8': { name: '888 Inner Circle', symbol: '888IC', supply: 4086 },
    '0x4F52A074De9f2651d2f711FEe63FEe9E3b439A7e': { name: 'The Grungies', symbol: 'GRUNGIE', supply: 1990 },
    '0x927463265eDE6a52604D179d7110B7B2fc057a3f': { name: 'The Senators', symbol: 'SENATOR', supply: 350 },
    '0x7DC06eE0717c6f4905652f46f8F1891E8538e799': { name: 'Rare Pepe Club', symbol: 'RAREPEPE', supply: 9973 },
    '0x2d086E61267A57503dd4aA1bB4E807bc50fa7Ee1': { name: 'SGB Whales', symbol: 'WHALE', supply: 2100 },
    '0x3bE5Aa1Eccb73214481ee9eD9C74C9873070420a': { name: 'Pixel Plants', symbol: 'PLANT', supply: 1555 }
};

// Event signatures
const EVENT_SIGS = {
    Listed: 'Listed(address,uint256,address,uint256,uint256)',
    Unlisted: 'Unlisted(address,uint256,address)',
    Sold: 'Sold(address,uint256,address,address,uint256,uint256)',
    OfferMade: 'OfferMade(address,uint256,address,uint256,uint256,uint256)',
    OfferAccepted: 'OfferAccepted(address,uint256,address,address,uint256,uint256)',
    OfferCancelled: 'OfferCancelled(address,uint256,address)',
    Staked: 'Staked(address,address,uint256)',
    Unstaked: 'Unstaked(address,address,uint256)'
};

// ==================== DATABASE ====================
const dbPath = fs.existsSync('/data') ? '/data/indexer.db' : './indexer.db';
console.log(`Using database path: ${dbPath}`);

let db;
try {
    db = new Database(dbPath);
    console.log('Database connected successfully');
} catch (err) {
    console.error('Database connection failed:', err.message);
    console.log('Falling back to in-memory database');
    db = new Database(':memory:');
}
let forceStartBlock = null; // In-memory flag for immediate reset

// Initialize tables
db.exec(`
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
        price_sgb TEXT,
        price_pond TEXT,
        created_at INTEGER DEFAULT (strftime('%s', 'now')),
        UNIQUE(tx_hash, event_type, collection, token_id)
    );
    
    CREATE TABLE IF NOT EXISTS notifications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_address TEXT NOT NULL,
        event_id INTEGER,
        type TEXT NOT NULL,
        urgency TEXT NOT NULL,
        title TEXT NOT NULL,
        message TEXT,
        collection TEXT,
        token_id INTEGER,
        is_read INTEGER DEFAULT 0,
        created_at INTEGER DEFAULT (strftime('%s', 'now')),
        FOREIGN KEY (event_id) REFERENCES events(id)
    );
    
    CREATE TABLE IF NOT EXISTS sync_state (
        id INTEGER PRIMARY KEY,
        last_block INTEGER NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS floors (
        collection TEXT PRIMARY KEY,
        floor_sgb TEXT,
        floor_pond TEXT,
        updated_at INTEGER
    );
    
    CREATE TABLE IF NOT EXISTS nft_ownership (
        collection TEXT NOT NULL,
        token_id INTEGER NOT NULL,
        owner TEXT NOT NULL,
        updated_at INTEGER DEFAULT (strftime('%s', 'now')),
        PRIMARY KEY (collection, token_id)
    );
    
    CREATE TABLE IF NOT EXISTS ownership_sync (
        collection TEXT PRIMARY KEY,
        last_token_id INTEGER DEFAULT 0,
        completed INTEGER DEFAULT 0,
        updated_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    CREATE INDEX IF NOT EXISTS idx_events_collection ON events(collection);
    CREATE INDEX IF NOT EXISTS idx_events_block ON events(block_number DESC);
    CREATE INDEX IF NOT EXISTS idx_events_from ON events(from_address);
    CREATE INDEX IF NOT EXISTS idx_events_to ON events(to_address);
    CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_address, is_read);
    CREATE INDEX IF NOT EXISTS idx_nft_owner ON nft_ownership(owner);
    
    CREATE TABLE IF NOT EXISTS artist_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        portfolio TEXT,
        twitter TEXT,
        style TEXT,
        collection_size TEXT,
        bio TEXT,
        wallet TEXT,
        status TEXT DEFAULT 'pending',
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
    CREATE TABLE IF NOT EXISTS storefronts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        wallet TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        bio TEXT,
        avatar TEXT,
        avatar_type TEXT DEFAULT 'url',
        avatar_emoji TEXT,
        banner TEXT,
        twitter TEXT,
        website TEXT,
        verified INTEGER DEFAULT 0,
        announcement TEXT,
        announcement_date INTEGER,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
    
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
        auction_duration INTEGER DEFAULT 0,
        featured INTEGER DEFAULT 0,
        tx_hash TEXT,
        status TEXT DEFAULT 'minted',
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
`);

// Migration: Add new columns to existing storefronts table if they don't exist
try {
    db.exec(`ALTER TABLE storefronts ADD COLUMN avatar_type TEXT DEFAULT 'url'`);
    console.log('Added avatar_type column');
} catch (e) { /* column already exists */ }

try {
    db.exec(`ALTER TABLE storefronts ADD COLUMN avatar_emoji TEXT`);
    console.log('Added avatar_emoji column');
} catch (e) { /* column already exists */ }

try {
    db.exec(`ALTER TABLE storefronts ADD COLUMN verified INTEGER DEFAULT 0`);
    console.log('Added verified column');
} catch (e) { /* column already exists */ }

// Migration: Add auction_id column to artist_nfts
try {
    db.exec(`ALTER TABLE storefronts ADD COLUMN announcement TEXT`);
    console.log('Added announcement column to storefronts');
} catch (e) { /* column already exists */ }

try {
    db.exec(`ALTER TABLE storefronts ADD COLUMN announcement_date INTEGER`);
    console.log('Added announcement_date column to storefronts');
} catch (e) { /* column already exists */ }

try {
    db.exec(`ALTER TABLE artist_nfts ADD COLUMN auction_id TEXT`);
    console.log('Added auction_id column to artist_nfts');
} catch (e) { /* column already exists */ }

// Create offers table
db.exec(`
    CREATE TABLE IF NOT EXISTS offers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nft_id INTEGER NOT NULL,
        wallet TEXT NOT NULL,
        amount REAL NOT NULL,
        status TEXT DEFAULT 'pending',
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    )
`);

// Create bids table for auction bid history
db.exec(`
    CREATE TABLE IF NOT EXISTS auction_bids (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nft_id INTEGER NOT NULL,
        auction_id TEXT,
        wallet TEXT NOT NULL,
        amount REAL NOT NULL,
        tx_hash TEXT,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
    )
`);

// Prepared statements
const stmts = {
    insertEvent: db.prepare(`
        INSERT OR IGNORE INTO events (tx_hash, block_number, timestamp, event_type, collection, token_id, from_address, to_address, price_sgb, price_pond)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `),
    insertNotification: db.prepare(`
        INSERT INTO notifications (user_address, event_id, type, urgency, title, message, collection, token_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `),
    getLastBlock: db.prepare('SELECT last_block FROM sync_state WHERE id = 1'),
    setLastBlock: db.prepare('INSERT OR REPLACE INTO sync_state (id, last_block) VALUES (1, ?)'),
    getRecentEvents: db.prepare(`
        SELECT * FROM events ORDER BY block_number DESC, id DESC LIMIT ?
    `),
    getCollectionEvents: db.prepare(`
        SELECT * FROM events WHERE collection = ? ORDER BY block_number DESC LIMIT ?
    `),
    getUserEvents: db.prepare(`
        SELECT * FROM events WHERE from_address = ? OR to_address = ? ORDER BY block_number DESC LIMIT ?
    `),
    getUserNotifications: db.prepare(`
        SELECT * FROM notifications WHERE user_address = ? ORDER BY created_at DESC LIMIT ?
    `),
    getUnreadNotifications: db.prepare(`
        SELECT * FROM notifications WHERE user_address = ? AND is_read = 0 ORDER BY created_at DESC
    `),
    markNotificationsRead: db.prepare(`
        UPDATE notifications SET is_read = 1 WHERE user_address = ? AND is_read = 0
    `),
    updateFloor: db.prepare(`
        INSERT OR REPLACE INTO floors (collection, floor_sgb, floor_pond, updated_at)
        VALUES (?, ?, ?, strftime('%s', 'now'))
    `),
    getFloors: db.prepare('SELECT * FROM floors'),
    
    // NFT ownership
    upsertOwnership: db.prepare(`
        INSERT OR REPLACE INTO nft_ownership (collection, token_id, owner, updated_at)
        VALUES (?, ?, ?, strftime('%s', 'now'))
    `),
    getUserNfts: db.prepare(`
        SELECT collection, token_id FROM nft_ownership WHERE LOWER(owner) = LOWER(?) ORDER BY collection, token_id
    `),
    getOwnershipSync: db.prepare('SELECT * FROM ownership_sync WHERE collection = ?'),
    upsertOwnershipSync: db.prepare(`
        INSERT OR REPLACE INTO ownership_sync (collection, last_token_id, completed, updated_at)
        VALUES (?, ?, ?, strftime('%s', 'now'))
    `)
};

// ==================== PROVIDER ====================
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

// ABIs (minimal for event parsing) - MUST MATCH DEPLOYED CONTRACT
const MARKETPLACE_ABI = [
    'event Listed(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price, uint256 feeAmount)',
    'event Unlisted(address indexed nftContract, uint256 indexed tokenId, address indexed seller)',
    'event Sold(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, address seller, uint256 price, uint256 feeAmount)',
    'event OfferMade(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 amount, uint256 expiry)',
    'event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, address seller, uint256 amount)',
    'event OfferCancelled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer)',
    'function getListing(address collection, uint256 tokenId) view returns (address seller, uint256 priceSGB, uint256 pricePOND, bool active)',
    'function getActiveListings(address collection) view returns (uint256[])'
];

const STAKING_ABI = [
    'event Staked(address indexed user, address indexed collection, uint256 tokenId)',
    'event Unstaked(address indexed user, address indexed collection, uint256 tokenId)',
    'event RewardsClaimed(address indexed user, uint256 amount)'
];

const ERC721_ABI = [
    'function ownerOf(uint256 tokenId) view returns (address)',
    'function balanceOf(address owner) view returns (uint256)',
    'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)'
];

const marketplace = new ethers.Contract(CONTRACTS.marketplace, MARKETPLACE_ABI, provider);
const staking = new ethers.Contract(CONTRACTS.nftStaking, STAKING_ABI, provider);

// ==================== HELPER FUNCTIONS ====================
function getCollectionName(address) {
    if (!address) return 'Unknown';
    try {
        const col = COLLECTIONS[address] || COLLECTIONS[address.toLowerCase()];
        return col ? col.name : 'NFT';
    } catch (err) {
        return 'NFT';
    }
}

function getTimeAgo(timestamp) {
    if (!timestamp) return 'Unknown';
    try {
        const now = Math.floor(Date.now() / 1000);
        const diff = now - timestamp;
        
        if (diff < 60) return 'Just now';
        if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
        if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
        return Math.floor(diff / 86400) + 'd ago';
    } catch (err) {
        return 'Unknown';
    }
}

function formatEvent(e) {
    if (!e) return null;
    return {
        ...e,
        collection_name: getCollectionName(e.collection),
        time_ago: getTimeAgo(e.timestamp)
    };
}

// ==================== INDEXER ====================
async function getStartBlock() {
    if (forceStartBlock !== null) {
        const block = forceStartBlock;
        forceStartBlock = null;
        return block;
    }
    
    const row = stmts.getLastBlock.get();
    if (row) return row.last_block + 1;
    
    const current = await provider.getBlockNumber();
    return Math.max(0, current - 17280);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function indexEvents() {
    try {
        const fromBlock = await getStartBlock();
        const currentBlock = await provider.getBlockNumber();
        
        const toBlock = Math.min(fromBlock + 50000, currentBlock);
        
        if (fromBlock > currentBlock) {
            return;
        }
        
        console.log(`Indexing blocks ${fromBlock} to ${toBlock}...`);
        
        let listedEvents = [];
        let unlistedEvents = [];
        let soldEvents = [];
        let offerMadeEvents = [];
        let offerAcceptedEvents = [];
        let stakedEvents = [];
        let unstakedEvents = [];
        let rewardsClaimedEvents = [];
        
        try {
            listedEvents = await marketplace.queryFilter(marketplace.filters.Listed(), fromBlock, toBlock);
            console.log(`  Listed query: ${listedEvents.length} events`);
        } catch (err) {
            console.log(`  Listed query FAILED: ${err.message}`);
        }
        
        try {
            unlistedEvents = await marketplace.queryFilter(marketplace.filters.Unlisted(), fromBlock, toBlock);
        } catch (err) {
            console.log(`  Unlisted query FAILED: ${err.message}`);
        }
        
        try {
            soldEvents = await marketplace.queryFilter(marketplace.filters.Sold(), fromBlock, toBlock);
            console.log(`  Sold query: ${soldEvents.length} events`);
        } catch (err) {
            console.log(`  Sold query FAILED: ${err.message}`);
        }
        
        try {
            offerMadeEvents = await marketplace.queryFilter(marketplace.filters.OfferMade(), fromBlock, toBlock);
        } catch (err) {
            console.log(`  OfferMade query FAILED: ${err.message}`);
        }
        
        try {
            offerAcceptedEvents = await marketplace.queryFilter(marketplace.filters.OfferAccepted(), fromBlock, toBlock);
        } catch (err) {
            console.log(`  OfferAccepted query FAILED: ${err.message}`);
        }
        
        try {
            stakedEvents = await staking.queryFilter(staking.filters.Staked(), fromBlock, toBlock);
        } catch (err) {
            console.log(`  Staked query FAILED: ${err.message}`);
        }
        
        try {
            unstakedEvents = await staking.queryFilter(staking.filters.Unstaked(), fromBlock, toBlock);
        } catch (err) {
            console.log(`  Unstaked query FAILED: ${err.message}`);
        }
        
        try {
            rewardsClaimedEvents = await staking.queryFilter(staking.filters.RewardsClaimed(), fromBlock, toBlock);
        } catch (err) {
            console.log(`  RewardsClaimed query FAILED: ${err.message}`);
        }
        
        const blockNumbers = new Set();
        [...listedEvents, ...unlistedEvents, ...soldEvents, ...offerMadeEvents, ...offerAcceptedEvents, ...stakedEvents, ...unstakedEvents, ...rewardsClaimedEvents]
            .forEach(e => blockNumbers.add(e.blockNumber));
        
        const timestamps = {};
        for (const bn of blockNumbers) {
            try {
                const block = await provider.getBlock(bn);
                timestamps[bn] = block.timestamp;
            } catch {
                timestamps[bn] = Math.floor(Date.now() / 1000);
            }
        }
        
        const processEvents = db.transaction(() => {
            // Listed events
            for (const e of listedEvents) {
                try {
                    const collection = e.args.nftContract;
                    const tokenId = e.args.tokenId.toNumber();
                    const seller = e.args.seller;
                    const price = ethers.utils.formatEther(e.args.price);
                    
                    if (!collection || !seller) continue;
                    
                    const result = stmts.insertEvent.run(
                        e.transactionHash, e.blockNumber, timestamps[e.blockNumber],
                        'listed', collection, tokenId, seller, null, price, '0'
                    );
                    
                    if (result.changes > 0) {
                        stmts.insertNotification.run(
                            seller.toLowerCase(), result.lastInsertRowid, 'listed', 'green',
                            'NFT Listed', `Your ${getCollectionName(collection)} #${tokenId} is now listed`,
                            collection, tokenId
                        );
                    }
                } catch (err) {
                    console.log(`Error processing listed event: ${err.message}`);
                }
            }
            
            // Sold events
            for (const e of soldEvents) {
                try {
                    const collection = e.args.nftContract;
                    const tokenId = e.args.tokenId.toNumber();
                    const seller = e.args.seller;
                    const buyer = e.args.buyer;
                    const price = ethers.utils.formatEther(e.args.price);
                    
                    if (!collection || !seller || !buyer) continue;
                    
                    stmts.upsertOwnership.run(collection.toLowerCase(), tokenId, buyer.toLowerCase());
                    
                    const result = stmts.insertEvent.run(
                        e.transactionHash, e.blockNumber, timestamps[e.blockNumber],
                        'sold', collection, tokenId, seller, buyer, price, '0'
                    );
                    
                    if (result.changes > 0) {
                        const priceStr = `${price} SGB`;
                        
                        stmts.insertNotification.run(
                            seller.toLowerCase(), result.lastInsertRowid, 'sold', 'red',
                            'NFT Sold!', `Your ${getCollectionName(collection)} #${tokenId} sold for ${priceStr}`,
                            collection, tokenId
                        );
                        
                        stmts.insertNotification.run(
                            buyer.toLowerCase(), result.lastInsertRowid, 'purchased', 'green',
                            'NFT Purchased', `You bought ${getCollectionName(collection)} #${tokenId}`,
                            collection, tokenId
                        );
                    }
                } catch (err) {
                    console.log(`Error processing sold event: ${err.message}`);
                }
            }
            
            // Offer made events
            for (const e of offerMadeEvents) {
                try {
                    const collection = e.args.nftContract;
                    const tokenId = e.args.tokenId.toNumber();
                    const buyer = e.args.buyer;
                    const amount = ethers.utils.formatEther(e.args.amount);
                    
                    if (!collection || !buyer) continue;
                    
                    stmts.insertEvent.run(
                        e.transactionHash, e.blockNumber, timestamps[e.blockNumber],
                        'offer_made', collection, tokenId, buyer, null, amount, '0'
                    );
                } catch (err) {
                    console.log(`Error processing offer_made event: ${err.message}`);
                }
            }
            
            // Offer accepted events
            for (const e of offerAcceptedEvents) {
                try {
                    const collection = e.args.nftContract;
                    const tokenId = e.args.tokenId.toNumber();
                    const seller = e.args.seller;
                    const buyer = e.args.buyer;
                    const amount = ethers.utils.formatEther(e.args.amount);
                    
                    if (!collection || !seller || !buyer) continue;
                    
                    const result = stmts.insertEvent.run(
                        e.transactionHash, e.blockNumber, timestamps[e.blockNumber],
                        'offer_accepted', collection, tokenId, seller, buyer, amount, '0'
                    );
                    
                    if (result.changes > 0) {
                        const priceStr = `${amount} SGB`;
                        
                        stmts.insertNotification.run(
                            seller.toLowerCase(), result.lastInsertRowid, 'offer_accepted', 'red',
                            'Offer Accepted!', `You sold ${getCollectionName(collection)} #${tokenId} for ${priceStr}`,
                            collection, tokenId
                        );
                        
                        stmts.insertNotification.run(
                            buyer.toLowerCase(), result.lastInsertRowid, 'offer_accepted', 'green',
                            'Offer Accepted', `Your offer on ${getCollectionName(collection)} #${tokenId} was accepted`,
                            collection, tokenId
                        );
                    }
                } catch (err) {
                    console.log(`Error processing offer_accepted event: ${err.message}`);
                }
            }
            
            // Unlisted events
            for (const e of unlistedEvents) {
                try {
                    if (!e.args.nftContract || !e.args.seller) continue;
                    
                    const collection = e.args.nftContract;
                    const tokenId = e.args.tokenId.toNumber();
                    const seller = e.args.seller;
                    
                    stmts.upsertOwnership.run(collection.toLowerCase(), tokenId, seller.toLowerCase());
                    
                    stmts.insertEvent.run(
                        e.transactionHash, e.blockNumber, timestamps[e.blockNumber],
                        'unlisted', collection, tokenId, seller, null, '0', '0'
                    );
                } catch (err) {
                    console.log(`Error processing unlisted event: ${err.message}`);
                }
            }
            
            // Staked events
            for (const e of stakedEvents) {
                try {
                    const user = e.args.user;
                    const collection = e.args.collection;
                    const tokenId = e.args.tokenId.toNumber();
                    
                    if (!user || !collection) continue;
                    
                    const result = stmts.insertEvent.run(
                        e.transactionHash, e.blockNumber, timestamps[e.blockNumber],
                        'staked', collection, tokenId, user, null, '0', '0'
                    );
                    
                    if (result.changes > 0) {
                        stmts.insertNotification.run(
                            user.toLowerCase(), result.lastInsertRowid, 'staked', 'green',
                            'NFT Staked', `${getCollectionName(collection)} #${tokenId} is now earning rewards`,
                            collection, tokenId
                        );
                    }
                } catch (err) {
                    console.log(`Error processing staked event: ${err.message}`);
                }
            }
            
            // Unstaked events - just update ownership, no activity display
            for (const e of unstakedEvents) {
                try {
                    const user = e.args.user;
                    const collection = e.args.collection;
                    const tokenId = e.args.tokenId.toNumber();
                    
                    if (!user || !collection) continue;
                    
                    // Update ownership - user gets NFT back
                    stmts.upsertOwnership.run(collection.toLowerCase(), tokenId, user.toLowerCase());
                } catch (err) {
                    console.log(`Error processing unstaked event: ${err.message}`);
                }
            }
            
            // RewardsClaimed events
            for (const e of rewardsClaimedEvents) {
                try {
                    const user = e.args.user;
                    const amount = ethers.utils.formatEther(e.args.amount);
                    
                    if (!user) continue;
                    
                    const result = stmts.insertEvent.run(
                        e.transactionHash, e.blockNumber, timestamps[e.blockNumber],
                        'rewards_claimed', null, null, user, null, '0', amount
                    );
                    
                    if (result.changes > 0) {
                        stmts.insertNotification.run(
                            user.toLowerCase(), result.lastInsertRowid, 'rewards_claimed', 'green',
                            'POND Claimed', `You claimed ${parseFloat(amount).toLocaleString()} POND`,
                            null, null
                        );
                    }
                } catch (err) {
                    console.log(`Error processing rewards_claimed event: ${err.message}`);
                }
            }
            
            stmts.setLastBlock.run(toBlock);
        });
        
        processEvents();
        
        const totalEvents = listedEvents.length + soldEvents.length + offerMadeEvents.length + 
                          offerAcceptedEvents.length + unlistedEvents.length + stakedEvents.length + unstakedEvents.length + rewardsClaimedEvents.length;
        if (totalEvents > 0) {
            console.log(`Found ${totalEvents} events (${listedEvents.length} listed, ${soldEvents.length} sold, ${stakedEvents.length} staked, ${unstakedEvents.length} unstaked, ${rewardsClaimedEvents.length} claimed)`);
        }
        
    } catch (err) {
        console.error('Indexer error:', err.message);
        await delay(2000);
    }
}

async function notifyOfferSellers() {
    try {
        const recentOffers = db.prepare(`
            SELECT e.* FROM events e
            LEFT JOIN notifications n ON n.event_id = e.id AND n.type = 'offer_received'
            WHERE e.event_type = 'offer_made' AND n.id IS NULL
            ORDER BY e.id DESC LIMIT 20
        `).all();
        
        for (const offer of recentOffers) {
            try {
                if (!offer.collection) continue;
                const [seller, , , active] = await marketplace.getListing(offer.collection, offer.token_id);
                if (active && seller !== ethers.constants.AddressZero) {
                    const priceStr = parseFloat(offer.price_sgb) > 0 ? `${offer.price_sgb} SGB` : `${offer.price_pond} POND`;
                    
                    stmts.insertNotification.run(
                        seller.toLowerCase(), offer.id, 'offer_received', 'red',
                        'New Offer!', `Offer of ${priceStr} on ${getCollectionName(offer.collection)} #${offer.token_id}`,
                        offer.collection, offer.token_id
                    );
                }
            } catch {}
        }
    } catch (err) {
        console.error('Offer notification error:', err.message);
    }
}

async function updateFloors() {
    try {
        for (const [address, col] of Object.entries(COLLECTIONS)) {
            try {
                const activeListings = await marketplace.getActiveListings(address);
                
                let floorSGB = null;
                let floorPOND = null;
                
                for (const tokenId of activeListings.slice(0, 50)) {
                    try {
                        const [, priceSGB, pricePOND, active] = await marketplace.getListing(address, tokenId);
                        if (!active) continue;
                        
                        const sgb = parseFloat(ethers.utils.formatEther(priceSGB));
                        const pond = parseFloat(ethers.utils.formatEther(pricePOND));
                        
                        if (sgb > 0 && (floorSGB === null || sgb < floorSGB)) {
                            floorSGB = sgb;
                        }
                        if (pond > 0 && (floorPOND === null || pond < floorPOND)) {
                            floorPOND = pond;
                        }
                    } catch {}
                }
                
                stmts.updateFloor.run(
                    address,
                    floorSGB ? floorSGB.toString() : null,
                    floorPOND ? floorPOND.toString() : null
                );
                
            } catch (err) {
                console.log(`Floor update failed for ${col.name}:`, err.message);
            }
        }
    } catch (err) {
        console.error('Floor update error:', err.message);
    }
}

// ==================== NFT OWNERSHIP INDEXING ====================
let isIndexingOwnership = false;

async function indexNftOwnership() {
    if (isIndexingOwnership) {
        console.log('Ownership indexing already in progress, skipping...');
        return;
    }
    
    isIndexingOwnership = true;
    console.log('Starting NFT ownership indexing...');
    
    try {
        for (const [address, col] of Object.entries(COLLECTIONS)) {
            const contract = new ethers.Contract(address, ERC721_ABI, provider);
            const supply = col.supply || 10000;
            
            let syncState = stmts.getOwnershipSync.get(address);
            let startToken = syncState ? syncState.last_token_id + 1 : 1;
            
            if (syncState && syncState.completed) {
                console.log(`${col.name}: Already indexed, refreshing...`);
                const tokensToCheck = [];
                for (let i = 0; i < 500; i++) {
                    tokensToCheck.push(Math.floor(Math.random() * supply) + 1);
                }
                
                const batchSize = 10000;
                for (let i = 0; i < tokensToCheck.length; i += batchSize) {
                    const batch = tokensToCheck.slice(i, i + batchSize);
                    const results = await Promise.all(
                        batch.map(id => 
                            contract.ownerOf(id)
                                .then(owner => ({ id, owner }))
                                .catch(() => ({ id, owner: null }))
                        )
                    );
                    
                    for (const { id, owner } of results) {
                        if (owner) {
                            stmts.upsertOwnership.run(address, id, owner.toLowerCase());
                        }
                    }
                }
                continue;
            }
            
            console.log(`${col.name}: Indexing from token ${startToken}...`);
            
            const batchSize = 10000;
            for (let start = startToken; start <= supply; start += batchSize) {
                const end = Math.min(start + batchSize - 1, supply);
                const tokenIds = Array.from({ length: end - start + 1 }, (_, i) => start + i);
                
                const results = await Promise.all(
                    tokenIds.map(id => 
                        contract.ownerOf(id)
                            .then(owner => ({ id, owner }))
                            .catch(() => ({ id, owner: null }))
                    )
                );
                
                for (const { id, owner } of results) {
                    if (owner) {
                        stmts.upsertOwnership.run(address, id, owner.toLowerCase());
                    }
                }
                
                stmts.upsertOwnershipSync.run(address, end, end >= supply ? 1 : 0);
                
                console.log(`${col.name}: Indexed ${end}/${supply} tokens`);
            }
            
            console.log(`${col.name}: Ownership indexing complete!`);
        }
    } catch (err) {
        console.error('Ownership indexing error:', err.message);
    } finally {
        isIndexingOwnership = false;
    }
}

// ==================== API ====================
const app = express();
app.use(cors({
    origin: ['https://xtoadzorganization.github.io', 'http://localhost:3000', 'http://127.0.0.1:5500'],
    credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: 'ok', service: 'toadz-indexer' });
});

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

app.get('/user/:address/stats', (req, res) => {
    const addr = req.params.address.toLowerCase();
    
    try {
        const buyerStats = db.prepare(`
            SELECT 
                COUNT(*) as buy_count,
                COALESCE(SUM(CAST(price_sgb AS REAL)), 0) as buy_volume_sgb
            FROM events 
            WHERE event_type = 'sold' AND to_address = ?
        `).get(addr);
        
        const sellerStats = db.prepare(`
            SELECT 
                COUNT(*) as sell_count,
                COALESCE(SUM(CAST(price_sgb AS REAL)), 0) as sell_volume_sgb
            FROM events 
            WHERE event_type = 'sold' AND from_address = ?
        `).get(addr);
        
        res.json({
            buyCount: buyerStats?.buy_count || 0,
            sellCount: sellerStats?.sell_count || 0,
            buyVolumeSGB: buyerStats?.buy_volume_sgb || 0,
            sellVolumeSGB: sellerStats?.sell_volume_sgb || 0,
            volumeSGB: (buyerStats?.buy_volume_sgb || 0) + (sellerStats?.sell_volume_sgb || 0)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/user/:address/nfts', (req, res) => {
    try {
        const addr = req.params.address.toLowerCase();
        const nfts = stmts.getUserNfts.all(addr);
        
        const grouped = {};
        for (const nft of nfts) {
            if (!grouped[nft.collection]) {
                const col = COLLECTIONS[nft.collection] || COLLECTIONS[nft.collection.toLowerCase()];
                grouped[nft.collection] = {
                    collection: nft.collection,
                    name: col?.name || 'Unknown',
                    tokenIds: []
                };
            }
            grouped[nft.collection].tokenIds.push(nft.token_id);
        }
        
        res.json({
            total: nfts.length,
            collections: Object.values(grouped)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/user/:address/activity', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 50, 100);
        const addr = req.params.address.toLowerCase();
        const events = stmts.getUserEvents.all(addr, addr, limit);
        res.json(events.map(formatEvent).filter(e => e !== null));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/user/:address/notifications', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 50, 100);
        const addr = req.params.address.toLowerCase();
        const notifications = stmts.getUserNotifications.all(addr, limit);
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/user/:address/notifications/unread', (req, res) => {
    try {
        const addr = req.params.address.toLowerCase();
        const notifications = stmts.getUnreadNotifications.all(addr);
        
        const counts = { red: 0, green: 0, total: 0 };
        for (const n of notifications) {
            if (n.urgency && counts.hasOwnProperty(n.urgency)) {
                counts[n.urgency]++;
            }
            counts.total++;
        }
        
        res.json({ counts, notifications });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/user/:address/notifications/read', (req, res) => {
    try {
        const addr = req.params.address.toLowerCase();
        stmts.markNotificationsRead.run(addr);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/user/:address/notifications/clear', (req, res) => {
    try {
        const addr = req.params.address.toLowerCase();
        db.prepare('DELETE FROM notifications WHERE user_address = ?').run(addr);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/floors', (req, res) => {
    try {
        const floors = stmts.getFloors.all();
        const result = {};
        for (const f of floors) {
            result[f.collection] = {
                floor_sgb: f.floor_sgb,
                floor_pond: f.floor_pond,
                updated_at: f.updated_at
            };
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/collection/:address/stats', (req, res) => {
    const address = req.params.address;
    
    try {
        const stats = db.prepare(`
            SELECT 
                COUNT(*) as total_sales,
                COALESCE(SUM(CAST(price_sgb AS REAL)), 0) as volume_sgb,
                COALESCE(SUM(CAST(price_pond AS REAL)), 0) as volume_pond
            FROM events
            WHERE event_type = 'sold' AND LOWER(collection) = LOWER(?)
        `).get(address);
        
        const floor = db.prepare('SELECT floor_sgb, floor_pond FROM floors WHERE LOWER(collection) = LOWER(?)').get(address);
        
        res.json({
            totalSales: stats?.total_sales || 0,
            volumeSGB: stats?.volume_sgb || 0,
            volumePOND: stats?.volume_pond || 0,
            floorSGB: floor?.floor_sgb || null,
            floorPOND: floor?.floor_pond || null
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/stats', (req, res) => {
    try {
        const stats = db.prepare(`
            SELECT 
                COUNT(*) as total_events,
                SUM(CASE WHEN event_type = 'sold' THEN 1 ELSE 0 END) as total_sales,
                SUM(CASE WHEN event_type = 'sold' THEN CAST(price_sgb AS REAL) ELSE 0 END) as volume_sgb,
                SUM(CASE WHEN event_type = 'sold' THEN CAST(price_pond AS REAL) ELSE 0 END) as volume_pond
            FROM events
        `).get();
        
        const lastBlock = stmts.getLastBlock.get();
        
        res.json({
            ...stats,
            last_indexed_block: lastBlock?.last_block || 0
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/admin/reset/:days', async (req, res) => {
    try {
        const days = parseInt(req.params.days) || 7;
        const blocksBack = days * 5760;
        const currentBlock = await provider.getBlockNumber();
        const newStartBlock = Math.max(0, currentBlock - blocksBack);
        
        db.exec('DELETE FROM notifications');
        db.exec('DELETE FROM events');
        stmts.setLastBlock.run(newStartBlock);
        
        forceStartBlock = newStartBlock + 1;
        
        console.log(`Reset to block ${newStartBlock} (${days} days ago)`);
        res.json({ success: true, new_start_block: newStartBlock, days_back: days });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/admin/reindex-nfts', async (req, res) => {
    try {
        db.exec('DELETE FROM nft_ownership');
        db.exec('DELETE FROM ownership_sync');
        
        indexNftOwnership();
        
        res.json({ success: true, message: 'NFT ownership reindexing started' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/admin/ownership-status', (req, res) => {
    try {
        const status = db.prepare('SELECT * FROM ownership_sync').all();
        const counts = db.prepare('SELECT collection, COUNT(*) as count FROM nft_ownership GROUP BY collection').all();
        
        res.json({
            syncStatus: status,
            indexedCounts: counts,
            isIndexing: isIndexingOwnership
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/leaderboard/stakers', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 25, 100);
        
        const stakers = db.prepare(`
            SELECT 
                from_address as address,
                COUNT(*) as nfts_staked
            FROM events 
            WHERE event_type = 'staked'
            GROUP BY from_address
            ORDER BY nfts_staked DESC
            LIMIT ?
        `).all(limit);
        
        const claimedTotals = db.prepare(`
            SELECT 
                from_address as address,
                SUM(CAST(price_pond AS REAL)) as total_claimed
            FROM events 
            WHERE event_type = 'rewards_claimed'
            GROUP BY from_address
        `).all();
        
        const claimedMap = {};
        for (const c of claimedTotals) {
            if (c.address) {
                claimedMap[c.address.toLowerCase()] = c.total_claimed || 0;
            }
        }
        
        res.json(stakers.map(s => ({
            address: s.address,
            nftsStaked: s.nfts_staked,
            pondClaimed: s.address ? (claimedMap[s.address.toLowerCase()] || 0) : 0
        })));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/leaderboard/traders', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 25, 100);
        const traders = db.prepare(`
            SELECT 
                to_address as address,
                COUNT(*) as sales_count,
                SUM(CAST(price_sgb AS REAL)) as volume_sgb,
                SUM(CAST(price_pond AS REAL)) as volume_pond
            FROM events 
            WHERE event_type = 'sold'
            GROUP BY to_address
            ORDER BY volume_sgb DESC
            LIMIT ?
        `).all(limit);
        
        res.json(traders.map(t => ({
            address: t.address,
            salesCount: t.sales_count,
            volumeSGB: t.volume_sgb || 0,
            volumePOND: t.volume_pond || 0
        })));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/leaderboard/lp', (req, res) => {
    res.json([]);
});

app.get('/admin/refresh-wallet/:address', async (req, res) => {
    const wallet = req.params.address.toLowerCase();
    let found = 0;
    
    res.json({ wallet, status: 'started', message: 'Scanning in background, check back in a few minutes' });
    
    // Run in background
    (async () => {
        for (const [address, col] of Object.entries(COLLECTIONS)) {
            const contract = new ethers.Contract(address, ERC721_ABI, provider);
            const supply = col.supply || 10000;
            
            // Check in batches of 100
            for (let start = 1; start <= supply; start += 100) {
                const end = Math.min(start + 99, supply);
                const checks = [];
                
                for (let id = start; id <= end; id++) {
                    checks.push(
                        contract.ownerOf(id)
                            .then(owner => ({ id, owner: owner.toLowerCase() }))
                            .catch(() => null)
                    );
                }
                
                const results = await Promise.all(checks);
                for (const r of results) {
                    if (r && r.owner === wallet) {
                        stmts.upsertOwnership.run(address, r.id, wallet);
                        found++;
                        console.log(`Found ${col.name} #${r.id} for ${wallet}`);
                    }
                }
            }
        }
        console.log(`Refresh complete for ${wallet}: found ${found} NFTs`);
    })();
});

// ==================== STOREFRONTS ====================
const ADMIN_WALLET = '0xcEA86bBdb5cd33ddbA8dC0ed3c838605EeF7c715'.toLowerCase();
const FEE_WALLET = '0xcEA86bBdb5cd33ddbA8dC0ed3c838605EeF7c715';
const STOREFRONT_FEE = '10'; // 10 FLR

app.get('/api/storefronts', (req, res) => {
    try {
        const storefronts = db.prepare(`
            SELECT s.*, 
                   (SELECT COUNT(*) FROM artist_nfts WHERE LOWER(artist_wallet) = LOWER(s.wallet)) as item_count
            FROM storefronts s 
            ORDER BY s.created_at DESC
        `).all();
        res.json(storefronts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/storefront/:wallet', (req, res) => {
    try {
        const storefront = db.prepare('SELECT * FROM storefronts WHERE LOWER(wallet) = LOWER(?)').get(req.params.wallet);
        if (!storefront) {
            return res.status(404).json({ error: 'Storefront not found' });
        }
        res.json(storefront);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get artist's minted NFTs
app.get('/api/storefront/:wallet/nfts', (req, res) => {
    try {
        const wallet = req.params.wallet.toLowerCase();
        const nfts = db.prepare('SELECT * FROM artist_nfts WHERE LOWER(artist_wallet) = ? ORDER BY created_at DESC').all(wallet);
        res.json(nfts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete artist NFT (owner only)
app.delete('/api/artist-nft/:id', (req, res) => {
    try {
        const { wallet } = req.body;
        const id = req.params.id;
        
        // Verify ownership
        const nft = db.prepare('SELECT * FROM artist_nfts WHERE id = ?').get(id);
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        
        if (nft.artist_wallet.toLowerCase() !== wallet?.toLowerCase() && wallet?.toLowerCase() !== ADMIN_WALLET) {
            return res.status(403).json({ error: 'Not authorized' });
        }
        
        db.prepare('DELETE FROM artist_nfts WHERE id = ?').run(id);
        console.log(`Deleted NFT ${id} by ${wallet}`);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get featured NFTs for homepage
app.get('/api/featured-nfts', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 10, 20);
        const nfts = db.prepare(`
            SELECT n.*, s.name as artist_name, s.avatar, s.avatar_type, s.avatar_emoji, s.verified
            FROM artist_nfts n
            LEFT JOIN storefronts s ON LOWER(n.artist_wallet) = LOWER(s.wallet)
            WHERE n.featured = 1
            ORDER BY n.created_at DESC
            LIMIT ?
        `).all(limit);
        res.json(nfts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get live auctions
app.get('/api/auctions', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 10, 20);
        const nfts = db.prepare(`
            SELECT n.*, s.name as artist_name, s.avatar, s.avatar_type, s.avatar_emoji, s.verified
            FROM artist_nfts n
            LEFT JOIN storefronts s ON LOWER(n.artist_wallet) = LOWER(s.wallet)
            WHERE n.sale_type = 'auction'
            ORDER BY n.created_at DESC
            LIMIT ?
        `).all(limit);
        res.json(nfts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Admin: Delete all broken NFTs (token_id = unknown)
app.delete('/api/admin/cleanup-broken-nfts', (req, res) => {
    try {
        const wallet = req.headers['x-wallet']?.toLowerCase();
        if (wallet !== ADMIN_WALLET) {
            return res.status(403).json({ error: 'Admin only' });
        }
        
        const result = db.prepare("DELETE FROM artist_nfts WHERE token_id = 'unknown' OR token_id IS NULL").run();
        console.log(`Deleted ${result.changes} broken NFTs`);
        res.json({ success: true, deleted: result.changes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Admin: Delete all NFTs for a wallet
app.delete('/api/admin/clear-wallet-nfts/:wallet', (req, res) => {
    try {
        const adminWallet = req.headers['x-wallet']?.toLowerCase();
        if (adminWallet !== ADMIN_WALLET) {
            return res.status(403).json({ error: 'Admin only' });
        }
        
        const targetWallet = req.params.wallet.toLowerCase();
        const result = db.prepare('DELETE FROM artist_nfts WHERE LOWER(artist_wallet) = ?').run(targetWallet);
        console.log(`Deleted ${result.changes} NFTs for wallet ${targetWallet}`);
        res.json({ success: true, deleted: result.changes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all listed NFTs (for trending/explore)
app.get('/api/listed-nfts', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 20, 50);
        const nfts = db.prepare(`
            SELECT n.*, s.name as artist_name, s.avatar, s.avatar_type, s.avatar_emoji, s.verified
            FROM artist_nfts n
            LEFT JOIN storefronts s ON LOWER(n.artist_wallet) = LOWER(s.wallet)
            WHERE n.price > 0
            ORDER BY n.created_at DESC
            LIMIT ?
        `).all(limit);
        res.json(nfts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get single NFT by ID
app.get('/api/artist-nft/:id', (req, res) => {
    try {
        const nft = db.prepare(`
            SELECT n.*, s.name as artist_name, s.avatar, s.avatar_type, s.avatar_emoji, s.verified, s.twitter, s.website
            FROM artist_nfts n
            LEFT JOIN storefronts s ON LOWER(n.artist_wallet) = LOWER(s.wallet)
            WHERE n.id = ?
        `).get(req.params.id);
        
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        res.json(nft);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get on-chain auction state for NFT
app.get('/api/nft/:id/auction', async (req, res) => {
    try {
        const nft = db.prepare('SELECT * FROM artist_nfts WHERE id = ?').get(req.params.id);
        
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        
        // If no auction_id, not on-chain yet
        if (!nft.auction_id) {
            return res.json({
                auctionId: null,
                onChain: false,
                message: 'No on-chain auction'
            });
        }
        
        // Query on-chain auction state
        const TOADZ_AUCTIONS_ADDRESS = process.env.TOADZ_AUCTIONS_ADDRESS || '0x45b20e28fFAFAF70681f4e67990Ae1B44E3d37fd';
        const FLARE_RPC = 'https://flare-api.flare.network/ext/C/rpc';
        const provider = new ethers.providers.JsonRpcProvider(FLARE_RPC);
        
        const auctionABI = [
            'function getAuction(uint256 auctionId) view returns (uint256 nftId, address artist, uint256 startingPrice, uint256 highestBid, address highestBidder, uint256 endTime, bool ended, bool cancelled)'
        ];
        
        const auctionContract = new ethers.Contract(TOADZ_AUCTIONS_ADDRESS, auctionABI, provider);
        
        try {
            const auction = await auctionContract.getAuction(nft.auction_id);
            const now = Math.floor(Date.now() / 1000);
            
            res.json({
                auctionId: nft.auction_id,
                onChain: true,
                contractAddress: TOADZ_AUCTIONS_ADDRESS,
                nftId: nft.id.toString(),
                artist: auction.artist,
                startingPrice: ethers.utils.formatEther(auction.startingPrice),
                highestBid: ethers.utils.formatEther(auction.highestBid),
                highestBidder: auction.highestBidder,
                endTime: auction.endTime.toNumber(),
                ended: auction.ended,
                cancelled: auction.cancelled,
                timeRemaining: Math.max(0, auction.endTime.toNumber() - now)
            });
        } catch (contractErr) {
            console.error('Contract call failed:', contractErr.message);
            res.json({
                auctionId: nft.auction_id,
                onChain: false,
                message: 'Failed to fetch on-chain state'
            });
        }
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Submit offer for NFT
app.post('/api/nft/:id/offer', (req, res) => {
    try {
        const { id } = req.params;
        const { wallet, amount } = req.body;
        
        if (!wallet || !amount) {
            return res.status(400).json({ error: 'Wallet and amount required' });
        }
        
        const nft = db.prepare('SELECT * FROM artist_nfts WHERE id = ?').get(id);
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        
        db.prepare('INSERT INTO offers (nft_id, wallet, amount) VALUES (?, ?, ?)').run(id, wallet.toLowerCase(), amount);
        
        console.log(`Offer ${amount} FLR on NFT ${id} from ${wallet}`);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get offers for NFT
app.get('/api/nft/:id/offers', (req, res) => {
    try {
        const offers = db.prepare('SELECT * FROM offers WHERE nft_id = ? ORDER BY amount DESC').all(req.params.id);
        res.json(offers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Record bid (called after successful blockchain bid)
app.post('/api/nft/:id/bid', (req, res) => {
    try {
        const { id } = req.params;
        const { wallet, amount, txHash, auctionId } = req.body;
        
        if (!wallet || !amount) {
            return res.status(400).json({ error: 'Wallet and amount required' });
        }
        
        db.prepare('INSERT INTO auction_bids (nft_id, auction_id, wallet, amount, tx_hash) VALUES (?, ?, ?, ?, ?)')
            .run(id, auctionId, wallet.toLowerCase(), amount, txHash);
        
        console.log(`Bid ${amount} FLR on NFT ${id} from ${wallet}`);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get recent activity (bids + sales) for live feed
app.get('/api/live-activity', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 20, 50);
        
        // Get recent bids
        const bids = db.prepare(`
            SELECT b.*, n.name as nft_name, n.image_url, s.name as artist_name
            FROM auction_bids b
            LEFT JOIN artist_nfts n ON b.nft_id = n.id
            LEFT JOIN storefronts s ON LOWER(n.artist_wallet) = LOWER(s.wallet)
            ORDER BY b.created_at DESC
            LIMIT ?
        `).all(limit);
        
        const activity = bids.map(b => ({
            type: 'bid',
            nft_id: b.nft_id,
            nft_name: b.nft_name,
            image_url: b.image_url,
            artist_name: b.artist_name,
            wallet: b.wallet,
            amount: b.amount,
            created_at: b.created_at
        }));
        
        res.json(activity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/storefront', (req, res) => {
    try {
        const { wallet, name, bio, avatar, avatarType, avatarEmoji, banner, twitter, website, txHash } = req.body;
        
        if (!wallet || !name) {
            return res.status(400).json({ error: 'Wallet and name required' });
        }
        
        // Check if admin (free) or needs payment verification
        const isAdmin = wallet.toLowerCase() === ADMIN_WALLET;
        
        if (!isAdmin && !txHash) {
            return res.status(400).json({ 
                error: 'Payment required',
                fee: STOREFRONT_FEE,
                feeWallet: FEE_WALLET
            });
        }
        
        // Check if already exists
        const existing = db.prepare('SELECT id FROM storefronts WHERE LOWER(wallet) = LOWER(?)').get(wallet);
        if (existing) {
            return res.status(400).json({ error: 'Storefront already exists for this wallet' });
        }
        
        const stmt = db.prepare(`
            INSERT INTO storefronts (wallet, name, bio, avatar, avatar_type, avatar_emoji, banner, twitter, website)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        
        const result = stmt.run(wallet, name, bio || null, avatar || null, avatarType || 'url', avatarEmoji || null, banner || null, twitter || null, website || null);
        
        console.log(`New storefront: ${name} (${wallet}) ${isAdmin ? '[ADMIN]' : '[PAID]'}`);
        
        res.json({ 
            success: true, 
            id: result.lastInsertRowid,
            message: 'Storefront created'
        });
    } catch (err) {
        console.error('Storefront error:', err);
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/storefront/:wallet', (req, res) => {
    try {
        const { name, bio, avatar, avatarType, avatarEmoji, banner, twitter, website } = req.body;
        const wallet = req.params.wallet;
        
        const existing = db.prepare('SELECT id FROM storefronts WHERE LOWER(wallet) = LOWER(?)').get(wallet);
        if (!existing) {
            return res.status(404).json({ error: 'Storefront not found' });
        }
        
        db.prepare(`
            UPDATE storefronts SET name = ?, bio = ?, avatar = ?, avatar_type = ?, avatar_emoji = ?, banner = ?, twitter = ?, website = ?
            WHERE LOWER(wallet) = LOWER(?)
        `).run(name, bio || null, avatar || null, avatarType || 'url', avatarEmoji || null, banner || null, twitter || null, website || null, wallet);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/storefront/:wallet', (req, res) => {
    try {
        // Only admin can delete
        const requester = req.headers['x-wallet']?.toLowerCase();
        if (requester !== ADMIN_WALLET) {
            return res.status(403).json({ error: 'Admin only' });
        }
        
        db.prepare('DELETE FROM storefronts WHERE LOWER(wallet) = LOWER(?)').run(req.params.wallet);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Verify/unverify storefront (admin only)
app.post('/api/storefront/:wallet/verify', (req, res) => {
    try {
        const requester = req.headers['x-wallet']?.toLowerCase();
        if (requester !== ADMIN_WALLET) {
            return res.status(403).json({ error: 'Admin only' });
        }
        
        const { verified } = req.body;
        db.prepare('UPDATE storefronts SET verified = ? WHERE LOWER(wallet) = LOWER(?)').run(verified ? 1 : 0, req.params.wallet);
        res.json({ success: true, verified: !!verified });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== FILE UPLOAD ====================
// Store files locally - served from /uploads

// Create uploads directory in persistent volume
const UPLOADS_DIR = '/data/uploads';
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Serve uploaded files
app.use('/uploads', express.static(UPLOADS_DIR));

// Upload image/video - stores locally
app.post('/api/upload-image', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file provided' });
        }
        
        console.log('Uploading file:', req.file.originalname, req.file.size, 'bytes');
        
        // Generate unique filename
        const ext = path.extname(req.file.originalname) || '.bin';
        const hash = crypto.createHash('md5').update(req.file.buffer).digest('hex');
        const filename = `${hash}${ext}`;
        const filepath = path.join(UPLOADS_DIR, filename);
        
        // Save file
        fs.writeFileSync(filepath, req.file.buffer);
        
        // Build URL (uses Railway's public URL)
        const baseUrl = process.env.RAILWAY_PUBLIC_DOMAIN 
            ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
            : `http://localhost:${PORT}`;
        const fileUrl = `${baseUrl}/uploads/${filename}`;
        
        console.log('Saved file:', fileUrl);
        
        res.json({ 
            success: true, 
            cid: hash,
            url: fileUrl,
            gateway: fileUrl
        });
    } catch (err) {
        console.error('Upload error:', err);
        res.status(500).json({ error: err.message });
    }
});

// ==================== NFT MINTING ====================
const MINTER_PRIVATE_KEY = process.env.MINTER_PRIVATE_KEY;
const TOADZ_ORIGINALS_ADDRESS = process.env.TOADZ_ORIGINALS_ADDRESS;
const MAX_GAS_FLR = 0.5; // Max gas cost in FLR

// ToadzOriginals ABI (just the mint function)
const ORIGINALS_ABI = [
    "function mint(address artist, string memory uri) external returns (uint256)",
    "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
    "event NFTMinted(uint256 indexed tokenId, address indexed artist, string uri)"
];

// Create metadata JSON and save it
function createMetadata(name, description, imageUrl, artistWallet, fileType) {
    const metadata = {
        name: name,
        description: description || '',
        image: imageUrl,
        animation_url: fileType === 'video' ? imageUrl : undefined,
        attributes: [
            { trait_type: "Artist", value: artistWallet },
            { trait_type: "Platform", value: "TOADZ" },
            { trait_type: "Type", value: fileType === 'video' ? 'Animated' : 'Static' }
        ],
        created_at: new Date().toISOString()
    };
    
    // Save metadata file
    const metaHash = crypto.createHash('md5').update(JSON.stringify(metadata)).digest('hex');
    const metaFilename = `${metaHash}.json`;
    const metaPath = path.join(UPLOADS_DIR, metaFilename);
    fs.writeFileSync(metaPath, JSON.stringify(metadata, null, 2));
    
    const baseUrl = process.env.RAILWAY_PUBLIC_DOMAIN 
        ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
        : `http://localhost:${PORT}`;
    
    return `${baseUrl}/uploads/${metaFilename}`;
}

// Mint NFT endpoint
app.post('/api/mint-nft', async (req, res) => {
    try {
        const { artistWallet, name, description, imageUrl, fileType, price, saleType, auctionDuration, featured } = req.body;
        
        if (!artistWallet || !name || !imageUrl) {
            return res.status(400).json({ error: 'Missing required fields: artistWallet, name, imageUrl' });
        }
        
        if (!MINTER_PRIVATE_KEY || !TOADZ_ORIGINALS_ADDRESS) {
            return res.status(500).json({ error: 'Minting not configured - missing MINTER_PRIVATE_KEY or TOADZ_ORIGINALS_ADDRESS' });
        }
        
        console.log(`Minting NFT for ${artistWallet}: ${name}`);
        
        // Create metadata
        const metadataUrl = createMetadata(name, description, imageUrl, artistWallet, fileType);
        console.log('Metadata URL:', metadataUrl);
        
        // Connect to Flare mainnet
        const FLARE_RPC = 'https://flare-api.flare.network/ext/C/rpc';
        const provider = new ethers.providers.JsonRpcProvider(FLARE_RPC);
        const minterWallet = new ethers.Wallet(MINTER_PRIVATE_KEY, provider);
        
        // Check gas price
        const gasPrice = await provider.getGasPrice();
        const estimatedGas = 200000; // Rough estimate for mint
        const estimatedCostWei = gasPrice.mul(estimatedGas);
        const estimatedCostFLR = parseFloat(ethers.utils.formatEther(estimatedCostWei));
        
        console.log(`Estimated gas cost: ${estimatedCostFLR} FLR`);
        
        if (estimatedCostFLR > MAX_GAS_FLR) {
            return res.status(400).json({ 
                error: `Gas too high: ${estimatedCostFLR.toFixed(4)} FLR (max ${MAX_GAS_FLR} FLR)` 
            });
        }
        
        // Connect to contract
        const contract = new ethers.Contract(TOADZ_ORIGINALS_ADDRESS, ORIGINALS_ABI, minterWallet);
        
        // Mint NFT
        const tx = await contract.mint(artistWallet, metadataUrl, {
            gasLimit: 300000,
            gasPrice: gasPrice
        });
        
        console.log('Mint tx sent:', tx.hash);
        
        // Wait for confirmation
        const receipt = await tx.wait();
        console.log('Mint confirmed in block:', receipt.blockNumber);
        
        // Wait a moment for logs to be indexed
        await new Promise(r => setTimeout(r, 2000));
        
        // Query logs for this transaction
        let tokenId = null;
        const transferSig = ethers.utils.id('Transfer(address,address,uint256)');
        
        try {
            const fullReceipt = await provider.getTransactionReceipt(tx.hash);
            console.log('Receipt logs count:', fullReceipt.logs.length);
            
            for (const log of fullReceipt.logs) {
                if (log.address.toLowerCase() === TOADZ_ORIGINALS_ADDRESS.toLowerCase()) {
                    console.log('Found NFT contract log, topics:', log.topics);
                    if (log.topics[0] === transferSig && log.topics.length >= 4) {
                        tokenId = ethers.BigNumber.from(log.topics[3]).toString();
                        console.log('Got tokenId:', tokenId);
                        break;
                    }
                }
            }
        } catch (e) {
            console.log('getTransactionReceipt error:', e.message);
        }
        
        if (!tokenId) {
            tokenId = 'unknown';
        }
        
        console.log('Final minted token ID:', tokenId);
        
        // Store in database
        const insertResult = db.prepare(`
            INSERT INTO artist_nfts (token_id, contract_address, artist_wallet, name, description, image_url, metadata_url, price, sale_type, auction_duration, featured, tx_hash)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(tokenId, TOADZ_ORIGINALS_ADDRESS, artistWallet, name, description || '', imageUrl, metadataUrl, price || 0, saleType || 'fixed', auctionDuration || 0, featured ? 1 : 0, tx.hash);
        
        const nftId = insertResult.lastInsertRowid;
        
        // If auction type and we got a valid tokenId, create auction on-chain
        let auctionId = null;
        if (saleType === 'auction' && tokenId && tokenId !== 'unknown') {
            try {
                const AUCTIONS_ADDRESS = '0x45b20e28fFAFAF70681f4e67990Ae1B44E3d37fd';
                const AUCTIONS_ABI = [
                    'function createAuction(uint256 nftId, address artist, uint256 startingPrice, uint256 durationHours) external returns (uint256)',
                    'event AuctionCreated(uint256 indexed auctionId, uint256 indexed nftId, address artist, uint256 startingPrice, uint256 endTime)'
                ];
                
                const auctionContract = new ethers.Contract(AUCTIONS_ADDRESS, AUCTIONS_ABI, minterWallet);
                
                const durationHours = Math.ceil((auctionDuration || 86400) / 3600);
                const startingPriceWei = ethers.utils.parseEther(String(price || 1));
                
                console.log(`Creating auction for token ${tokenId}, price ${price} FLR, duration ${durationHours}h`);
                
                const auctionTx = await auctionContract.createAuction(
                    tokenId,
                    artistWallet,
                    startingPriceWei,
                    durationHours,
                    { gasLimit: 200000 }
                );
                
                const auctionReceipt = await auctionTx.wait();
                console.log('Auction tx confirmed:', auctionTx.hash);
                
                // Get auction ID from event
                const auctionCreatedSig = ethers.utils.id('AuctionCreated(uint256,uint256,address,uint256,uint256)');
                for (const log of auctionReceipt.logs) {
                    if (log.topics[0] === auctionCreatedSig) {
                        auctionId = ethers.BigNumber.from(log.topics[1]).toString();
                        console.log('Auction ID:', auctionId);
                        break;
                    }
                }
                
                // Update database with auction_id
                if (auctionId) {
                    db.prepare('UPDATE artist_nfts SET auction_id = ? WHERE id = ?').run(auctionId, nftId);
                }
            } catch (auctionErr) {
                console.error('Auction creation failed:', auctionErr.message);
                // NFT still minted, just no auction
            }
        }
        
        res.json({
            success: true,
            tokenId: tokenId,
            nftId: nftId,
            auctionId: auctionId,
            txHash: tx.hash,
            metadataUrl: metadataUrl,
            contract: TOADZ_ORIGINALS_ADDRESS
        });
        
    } catch (err) {
        console.error('Minting error:', err);
        res.status(500).json({ error: err.message });
    }
});

// ==================== ARTIST APPLICATIONS ====================

// Create auction for existing NFT
app.post('/api/artist-nft/:id/create-auction', async (req, res) => {
    try {
        const { id } = req.params;
        const wallet = req.body.wallet?.toLowerCase();
        
        // Get NFT
        const nft = db.prepare('SELECT * FROM artist_nfts WHERE id = ?').get(id);
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        
        // Check ownership
        if (nft.artist_wallet.toLowerCase() !== wallet && wallet !== ADMIN_WALLET) {
            return res.status(403).json({ error: 'Not authorized' });
        }
        
        // Check if already has auction
        if (nft.auction_id) {
            return res.status(400).json({ error: 'Auction already exists' });
        }
        
        // Check token ID
        if (!nft.token_id || nft.token_id === 'unknown') {
            return res.status(400).json({ error: 'NFT not minted on-chain' });
        }
        
        const FLARE_RPC = 'https://flare-api.flare.network/ext/C/rpc';
        const provider = new ethers.providers.JsonRpcProvider(FLARE_RPC);
        const minterWallet = new ethers.Wallet(MINTER_PRIVATE_KEY, provider);
        
        const AUCTIONS_ADDRESS = '0x45b20e28fFAFAF70681f4e67990Ae1B44E3d37fd';
        const AUCTIONS_ABI = [
            'function createAuction(uint256 nftId, address artist, uint256 startingPrice, uint256 durationHours) external returns (uint256)',
            'event AuctionCreated(uint256 indexed auctionId, uint256 indexed nftId, address artist, uint256 startingPrice, uint256 endTime)'
        ];
        
        const auctionContract = new ethers.Contract(AUCTIONS_ADDRESS, AUCTIONS_ABI, minterWallet);
        
        const durationHours = Math.ceil((nft.auction_duration || 86400) / 3600);
        const startingPriceWei = ethers.utils.parseEther(String(nft.price || 1));
        
        console.log(`Creating auction for token ${nft.token_id}, price ${nft.price} FLR, duration ${durationHours}h`);
        
        const auctionTx = await auctionContract.createAuction(
            nft.token_id,
            nft.artist_wallet,
            startingPriceWei,
            durationHours,
            { gasLimit: 200000 }
        );
        
        const auctionReceipt = await auctionTx.wait();
        console.log('Auction tx confirmed:', auctionTx.hash);
        
        // Get auction ID from event
        let auctionId = null;
        const auctionCreatedSig = ethers.utils.id('AuctionCreated(uint256,uint256,address,uint256,uint256)');
        for (const log of auctionReceipt.logs) {
            if (log.topics[0] === auctionCreatedSig) {
                auctionId = ethers.BigNumber.from(log.topics[1]).toString();
                console.log('Auction ID:', auctionId);
                break;
            }
        }
        
        // Update database
        if (auctionId) {
            db.prepare('UPDATE artist_nfts SET auction_id = ?, sale_type = ? WHERE id = ?').run(auctionId, 'auction', id);
        }
        
        res.json({ success: true, auctionId, txHash: auctionTx.hash });
        
    } catch (err) {
        console.error('Create auction error:', err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/artist-apply', (req, res) => {
    try {
        const { name, email, portfolio, twitter, style, size, bio, wallet } = req.body;
        
        if (!name || !email || !bio) {
            return res.status(400).json({ error: 'Name, email, and bio are required' });
        }
        
        const stmt = db.prepare(`
            INSERT INTO artist_applications (name, email, portfolio, twitter, style, collection_size, bio, wallet)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);
        
        const result = stmt.run(name, email, portfolio || null, twitter || null, style || null, size || null, bio, wallet || null);
        
        console.log(`New artist application: ${name} (${email})`);
        
        res.json({ 
            success: true, 
            message: 'Application submitted successfully',
            id: result.lastInsertRowid 
        });
    } catch (err) {
        console.error('Artist application error:', err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/artist-applications', (req, res) => {
    try {
        const applications = db.prepare('SELECT * FROM artist_applications ORDER BY created_at DESC').all();
        res.json(applications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== BULK OPERATIONS ====================

// Bulk mint NFTs (multiple at once)
app.post('/api/bulk-mint', async (req, res) => {
    try {
        const { artistWallet, nfts } = req.body;
        // nfts = [{ imageUrl, name, description, fileType, price, saleType, auctionDuration, featured }, ...]
        
        if (!artistWallet || !nfts || !Array.isArray(nfts) || nfts.length === 0) {
            return res.status(400).json({ error: 'artistWallet and nfts array required' });
        }
        
        if (nfts.length > 20) {
            return res.status(400).json({ error: 'Maximum 20 NFTs per batch' });
        }
        
        if (!MINTER_PRIVATE_KEY || !TOADZ_ORIGINALS_ADDRESS) {
            return res.status(500).json({ error: 'Minting not configured' });
        }
        
        const provider = new ethers.JsonRpcProvider('https://flare-api.flare.network/ext/C/rpc');
        const minterWallet = new ethers.Wallet(MINTER_PRIVATE_KEY, provider);
        const contract = new ethers.Contract(TOADZ_ORIGINALS_ADDRESS, ORIGINALS_ABI, minterWallet);
        
        const results = [];
        
        for (const nft of nfts) {
            try {
                const metadataUrl = createMetadata(
                    nft.name,
                    nft.description || '',
                    nft.imageUrl,
                    artistWallet,
                    nft.fileType || 'image'
                );
                
                console.log(`Bulk minting: ${nft.name} for ${artistWallet}`);
                
                const tx = await contract.mint(artistWallet, metadataUrl);
                const receipt = await tx.wait();
                
                // Get token ID from event
                let tokenId = 'unknown';
                for (const log of receipt.logs) {
                    try {
                        const parsed = contract.interface.parseLog(log);
                        if (parsed && parsed.name === 'Transfer') {
                            tokenId = parsed.args.tokenId.toString();
                        }
                    } catch (e) {}
                }
                
                // Save to database
                db.prepare(`
                    INSERT INTO artist_nfts (token_id, contract_address, artist_wallet, name, description, image_url, metadata_url, price, sale_type, auction_duration, featured, tx_hash)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).run(tokenId, TOADZ_ORIGINALS_ADDRESS, artistWallet, nft.name, nft.description || '', nft.imageUrl, metadataUrl, nft.price || 0, nft.saleType || 'fixed', nft.auctionDuration || 0, nft.featured ? 1 : 0, tx.hash);
                
                results.push({ success: true, name: nft.name, tokenId, txHash: tx.hash });
            } catch (err) {
                console.error(`Failed to mint ${nft.name}:`, err.message);
                results.push({ success: false, name: nft.name, error: err.message });
            }
        }
        
        res.json({ results, successCount: results.filter(r => r.success).length, totalCount: nfts.length });
        
    } catch (err) {
        console.error('Bulk mint error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Update NFT listing (price, sale type)
app.put('/api/artist-nft/:id', (req, res) => {
    try {
        const { wallet, price, saleType, auctionDuration } = req.body;
        const id = req.params.id;
        
        const nft = db.prepare('SELECT * FROM artist_nfts WHERE id = ?').get(id);
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        
        if (nft.artist_wallet.toLowerCase() !== wallet?.toLowerCase() && wallet?.toLowerCase() !== ADMIN_WALLET) {
            return res.status(403).json({ error: 'Not authorized' });
        }
        
        db.prepare(`
            UPDATE artist_nfts SET price = ?, sale_type = ?, auction_duration = ?
            WHERE id = ?
        `).run(price || 0, saleType || 'fixed', auctionDuration || 0, id);
        
        console.log(`Updated NFT ${id}: price=${price}, saleType=${saleType}`);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update NFT with on-chain auction ID
app.post('/api/artist-nft/:id/auction', (req, res) => {
    try {
        const { auctionId, txHash } = req.body;
        const id = req.params.id;
        
        const nft = db.prepare('SELECT * FROM artist_nfts WHERE id = ?').get(id);
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        
        db.prepare(`
            UPDATE artist_nfts SET auction_id = ? WHERE id = ?
        `).run(auctionId, id);
        
        console.log(`Set auction_id=${auctionId} for NFT ${id} (tx: ${txHash})`);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Bulk list NFTs (update prices)
app.post('/api/bulk-list', (req, res) => {
    try {
        const { wallet, listings } = req.body;
        // listings = [{ id, price, saleType, auctionDuration }, ...]
        
        if (!wallet || !listings || !Array.isArray(listings)) {
            return res.status(400).json({ error: 'wallet and listings array required' });
        }
        
        const results = [];
        
        for (const listing of listings) {
            const nft = db.prepare('SELECT * FROM artist_nfts WHERE id = ?').get(listing.id);
            if (!nft) {
                results.push({ id: listing.id, success: false, error: 'Not found' });
                continue;
            }
            
            if (nft.artist_wallet.toLowerCase() !== wallet.toLowerCase() && wallet.toLowerCase() !== ADMIN_WALLET) {
                results.push({ id: listing.id, success: false, error: 'Not authorized' });
                continue;
            }
            
            db.prepare(`
                UPDATE artist_nfts SET price = ?, sale_type = ?, auction_duration = ?
                WHERE id = ?
            `).run(listing.price || 0, listing.saleType || 'fixed', listing.auctionDuration || 0, listing.id);
            
            results.push({ id: listing.id, success: true });
        }
        
        console.log(`Bulk listed ${results.filter(r => r.success).length}/${listings.length} NFTs`);
        
        res.json({ results, successCount: results.filter(r => r.success).length });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Place bid on auction
app.post('/api/place-bid', (req, res) => {
    try {
        const { nftId, bidder, amount, txHash } = req.body;
        
        if (!nftId || !bidder || !amount || !txHash) {
            return res.status(400).json({ error: 'nftId, bidder, amount, and txHash required' });
        }
        
        const nft = db.prepare('SELECT * FROM artist_nfts WHERE id = ?').get(nftId);
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        
        if (nft.sale_type !== 'auction') {
            return res.status(400).json({ error: 'NFT is not an auction' });
        }
        
        // Update the NFT with new highest bid
        db.prepare(`
            UPDATE artist_nfts SET price = ?, status = 'has_bids'
            WHERE id = ? AND (price < ? OR price IS NULL OR price = 0)
        `).run(amount, nftId, amount);
        
        // Store bid in bids table (create if not exists)
        db.exec(`
            CREATE TABLE IF NOT EXISTS auction_bids (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nft_id INTEGER NOT NULL,
                bidder TEXT NOT NULL,
                amount REAL NOT NULL,
                tx_hash TEXT,
                created_at INTEGER DEFAULT (strftime('%s', 'now'))
            )
        `);
        
        db.prepare(`
            INSERT INTO auction_bids (nft_id, bidder, amount, tx_hash)
            VALUES (?, ?, ?, ?)
        `).run(nftId, bidder.toLowerCase(), amount, txHash);
        
        console.log(`Bid placed: ${amount} FLR on NFT ${nftId} by ${bidder}`);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get bids for an NFT
app.get('/api/nft/:id/bids', (req, res) => {
    try {
        // Create table if not exists
        db.exec(`
            CREATE TABLE IF NOT EXISTS auction_bids (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nft_id INTEGER NOT NULL,
                bidder TEXT NOT NULL,
                amount REAL NOT NULL,
                tx_hash TEXT,
                created_at INTEGER DEFAULT (strftime('%s', 'now'))
            )
        `);
        
        const bids = db.prepare('SELECT * FROM auction_bids WHERE nft_id = ? ORDER BY amount DESC').all(req.params.id);
        res.json(bids);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Buy NFT (fixed price)
app.post('/api/buy-nft', (req, res) => {
    try {
        const { nftId, buyer, txHash } = req.body;
        
        if (!nftId || !buyer || !txHash) {
            return res.status(400).json({ error: 'nftId, buyer, and txHash required' });
        }
        
        const nft = db.prepare('SELECT * FROM artist_nfts WHERE id = ?').get(nftId);
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        
        if (nft.sale_type !== 'fixed') {
            return res.status(400).json({ error: 'NFT is not a fixed price listing' });
        }
        
        // Mark as sold
        db.prepare(`
            UPDATE artist_nfts SET status = 'sold', price = 0
            WHERE id = ?
        `).run(nftId);
        
        console.log(`NFT ${nftId} sold to ${buyer} for ${nft.price} FLR`);
        
        res.json({ success: true, price: nft.price });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get recent artist activity for live ticker
app.get('/api/artist-activity', (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 20, 50);
        const nfts = db.prepare(`
            SELECT n.*, s.name as artist_name
            FROM artist_nfts n
            LEFT JOIN storefronts s ON LOWER(n.artist_wallet) = LOWER(s.wallet)
            WHERE n.price > 0
            ORDER BY n.created_at DESC
            LIMIT ?
        `).all(limit);
        
        // Transform to activity format
        const activity = nfts.map(nft => ({
            type: nft.sale_type === 'auction' ? 'auction' : 'listed',
            name: nft.name,
            artist: nft.artist_name || 'Artist',
            price: nft.price,
            image_url: nft.image_url,
            timestamp: nft.created_at
        }));
        
        res.json(activity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Post announcement
app.post('/api/storefront/:wallet/announcement', (req, res) => {
    try {
        const { wallet: senderWallet, announcement } = req.body;
        const targetWallet = req.params.wallet;
        
        // Verify sender is owner or admin
        const ADMIN = '0xcEA86bBdb5cd33ddbA8dC0ed3c838605EeF7c715'.toLowerCase();
        if (senderWallet?.toLowerCase() !== targetWallet.toLowerCase() && 
            senderWallet?.toLowerCase() !== ADMIN) {
            return res.status(403).json({ error: 'Not authorized' });
        }
        
        if (!announcement || announcement.length > 500) {
            return res.status(400).json({ error: 'Announcement required (max 500 chars)' });
        }
        
        // Update storefront with announcement
        db.prepare(`
            UPDATE storefronts SET announcement = ?, announcement_date = ?
            WHERE LOWER(wallet) = LOWER(?)
        `).run(announcement, Date.now(), targetWallet);
        
        console.log(`Announcement posted for ${targetWallet}`);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== START ====================
app.listen(PORT, () => {
    console.log(`Toadz Indexer running on port ${PORT}`);
    
    indexEvents();
    updateFloors();
    
    // Removed: Initial ownership indexing - events now handle ownership updates (Sold, Unlisted, Unstaked)
    
    setInterval(indexEvents, POLL_INTERVAL);
    setInterval(notifyOfferSellers, 30000);
    setInterval(updateFloors, 300000);
    // Removed: 30-min ownership reindex - events now handle ownership updates (Sold, Unlisted, Unstaked)
});
