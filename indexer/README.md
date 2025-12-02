# Toadz Flare Indexer

NFT ownership indexer for Flare Network. Tracks Transfer events for all collections and provides instant NFT ownership lookups.

## How It Works

1. **Indexes Transfer events** from all NFT collections on Flare
2. **Stores ownership** in SQLite database
3. **Real-time updates** via block polling
4. **Instant queries** - no RPC calls on user requests

## Deployment (Railway)

1. Create new project on Railway
2. Connect GitHub repo or deploy from folder
3. Add a **Volume** mounted at `/data` (CRITICAL - preserves database)
4. Set environment variables:
   - `FLARE_RPC`: Your Flare RPC URL (optional, has default)
   - `START_BLOCK`: Block to start indexing from (optional, default 0)
   - `ADMIN_KEY`: Secret key for admin endpoints (optional)

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `FLARE_RPC` | No | `https://flare-api.flare.network/ext/C/rpc` | Flare RPC endpoint |
| `START_BLOCK` | No | `0` | Block to start indexing from |
| `ADMIN_KEY` | No | - | Secret key for admin endpoints |
| `PORT` | No | `8080` | Server port |

## API Endpoints

### NFT Ownership
- `GET /user/:address/nfts` - Get user's NFTs (grouped by collection)
- `GET /user/:address/nfts?verify=true` - Get & verify on-chain (slower)

### Collections
- `GET /collections` - List all indexed collections
- `GET /collection/:address` - Get collection stats

### Activity
- `GET /activity` - Recent transfer events
- `GET /activity/:collection` - Collection activity

### Notifications
- `GET /user/:address/notifications` - User notifications
- `GET /user/:address/notifications/unread` - Unread count
- `POST /user/:address/notifications/read` - Mark all read

### Sync Status
- `GET /sync` - Current indexing progress
- `GET /` - Health check + sync status

### Admin
- `POST /admin/reindex` - Force reindex from block (requires ADMIN_KEY)

## Collections Indexed

- Block Bonez
- Focus Pass
- Flare Apes
- Block Bonez Traits
- Flare Punks
- Lucky Claw
- Flaremingo Frens
- The Fat Kittens
- Doodle Bunny
- The Flaremingos
- The Phoenix Project - Founder's Edition
- Poodle & Friends
- Smuggler Chimps
- Super Bad Monsters
- Minerals
- FlareRock
- Mutant Ape Flare Serum
- The Phoenix Project - Liquidity Edition
- PoodleFriendIslands
- Floor-Sweeper

## Adding New Collections

Edit `COLLECTIONS` object in `index.js`:

```javascript
const COLLECTIONS = {
    '0xContractAddress': { name: 'Collection Name', symbol: 'SYM' },
    // ...
};
```

## Speed Tips

1. Use your own Flare node for fastest indexing (no rate limits)
2. Set `START_BLOCK` to when first NFT was deployed (skip empty blocks)
3. Increase `BATCH_SIZE` if using private node

## Local Development

```bash
npm install
npm start
```

Runs on http://localhost:8080
