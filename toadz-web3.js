// ============ TOADZ WEB3 INTEGRATION ============
// Add ethers.js via CDN in HTML: <script src="https://cdn.jsdelivr.net/npm/ethers@6/dist/ethers.umd.min.js"></script>

const CONTRACTS = {
    flare: {
        pond: '0x28fFAb6D9C7a7140ddE0a3156FCb873b2aacA554',
        pool: '0x42598464cc7fE6507C4ebf9009fe1adccE44b0BC',
        marketplace: '0x20b629A7F5527C43Ee9334F864683d2862cB551c',
        wflr: '0x1D80c49BbBCd1C0911346656B529DF9E5c2F783d'
    },
    songbird: {
        vault: '0xDB6470aefFf006f48845aF0d7a6040aA773ebd07',
        stoadz: '0x35afb6Ba51839dEDD33140A3b704b39933D1e642',
        sbc: '0x360f8B7d9530F55AB8E52394E6527935635f51E7'
    }
};

const CHAINS = {
    flare: {
        chainId: '0xe', // 14
        chainName: 'Flare',
        rpcUrls: ['https://flare-api.flare.network/ext/C/rpc'],
        nativeCurrency: { name: 'Flare', symbol: 'FLR', decimals: 18 },
        blockExplorerUrls: ['https://flare-explorer.flare.network']
    },
    songbird: {
        chainId: '0x13', // 19
        chainName: 'Songbird',
        rpcUrls: ['https://songbird-api.flare.network/ext/C/rpc'],
        nativeCurrency: { name: 'Songbird', symbol: 'SGB', decimals: 18 },
        blockExplorerUrls: ['https://songbird-explorer.flare.network']
    }
};

// ABIs (minimal - add full ABIs from artifacts for production)
const ERC20_ABI = [
    'function balanceOf(address) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function transfer(address to, uint256 amount) returns (bool)'
];

const ERC721_ABI = [
    'function balanceOf(address) view returns (uint256)',
    'function ownerOf(uint256 tokenId) view returns (address)',
    'function approve(address to, uint256 tokenId)',
    'function setApprovalForAll(address operator, bool approved)',
    'function isApprovedForAll(address owner, address operator) view returns (bool)',
    'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
    'function tokenURI(uint256 tokenId) view returns (string)'
];

const POOL_ABI = [
    'function addLiquidity(uint256 lockTier, uint256 minShares) payable',
    'function removeLiquidity()',
    'function claimPONDRewards()',
    'function claimFLRRewards()',
    'function reDepositFLRRewards(uint256 lockTier)',
    'function swapFLRForPOND(uint256 minOut) payable',
    'function swapPONDForFLR(uint256 amountIn, uint256 minOut)',
    'function stakeNFT(address collection, uint256 tokenId)',
    'function stakeNFTBatch(address collection, uint256[] tokenIds)',
    'function unstakeNFT(address collection, uint256 tokenId)',
    'function unstakeNFTBatch(address collection, uint256[] tokenIds)',
    'function getPosition(address user) view returns (uint256 lpFLR, uint256 lpPOND, uint256 shares, uint256 lockTier, uint256 lockExpiry, uint256 depositTime, uint256 lastClaimTime, uint256 accumulatedPOND, uint256 accumulatedFLR)',
    'function getPendingRewards(address user) view returns (uint256 pendingPOND, uint256 pendingFLR)',
    'function getPoolStats() view returns (uint256 reserveFLR, uint256 reservePOND, uint256 totalShares, uint256 tvl, uint256 pondPrice)',
    'function getUserBoost(address user) view returns (uint256)',
    'function isClaimWindowOpen() view returns (bool)',
    'function pondRatio() view returns (uint256)',
    'function tvlCap() view returns (uint256)'
];

const MARKETPLACE_ABI = [
    'function listNFT(address collection, uint256 tokenId)',
    'function setPrice(address collection, uint256 tokenId, address currency, uint256 price)',
    'function cancelListing(address collection, uint256 tokenId)',
    'function buyWithFLR(address collection, uint256 tokenId) payable',
    'function buyWithToken(address collection, uint256 tokenId, address currency)',
    'function makeOffer(address collection, uint256 tokenId, address currency, uint256 amount, uint256 duration) payable',
    'function acceptOffer(address collection, uint256 tokenId, uint256 offerIndex)',
    'function cancelOffer(address collection, uint256 tokenId, uint256 offerIndex)',
    'function getListing(address collection, uint256 tokenId) view returns (address seller, bool active)',
    'function getPrice(address collection, uint256 tokenId, address currency) view returns (uint256)',
    'function getOffers(address collection, uint256 tokenId) view returns (tuple(address buyer, address currency, uint256 amount, uint256 expiry, bool active)[])',
    'function feeRate() view returns (uint256)',
    'function isCollectionAllowed(address collection) view returns (bool)',
    'event NFTListed(address indexed collection, uint256 indexed tokenId, address indexed seller)',
    'event NFTSold(address indexed collection, uint256 indexed tokenId, address seller, address buyer, address currency, uint256 price)',
    'event OfferMade(address indexed collection, uint256 indexed tokenId, address indexed buyer, address currency, uint256 amount)'
];

const VAULT_ABI = [
    'function lockNFT(address collection, uint256 tokenId)',
    'function lockNFTBatch(address collection, uint256[] tokenIds)',
    'function getUserTotalNFTs(address user) view returns (uint256)',
    'function getUserInfo(address user) view returns (uint256 totalLocked, uint256 legacyCount, uint256 totalForAirdrops)',
    'function isCollectionAllowed(address collection) view returns (bool)'
];

// ============ STATE ============
let provider = null;
let signer = null;
let userAddress = null;
let currentChain = null;

// Contract instances
let pondContract = null;
let poolContract = null;
let marketplaceContract = null;
let vaultContract = null;

// ============ WALLET CONNECTION ============
async function connectWallet(walletType = 'metamask') {
    try {
        if (!window.ethereum) {
            alert('Please install MetaMask or another Web3 wallet');
            return false;
        }

        // Request accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAddress = accounts[0];

        // Setup provider and signer
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        // Get current chain
        const network = await provider.getNetwork();
        currentChain = Number(network.chainId);

        // Initialize contracts based on chain
        initContracts();

        // Update UI
        updateWalletUI();

        // Listen for account/chain changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', handleChainChanged);

        closeModal();
        return true;
    } catch (error) {
        console.error('Connection error:', error);
        alert('Failed to connect wallet');
        return false;
    }
}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        disconnectWallet();
    } else {
        userAddress = accounts[0];
        updateWalletUI();
        refreshUserData();
    }
}

function handleChainChanged(chainId) {
    currentChain = parseInt(chainId, 16);
    initContracts();
    updateWalletUI();
    refreshUserData();
}

function disconnectWallet() {
    provider = null;
    signer = null;
    userAddress = null;
    pondContract = null;
    poolContract = null;
    marketplaceContract = null;
    vaultContract = null;
    updateWalletUI();
}

async function switchToFlare() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: CHAINS.flare.chainId }]
        });
    } catch (error) {
        if (error.code === 4902) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [CHAINS.flare]
            });
        }
    }
}

async function switchToSongbird() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: CHAINS.songbird.chainId }]
        });
    } catch (error) {
        if (error.code === 4902) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [CHAINS.songbird]
            });
        }
    }
}

function initContracts() {
    if (!signer) return;

    if (currentChain === 14) { // Flare
        pondContract = new ethers.Contract(CONTRACTS.flare.pond, ERC20_ABI, signer);
        poolContract = new ethers.Contract(CONTRACTS.flare.pool, POOL_ABI, signer);
        marketplaceContract = new ethers.Contract(CONTRACTS.flare.marketplace, MARKETPLACE_ABI, signer);
    } else if (currentChain === 19) { // Songbird
        vaultContract = new ethers.Contract(CONTRACTS.songbird.vault, VAULT_ABI, signer);
    }
}

function updateWalletUI() {
    const connectBtn = document.getElementById('connect-wallet-btn');
    const walletInfo = document.getElementById('wallet-info');
    
    if (userAddress) {
        const shortAddr = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
        if (connectBtn) connectBtn.style.display = 'none';
        if (walletInfo) {
            walletInfo.style.display = 'flex';
            walletInfo.querySelector('.wallet-address').textContent = shortAddr;
            walletInfo.querySelector('.chain-name').textContent = currentChain === 14 ? 'Flare' : currentChain === 19 ? 'Songbird' : 'Unknown';
        }
    } else {
        if (connectBtn) connectBtn.style.display = 'flex';
        if (walletInfo) walletInfo.style.display = 'none';
    }
}

// ============ POOL FUNCTIONS ============
async function getPoolStats() {
    if (!poolContract) return null;
    try {
        const stats = await poolContract.getPoolStats();
        return {
            reserveFLR: ethers.formatEther(stats[0]),
            reservePOND: ethers.formatEther(stats[1]),
            totalShares: ethers.formatEther(stats[2]),
            tvl: ethers.formatEther(stats[3]),
            pondPrice: ethers.formatEther(stats[4])
        };
    } catch (error) {
        console.error('Error getting pool stats:', error);
        return null;
    }
}

async function getUserPosition() {
    if (!poolContract || !userAddress) return null;
    try {
        const pos = await poolContract.getPosition(userAddress);
        const pending = await poolContract.getPendingRewards(userAddress);
        const boost = await poolContract.getUserBoost(userAddress);
        
        return {
            lpFLR: ethers.formatEther(pos[0]),
            lpPOND: ethers.formatEther(pos[1]),
            shares: ethers.formatEther(pos[2]),
            lockTier: Number(pos[3]),
            lockExpiry: new Date(Number(pos[4]) * 1000),
            pendingPOND: ethers.formatEther(pending[0]),
            pendingFLR: ethers.formatEther(pending[1]),
            boost: Number(boost)
        };
    } catch (error) {
        console.error('Error getting position:', error);
        return null;
    }
}

async function addLiquidity(flrAmount, lockTier) {
    if (!poolContract || !pondContract) {
        alert('Please connect wallet and switch to Flare');
        return;
    }
    
    try {
        // Get required POND amount
        const stats = await poolContract.getPoolStats();
        const ratio = await poolContract.pondRatio();
        const pondRequired = (BigInt(ethers.parseEther(flrAmount.toString())) * stats[1] * ratio) / (stats[0] * 1000n);
        
        // Check POND balance
        const pondBalance = await pondContract.balanceOf(userAddress);
        if (pondBalance < pondRequired) {
            alert(`Insufficient POND. Need ${ethers.formatEther(pondRequired)} POND`);
            return;
        }
        
        // Approve POND if needed
        const allowance = await pondContract.allowance(userAddress, CONTRACTS.flare.pool);
        if (allowance < pondRequired) {
            const approveTx = await pondContract.approve(CONTRACTS.flare.pool, pondRequired);
            await approveTx.wait();
        }
        
        // Add liquidity
        const tx = await poolContract.addLiquidity(lockTier, 0, {
            value: ethers.parseEther(flrAmount.toString())
        });
        await tx.wait();
        
        alert('Liquidity added successfully!');
        refreshUserData();
    } catch (error) {
        console.error('Error adding liquidity:', error);
        alert('Failed to add liquidity: ' + error.message);
    }
}

async function removeLiquidity() {
    if (!poolContract) return;
    
    try {
        const tx = await poolContract.removeLiquidity();
        await tx.wait();
        alert('Liquidity removed!');
        refreshUserData();
    } catch (error) {
        console.error('Error removing liquidity:', error);
        alert('Failed: ' + error.message);
    }
}

async function claimPONDRewards() {
    if (!poolContract) return;
    
    try {
        const tx = await poolContract.claimPONDRewards();
        await tx.wait();
        alert('POND rewards claimed!');
        refreshUserData();
    } catch (error) {
        console.error('Error claiming POND:', error);
        alert('Failed: ' + error.message);
    }
}

async function claimFLRRewards() {
    if (!poolContract) return;
    
    try {
        const isOpen = await poolContract.isClaimWindowOpen();
        if (!isOpen) {
            alert('FLR claims only available on 1st and 15th of each month');
            return;
        }
        
        const tx = await poolContract.claimFLRRewards();
        await tx.wait();
        alert('FLR rewards claimed!');
        refreshUserData();
    } catch (error) {
        console.error('Error claiming FLR:', error);
        alert('Failed: ' + error.message);
    }
}

async function swapFLRForPOND(flrAmount, minPondOut) {
    if (!poolContract) return;
    
    try {
        const tx = await poolContract.swapFLRForPOND(ethers.parseEther(minPondOut.toString()), {
            value: ethers.parseEther(flrAmount.toString())
        });
        await tx.wait();
        alert('Swap successful!');
        refreshUserData();
    } catch (error) {
        console.error('Swap error:', error);
        alert('Swap failed: ' + error.message);
    }
}

async function swapPONDForFLR(pondAmount, minFlrOut) {
    if (!poolContract || !pondContract) return;
    
    try {
        const amount = ethers.parseEther(pondAmount.toString());
        
        // Approve if needed
        const allowance = await pondContract.allowance(userAddress, CONTRACTS.flare.pool);
        if (allowance < amount) {
            const approveTx = await pondContract.approve(CONTRACTS.flare.pool, amount);
            await approveTx.wait();
        }
        
        const tx = await poolContract.swapPONDForFLR(amount, ethers.parseEther(minFlrOut.toString()));
        await tx.wait();
        alert('Swap successful!');
        refreshUserData();
    } catch (error) {
        console.error('Swap error:', error);
        alert('Swap failed: ' + error.message);
    }
}

// ============ NFT STAKING (BOOST) ============
async function stakeNFTForBoost(collectionAddress, tokenId) {
    if (!poolContract) return;
    
    try {
        // Approve NFT first
        const nftContract = new ethers.Contract(collectionAddress, ERC721_ABI, signer);
        const isApproved = await nftContract.isApprovedForAll(userAddress, CONTRACTS.flare.pool);
        if (!isApproved) {
            const approveTx = await nftContract.setApprovalForAll(CONTRACTS.flare.pool, true);
            await approveTx.wait();
        }
        
        const tx = await poolContract.stakeNFT(collectionAddress, tokenId);
        await tx.wait();
        alert('NFT staked for boost!');
        refreshUserData();
    } catch (error) {
        console.error('Stake error:', error);
        alert('Failed: ' + error.message);
    }
}

async function unstakeNFT(collectionAddress, tokenId) {
    if (!poolContract) return;
    
    try {
        const tx = await poolContract.unstakeNFT(collectionAddress, tokenId);
        await tx.wait();
        alert('NFT unstaked!');
        refreshUserData();
    } catch (error) {
        console.error('Unstake error:', error);
        alert('Failed: ' + error.message);
    }
}

// ============ MARKETPLACE FUNCTIONS ============
async function listNFT(collectionAddress, tokenId, priceInFLR) {
    if (!marketplaceContract) return;
    
    try {
        // Approve NFT first
        const nftContract = new ethers.Contract(collectionAddress, ERC721_ABI, signer);
        const isApproved = await nftContract.isApprovedForAll(userAddress, CONTRACTS.flare.marketplace);
        if (!isApproved) {
            const approveTx = await nftContract.setApprovalForAll(CONTRACTS.flare.marketplace, true);
            await approveTx.wait();
        }
        
        // List
        const listTx = await marketplaceContract.listNFT(collectionAddress, tokenId);
        await listTx.wait();
        
        // Set price (address(0) = FLR)
        const priceTx = await marketplaceContract.setPrice(
            collectionAddress, 
            tokenId, 
            ethers.ZeroAddress, 
            ethers.parseEther(priceInFLR.toString())
        );
        await priceTx.wait();
        
        alert('NFT listed!');
    } catch (error) {
        console.error('List error:', error);
        alert('Failed: ' + error.message);
    }
}

async function buyNFTWithFLR(collectionAddress, tokenId) {
    if (!marketplaceContract) return;
    
    try {
        const price = await marketplaceContract.getPrice(collectionAddress, tokenId, ethers.ZeroAddress);
        if (price === 0n) {
            alert('NFT not listed for FLR');
            return;
        }
        
        const tx = await marketplaceContract.buyWithFLR(collectionAddress, tokenId, { value: price });
        await tx.wait();
        alert('NFT purchased!');
    } catch (error) {
        console.error('Buy error:', error);
        alert('Failed: ' + error.message);
    }
}

async function buyNFTWithPOND(collectionAddress, tokenId) {
    if (!marketplaceContract || !pondContract) return;
    
    try {
        const price = await marketplaceContract.getPrice(collectionAddress, tokenId, CONTRACTS.flare.pond);
        if (price === 0n) {
            alert('NFT not listed for POND');
            return;
        }
        
        // Approve POND
        const allowance = await pondContract.allowance(userAddress, CONTRACTS.flare.marketplace);
        if (allowance < price) {
            const approveTx = await pondContract.approve(CONTRACTS.flare.marketplace, price);
            await approveTx.wait();
        }
        
        const tx = await marketplaceContract.buyWithToken(collectionAddress, tokenId, CONTRACTS.flare.pond);
        await tx.wait();
        alert('NFT purchased!');
    } catch (error) {
        console.error('Buy error:', error);
        alert('Failed: ' + error.message);
    }
}

async function cancelListing(collectionAddress, tokenId) {
    if (!marketplaceContract) return;
    
    try {
        const tx = await marketplaceContract.cancelListing(collectionAddress, tokenId);
        await tx.wait();
        alert('Listing cancelled');
    } catch (error) {
        console.error('Cancel error:', error);
        alert('Failed: ' + error.message);
    }
}

async function makeOffer(collectionAddress, tokenId, amountInFLR, durationHours) {
    if (!marketplaceContract) return;
    
    try {
        const tx = await marketplaceContract.makeOffer(
            collectionAddress,
            tokenId,
            ethers.ZeroAddress, // FLR
            ethers.parseEther(amountInFLR.toString()),
            durationHours * 3600,
            { value: ethers.parseEther(amountInFLR.toString()) }
        );
        await tx.wait();
        alert('Offer made!');
    } catch (error) {
        console.error('Offer error:', error);
        alert('Failed: ' + error.message);
    }
}

// ============ VAULT FUNCTIONS (SONGBIRD) ============
async function lockNFTInVault(collectionAddress, tokenId) {
    if (!vaultContract) {
        alert('Please switch to Songbird network');
        return;
    }
    
    try {
        // Approve NFT
        const nftContract = new ethers.Contract(collectionAddress, ERC721_ABI, signer);
        const isApproved = await nftContract.isApprovedForAll(userAddress, CONTRACTS.songbird.vault);
        if (!isApproved) {
            const approveTx = await nftContract.setApprovalForAll(CONTRACTS.songbird.vault, true);
            await approveTx.wait();
        }
        
        const tx = await vaultContract.lockNFT(collectionAddress, tokenId);
        await tx.wait();
        alert('NFT locked forever! You will receive Flare airdrops.');
    } catch (error) {
        console.error('Lock error:', error);
        alert('Failed: ' + error.message);
    }
}

async function getVaultInfo() {
    if (!vaultContract || !userAddress) return null;
    
    try {
        const info = await vaultContract.getUserInfo(userAddress);
        return {
            totalLocked: Number(info[0]),
            legacyCount: Number(info[1]),
            totalForAirdrops: Number(info[2])
        };
    } catch (error) {
        console.error('Vault info error:', error);
        return null;
    }
}

// ============ UTILITIES ============
async function getUserBalances() {
    if (!provider || !userAddress) return null;
    
    try {
        const flrBalance = await provider.getBalance(userAddress);
        let pondBalance = 0n;
        
        if (pondContract) {
            pondBalance = await pondContract.balanceOf(userAddress);
        }
        
        return {
            flr: ethers.formatEther(flrBalance),
            pond: ethers.formatEther(pondBalance)
        };
    } catch (error) {
        console.error('Balance error:', error);
        return null;
    }
}

async function refreshUserData() {
    // Update balances
    const balances = await getUserBalances();
    if (balances) {
        const flrEl = document.getElementById('user-flr-balance');
        const pondEl = document.getElementById('user-pond-balance');
        if (flrEl) flrEl.textContent = parseFloat(balances.flr).toFixed(2) + ' FLR';
        if (pondEl) pondEl.textContent = parseFloat(balances.pond).toFixed(2) + ' POND';
    }
    
    // Update pool position if on Flare
    if (currentChain === 14) {
        const position = await getUserPosition();
        if (position) {
            updatePositionUI(position);
        }
        
        const stats = await getPoolStats();
        if (stats) {
            updatePoolStatsUI(stats);
        }
    }
    
    // Update vault info if on Songbird
    if (currentChain === 19) {
        const vaultInfo = await getVaultInfo();
        if (vaultInfo) {
            updateVaultUI(vaultInfo);
        }
    }
}

function updatePositionUI(position) {
    // Update position display elements
    const posEl = document.getElementById('user-position');
    if (posEl) {
        posEl.innerHTML = `
            <div>LP FLR: ${parseFloat(position.lpFLR).toFixed(2)}</div>
            <div>LP POND: ${parseFloat(position.lpPOND).toFixed(2)}</div>
            <div>Boost: ${(position.boost / 100).toFixed(1)}%</div>
            <div>Pending POND: ${parseFloat(position.pendingPOND).toFixed(2)}</div>
            <div>Pending FLR: ${parseFloat(position.pendingFLR).toFixed(4)}</div>
            <div>Lock Expires: ${position.lockExpiry.toLocaleDateString()}</div>
        `;
    }
}

function updatePoolStatsUI(stats) {
    const tvlEl = document.getElementById('pool-tvl');
    const priceEl = document.getElementById('pond-price');
    if (tvlEl) tvlEl.textContent = parseFloat(stats.tvl).toFixed(0) + ' FLR';
    if (priceEl) priceEl.textContent = parseFloat(stats.pondPrice).toFixed(0) + ' POND/FLR';
}

function updateVaultUI(info) {
    const vaultEl = document.getElementById('vault-info');
    if (vaultEl) {
        vaultEl.innerHTML = `
            <div>Locked NFTs: ${info.totalLocked}</div>
            <div>Eligible for Airdrops: ${info.totalForAirdrops}</div>
        `;
    }
}

// Calculate swap output
async function calculateSwapOutput(amountIn, isFLRtoPOND) {
    if (!poolContract) return 0;
    
    try {
        const stats = await poolContract.getPoolStats();
        const reserveFLR = stats[0];
        const reservePOND = stats[1];
        const amountInWei = ethers.parseEther(amountIn.toString());
        
        // 1% fee
        const fee = amountInWei / 100n;
        const amountAfterFee = amountInWei - fee;
        
        let amountOut;
        if (isFLRtoPOND) {
            // FLR -> POND: amountOut = (reservePOND * amountAfterFee) / (reserveFLR + amountAfterFee)
            amountOut = (reservePOND * amountAfterFee) / (reserveFLR + amountAfterFee);
        } else {
            // POND -> FLR: amountOut = (reserveFLR * amountAfterFee) / (reservePOND + amountAfterFee)
            amountOut = (reserveFLR * amountAfterFee) / (reservePOND + amountAfterFee);
        }
        
        return ethers.formatEther(amountOut);
    } catch (error) {
        console.error('Calc error:', error);
        return 0;
    }
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    // Check if already connected
    if (window.ethereum && window.ethereum.selectedAddress) {
        connectWallet();
    }
});

// Export for use in HTML
window.toadz = {
    connectWallet,
    disconnectWallet,
    switchToFlare,
    switchToSongbird,
    getPoolStats,
    getUserPosition,
    addLiquidity,
    removeLiquidity,
    claimPONDRewards,
    claimFLRRewards,
    swapFLRForPOND,
    swapPONDForFLR,
    stakeNFTForBoost,
    unstakeNFT,
    listNFT,
    buyNFTWithFLR,
    buyNFTWithPOND,
    cancelListing,
    makeOffer,
    lockNFTInVault,
    getVaultInfo,
    getUserBalances,
    calculateSwapOutput,
    refreshUserData,
    CONTRACTS,
    CHAINS
};
