<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>TOADZ | Premier NFT Marketplace</title>
    <!-- Twitter Card / Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="TOADZ Marketplace">
    <meta property="og:title" id="og-title" content="TOADZ | Premier NFT Marketplace on Flare">
    <meta property="og:description" id="og-description" content="Trade NFTs on Flare & Songbird. Zero platform fees. Earn by sharing.">
    <meta property="og:image" id="og-image" content="https://toadz.market/preview.png">
    <meta property="og:url" id="og-url" content="https://toadz.market">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@sToadz">
    <meta name="twitter:title" id="tw-title" content="TOADZ | Premier NFT Marketplace on Flare">
    <meta name="twitter:description" id="tw-description" content="Trade NFTs on Flare & Songbird. Zero platform fees. Earn by sharing.">
    <meta name="twitter:image" id="tw-image" content="https://toadz.market/preview.png">
    <script src="https://cdn.jsdelivr.net/npm/ethers@6/dist/ethers.umd.min.js"></script>
    <script src="toadz-web3.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-void: #040406;
            --bg-primary: #08080c;
            --bg-elevated: #0b0b10;
            --bg-card: #0e0e14;
            --bg-card-hover: #121219;
            --bg-surface: #151519;
            --border: rgba(255,255,255,0.025);
            --border-subtle: rgba(255,255,255,0.04);
            --border-hover: rgba(255,255,255,0.1);
            --text-primary: #ffffff;
            --text-secondary: #8a8a9a;
            --text-muted: #4a4a5a;
            --accent: #00ff88;
            --accent-dim: #00dd77;
            --accent-glow: rgba(0,255,136,0.28);
            --purple: #8b5cf6;
            --purple-dim: #7c4ee0;
            --purple-glow: rgba(139,92,246,0.18);
            --red: #ef4444;
            --red-glow: rgba(239,68,68,0.15);
            --teal: #14b8a6;
            --flare: #e6555f;
            --flare-glow: rgba(230,85,95,0.2);
            --songbird: #ff7b5f;
            --gold: #f59e0b;
            --gold-glow: rgba(245,158,11,0.15);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-void);
            color: var(--text-primary);
            min-height: 100vh;
            overflow-x: hidden;
            line-height: 1.4;
            -webkit-font-smoothing: antialiased;
        }
        
        /* Modern dark scrollbars */
        * {
            scrollbar-width: thin;
            scrollbar-color: rgba(255,255,255,0.15) transparent;
        }
        *::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        *::-webkit-scrollbar-track {
            background: transparent;
        }
        *::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.15);
            border-radius: 4px;
        }
        *::-webkit-scrollbar-thumb:hover {
            background: rgba(255,255,255,0.25);
        }
        *::-webkit-scrollbar-corner {
            background: transparent;
        }

        /* ============ AMBIENT ============ */
        .ambient {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 0;
        }

        .ambient::before {
            content: '';
            position: absolute;
            top: -30%;
            right: -15%;
            width: 900px;
            height: 900px;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 50%);
            filter: blur(100px);
            animation: drift 30s ease-in-out infinite;
        }

        .ambient::after {
            content: '';
            position: absolute;
            bottom: -20%;
            left: -10%;
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, var(--purple-glow) 0%, transparent 50%);
            filter: blur(100px);
            animation: drift 35s ease-in-out infinite reverse;
        }

        @keyframes drift {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(40px, -30px); }
            66% { transform: translate(-30px, 40px); }
        }

        /* Toadz pattern watermark */
        .toadz-watermark {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 400px;
            opacity: 0.015;
            pointer-events: none;
            z-index: 0;
            filter: blur(2px);
        }

        /* ============ MAIN GRID WITH ACTIVITY ============ */
        .main-grid {
            display: grid;
            grid-template-columns: 1fr 280px;
            gap: 28px;
        }

        .main-content {
            min-width: 0;
        }

        .section-block {
            margin-bottom: 32px;
        }

        .section-block:last-child {
            margin-bottom: 0;
        }

        .activity-panel {
            background: var(--bg-card);
            border-radius: 14px;
            border: 1px solid var(--border-subtle);
            padding: 16px;
            height: fit-content;
            position: sticky;
            top: 72px;
            box-shadow: 0 12px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03);
        }

        .activity-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 14px;
        }

        .activity-title {
            font-size: 13px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .activity-title .live-dot {
            width: 6px;
            height: 6px;
            background: var(--accent);
            border-radius: 50%;
            animation: pulse 1.5s infinite;
        }

        .activity-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            max-height: 400px;
            overflow-y: auto;
        }

        .activity-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: var(--bg-surface);
            border-radius: 10px;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .activity-item:hover {
            background: var(--bg-card-hover);
        }

        .activity-img {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            overflow: hidden;
            flex-shrink: 0;
        }

        .activity-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .activity-content {
            flex: 1;
            min-width: 0;
        }

        .activity-type {
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            margin-bottom: 2px;
        }

        .activity-type.staked { color: var(--purple); }
        .activity-type.listed { color: var(--gold); }
        .activity-type.sold { color: var(--accent); }
        .activity-type.bid { color: var(--teal); }

        .activity-name {
            font-size: 11px;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .activity-price {
            font-size: 10px;
            color: var(--accent);
            font-weight: 600;
        }

        .activity-time {
            font-size: 9px;
            color: var(--text-muted);
            flex-shrink: 0;
        }

        /* Empty States */
        .empty-state {
            text-align: center;
            padding: 40px 20px;
            color: var(--text-secondary);
            grid-column: 1 / -1;
        }

        .empty-state.full-width {
            grid-column: 1 / -1;
            padding: 60px 20px;
        }

        .empty-state .empty-icon {
            font-size: 48px;
            margin-bottom: 16px;
            opacity: 0.6;
        }

        .empty-state p {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
        }

        .empty-state span {
            font-size: 13px;
            color: var(--text-muted);
        }

        .empty-state .apply-btn {
            display: inline-block;
            margin-top: 16px;
            padding: 12px 24px;
            background: var(--accent);
            color: var(--bg-void);
            border-radius: 8px;
            font-weight: 700;
            text-decoration: none;
            transition: all 150ms ease;
        }

        .empty-state .apply-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px var(--accent-glow);
        }

        .ticker-empty {
            padding: 10px 20px;
            color: var(--text-muted);
            font-size: 12px;
        }

        /* Artist Application Form */
        .artist-apply-card {
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .apply-header {
            text-align: center;
            margin-bottom: 32px;
        }

        .apply-header .apply-icon {
            font-size: 48px;
            margin-bottom: 16px;
        }

        .apply-header h2 {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 12px;
        }

        .apply-header p {
            color: var(--text-secondary);
            font-size: 15px;
            max-width: 500px;
            margin: 0 auto;
        }

        .apply-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .form-group label {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-secondary);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 14px 16px;
            font-size: 14px;
            color: var(--text-primary);
            transition: all 150ms ease;
            font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: var(--text-muted);
        }

        .form-group select {
            cursor: pointer;
        }

        .form-group textarea {
            resize: vertical;
            min-height: 100px;
        }

        .apply-submit-btn {
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            border-radius: 12px;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
            margin-top: 12px;
        }

        .apply-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--accent-glow);
        }

        .apply-note {
            text-align: center;
            font-size: 12px;
            color: var(--text-muted);
            margin-top: 8px;
        }

        /* Connect Wallet Prompt */
        .connect-prompt-section {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
        }

        .connect-prompt-card {
            text-align: center;
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
            border-radius: 24px;
            padding: 60px 40px;
            max-width: 450px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .connect-prompt-icon {
            font-size: 64px;
            margin-bottom: 24px;
            opacity: 0.8;
        }

        .connect-prompt-card h2 {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 12px;
        }

        .connect-prompt-card p {
            color: var(--text-secondary);
            font-size: 15px;
            margin-bottom: 32px;
            line-height: 1.5;
        }

        .connect-prompt-btn {
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            border-radius: 12px;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .connect-prompt-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--accent-glow);
        }

        /* Toast Notifications */
        .toast-container {
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .toast {
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
            border-radius: 12px;
            padding: 16px 20px;
            min-width: 280px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            gap: 12px;
            animation: slideIn 0.3s ease;
        }

        .toast.success { border-color: var(--accent); }
        .toast.error { border-color: #ff4757; }
        .toast.info { border-color: #8b5cf6; }

        .toast-icon { font-size: 20px; }
        .toast-content { flex: 1; }
        .toast-title { font-weight: 700; font-size: 14px; }
        .toast-message { font-size: 12px; color: var(--text-secondary); margin-top: 2px; }

        .toast-close {
            background: none;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            font-size: 18px;
            padding: 0;
        }

        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }

        .toast.hiding { animation: slideOut 0.3s ease forwards; }

        .hero-cta-btn {
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            border-radius: 12px;
            padding: 14px 28px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            margin-top: 20px;
            transition: all 150ms ease;
        }

        .hero-cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--accent-glow);
        }

        .storefront-fee-note {
            text-align: center;
            padding: 12px;
            background: rgba(0,255,136,0.1);
            border-radius: 8px;
            margin-bottom: 16px;
            font-size: 14px;
            font-weight: 600;
        }

        /* Sidebar LP Widget */
        .sidebar-lp-widget {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid var(--border-subtle);
        }

        .widget-header {
            margin-bottom: 12px;
        }

        .widget-badge {
            background: linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,255,136,0.05));
            border: 1px solid rgba(0,255,136,0.2);
            padding: 6px 10px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 700;
            color: var(--accent);
        }

        .widget-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 12px;
        }

        .widget-stat {
            background: var(--bg-surface);
            padding: 10px;
            border-radius: 8px;
            text-align: center;
        }

        .widget-value {
            display: block;
            font-size: 16px;
            font-weight: 800;
        }

        .widget-value.green { color: var(--accent); }
        span.green { color: var(--accent); }

        .widget-label {
            font-size: 9px;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        .widget-cta {
            width: 100%;
            padding: 10px;
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .widget-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px var(--accent-glow);
        }

        @media (max-width: 1100px) {
            .main-grid {
                grid-template-columns: 1fr;
            }
            .activity-panel {
                display: none;
            }
        }

        /* ============ HEADER ============ */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: rgba(4, 4, 6, 0.85);
            backdrop-filter: blur(40px) saturate(1.8);
            -webkit-backdrop-filter: blur(40px) saturate(1.8);
            border-bottom: 1px solid var(--border);
        }

        .header-inner {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }

        .logo {
            font-size: 18px;
            font-weight: 900;
            color: var(--accent);
            cursor: pointer;
            text-shadow: 0 0 30px var(--accent-glow);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .logo-icon {
            font-size: 20px;
        }

        .nav {
            display: flex;
            gap: 2px;
            background: var(--bg-card);
            padding: 3px;
            border-radius: 8px;
            border: 1px solid var(--border);
        }

        .nav-item {
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
            color: var(--text-muted);
            background: transparent;
            border: none;
            cursor: pointer;
            transition: all 120ms ease;
            white-space: nowrap;
            position: relative;
        }

        .nav-item:hover { color: var(--text-secondary); }
        .nav-item.active {
            color: var(--bg-void);
            background: var(--accent);
        }

        /* Animated highlight for Staking - subtle text fill */
        .nav-item.highlight {
            background: linear-gradient(90deg, var(--accent) 50%, var(--text-muted) 50%);
            background-size: 200% 100%;
            background-position: 100% 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: textFill 3s ease-in-out infinite;
        }

        @keyframes textFill {
            0%, 100% { background-position: 100% 0; }
            50% { background-position: 0% 0; }
        }

        .nav-item.live-mint {
            color: #ff4444;
            animation: liveGlow 1.5s ease-in-out infinite;
        }

        @keyframes liveGlow {
            0%, 100% { 
                text-shadow: 0 0 8px rgba(255,68,68,0.5);
            }
            50% { 
                text-shadow: 0 0 20px rgba(255,68,68,0.9), 0 0 30px rgba(255,68,68,0.4);
            }
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .chain-switch {
            display: flex;
            background: var(--bg-card);
            border-radius: 6px;
            padding: 2px;
            border: 1px solid var(--border);
        }

        .chain-btn {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: 700;
            cursor: pointer;
            border: none;
            background: transparent;
            color: var(--text-muted);
            transition: all 120ms ease;
            display: flex;
            align-items: center;
            gap: 3px;
        }

        .chain-btn .dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: currentColor;
        }

        .chain-btn.flare.active {
            background: var(--flare);
            color: white;
        }

        .chain-btn.songbird.active {
            background: var(--songbird);
            color: white;
        }

        .connect-btn {
            padding: 7px 14px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 700;
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .connect-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 15px var(--accent-glow);
        }

        .notif-bell {
            position: relative;
            width: 36px;
            height: 36px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .notif-bell svg {
            width: 18px;
            height: 18px;
            stroke: var(--text-secondary);
        }

        .notif-bell.has-notif svg {
            stroke: var(--accent);
            filter: drop-shadow(0 0 6px var(--accent));
        }

        .notif-bell:hover {
            border-color: var(--accent);
        }

        .user-menu {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .user-menu:hover {
            border-color: var(--border-subtle);
        }

        .notif-wrapper {
            position: relative;
        }

        .notif-dropdown {
            display: none;
            position: absolute;
            top: calc(100% + 8px);
            right: 0;
            width: 320px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 14px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            z-index: 1000;
            overflow: hidden;
        }

        .notif-dropdown.open {
            display: block;
        }

        .notif-dropdown-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 16px;
            border-bottom: 1px solid var(--border);
            font-size: 13px;
            font-weight: 700;
        }

        .notif-clear {
            background: none;
            border: none;
            color: var(--text-muted);
            font-size: 11px;
            cursor: pointer;
        }

        .notif-clear:hover {
            color: var(--accent);
        }

        .notif-list {
            max-height: 300px;
            overflow-y: auto;
        }

        .notif-item {
            display: flex;
            gap: 12px;
            padding: 14px 16px;
            border-bottom: 1px solid var(--border);
            cursor: pointer;
            transition: background 150ms ease;
        }

        .notif-item:last-child {
            border-bottom: none;
        }

        .notif-item:hover {
            background: var(--bg-surface);
        }

        .notif-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            flex-shrink: 0;
        }

        .notif-icon.sold { background: rgba(0,255,136,0.15); }
        .notif-icon.offer { background: rgba(255,184,0,0.15); }
        .notif-icon.claim { background: rgba(139,92,246,0.15); }

        .notif-content {
            flex: 1;
            min-width: 0;
        }

        .notif-title {
            display: block;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 2px;
        }

        .notif-desc {
            display: block;
            font-size: 12px;
            color: var(--text-secondary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .notif-time {
            display: block;
            font-size: 10px;
            color: var(--text-muted);
            margin-top: 4px;
        }

        /* ============ CONNECT MODAL ============ */
        .modal-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(8px);
            z-index: 9999;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .modal-overlay.open {
            display: flex;
        }

        .modal {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 24px;
            width: 100%;
            max-width: 400px;
            position: relative;
            animation: modalSlide 0.3s ease;
            overflow: hidden;
        }

        @keyframes modalSlide {
            from {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .modal-close {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 32px;
            height: 32px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--text-secondary);
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 150ms ease;
        }

        .modal-close:hover {
            background: var(--bg-card-hover);
            color: var(--text-primary);
        }

        .modal-header {
            text-align: center;
            padding: 40px 32px 24px;
            background: linear-gradient(180deg, rgba(0,255,136,0.05) 0%, transparent 100%);
        }

        .modal-logo {
            width: 72px;
            height: 72px;
            background: linear-gradient(135deg, var(--accent), var(--teal));
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            margin: 0 auto 20px;
            box-shadow: 0 8px 32px var(--glow);
            overflow: hidden;
        }

        .modal-logo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .modal-header h2 {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 8px;
        }

        .modal-header p {
            color: var(--text-secondary);
            font-size: 14px;
        }

        .wallet-options {
            padding: 8px 16px 16px;
        }

        .wallet-option {
            display: flex;
            align-items: center;
            gap: 16px;
            width: 100%;
            padding: 16px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 14px;
            cursor: pointer;
            transition: all 150ms ease;
            margin-bottom: 8px;
            text-align: left;
        }

        .wallet-option:last-child {
            margin-bottom: 0;
        }

        .wallet-option:hover {
            background: var(--bg-card-hover);
            border-color: var(--accent);
            transform: translateX(4px);
        }

        .wallet-icon {
            width: 48px;
            height: 48px;
            background: var(--bg-card);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            flex-shrink: 0;
        }

        .wallet-info {
            flex: 1;
        }

        .wallet-name {
            display: block;
            font-size: 15px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 2px;
        }

        .wallet-desc {
            display: block;
            font-size: 12px;
            color: var(--text-muted);
        }

        .wallet-arrow {
            width: 20px;
            height: 20px;
            stroke: var(--text-muted);
            flex-shrink: 0;
            transition: transform 150ms ease;
        }

        .wallet-option:hover .wallet-arrow {
            stroke: var(--accent);
            transform: translateX(4px);
        }

        .modal-footer {
            padding: 16px 32px 24px;
            text-align: center;
            border-top: 1px solid var(--border);
        }

        .modal-footer p {
            font-size: 12px;
            color: var(--text-muted);
        }

        .modal-footer a {
            color: var(--accent);
            text-decoration: none;
        }

        .modal-footer a:hover {
            text-decoration: underline;
        }

        /* ============ NFT DETAIL MODAL ============ */
        .nft-modal {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 24px;
            width: 100%;
            max-width: 900px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: modalSlide 0.3s ease;
            scrollbar-width: none;
            -ms-overflow-style: none;
        }
        
        /* ============ ARTIST NFT MODAL - ELEGANT GRADIENT ============ */
        .artist-nft-modal {
            background: linear-gradient(145deg, #16161f 0%, #0d0d14 100%);
            border: 1px solid #222233;
            border-radius: 28px;
            width: 100%;
            max-width: 950px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: modalSlide 0.3s ease;
            box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        
        .artist-nft-modal-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            min-height: 500px;
        }
        
        @media (max-width: 800px) {
            .artist-nft-modal-grid {
                grid-template-columns: 1fr;
            }
        }
        
        .artist-nft-media {
            background: linear-gradient(180deg, #1a1a28 0%, #0f0f18 100%);
            padding: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 28px 0 0 28px;
        }
        
        .artist-nft-media img,
        .artist-nft-media video {
            width: 100%;
            max-height: 500px;
            object-fit: contain;
            border-radius: 20px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        
        .artist-nft-details {
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .artist-nft-badges {
            display: flex;
            gap: 8px;
        }
        
        .artist-nft-badges .badge {
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
        }
        
        .artist-nft-badges .badge.featured {
            background: linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,170,0,0.1));
            color: #ffd700;
        }
        
        .artist-nft-badges .badge.auction {
            background: linear-gradient(135deg, rgba(255,100,50,0.2), rgba(255,50,100,0.1));
            color: #ff6b6b;
        }
        
        .artist-nft-details h2 {
            margin: 0;
            font-size: 30px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .artist-nft-desc {
            color: #888;
            line-height: 1.7;
            font-size: 15px;
            margin: 0;
        }
        
        .artist-nft-creator {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 18px 20px;
            background: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,212,170,0.05));
            border: 1px solid rgba(124,58,237,0.15);
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .artist-nft-creator:hover {
            border-color: rgba(124,58,237,0.3);
            background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(0,212,170,0.08));
        }
        
        .creator-avatar {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: linear-gradient(135deg, #7c3aed, #00d4aa);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }
        
        .creator-avatar img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .creator-info {
            flex: 1;
        }
        
        .creator-label {
            font-size: 11px;
            color: #666;
        }
        
        .creator-name {
            font-weight: 600;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .creator-arrow {
            color: #444;
            font-size: 18px;
            margin-left: auto;
        }
        
        .artist-nft-price-box {
            background: #111119;
            border: 1px solid #1f1f2f;
            border-radius: 18px;
            padding: 24px;
        }
        
        .price-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        
        .price-label {
            font-size: 12px;
            color: #555;
            margin-bottom: 6px;
        }
        
        .price-main {
            font-size: 36px;
            font-weight: 700;
            color: #00d4aa;
        }
        
        .price-usd {
            font-size: 14px;
            color: #555;
        }
        
        .auction-info {
            display: flex;
            justify-content: space-between;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #1f1f2f;
        }
        
        .auction-stat-label {
            font-size: 11px;
            color: #555;
        }
        
        .auction-stat-value {
            font-weight: 600;
            color: #fff;
        }
        
        .artist-nft-actions {
            display: flex;
            gap: 12px;
        }
        
        .artist-nft-actions button {
            flex: 1;
            padding: 18px;
            border-radius: 14px;
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            border: none;
            transition: all 0.25s;
        }
        
        .btn-buy {
            background: linear-gradient(135deg, #7c3aed, #00d4aa);
            color: white;
            box-shadow: 0 8px 25px rgba(124,58,237,0.25);
        }
        
        .btn-buy:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(124,58,237,0.35);
        }
        
        .btn-bid {
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            box-shadow: 0 8px 25px rgba(255,107,53,0.25);
        }
        
        .btn-bid:hover {
            transform: translateY(-2px);
        }
        
        .btn-offer {
            background: rgba(255,255,255,0.03);
            border: 1px solid #2a2a3a;
            color: #aaa;
        }
        
        .btn-offer:hover {
            border-color: #3a3a4a;
            color: #fff;
        }
        
        .btn-edit {
            background: rgba(255,255,255,0.03);
            border: 1px solid #2a2a3a;
            color: #aaa;
        }
        
        .btn-delete {
            background: transparent;
            border: 1px solid rgba(255,68,68,0.3);
            color: #ff4444;
        }
        
        .btn-delete:hover {
            background: rgba(255,68,68,0.1);
            border-color: #ff4444;
        }
        
        .artist-nft-meta {
            padding: 18px;
            background: rgba(255,255,255,0.02);
            border: 1px solid #1f1f2f;
            border-radius: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .meta-row {
            display: flex;
            justify-content: space-between;
        }
        
        .meta-label {
            color: #555;
            font-size: 13px;
        }
        
        .meta-value {
            font-size: 13px;
            color: #aaa;
        }
        
        .meta-value.link {
            color: #00d4aa;
            text-decoration: none;
        }
        
        .meta-value.link:hover {
            text-decoration: underline;
        }
        
        .artist-nft-share {
            text-align: center;
        }
        
        .share-btn {
            background: transparent;
            border: 1px solid #2a2a3a;
            color: #666;
            padding: 10px 20px;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .share-btn:hover {
            border-color: #00d4aa;
            color: #00d4aa;
        }

        .nft-modal::-webkit-scrollbar {
            display: none;
        }

        .nft-modal-grid {
            display: grid;
            grid-template-columns: 340px 1fr;
            align-items: start;
        }

        @media (max-width: 800px) {
            .nft-modal-grid {
                grid-template-columns: 1fr;
            }
        }

        .nft-modal-image {
            position: relative;
            background: var(--bg-surface);
            border-radius: 24px 0 0 24px;
            overflow: hidden;
        }

        .nft-modal-image img {
            width: 100%;
            height: auto;
            object-fit: cover;
            aspect-ratio: 1;
        }

        @media (max-width: 800px) {
            .nft-modal-image {
                border-radius: 24px 24px 0 0;
            }
            .nft-modal-image img {
                max-height: 350px;
            }
        }

        .nft-rarity {
            position: absolute;
            top: 16px;
            left: 16px;
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.5px;
        }

        .nft-rarity.common { background: rgba(150,150,150,0.9); color: #fff; }
        .nft-rarity.rare { background: rgba(59,130,246,0.9); color: #fff; }
        .nft-rarity.epic { background: rgba(139,92,246,0.9); color: #fff; }
        .nft-rarity.legendary { background: linear-gradient(135deg, #f59e0b, #eab308); color: #000; }

        .nft-modal-info {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .nft-modal-collection {
            font-size: 12px;
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 2px;
        }

        .nft-modal-info h2 {
            font-size: 22px;
            font-weight: 800;
            margin-bottom: 4px;
        }

        .nft-modal-owner {
            font-size: 12px;
            color: var(--text-secondary);
        }

        /* Boost Box */
        .boost-box {
            background: linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,255,136,0.02));
            border: 1px solid rgba(0,255,136,0.25);
            border-radius: 10px;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .boost-box-left {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .boost-icon {
            font-size: 16px;
        }

        .boost-main-stat {
            display: flex;
            flex-direction: column;
        }

        .boost-value {
            font-size: 18px;
            font-weight: 800;
            line-height: 1;
        }

        .boost-label {
            font-size: 9px;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        .boost-box-right {
            text-align: right;
        }

        .boost-time {
            font-size: 14px;
            font-weight: 700;
            color: var(--text-primary);
        }

        .boost-time-label {
            font-size: 9px;
            color: var(--text-muted);
        }

        /* Traits */
        .nft-traits {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
        }

        .nft-trait {
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 8px;
            text-align: center;
        }

        .trait-type {
            font-size: 8px;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 2px;
        }

        .trait-value {
            font-size: 11px;
            font-weight: 700;
            color: var(--text-primary);
        }

        .trait-rarity {
            font-size: 8px;
            color: var(--accent);
            margin-top: 1px;
        }

        /* Price Section */
        .nft-modal-price {
            padding: 12px;
            background: var(--bg-surface);
            border-radius: 12px;
        }

        .price-label {
            font-size: 10px;
            color: var(--text-muted);
            margin-bottom: 6px;
        }

        .price-options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }

        .price-option {
            padding: 10px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 8px;
            cursor: pointer;
            transition: all 150ms ease;
            text-align: center;
        }

        .price-option:hover, .price-option.active {
            border-color: var(--accent);
        }

        .price-option.active {
            background: rgba(0,255,136,0.05);
        }

        .price-token {
            font-size: 9px;
            color: var(--text-muted);
            margin-bottom: 2px;
        }

        .price-amount {
            font-size: 16px;
            font-weight: 800;
        }

        .price-usd {
            font-size: 9px;
            color: var(--text-muted);
            margin-top: 1px;
        }

        /* Actions */
        .nft-modal-actions {
            display: flex;
            gap: 10px;
        }

        .buy-now-btn {
            flex: 2;
            padding: 14px;
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .buy-now-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--glow);
        }

        .make-offer-btn {
            flex: 1;
            padding: 14px;
            background: transparent;
            color: var(--text-primary);
            border: 1px solid var(--border);
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .make-offer-btn:hover {
            border-color: var(--accent);
            color: var(--accent);
        }

        /* Activity */
        .nft-modal-activity h4 {
            font-size: 11px;
            font-weight: 700;
            margin-bottom: 8px;
            color: var(--text-muted);
        }

        .nft-activity-list {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .nft-activity-item {
            display: grid;
            grid-template-columns: 65px 80px 1fr 55px;
            gap: 6px;
            align-items: center;
            font-size: 11px;
            padding: 6px 0;
            border-bottom: 1px solid var(--border);
        }

        .nft-activity-item:last-child {
            border-bottom: none;
        }

        .activity-type {
            padding: 3px 6px;
            border-radius: 5px;
            font-weight: 600;
            font-size: 9px;
            text-align: center;
        }

        .activity-type.listed { background: rgba(0,255,136,0.15); color: var(--accent); }
        .activity-type.transfer { background: rgba(139,92,246,0.15); color: #8b5cf6; }
        .activity-type.minted { background: rgba(59,130,246,0.15); color: #3b82f6; }
        .activity-type.sale { background: rgba(255,184,0,0.15); color: var(--gold); }

        .activity-price {
            font-weight: 600;
        }

        .activity-user {
            color: var(--text-muted);
        }

        .activity-time {
            color: var(--text-muted);
            text-align: right;
        }

        /* ============ MINT PAGE ============ */
        .mint-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            max-width: 1100px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        @media (max-width: 900px) {
            .mint-container {
                grid-template-columns: 1fr;
                gap: 24px;
                padding: 20px;
            }
        }

        .mint-preview-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 20px;
            overflow: hidden;
        }

        .mint-preview-img {
            position: relative;
            aspect-ratio: 1;
        }

        .mint-preview-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: blur(20px);
            opacity: 0.5;
        }

        .mint-preview-badge {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            background: var(--bg-surface);
            border: 2px solid var(--border);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: var(--text-muted);
        }

        .mint-reveal-text {
            text-align: center;
            padding: 16px;
            font-size: 13px;
            color: var(--text-muted);
        }

        /* Recent Mints */
        .recent-mints {
            margin-top: 20px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 16px;
        }

        .recent-mints h4 {
            font-size: 14px;
            margin-bottom: 12px;
        }

        .recent-mints-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .recent-mint-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px;
            background: var(--bg-surface);
            border-radius: 10px;
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .recent-mint-item img {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            object-fit: cover;
        }

        .recent-mint-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .mint-user {
            font-size: 12px;
            font-weight: 600;
        }

        .mint-rarity {
            font-size: 9px;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 4px;
            width: fit-content;
        }

        .mint-rarity.common { background: rgba(150,150,150,0.2); color: #999; }
        .mint-rarity.rare { background: rgba(59,130,246,0.2); color: #3b82f6; }
        .mint-rarity.epic { background: rgba(139,92,246,0.2); color: #8b5cf6; }
        .mint-rarity.legendary { background: rgba(255,184,0,0.2); color: var(--gold); }

        .mint-time {
            font-size: 10px;
            color: var(--text-muted);
        }

        /* Mint Info */
        .mint-info {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .mint-live-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255,68,68,0.15);
            color: #ff4444;
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .live-dot.red {
            background: #ff4444;
            animation: pulse 1s infinite;
        }

        .mint-info h1 {
            font-size: 36px;
            font-weight: 900;
        }

        .mint-desc {
            color: var(--text-secondary);
            font-size: 14px;
            line-height: 1.5;
        }

        /* Progress */
        .mint-progress {
            background: var(--bg-surface);
            border-radius: 12px;
            padding: 16px;
        }

        .mint-progress-bar {
            height: 8px;
            background: var(--bg-card);
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 10px;
        }

        .mint-progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #ff4444, #ff6b6b);
            border-radius: 4px;
            transition: width 0.5s ease;
        }

        .mint-progress-stats {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }

        .countdown-inline {
            color: #ff4444;
            font-weight: 600;
            font-variant-numeric: tabular-nums;
        }

        /* Rarity Breakdown */
        .rarity-breakdown h4 {
            font-size: 13px;
            color: var(--text-secondary);
            margin-bottom: 10px;
        }

        .rarity-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        }

        @media (max-width: 600px) {
            .rarity-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .rarity-item {
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 12px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .rarity-tag {
            font-size: 9px;
            font-weight: 700;
            padding: 3px 6px;
            border-radius: 4px;
            align-self: center;
        }

        .rarity-tag.common { background: rgba(150,150,150,0.2); color: #999; }
        .rarity-tag.rare { background: rgba(59,130,246,0.2); color: #3b82f6; }
        .rarity-tag.epic { background: rgba(139,92,246,0.2); color: #8b5cf6; }
        .rarity-tag.legendary { background: rgba(255,184,0,0.2); color: var(--gold); }

        .rarity-chance {
            font-size: 11px;
            color: var(--text-muted);
        }

        .rarity-boost {
            font-size: 14px;
            font-weight: 800;
            color: var(--accent);
        }

        /* Mint Options */
        .mint-options h4 {
            font-size: 13px;
            color: var(--text-secondary);
            margin-bottom: 10px;
        }

        .mint-option {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            margin-bottom: 8px;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .mint-option:hover {
            border-color: var(--accent);
        }

        .mint-option.active {
            border-color: var(--accent);
            background: rgba(0,255,136,0.05);
        }

        .mint-option-badge {
            display: inline-block;
            background: var(--accent);
            color: var(--bg-void);
            font-size: 9px;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 4px;
            margin-bottom: 4px;
        }

        .mint-option-title {
            display: block;
            font-size: 15px;
            font-weight: 700;
        }

        .mint-option-req {
            display: block;
            font-size: 11px;
            color: var(--text-muted);
        }

        .mint-option-price {
            font-size: 20px;
            font-weight: 800;
        }

        .mint-option-alt {
            display: block;
            font-size: 12px;
            font-weight: 500;
            color: var(--text-secondary);
            margin-top: 2px;
        }

        .mint-option-right {
            text-align: right;
        }

        .mint-option-alts {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 6px;
            margin-top: 4px;
        }

        .mint-alt-token {
            font-size: 11px;
            font-weight: 600;
            color: var(--text-secondary);
            background: var(--bg-surface);
            padding: 3px 8px;
            border-radius: 6px;
        }

        .mint-alt-divider {
            color: var(--text-muted);
            font-size: 10px;
        }

        /* Quantity */
        .mint-quantity {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .qty-label {
            font-size: 13px;
            color: var(--text-secondary);
        }

        .qty-controls {
            display: flex;
            align-items: center;
            gap: 12px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 8px 16px;
        }

        .qty-btn {
            width: 28px;
            height: 28px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 6px;
            color: var(--text-primary);
            font-size: 18px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .qty-btn:hover {
            border-color: var(--accent);
            color: var(--accent);
        }

        .qty-value {
            font-size: 18px;
            font-weight: 700;
            min-width: 30px;
            text-align: center;
        }

        .qty-max {
            font-size: 11px;
            color: var(--text-muted);
        }

        /* Mint Button */
        .mint-btn {
            width: 100%;
            padding: 18px;
            background: linear-gradient(90deg, #ff4444, #ff6b6b);
            border: none;
            border-radius: 14px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 150ms ease;
        }

        .mint-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(255,68,68,0.4);
        }

        .mint-btn-text {
            font-size: 18px;
            font-weight: 800;
            color: white;
        }

        .mint-btn-price {
            font-size: 16px;
            font-weight: 700;
            color: white;
            opacity: 0.9;
        }

        .mint-boost-reminder {
            text-align: center;
            font-size: 12px;
            color: var(--accent);
            padding: 12px;
            background: rgba(0,255,136,0.05);
            border-radius: 10px;
        }

        /* Countdown */
        .mint-countdown {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(255,68,68,0.1);
            border: 1px solid rgba(255,68,68,0.2);
            border-radius: 12px;
            padding: 12px 16px;
        }

        .countdown-label {
            font-size: 12px;
            color: var(--text-secondary);
        }

        .countdown-timer {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .countdown-unit {
            text-align: center;
        }

        .countdown-value {
            font-size: 20px;
            font-weight: 800;
            color: #ff4444;
            font-variant-numeric: tabular-nums;
        }

        .countdown-desc {
            display: block;
            font-size: 9px;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        .countdown-sep {
            font-size: 18px;
            color: #ff4444;
            font-weight: 700;
            margin-bottom: 12px;
        }

        /* Wallet Status */
        .wallet-status {
            display: flex;
            align-items: center;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 12px 16px;
        }

        .wallet-status-item {
            flex: 1;
            text-align: center;
        }

        .ws-label {
            display: block;
            font-size: 10px;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }

        .ws-value {
            font-size: 20px;
            font-weight: 800;
        }

        .ws-max {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-muted);
        }

        .wallet-status-divider {
            width: 1px;
            height: 36px;
            background: var(--border);
            margin: 0 16px;
        }

        /* Share */
        .mint-share {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 12px 16px;
        }

        .mint-share span {
            font-size: 13px;
            font-weight: 600;
        }

        .share-buttons {
            display: flex;
            gap: 8px;
        }

        .share-btn {
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 150ms ease;
            border: none;
        }

        .share-btn.twitter {
            background: #000;
            color: #fff;
        }

        .share-btn.twitter:hover {
            background: #222;
        }

        .share-btn.copy {
            background: var(--bg-card);
            color: var(--text-primary);
            border: 1px solid var(--border);
        }

        .share-btn.copy:hover {
            border-color: var(--accent);
        }

        /* Toast Notifications */
        .toast-container {
            position: fixed;
            bottom: 100px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 9999;
        }

        .toast {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            animation: toastIn 0.3s ease, toastOut 0.3s ease 4.7s forwards;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        @keyframes toastIn {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }

        @keyframes toastOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100px); }
        }

        .toast img {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            object-fit: cover;
        }

        .toast-info {
            flex: 1;
        }

        .toast-title {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 2px;
        }

        .toast-subtitle {
            font-size: 11px;
            color: var(--text-muted);
        }

        .toast-rarity {
            font-size: 10px;
            font-weight: 700;
            padding: 4px 8px;
            border-radius: 6px;
        }

        /* ============ MAIN ============ */
        .main {
            position: relative;
            z-index: 2;
            padding-top: 56px;
            min-height: 100vh;
        }

        .page { display: none; }
        .page.active { display: block; }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* ============ HERO ============ */
        .hero {
            padding: 48px 0 32px;
            position: relative;
            background: linear-gradient(180deg, #0c0c12 0%, var(--bg-void) 100%);
        }

        .explore-hero {
            text-align: center;
        }

        .explore-hero h1 {
            font-size: 42px;
            font-weight: 900;
            letter-spacing: -2px;
            margin-bottom: 12px;
        }

        .explore-hero p {
            color: var(--text-secondary);
            font-size: 15px;
            margin-bottom: 28px;
        }

        .hero-stats-row {
            display: flex;
            justify-content: center;
            gap: 12px;
        }

        .hero-stat-pill {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 30px;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .hero-stat-pill .stat-value {
            font-size: 18px;
            font-weight: 800;
        }

        .hero-stat-pill .stat-label {
            font-size: 11px;
            color: var(--text-muted);
        }

        /* Activity Banner - auto-scrolling marquee */
        .activity-banner {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 12px 16px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 16px;
            overflow: hidden;
        }

        /* Explore Spotlight */
        .explore-spotlight {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            margin-bottom: 32px;
            min-height: 220px;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,200,200,0.05));
            border: 1px solid rgba(0,255,136,0.2);
        }

        .spotlight-bg {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 300px;
            background-size: cover;
            background-position: center;
            opacity: 0.3;
            mask-image: linear-gradient(90deg, transparent, black);
            -webkit-mask-image: linear-gradient(90deg, transparent, black);
        }

        .spotlight-content {
            position: relative;
            z-index: 1;
            padding: 32px 40px 40px;
            max-width: 600px;
        }

        .spotlight-label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(0,255,136,0.15);
            color: var(--accent);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            margin-bottom: 12px;
        }

        .spotlight-title {
            font-size: 32px;
            font-weight: 900;
            margin-bottom: 8px;
        }
        
        .foxgirls-title {
            background: linear-gradient(90deg, 
                #ff1493 0%, 
                #ff1493 45%, 
                #ffffff 50%, 
                #ff1493 55%, 
                #ff1493 100%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: hotPinkFill 3s ease-in-out infinite;
        }
        
        @keyframes hotPinkFill {
            0% { background-position: 100% 0; }
            100% { background-position: -100% 0; }
        }

        .spotlight-desc {
            color: var(--text-secondary);
            font-size: 14px;
            margin-bottom: 12px;
            max-width: 400px;
        }

        .spotlight-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 16px;
        }

        .spotlight-stat {
            font-size: 13px;
            color: var(--text-secondary);
        }

        .spotlight-stat strong {
            color: var(--text-primary);
        }

        .spotlight-btn {
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .spotlight-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--glow);
        }

        /* LP Spotlight */
        .lp-spotlight-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 32px;
            gap: 24px;
        }

        .lp-spotlight-left {
            flex: 1;
            min-width: 200px;
        }

        .lp-spotlight-stats {
            display: flex;
            gap: 16px;
            flex-shrink: 0;
        }

        .lp-fomo-stat {
            text-align: center;
            padding: 16px 20px;
            background: rgba(0,0,0,0.3);
            border-radius: 12px;
            border: 1px solid rgba(0,255,136,0.15);
            min-width: 100px;
        }

        .lp-fomo-value {
            display: block;
            font-size: 26px;
            font-weight: 900;
        }

        .lp-fomo-label {
            display: block;
            font-size: 10px;
            color: var(--text-muted);
            margin-top: 4px;
        }

        @media (max-width: 900px) {
            .lp-spotlight-content {
                flex-direction: column;
                text-align: center;
                padding: 24px;
                gap: 16px;
            }
            .lp-spotlight-stats {
                display: none;
            }
            .spotlight-slides .explore-spotlight {
                height: auto;
                min-height: 160px;
            }
            .spotlight-title {
                font-size: 26px;
            }
            .spotlight-content {
                padding: 24px;
            }
            .spotlight-bg {
                opacity: 0.15;
            }
        }

        @media (max-width: 800px) {
            .lp-spotlight-content {
                padding: 20px;
            }
            .spotlight-title {
                font-size: 24px;
            }
        }

        /* Spotlight Carousel */
        .spotlight-carousel {
            position: relative;
            margin-bottom: 32px;
        }

        .spotlight-slides {
            position: relative;
        }

        .spotlight-slides .explore-spotlight {
            display: none;
            margin-bottom: 0;
            min-height: 200px;
            height: 200px;
        }

        .spotlight-slides .explore-spotlight.active {
            display: flex;
        }

        .drop-spotlight {
            background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.03));
            border-color: rgba(139,92,246,0.2);
        }

        .spotlight-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 12px;
        }

        .spotlight-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--border);
            border: none;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .spotlight-dot.active {
            background: var(--accent);
            width: 24px;
            border-radius: 4px;
        }

        .spotlight-dot:hover {
            background: var(--text-secondary);
        }

        .activity-banner-header {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 600;
            color: var(--text-secondary);
            flex-shrink: 0;
            padding-right: 16px;
            border-right: 1px solid var(--border);
        }

        .activity-ticker-wrapper {
            flex: 1;
            overflow: hidden;
            mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
        }

        .activity-ticker {
            display: flex;
            gap: 32px;
            animation: tickerScroll 50s linear infinite;
            width: max-content;
        }

        .activity-ticker:hover {
            animation-play-state: paused;
        }
        
        .ticker-item-v2 {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 6px 16px 6px 6px;
            background: rgba(255,255,255,0.05);
            border-radius: 8px;
            margin-right: 12px;
            white-space: nowrap;
        }
        
        .ticker-thumb {
            width: 36px;
            height: 36px;
            border-radius: 6px;
            overflow: hidden;
            flex-shrink: 0;
        }
        
        .ticker-thumb img,
        .ticker-thumb video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .ticker-info {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        
        .ticker-type {
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }
        
        .ticker-type.listed {
            color: var(--teal);
        }
        
        .ticker-type.auction {
            color: #ff6b35;
        }
        
        .ticker-type.sold {
            color: #ffd700;
        }
        
        .ticker-type.bid {
            color: var(--purple);
        }
        
        .ticker-name {
            font-size: 12px;
            font-weight: 500;
            max-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .ticker-price {
            font-size: 12px;
            font-weight: 600;
            color: var(--teal);
        }

        @keyframes tickerScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .ticker-item {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .ticker-item img {
            width: 32px;
            height: 32px;
            border-radius: 6px;
            object-fit: cover;
        }

        .ticker-info {
            display: flex;
            flex-direction: column;
        }

        .ticker-type {
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
        }

        .ticker-type.staked { color: var(--purple); }
        .ticker-type.sold { color: var(--accent); }
        .ticker-type.listed { color: var(--gold); }

        .ticker-name {
            font-size: 11px;
            font-weight: 600;
            white-space: nowrap;
        }

        .ticker-price {
            font-size: 11px;
            color: var(--accent);
            font-weight: 600;
            white-space: nowrap;
        }

        /* Section styling - cleaner */
        .section-block {
            margin-bottom: 40px;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .section-title {
            font-size: 18px;
            font-weight: 700;
        }

        .view-all {
            font-size: 13px;
            color: var(--text-muted);
            cursor: pointer;
        }

        .view-all:hover {
            color: var(--accent);
        }

        /* LP CTA Banner */
        .lp-cta-banner {
            background: linear-gradient(135deg, rgba(0,255,136,0.08), rgba(0,255,136,0.02));
            border: 1px solid rgba(0,255,136,0.15);
            border-radius: 16px;
            padding: 24px 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }

        .lp-cta-content h3 {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .lp-cta-content p {
            font-size: 13px;
            color: var(--text-secondary);
        }

        .lp-cta-btn {
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .lp-cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--accent-glow);
        }

        @media (max-width: 700px) {
            .explore-hero h1 { font-size: 28px; }
            .hero-stats-row { flex-wrap: wrap; }
            .lp-cta-banner { flex-direction: column; gap: 16px; text-align: center; }
        }

        .hero-text h1 {
            font-size: clamp(28px, 4vw, 42px);
            font-weight: 900;
            line-height: 1.0;
            letter-spacing: -2px;
            margin-bottom: 14px;
        }

        .hero-text h1 .glow {
            background: linear-gradient(135deg, var(--accent), var(--teal));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-text p {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
            max-width: 380px;
            margin-bottom: 24px;
        }

        /* LP Card - the main feature */
        .lp-card {
            background: linear-gradient(145deg, #0a1a14, #0a1210);
            border: 1px solid rgba(0,255,136,0.15);
            border-radius: 20px;
            padding: 28px;
            position: relative;
            overflow: hidden;
            transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
            transform-style: preserve-3d;
            transform: translateY(-8px);
            box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
        }

        .lp-card:hover {
            transform: translateY(-14px) rotateX(2deg) rotateY(-1deg);
            box-shadow: 0 30px 60px -20px rgba(0,255,136,0.2);
        }

        .lp-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .lp-badge {
            display: inline-block;
            padding: 6px 14px;
            background: var(--accent);
            color: var(--bg-void);
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 1px;
            border-radius: 999px;
            margin-bottom: 16px;
        }

        .lp-title {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }

        .lp-title span {
            color: var(--accent);
            font-style: italic;
        }

        .lp-desc {
            font-size: 12px;
            color: var(--text-secondary);
            margin-bottom: 20px;
            line-height: 1.5;
        }

        .lp-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 20px;
        }

        .lp-stat {
            text-align: center;
        }

        .lp-stat-value {
            font-size: 18px;
            font-weight: 800;
            color: var(--accent);
        }

        .lp-stat-value.gold { color: var(--gold); }

        .lp-stat-label {
            font-size: 9px;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }

        /* Lock Tiers */
        .lock-tiers {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            margin-bottom: 20px;
        }

        .lock-tier {
            padding: 12px 8px;
            border-radius: 10px;
            border: 1px solid var(--border-subtle);
            background: var(--bg-card);
            text-align: center;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .lock-tier:hover {
            border-color: var(--accent);
        }

        .lock-tier.active {
            border-color: var(--accent);
            background: rgba(0,255,136,0.08);
        }

        .lock-tier-days {
            font-size: 11px;
            color: var(--text-secondary);
            margin-bottom: 2px;
        }

        .lock-tier-mult {
            font-size: 16px;
            font-weight: 800;
            color: var(--accent);
        }

        .lp-cta {
            width: 100%;
            padding: 14px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 700;
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 150ms ease;
        }

        .lp-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--accent-glow);
        }

        .lp-note {
            text-align: center;
            font-size: 10px;
            color: var(--text-muted);
            margin-top: 12px;
        }

        .lp-note a {
            color: var(--accent);
            text-decoration: none;
        }

        .hero-stats {
            display: flex;
            gap: 24px;
        }

        .hero-stat {
            padding-left: 10px;
            border-left: 2px solid var(--accent);
        }

        .hero-stat-value {
            font-size: 22px;
            font-weight: 800;
        }

        .hero-stat-label {
            font-size: 9px;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* Featured Card */
        .featured-card {
            background: var(--bg-card);
            border-radius: 14px;
            padding: 4px;
            border: 1px solid var(--border-subtle);
            position: relative;
            transition: all 250ms ease;
        }

        .featured-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 30px 60px -20px rgba(0,0,0,0.7);
        }

        .featured-card::before {
            content: '';
            position: absolute;
            inset: -1px;
            border-radius: 15px;
            padding: 1px;
            background: linear-gradient(135deg, var(--purple), transparent 40%, var(--accent));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0.22;
        }

        .featured-image {
            aspect-ratio: 1;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
        }

        .featured-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .featured-card:hover .featured-image img {
            transform: scale(1.05);
        }

        .featured-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            padding: 4px 10px;
            border-radius: 5px;
            font-size: 10px;
            font-weight: 700;
            background: var(--purple);
            color: white;
        }
        
        .sold-badge {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.85);
            color: #ff4444;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 1px;
            border: 2px solid #ff4444;
            z-index: 5;
        }
        
        .nft-card.sold .nft-card-media {
            opacity: 0.5;
        }

        .featured-info {
            padding: 12px;
        }

        .featured-collection {
            font-size: 9px;
            color: var(--purple);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 3px;
        }

        .featured-title {
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .featured-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .featured-price {
            font-size: 16px;
            font-weight: 800;
            color: var(--accent);
        }

        .featured-btn {
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 700;
            background: var(--purple);
            color: white;
            border: none;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .featured-btn:hover {
            transform: scale(1.03);
        }

        /* ============ SECTIONS ============ */
        .section {
            padding: 20px 0;
        }

        .section.tight {
            padding: 16px 0;
        }

        .section.spacious {
            padding: 28px 0;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(0,255,136,0.06);
        }

        .section-title {
            font-size: 14px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .section-icon {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
        }

        .section-icon svg {
            width: 16px;
            height: 16px;
            stroke-width: 2;
        }

        .live-tag {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 3px 8px;
            background: var(--red-glow);
            border-radius: 20px;
            font-size: 9px;
            font-weight: 700;
            color: var(--red);
            margin-left: 8px;
        }

        .live-tag .dot {
            width: 5px;
            height: 5px;
            background: var(--red);
            border-radius: 50%;
            animation: pulse 1s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }

        .view-all {
            font-size: 11px;
            color: var(--accent);
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .view-all svg {
            width: 12px;
            height: 12px;
            transition: transform 150ms ease;
        }

        .view-all:hover svg {
            transform: translateX(3px);
        }

        /* ============ LIVE AUCTIONS ============ */
        .auctions-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 12px;
        }

        .auction-card {
            background: var(--bg-card);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(139,92,246,0.15);
            cursor: pointer;
            transition: all 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            box-shadow: 0 8px 20px -8px rgba(0,0,0,0.5);
        }

        .auction-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 60%, rgba(139,92,246,0.08) 100%);
            pointer-events: none;
        }

        .auction-card:hover {
            transform: translateY(-4px);
            border-color: var(--purple);
            box-shadow: 0 16px 40px -15px rgba(139,92,246,0.3);
        }

        .auction-image {
            aspect-ratio: 1;
            overflow: hidden;
            position: relative;
        }

        .auction-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .auction-timer {
            position: absolute;
            bottom: 8px;
            left: 8px;
            right: 8px;
            background: rgba(0,0,0,0.85);
            backdrop-filter: blur(10px);
            padding: 8px 10px;
            border-radius: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .auction-timer-label {
            font-size: 9px;
            color: var(--text-muted);
        }

        .auction-timer-value {
            font-size: 13px;
            font-weight: 700;
            color: var(--red);
            font-family: 'SF Mono', monospace;
        }

        .auction-info {
            padding: 12px;
            position: relative;
            z-index: 1;
        }

        .auction-title {
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 3px;
        }

        .auction-artist {
            font-size: 11px;
            color: var(--purple);
            margin-bottom: 8px;
        }

        .auction-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .auction-bid {
            font-size: 14px;
            font-weight: 700;
            color: var(--accent);
        }

        .auction-bids {
            font-size: 10px;
            color: var(--text-muted);
        }

        /* ============ COLLECTIONS SCROLL ============ */
        .scroll-container {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding: 4px 0;
            margin: 0 -20px;
            padding-left: 20px;
            padding-right: 20px;
            scrollbar-width: none;
        }

        .scroll-container::-webkit-scrollbar { display: none; }

        .collection-card {
            flex-shrink: 0;
            width: 220px;
            background: var(--bg-card);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border);
            cursor: pointer;
            transition: all 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            box-shadow: 0 8px 20px -8px rgba(0,0,0,0.5);
        }

        .collection-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 60%;
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%);
            pointer-events: none;
            border-radius: 12px 12px 0 0;
        }

        .collection-card:hover {
            border-color: var(--border-hover);
            transform: translateY(-4px);
            box-shadow: 0 16px 32px -12px rgba(0,0,0,0.6);
        }

        .collection-image {
            height: 140px;
            overflow: hidden;
            position: relative;
        }

        .collection-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .collection-card:hover .collection-image img {
            transform: scale(1.05);
        }

        .collection-badge {
            position: absolute;
            bottom: 6px;
            left: 6px;
            padding: 3px 6px;
            background: var(--accent);
            color: var(--bg-void);
            font-size: 8px;
            font-weight: 700;
            border-radius: 3px;
        }

        .collection-info {
            padding: 10px;
        }

        .collection-name {
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 3px;
        }

        .collection-meta {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
        }

        .collection-items { color: var(--text-muted); }
        .collection-floor { color: var(--accent); font-weight: 600; }

        /* ============ NFT GRID ============ */
        .nft-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 10px;
        }

        .nft-card {
            background: var(--bg-card);
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid var(--border);
            cursor: pointer;
            transition: all 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            box-shadow: 0 8px 20px -8px rgba(0,0,0,0.6);
            transform-style: preserve-3d;
        }

        .nft-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%);
            pointer-events: none;
            border-radius: 10px 10px 0 0;
        }

        .nft-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 32px -12px rgba(0,0,0,0.7), 0 0 20px -8px var(--accent-glow);
        }

        .nft-card::before {
            content: '';
            position: absolute;
            inset: -1px;
            border-radius: 11px;
            padding: 1px;
            background: linear-gradient(135deg, var(--accent), var(--purple));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 180ms ease;
        }

        .nft-card:hover::before { opacity: 1; }
        .nft-card:hover {
            transform: translateY(-3px);
        }
        
        .nft-card-media {
            aspect-ratio: 1 / 1;
            width: 100%;
            overflow: hidden;
            position: relative;
            background: var(--bg-void);
        }
        
        .nft-card-media img,
        .nft-card-media video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        
        .nft-card-info {
            padding: 12px;
        }
        
        .nft-card-info h4 {
            margin: 0 0 4px 0;
            font-size: 14px;
            line-height: 1.3;
        }
        
        .nft-card-info .nft-price {
            margin: 0;
            color: var(--teal);
            font-weight: 600;
            font-size: 13px;
        }
        
        .video-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
        }
        
        .nft-delete-btn {
            position: absolute;
            top: 8px;
            left: 8px;
            background: rgba(255,0,0,0.8);
            color: white;
            border: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
            line-height: 1;
            opacity: 0;
            transition: opacity 0.2s;
        }
        
        .nft-card:hover .nft-delete-btn {
            opacity: 1;
        }
        
        .nft-delete-btn:hover {
            background: red;
        }
        
        .bulk-action-btn {
            background: var(--bg-surface);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 13px;
            transition: all 0.2s;
        }
        
        .bulk-action-btn:hover {
            border-color: var(--teal);
            color: var(--teal);
        }
        
        .bulk-action-btn.active {
            background: var(--teal);
            color: #000;
            border-color: var(--teal);
        }
        
        .nft-card.selectable {
            cursor: pointer;
        }
        
        .nft-card.selected {
            border: 2px solid var(--teal);
            box-shadow: 0 0 20px rgba(0,212,170,0.3);
        }
        
        .nft-card .select-check {
            position: absolute;
            top: 8px;
            left: 8px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: rgba(0,0,0,0.5);
            border: 2px solid white;
            display: none;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
        }
        
        .nft-card.selectable .select-check {
            display: flex;
        }
        
        .nft-card.selected .select-check {
            background: var(--teal);
            border-color: var(--teal);
        }
        
        .auction-badge {
            position: absolute;
            bottom: 8px;
            left: 8px;
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: 600;
        }
        
        .featured-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            background: linear-gradient(135deg, #ffd700, #ffaa00);
            color: #000;
            padding: 4px 6px;
            border-radius: 4px;
            font-size: 12px;
        }
        
        .nft-card.featured {
            border: 2px solid #ffd700;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }
        
        .nft-card-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 4px;
        }
        
        .nft-time {
            font-size: 11px;
            color: var(--text-dim);
        }
        
        .nft-card-artist {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--text-dim);
            margin: 4px 0;
        }
        
        .artist-mini-avatar {
            font-size: 14px;
        }

        .nft-image {
            aspect-ratio: 1;
            overflow: hidden;
            position: relative;
        }

        .nft-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .nft-badge {
            position: absolute;
            top: 6px;
            padding: 3px 6px;
            border-radius: 3px;
            font-size: 8px;
            font-weight: 700;
        }

        .nft-badge.badge-3d { right: 6px; background: var(--accent); color: var(--bg-void); }
        .nft-badge.badge-live { left: 6px; background: var(--red); color: white; }

        .nft-info {
            padding: 10px;
        }

        .nft-collection {
            font-size: 8px;
            color: var(--purple);
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 2px;
        }

        .nft-name {
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .nft-footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .nft-price-label { font-size: 8px; color: var(--text-muted); }
        .nft-price { font-size: 13px; font-weight: 700; color: var(--accent); }

        /* ============ TABS ============ */
        .tabs {
            display: flex;
            gap: 4px;
            margin-bottom: 14px;
            flex-wrap: wrap;
        }

        .tab {
            padding: 6px 12px;
            border-radius: 5px;
            font-size: 11px;
            font-weight: 600;
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: var(--text-muted);
            cursor: pointer;
            transition: all 120ms ease;
        }

        .tab:hover { border-color: var(--border-subtle); color: var(--text-secondary); }
        .tab.active { background: var(--accent); border-color: var(--accent); color: var(--bg-void); }

        /* ============ STAKING PAGE - CLEAN ============ */
        .staking-hero {
            padding: 40px 0 24px;
            text-align: center;
            background: linear-gradient(180deg, #0c0c12 0%, var(--bg-void) 100%);
        }

        .staking-hero h1 {
            font-size: 36px;
            font-weight: 900;
            letter-spacing: -1.5px;
            margin-bottom: 8px;
        }

        .staking-hero p {
            color: var(--text-secondary);
            font-size: 14px;
        }

        /* Stats Row */
        .staking-stats-row {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 32px;
            flex-wrap: wrap;
        }

        .staking-stat-pill {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 16px 24px;
            text-align: center;
            min-width: 120px;
        }

        .staking-stat-pill.highlight {
            border-color: rgba(0,255,136,0.3);
            background: rgba(0,255,136,0.05);
        }

        .stat-big {
            display: block;
            font-size: 24px;
            font-weight: 800;
        }

        /* Staking Card */
        .staking-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 20px;
        }

        .staking-card-header {
            margin-bottom: 20px;
        }

        .staking-card-header h2 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .card-subtitle {
            font-size: 13px;
            color: var(--text-secondary);
        }

        .fee-badge {
            background: var(--bg-surface);
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 11px;
            color: var(--text-muted);
            float: right;
            margin-top: -24px;
        }

        /* Lock Tiers */
        .lock-tier-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-bottom: 20px;
        }

        .lock-tier-option {
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 14px;
            text-align: center;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .lock-tier-option:hover {
            border-color: rgba(0,255,136,0.3);
        }

        .lock-tier-option.active {
            border-color: var(--accent);
            background: rgba(0,255,136,0.08);
        }

        .tier-label {
            display: block;
            font-size: 12px;
            color: var(--text-secondary);
            margin-bottom: 4px;
        }

        .tier-mult {
            font-size: 20px;
            font-weight: 800;
            color: var(--accent);
        }

        /* Step Labels */
        .step-label {
            font-size: 12px;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 12px;
            margin-top: 20px;
        }

        .step-label:first-of-type {
            margin-top: 0;
        }

        /* Deposit Section */
        .deposit-section {
            margin-bottom: 16px;
        }

        .deposit-inputs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 16px;
        }

        .deposit-input-group {
            margin-bottom: 0;
        }

        .deposit-input-group label {
            display: block;
            font-size: 11px;
            color: var(--text-muted);
            margin-bottom: 8px;
            text-transform: uppercase;
        }

        .deposit-input-row, .swap-input-row {
            display: flex;
            align-items: center;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 12px 14px;
        }

        .deposit-input-row input, .swap-input-row input {
            flex: 1;
            background: transparent;
            border: none;
            color: var(--text-primary);
            font-size: 18px;
            font-weight: 600;
            outline: none;
        }

        .token-label {
            font-size: 14px;
            font-weight: 700;
            color: var(--text-secondary);
        }

        .token-label.pond {
            color: var(--accent);
        }

        .deposit-info {
            display: flex;
            justify-content: space-between;
            margin-top: 8px;
            font-size: 11px;
            color: var(--text-muted);
        }

        .pond-ratio {
            color: var(--accent);
            font-weight: 600;
        }

        .max-btn {
            background: rgba(0,255,136,0.15);
            color: var(--accent);
            border: none;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: 700;
            cursor: pointer;
        }

        @media (max-width: 600px) {
            .deposit-inputs-grid {
                grid-template-columns: 1fr;
            }
        }

        .deposit-btn {
            width: 100%;
            padding: 14px;
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .deposit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--accent-glow);
        }

        .card-note {
            font-size: 11px;
            color: var(--text-muted);
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid var(--border);
        }

        /* Swap Section */
        .swap-section {
            margin-bottom: 16px;
        }

        .swap-field {
            margin-bottom: 8px;
        }

        .swap-field label {
            display: block;
            font-size: 10px;
            color: var(--text-muted);
            margin-bottom: 6px;
        }

        .swap-input-row select {
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: var(--text-primary);
            padding: 6px 10px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
        }

        .swap-arrow {
            text-align: center;
            color: var(--text-muted);
            padding: 4px 0;
        }

        .swap-btn {
            width: 100%;
            padding: 14px;
            background: var(--purple);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            margin-top: 8px;
            transition: all 150ms ease;
        }

        .swap-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--purple-glow);
        }

        .external-link {
            font-size: 12px;
            color: var(--text-muted);
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid var(--border);
        }

        .external-link a {
            color: var(--accent);
            text-decoration: none;
            margin-left: 8px;
        }

        /* NFT Staking Banner */
        .nft-staking-banner {
            background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.03));
            border: 1px solid rgba(139,92,246,0.2);
            border-radius: 14px;
            padding: 20px 24px;
            margin-bottom: 28px;
        }

        .nft-staking-banner h3 {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .nft-staking-banner p {
            font-size: 13px;
            color: var(--text-secondary);
            margin-bottom: 4px;
        }

        .nft-staking-banner p.muted {
            color: var(--text-muted);
            font-size: 12px;
        }

        .pools-title {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 16px;
        }

        /* Vault Section (Songbird Only) */
        .vault-section {
            margin-top: 32px;
            padding-top: 32px;
            border-top: 1px solid var(--border);
        }

        .vault-section.hidden, .hidden {
            display: none !important;
        }

        .vault-card {
            background: linear-gradient(135deg, rgba(255,184,0,0.08), rgba(255,184,0,0.02));
            border: 1px solid rgba(255,184,0,0.2);
            border-radius: 16px;
            padding: 24px;
        }

        .vault-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .vault-icon {
            font-size: 28px;
        }

        .vault-title-group h3 {
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 2px;
        }

        .vault-badge {
            background: var(--gold);
            color: var(--bg-void);
            padding: 2px 8px;
            border-radius: 6px;
            font-size: 9px;
            font-weight: 700;
        }

        .vault-desc {
            color: var(--text-secondary);
            font-size: 13px;
            margin-bottom: 16px;
            line-height: 1.5;
        }

        .vault-stats {
            display: flex;
            gap: 24px;
            margin-bottom: 16px;
        }

        .vault-stat {
            text-align: center;
        }

        .vault-stat-value {
            display: block;
            font-size: 20px;
            font-weight: 800;
        }

        .vault-stat-label {
            font-size: 10px;
            color: var(--text-muted);
        }

        .vault-input-row {
            display: flex;
            align-items: center;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 12px 14px;
            margin-bottom: 8px;
        }

        .vault-input-row input {
            flex: 1;
            background: transparent;
            border: none;
            color: var(--text-primary);
            font-size: 18px;
            font-weight: 600;
            outline: none;
        }

        .vault-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            font-size: 11px;
            color: var(--text-muted);
        }

        .vault-deposit-btn {
            width: 100%;
            padding: 14px;
            background: var(--gold);
            color: var(--bg-void);
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .vault-deposit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255,184,0,0.3);
        }

        .vault-airdrop-banner {
            background: linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,200,255,0.05));
            border: 1px solid rgba(0,255,136,0.2);
            border-radius: 12px;
            padding: 14px;
            margin-bottom: 16px;
        }

        .airdrop-title {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--accent);
        }

        .airdrop-items {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .airdrop-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            background: var(--bg-surface);
            border-radius: 8px;
        }

        .airdrop-name {
            font-size: 13px;
            font-weight: 600;
        }

        .airdrop-status {
            font-size: 10px;
            font-weight: 700;
            padding: 4px 8px;
            border-radius: 6px;
            text-transform: uppercase;
        }

        .airdrop-status.upcoming {
            background: rgba(255,184,0,0.15);
            color: var(--gold);
        }

        .airdrop-status.live {
            background: rgba(0,255,136,0.15);
            color: var(--accent);
        }

        .vault-warning {
            background: rgba(255,68,68,0.1);
            border: 1px solid rgba(255,68,68,0.2);
            border-radius: 10px;
            padding: 12px;
            font-size: 12px;
            color: #ff6b6b;
            margin-bottom: 16px;
        }

        .vault-collections {
            margin-bottom: 16px;
        }

        .vault-collection-label {
            display: block;
            font-size: 11px;
            color: var(--text-muted);
            margin-bottom: 8px;
        }

        .vault-collection-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .vault-tag {
            background: var(--bg-surface);
            border: 1px solid var(--border);
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 600;
        }

        /* Staking Pools */
        .staking-pools {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 16px;
        }

        .pool-card {
            background: var(--bg-card);
            border-radius: 14px;
            border: 1px solid var(--border);
            overflow: hidden;
        }

        .pool-header {
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid var(--border);
        }

        .pool-icon {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            overflow: hidden;
        }

        .pool-icon img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .pool-title h3 {
            font-size: 15px;
            font-weight: 700;
        }

        .pool-title p {
            font-size: 11px;
            color: var(--text-muted);
        }

        .pool-badge {
            margin-left: auto;
            padding: 4px 10px;
            background: var(--accent-glow);
            color: var(--accent);
            font-size: 10px;
            font-weight: 700;
            border-radius: 20px;
        }

        .pool-stats {
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .pool-stat {
            text-align: center;
        }

        .pool-stat-value {
            font-size: 16px;
            font-weight: 700;
            color: var(--accent);
        }

        .pool-stat-label {
            font-size: 9px;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        .pool-actions {
            padding: 0 16px 16px;
            display: flex;
            gap: 8px;
        }

        .pool-btn {
            flex: 1;
            padding: 10px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .pool-btn.stake { background: var(--accent); color: var(--bg-void); }
        .pool-btn.unstake { background: var(--bg-surface); color: var(--text-secondary); }

        /* ============ ARTISTS PAGE ============ */
        .artists-hero {
            padding: 40px 0 24px;
            text-align: center;
        }

        .artists-hero h1 {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 8px;
        }

        .artists-hero p {
            color: var(--text-secondary);
            font-size: 13px;
        }

        .artists-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 16px;
        }

        .artist-card {
            background: var(--bg-card);
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid var(--border);
            cursor: pointer;
            transition: all 200ms ease;
        }

        .artist-card:hover {
            border-color: var(--teal);
            transform: translateY(-3px);
        }

        .artist-banner {
            height: 80px;
            position: relative;
            overflow: hidden;
        }

        .artist-banner img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .artist-banner-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 3px 8px;
            border-radius: 20px;
            font-size: 9px;
            font-weight: 700;
        }

        .artist-banner-badge.featured { background: var(--teal); color: var(--bg-void); }
        .artist-banner-badge.hot { background: var(--red); color: white; }
        .artist-banner-badge.promo { background: var(--gold); color: var(--bg-void); }

        .artist-avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            border: 3px solid var(--bg-card);
            position: absolute;
            bottom: -28px;
            left: 16px;
            overflow: hidden;
        }

        .artist-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .artist-content {
            padding: 36px 16px 16px;
        }

        .artist-name {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 2px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .verified-badge {
            width: 14px;
            height: 14px;
            background: var(--teal);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8px;
        }

        .artist-style {
            font-size: 11px;
            color: var(--teal);
            margin-bottom: 8px;
        }

        .artist-bio {
            font-size: 12px;
            color: var(--text-secondary);
            line-height: 1.5;
            margin-bottom: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .artist-stats {
            display: flex;
            gap: 16px;
            font-size: 11px;
        }

        .artist-stats span { color: var(--text-muted); }
        .artist-stats strong { color: var(--text-primary); }

        /* ============ PREMIUM ARTIST STOREFRONT ============ */
        .artist-banner {
            height: 280px;
            background-size: cover;
            background-position: center;
            position: relative;
        }

        .artist-banner-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 0%, var(--bg-void) 100%);
        }

        .artist-profile-section {
            margin-top: -100px;
            position: relative;
            z-index: 10;
            padding-bottom: 32px;
        }

        .artist-profile-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 32px;
            display: grid;
            grid-template-columns: auto 1fr auto auto;
            gap: 24px;
            align-items: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        .artist-avatar-large {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            border: 4px solid var(--bg-card);
        }

        .artist-avatar-large.emoji-avatar {
            background: #1a1a2e;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .artist-avatar-large.emoji-avatar span {
            font-size: 64px;
        }

        .artist-avatar-large img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }

        .verified-ring {
            position: absolute;
            bottom: 4px;
            right: 4px;
            width: 28px;
            height: 28px;
            background: var(--teal);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            border: 3px solid var(--bg-card);
            color: var(--bg-void);
        }

        .artist-profile-name {
            font-size: 32px;
            font-weight: 900;
            margin-bottom: 4px;
        }

        .artist-profile-style {
            font-size: 14px;
            color: var(--purple);
            font-weight: 600;
            margin-bottom: 12px;
        }

        .artist-profile-tagline {
            font-size: 14px;
            color: var(--purple);
            font-weight: 600;
            margin-bottom: 8px;
        }

        .artist-profile-bio {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
            max-width: 400px;
            margin-bottom: 12px;
        }

        .artist-socials {
            display: flex;
            gap: 8px;
        }

        .artist-social {
            width: 36px;
            height: 36px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 16px;
            transition: all 150ms ease;
        }

        .artist-social:hover {
            background: var(--bg-card-hover);
            border-color: var(--purple);
        }

        .artist-profile-stats {
            display: flex;
            gap: 16px;
        }

        .artist-stat-box {
            text-align: center;
            padding: 12px 20px;
            background: var(--bg-surface);
            border-radius: 12px;
            min-width: 80px;
        }

        .artist-stat-value {
            display: block;
            font-size: 20px;
            font-weight: 800;
        }

        .artist-stat-label {
            font-size: 10px;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        .artist-actions {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .artist-tip-btn {
            padding: 12px 24px;
            background: linear-gradient(135deg, var(--gold), #e68a00);
            color: var(--bg-void);
            border: none;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .artist-tip-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255,184,0,0.3);
        }

        .artist-follow-btn {
            padding: 12px 24px;
            background: var(--purple);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .artist-follow-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--purple-glow);
        }

        /* Content Grid */
        .artist-content-grid {
            display: grid;
            grid-template-columns: 1fr 320px;
            gap: 24px;
            padding-bottom: 40px;
        }

        .artist-main {
            min-width: 0;
        }

        /* Announcement */
        .artist-announcement {
            background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.03));
            border: 1px solid rgba(139,92,246,0.2);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 24px;
        }

        .announcement-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
        }

        .announcement-icon {
            font-size: 18px;
        }

        .announcement-title {
            font-size: 13px;
            font-weight: 700;
            color: var(--purple);
        }

        .announcement-time {
            font-size: 11px;
            color: var(--text-muted);
            margin-left: auto;
        }

        .announcement-text {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
        }

        /* Artist Tabs */
        .artist-tabs {
            display: flex;
            gap: 8px;
            margin-bottom: 20px;
            border-bottom: 1px solid var(--border);
            padding-bottom: 16px;
        }

        .artist-tab {
            padding: 10px 20px;
            background: transparent;
            border: 1px solid var(--border);
            color: var(--text-secondary);
            border-radius: 10px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .artist-tab.active {
            background: var(--purple);
            border-color: var(--purple);
            color: white;
        }

        /* Sidebar */
        .artist-sidebar {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .artist-activity-card, .artist-collectors-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 20px;
        }

        .sidebar-card-title {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .artist-activity-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .artist-activity-item {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .activity-icon {
            width: 32px;
            height: 32px;
            background: var(--bg-surface);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }

        .activity-icon.sale { background: rgba(0,255,136,0.15); }
        .activity-icon.tip { background: rgba(255,184,0,0.15); }
        .activity-icon.upload { background: rgba(139,92,246,0.15); }
        .activity-icon.follow { background: rgba(0,200,200,0.15); }

        .activity-details {
            flex: 1;
            min-width: 0;
        }

        .activity-event {
            display: block;
            font-size: 12px;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .activity-amount {
            display: block;
            font-size: 11px;
            color: var(--accent);
        }

        .activity-ago {
            font-size: 10px;
            color: var(--text-muted);
        }

        /* Top Collectors */
        .top-collectors-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .collector-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px;
            background: var(--bg-surface);
            border-radius: 10px;
        }

        .collector-rank {
            width: 20px;
            font-size: 12px;
            font-weight: 700;
            color: var(--text-muted);
        }

        .collector-rank.gold { color: #FFD700; }
        .collector-rank.silver { color: #C0C0C0; }
        .collector-rank.bronze { color: #CD7F32; }

        .collector-avatar {
            width: 28px;
            height: 28px;
            background: var(--bg-card);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }

        .collector-info {
            flex: 1;
        }

        .collector-name {
            display: block;
            font-size: 12px;
            font-weight: 600;
        }

        .collector-count {
            display: block;
            font-size: 10px;
            color: var(--text-muted);
        }

        @media (max-width: 1000px) {
            .artist-profile-card {
                grid-template-columns: 1fr;
                text-align: center;
            }
            .artist-avatar-large { margin: 0 auto; }
            .artist-profile-info { text-align: center; }
            .artist-profile-bio { max-width: 100%; }
            .artist-socials { justify-content: center; }
            .artist-profile-stats { justify-content: center; }
            .artist-actions { flex-direction: row; justify-content: center; }
            .artist-content-grid { grid-template-columns: 1fr; }
        }

        /* ============ PAGE HEROES ============ */
        .page-hero {
            padding: 40px 0 32px;
            background: linear-gradient(180deg, #0c0c12 0%, var(--bg-void) 100%);
            position: relative;
            overflow: hidden;
        }

        .page-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 600px;
            height: 300px;
            background: radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%);
            pointer-events: none;
        }

        .collections-hero::before {
            background: radial-gradient(ellipse, rgba(0,255,136,0.08) 0%, transparent 70%);
        }

        .artists-hero::before {
            background: radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%);
        }

        .my-nfts-hero::before {
            background: radial-gradient(ellipse, rgba(255,184,0,0.06) 0%, transparent 70%);
        }

        .page-hero-content {
            text-align: center;
            margin-bottom: 24px;
        }

        .hero-badge {
            display: inline-block;
            background: rgba(139,92,246,0.15);
            color: var(--purple);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            margin-bottom: 12px;
        }

        .page-hero h1 {
            font-size: 32px;
            font-weight: 900;
            letter-spacing: -1px;
            margin-bottom: 8px;
        }

        .page-hero p {
            color: var(--text-secondary);
            font-size: 14px;
        }

        .hero-stats-mini {
            display: flex;
            justify-content: center;
            gap: 24px;
        }

        .mini-stat {
            text-align: center;
        }

        .mini-value {
            display: block;
            font-size: 24px;
            font-weight: 800;
        }

        .mini-label {
            font-size: 11px;
            color: var(--text-muted);
        }

        /* My NFTs Profile Header */
        .my-profile-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-bottom: 24px;
        }

        .my-avatar {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, var(--bg-card), var(--bg-surface));
            border: 2px solid var(--border);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
        }

        .my-profile-info h1 {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 2px;
        }

        .wallet-address {
            font-size: 12px;
            color: var(--text-muted);
            font-family: monospace;
        }

        /* My NFTs Dashboard Grid */
        .my-dashboard-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            margin-bottom: 32px;
        }

        .dashboard-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 20px;
        }

        .dashboard-card-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
        }

        .dashboard-icon {
            font-size: 18px;
        }

        .dashboard-card-header h4 {
            font-size: 12px;
            color: var(--text-muted);
            font-weight: 600;
        }

        .portfolio-value-main {
            display: flex;
            align-items: baseline;
            gap: 6px;
            margin-bottom: 4px;
        }

        .portfolio-amount {
            font-size: 28px;
            font-weight: 800;
        }

        .portfolio-token {
            font-size: 14px;
            color: var(--text-muted);
        }

        .portfolio-change {
            font-size: 12px;
            color: var(--text-muted);
        }

        .portfolio-change.positive {
            color: var(--accent);
        }

        .your-rank-display {
            margin-bottom: 8px;
        }

        .rank-number {
            font-size: 32px;
            font-weight: 900;
            color: var(--gold);
        }

        .rank-category {
            display: block;
            font-size: 11px;
            color: var(--text-muted);
        }

        .rank-progress {
            height: 4px;
            background: var(--bg-surface);
            border-radius: 2px;
            margin-bottom: 8px;
            overflow: hidden;
        }

        .rank-progress-bar {
            height: 100%;
            background: var(--gold);
            border-radius: 2px;
        }

        .rank-next {
            font-size: 10px;
            color: var(--text-muted);
        }

        .earnings-value {
            display: flex;
            align-items: baseline;
            gap: 6px;
            margin-bottom: 4px;
        }

        .earnings-amount {
            font-size: 28px;
            font-weight: 800;
        }

        .earnings-token {
            font-size: 14px;
            color: var(--text-muted);
        }

        .earnings-detail {
            font-size: 11px;
            color: var(--text-muted);
        }

        .my-activity-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .my-activity-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
        }

        .activity-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            flex-shrink: 0;
        }

        .activity-dot.green { background: var(--accent); }
        .activity-dot.purple { background: var(--purple); }
        .activity-dot.gold { background: var(--gold); }

        .my-activity-item span:nth-child(2) {
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .activity-time {
            color: var(--text-muted);
            font-size: 10px;
        }

        @media (max-width: 900px) {
            .my-dashboard-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 500px) {
            .my-dashboard-grid {
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            }
            .dashboard-card {
                padding: 14px;
            }
            .dashboard-card.activity-card .my-activity-list {
                gap: 6px;
            }
            .dashboard-card.activity-card .my-activity-item {
                font-size: 10px;
            }
            .portfolio-amount, .earnings-amount {
                font-size: 22px;
            }
            .rank-number {
                font-size: 26px;
            }
            .dashboard-card-header h4 {
                font-size: 10px;
            }
        }

        /* Collections Grid - Full width cards */
        .featured-collection-banner {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 24px;
            background: linear-gradient(135deg, rgba(0,255,136,0.08), rgba(0,200,200,0.04));
            border: 1px solid rgba(0,255,136,0.2);
            border-radius: 20px;
            padding: 24px;
            margin-bottom: 24px;
            align-items: center;
        }

        .fcb-images {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .fcb-images img {
            width: 100px;
            height: 100px;
            border-radius: 12px;
            object-fit: cover;
            border: 2px solid rgba(0,255,136,0.2);
        }

        .fcb-images img:first-child {
            width: 120px;
            height: 120px;
            border-color: var(--accent);
        }

        .fcb-badge {
            display: inline-block;
            background: var(--accent);
            color: var(--bg-void);
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .fcb-title {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 6px;
        }

        .fcb-desc {
            color: var(--text-secondary);
            font-size: 13px;
            margin-bottom: 12px;
            max-width: 400px;
        }

        .fcb-stats {
            display: flex;
            gap: 20px;
            margin-bottom: 16px;
            font-size: 12px;
            color: var(--text-muted);
        }

        .fcb-stats strong {
            color: var(--text-primary);
        }

        .fcb-btn {
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .fcb-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--glow);
        }

        @media (max-width: 700px) {
            .featured-collection-banner {
                grid-template-columns: 1fr;
            }
            .fcb-images {
                justify-content: center;
            }
        }

        .collections-grid-full {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }

        .collection-card-full {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            transition: all 200ms ease;
        }

        .collection-card-full:hover {
            transform: translateY(-4px);
            border-color: rgba(0,255,136,0.3);
            box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }

        .collection-card-image {
            position: relative;
            height: 160px;
            overflow: hidden;
        }

        .collection-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 300ms ease;
        }

        .collection-card-full:hover .collection-card-image img {
            transform: scale(1.05);
        }

        .collection-boost-badge {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(8px);
            padding: 6px 10px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 600;
        }

        .collection-card-info {
            padding: 16px;
        }

        .collection-card-name {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 12px;
        }

        .collection-card-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .collection-card-stat {
            text-align: center;
        }

        .collection-card-stat .stat-label {
            display: block;
            font-size: 10px;
            color: var(--text-muted);
            text-transform: uppercase;
            margin-bottom: 2px;
        }

        .collection-card-stat .stat-value {
            font-size: 13px;
            font-weight: 700;
            color: var(--text-primary);
        }

        /* ============ FEATURED ARTISTS - PREMIUM ============ */
        .featured-artists-section {
            padding: 0 0 32px;
        }

        .featured-artists-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .featured-artist-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            transition: all 250ms ease;
            position: relative;
        }

        .featured-artist-card:hover {
            transform: translateY(-8px);
            border-color: var(--purple);
            box-shadow: 0 20px 60px rgba(139,92,246,0.2);
        }

        .fa-banner {
            height: 120px;
            background-size: cover;
            background-position: center;
            position: relative;
        }

        .fa-banner::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: linear-gradient(transparent, var(--bg-card));
        }

        .fa-content {
            padding: 0 20px 20px;
            position: relative;
        }

        .fa-avatar {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid var(--bg-card);
            margin: -40px auto 12px;
            position: relative;
            z-index: 1;
        }

        .fa-avatar.emoji-avatar {
            background: #1a1a2e;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .fa-avatar.emoji-avatar span {
            font-size: 42px;
        }

        .fa-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .fa-badge {
            display: inline-block;
            background: var(--purple);
            color: white;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 9px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .fa-badge.hot {
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
        }

        .fa-badge.new {
            background: linear-gradient(135deg, var(--accent), var(--teal));
            color: var(--bg-void);
        }

        .fa-name {
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 4px;
            text-align: center;
        }

        .fa-style {
            font-size: 12px;
            color: var(--purple);
            text-align: center;
            margin-bottom: 16px;
        }

        .fa-stats {
            display: flex;
            justify-content: space-around;
            padding-top: 16px;
            border-top: 1px solid var(--border);
        }

        .fa-stat {
            text-align: center;
        }

        .fa-stat-value {
            display: block;
            font-size: 16px;
            font-weight: 800;
        }

        .fa-stat-label {
            font-size: 10px;
            color: var(--text-muted);
        }

        .all-artists-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border);
        }

        .artist-divider {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 20px 40px;
        }

        .divider-line {
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--purple), transparent);
        }

        .divider-text {
            font-size: 11px;
            font-weight: 700;
            color: var(--purple);
            letter-spacing: 2px;
        }

        @media (max-width: 1000px) {
            .featured-artists-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 600px) {
            .featured-artists-grid {
                grid-template-columns: 1fr;
            }
        }

        /* ============ LEADERBOARD PAGE ============ */
        .leaderboard-hero::before {
            background: radial-gradient(ellipse, rgba(255,184,0,0.1) 0%, transparent 70%);
        }

        .gold-badge {
            background: linear-gradient(135deg, #FFD700, #FFA500) !important;
            color: #000 !important;
        }

        .leaderboard-filters {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-bottom: 32px;
        }

        .lb-filter {
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: var(--text-secondary);
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 150ms ease;
        }

        .lb-filter.active {
            background: linear-gradient(135deg, rgba(255,184,0,0.15), rgba(255,184,0,0.05));
            border-color: var(--gold);
            color: var(--gold);
        }

        /* Podium */
        .podium-section {
            margin-bottom: 40px;
        }

        .podium {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 16px;
        }

        .podium-item {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            text-align: center;
            width: 180px;
            position: relative;
        }

        .podium-item.first {
            padding-bottom: 48px;
            border-color: rgba(255,215,0,0.3);
            background: linear-gradient(180deg, rgba(255,215,0,0.08) 0%, var(--bg-card) 100%);
        }

        .podium-item.second {
            padding-bottom: 32px;
            border-color: rgba(192,192,192,0.3);
        }

        .podium-item.third {
            padding-bottom: 24px;
            border-color: rgba(205,127,50,0.3);
        }

        .podium-crown {
            font-size: 28px;
            margin-bottom: 8px;
        }

        .podium-avatar {
            width: 64px;
            height: 64px;
            margin: 0 auto 12px;
            background: var(--bg-surface);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
        }

        .gold-ring { box-shadow: 0 0 0 3px #FFD700, 0 0 20px rgba(255,215,0,0.4); }
        .silver-ring { box-shadow: 0 0 0 3px #C0C0C0; }
        .bronze-ring { box-shadow: 0 0 0 3px #CD7F32; }

        .podium-name {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .podium-stat {
            font-size: 11px;
            color: var(--text-muted);
            margin-bottom: 8px;
        }

        .podium-value {
            font-size: 16px;
            font-weight: 800;
            color: var(--accent);
        }

        .podium-rank {
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 32px;
            height: 32px;
            background: var(--bg-void);
            border: 2px solid var(--border);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 800;
        }

        .podium-item.first .podium-rank { border-color: #FFD700; color: #FFD700; }
        .podium-item.second .podium-rank { border-color: #C0C0C0; color: #C0C0C0; }
        .podium-item.third .podium-rank { border-color: #CD7F32; color: #CD7F32; }

        /* Leaderboard Tables */
        .lb-tables-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .lb-table-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            overflow: hidden;
        }

        .lb-table-header {
            padding: 16px 20px;
            border-bottom: 1px solid var(--border);
        }

        .lb-table-header h3 {
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 2px;
        }

        .lb-table-subtitle {
            font-size: 11px;
            color: var(--text-muted);
        }

        .lb-table {
            padding: 8px;
        }

        .lb-row {
            display: grid;
            grid-template-columns: 40px 1fr 50px 60px;
            gap: 8px;
            padding: 10px 12px;
            border-radius: 8px;
            align-items: center;
        }

        .lb-row.header {
            padding: 8px 12px;
        }

        .lb-row:not(.header):hover {
            background: var(--bg-surface);
        }

        .lb-col {
            font-size: 12px;
        }

        .lb-col.rank {
            font-weight: 700;
            color: var(--text-muted);
        }

        .lb-col.rank.gold { color: #FFD700; }
        .lb-col.rank.silver { color: #C0C0C0; }
        .lb-col.rank.bronze { color: #CD7F32; }

        .lb-col.user {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
        }

        .lb-col.user .username, .podium-name.username {
            color: var(--teal);
        }

        .lb-avatar {
            width: 24px;
            height: 24px;
            background: var(--bg-surface);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }

        .lb-col.stat {
            color: var(--text-secondary);
            text-align: right;
        }

        .lb-col.value {
            font-weight: 700;
            text-align: right;
        }

        .lb-row.header .lb-col {
            font-size: 10px;
            color: var(--text-muted);
            text-transform: uppercase;
            font-weight: 600;
        }

        @media (max-width: 900px) {
            .lb-tables-grid {
                grid-template-columns: 1fr;
            }
            .podium {
                flex-direction: column;
                align-items: center;
            }
            .podium-item { width: 100%; max-width: 280px; }
            .podium-item.first { order: -1; }
        }

        /* ========== SOCIALS PAGE ========== */
        .socials-hero::before {
            background: radial-gradient(ellipse, rgba(0,255,136,0.12) 0%, transparent 70%);
        }

        .race-arena {
            position: relative;
            width: 100%;
            height: 500px;
            background: radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, var(--bg-card) 50%, var(--bg-void) 100%);
            border-radius: 20px;
            border: 1px solid var(--border);
            overflow: hidden;
            margin-bottom: 32px;
        }

        .race-canvas { width: 100%; height: 100%; }

        .race-center-prize {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            pointer-events: none;
            z-index: 10;
        }

        .prize-chest {
            font-size: 64px;
            animation: chest-pulse 2s ease-in-out infinite;
            filter: drop-shadow(0 0 30px rgba(245,158,11,0.5));
        }

        @keyframes chest-pulse {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 30px rgba(245,158,11,0.5)); }
            50% { transform: scale(1.1); filter: drop-shadow(0 0 50px rgba(245,158,11,0.8)); }
        }

        .prize-amount {
            font-size: 24px;
            font-weight: 900;
            color: var(--gold);
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
            margin-top: 8px;
        }

        .prize-label {
            font-size: 11px;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .race-info {
            position: absolute;
            top: 16px;
            left: 16px;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(10px);
            padding: 12px 16px;
            border-radius: 12px;
            border: 1px solid var(--border);
        }

        .race-info-title {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .race-info-title .live {
            width: 8px;
            height: 8px;
            background: var(--accent);
            border-radius: 50%;
            animation: pulse 1.5s infinite;
        }

        .race-countdown {
            font-size: 20px;
            font-weight: 800;
            color: var(--gold);
        }

        .your-position {
            position: absolute;
            top: 16px;
            right: 16px;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(10px);
            padding: 16px 20px;
            border-radius: 12px;
            border: 1px solid var(--accent);
            text-align: center;
        }

        .your-position-label {
            font-size: 11px;
            color: var(--text-muted);
            text-transform: uppercase;
            margin-bottom: 4px;
        }

        .your-position-rank {
            font-size: 32px;
            font-weight: 900;
            color: var(--accent);
        }

        .your-position-points {
            font-size: 12px;
            color: var(--text-secondary);
        }

        .hub-section {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 24px;
        }

        .hub-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .hub-title {
            font-size: 18px;
            font-weight: 800;
        }

        .hub-tier {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 14px;
            background: var(--bg-surface);
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
        }

        .hub-stats {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
            margin-bottom: 20px;
        }

        .hub-stat {
            background: var(--bg-surface);
            border-radius: 12px;
            padding: 16px;
            text-align: center;
        }

        .hub-stat-value {
            font-size: 24px;
            font-weight: 800;
            color: var(--accent);
        }

        .hub-stat-value.gold { color: var(--gold); }
        .hub-stat-value.purple { color: var(--purple); }

        .hub-stat-label {
            font-size: 11px;
            color: var(--text-muted);
            text-transform: uppercase;
            margin-top: 4px;
        }

        .referral-box {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .referral-input {
            flex: 1;
            background: var(--bg-void);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 14px 16px;
            font-size: 13px;
            color: var(--text-secondary);
            font-family: monospace;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .referral-btn {
            padding: 14px 20px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            border: none;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 150ms ease;
        }

        .referral-btn.primary {
            background: var(--accent);
            color: #000;
        }

        .referral-btn.primary:hover {
            background: var(--accent-dim);
            transform: translateY(-2px);
        }

        .referral-btn.twitter {
            background: #000;
            color: #fff;
            border: 1px solid #333;
        }

        .referral-btn.twitter:hover {
            background: #111;
            border-color: #555;
        }

        .socials-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
        }

        .social-lb {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            overflow: hidden;
        }

        .social-lb-header {
            padding: 16px 20px;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .social-lb-title {
            font-size: 14px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .social-lb-subtitle {
            font-size: 11px;
            color: var(--text-muted);
        }

        .social-lb-list {
            padding: 8px;
            max-height: 400px;
            overflow-y: auto;
        }

        .slb-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-radius: 10px;
            transition: background 150ms ease;
        }

        .slb-item:hover { background: var(--bg-surface); }

        .slb-rank {
            width: 28px;
            height: 28px;
            background: var(--bg-surface);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 800;
            color: var(--text-muted);
        }

        .slb-item:nth-child(1) .slb-rank { background: linear-gradient(135deg, #FFD700, #FFA500); color: #000; }
        .slb-item:nth-child(2) .slb-rank { background: linear-gradient(135deg, #C0C0C0, #A8A8A8); color: #000; }
        .slb-item:nth-child(3) .slb-rank { background: linear-gradient(135deg, #CD7F32, #B8860B); color: #000; }

        .slb-avatar {
            width: 36px;
            height: 36px;
            background: var(--bg-elevated);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .slb-info { flex: 1; min-width: 0; }

        .slb-name {
            font-size: 13px;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .slb-meta {
            font-size: 11px;
            color: var(--text-muted);
        }

        .slb-stats { text-align: right; }

        .slb-primary {
            font-size: 14px;
            font-weight: 800;
            color: var(--accent);
        }

        .slb-secondary {
            font-size: 11px;
            color: var(--gold);
        }

        .how-it-works {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            margin-top: 32px;
        }

        .how-step {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 20px;
            text-align: center;
        }

        .how-step-icon { font-size: 32px; margin-bottom: 12px; }
        .how-step-title { font-size: 13px; font-weight: 700; margin-bottom: 6px; }
        .how-step-desc { font-size: 11px; color: var(--text-muted); line-height: 1.5; }

        .tier-bronze { color: #CD7F32; }
        .tier-silver { color: #C0C0C0; }
        .tier-gold { color: #FFD700; }
        .tier-diamond { color: #B9F2FF; }
        .tier-legendary { 
            background: linear-gradient(135deg, #FFD700, #FF6B6B, #4ECDC4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .social-empty {
            padding: 40px 20px;
            text-align: center;
        }

        .social-empty-icon { font-size: 40px; margin-bottom: 12px; opacity: 0.5; }
        .social-empty p { color: var(--text-muted); font-size: 13px; }

        @media (max-width: 1000px) {
            .socials-grid { grid-template-columns: 1fr; }
            .hub-stats { grid-template-columns: repeat(3, 1fr); }
            .how-it-works { grid-template-columns: repeat(2, 1fr); }
            .race-arena { height: 400px; }
        }

        @media (max-width: 600px) {
            .hub-stats { grid-template-columns: repeat(2, 1fr); }
            .how-it-works { grid-template-columns: 1fr; }
            .referral-box { flex-direction: column; }
            .referral-input { width: 100%; }
            .race-arena { height: 350px; }
        }

        .collection-header {
            padding: 24px 0;
            display: flex;
            gap: 24px;
            align-items: flex-start;
            border-bottom: 1px solid var(--border);
        }

        .collection-header-image {
            width: 120px;
            height: 120px;
            border-radius: 16px;
            overflow: hidden;
            flex-shrink: 0;
        }

        .collection-header-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .collection-header-info {
            flex: 1;
        }

        .collection-header-name {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 6px;
        }

        .collection-header-desc {
            font-size: 13px;
            color: var(--text-secondary);
            margin-bottom: 16px;
        }

        .collection-stats-row {
            display: flex;
            gap: 24px;
        }

        .collection-stat {
            text-align: center;
        }

        .collection-stat-value {
            font-size: 20px;
            font-weight: 700;
        }

        .collection-stat-label {
            font-size: 10px;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        .sweep-btn {
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 700;
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            cursor: pointer;
            margin-left: auto;
        }

        /* ============ LAUNCHPAD PAGE ============ */
        .launchpad-hero {
            padding: 32px 0 24px;
            text-align: center;
            background: linear-gradient(180deg, #0c0c12 0%, var(--bg-void) 100%);
        }

        .launchpad-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--accent-glow);
            border: 1px solid rgba(0,255,136,0.25);
            border-radius: 999px;
            padding: 8px 18px;
            margin-bottom: 16px;
        }

        .launchpad-badge .dot {
            width: 8px;
            height: 8px;
            background: var(--accent);
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        .launchpad-badge span {
            color: var(--accent);
            font-size: 12px;
            font-weight: 700;
        }

        .launchpad-hero h1 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 8px;
            letter-spacing: -1px;
        }

        .launchpad-hero h1 .green { color: var(--accent); }

        .launchpad-hero p {
            color: var(--text-secondary);
            font-size: 14px;
        }

        /* Featured Drop */
        .featured-drop {
            background: linear-gradient(145deg, #0a1a14, #0a0f10);
            border-radius: 20px;
            padding: 28px;
            border: 1px solid rgba(0,255,136,0.15);
            margin-bottom: 20px;
            display: flex;
            gap: 32px;
            align-items: center;
        }

        .featured-drop-img {
            width: 220px;
            height: 220px;
            border-radius: 16px;
            flex-shrink: 0;
            overflow: hidden;
            background: var(--bg-elevated);
        }

        .featured-drop-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .featured-drop-info {
            flex: 1;
        }

        .featured-drop-badge {
            display: inline-block;
            background: var(--accent-glow);
            color: var(--accent);
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 10px;
            font-weight: 700;
            margin-bottom: 12px;
        }

        .featured-drop-info h2 {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 6px;
            letter-spacing: -0.5px;
        }

        .featured-drop-info .subtitle {
            color: var(--text-secondary);
            font-size: 13px;
            margin-bottom: 20px;
        }

        .drop-options {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .drop-option {
            flex: 1;
            border-radius: 12px;
            padding: 14px;
            text-align: center;
        }

        .drop-option.free {
            background: linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,255,136,0.03));
            border: 1px solid rgba(0,255,136,0.25);
        }

        .drop-option.paid {
            background: var(--bg-surface);
            border: 1px solid var(--border-subtle);
        }

        .drop-option .label {
            font-size: 10px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .drop-option.free .label { color: var(--accent); }
        .drop-option.paid .label { color: var(--text-muted); }

        .drop-option .value {
            font-weight: 700;
            font-size: 13px;
        }

        .btn-discord {
            display: block;
            width: 100%;
            background: #5865F2;
            color: white;
            border: none;
            padding: 14px 24px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            transition: all 150ms ease;
        }

        .btn-discord:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(88,101,242,0.4);
        }

        /* Drop Carousel */
        .carousel-wrapper {
            overflow: hidden;
            margin-bottom: 28px;
            border-radius: 12px;
        }

        .drop-carousel {
            display: flex;
            gap: 10px;
            padding: 8px 0;
            animation: carouselScroll 30s linear infinite;
        }

        .drop-carousel:hover {
            animation-play-state: paused;
        }

        @keyframes carouselScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .carousel-item {
            width: 80px;
            height: 80px;
            border-radius: 12px;
            overflow: hidden;
            flex-shrink: 0;
            border: 1px solid var(--border-subtle);
            transition: all 150ms ease;
        }

        .carousel-item:hover {
            border-color: var(--accent);
            transform: scale(1.05);
        }

        .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Surprise Banner */
        .surprise-banner {
            background: linear-gradient(90deg, rgba(139,92,246,0.1), rgba(236,72,153,0.08), rgba(245,158,11,0.08));
            border: 1px dashed rgba(139,92,246,0.3);
            border-radius: 14px;
            padding: 18px 22px;
            margin-bottom: 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .surprise-left {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .surprise-left .emoji { font-size: 24px; }

        .surprise-left p {
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 2px;
        }

        .surprise-left small {
            color: var(--text-muted);
            font-size: 12px;
        }

        .surprise-badge-box {
            background: rgba(139,92,246,0.2);
            color: var(--purple);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
        }

        /* Schedule */
        .schedule-title {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .schedule-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .month-label {
            color: var(--text-muted);
            font-size: 11px;
            font-weight: 700;
            margin-top: 16px;
            margin-bottom: 4px;
            letter-spacing: 0.5px;
        }

        .month-label:first-child { margin-top: 8px; }

        .drop-item {
            background: var(--bg-card);
            border-radius: 14px;
            padding: 16px;
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 14px;
            transition: all 150ms ease;
        }

        .drop-item:hover {
            border-color: var(--border-subtle);
            transform: translateX(4px);
        }

        .drop-item.active {
            background: linear-gradient(90deg, rgba(0,255,136,0.06), transparent);
            border: 1px solid rgba(0,255,136,0.2);
        }

        .drop-item.exclusive {
            background: linear-gradient(135deg, #1a1510, var(--bg-card));
            border: 1px solid rgba(245,158,11,0.25);
            flex-wrap: wrap;
        }

        .drop-item-img {
            width: 64px;
            height: 64px;
            border-radius: 10px;
            overflow: hidden;
            flex-shrink: 0;
            background: var(--bg-elevated);
        }

        .drop-item-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .drop-item-info {
            flex: 1;
            min-width: 0;
        }

        .drop-item-info h4 {
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 3px;
        }

        .drop-item-info p {
            color: var(--text-muted);
            font-size: 12px;
        }

        .drop-item-price {
            text-align: right;
        }

        .drop-item-price .free {
            color: var(--accent);
            font-size: 11px;
            font-weight: 600;
        }

        .drop-item-price .paid {
            color: var(--text-muted);
            font-size: 11px;
        }

        .remind-btn {
            background: transparent;
            border: 1px solid var(--border);
            color: var(--text-secondary);
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 600;
            cursor: pointer;
            transition: all 150ms ease;
            white-space: nowrap;
        }

        .remind-btn:hover {
            border-color: var(--teal);
            color: var(--teal);
        }

        .remind-btn.reminded {
            background: rgba(0,200,200,0.15);
            border-color: var(--teal);
            color: var(--teal);
        }

        .exclusive-badge {
            background: linear-gradient(135deg, var(--gold), #eab308);
            color: var(--bg-void);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 10px;
            font-weight: 800;
        }

        .genesis-reqs {
            background: var(--bg-surface);
            border-radius: 10px;
            padding: 14px;
            margin-top: 12px;
            width: 100%;
        }

        .genesis-reqs .title {
            color: var(--gold);
            font-size: 12px;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .genesis-reqs .reqs {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }

        .genesis-reqs .reqs span {
            color: var(--text-secondary);
            font-size: 12px;
        }

        .genesis-reqs .divider {
            border-top: 1px solid var(--border-subtle);
            padding-top: 10px;
        }

        .genesis-reqs .divider span {
            color: var(--text-muted);
            font-size: 12px;
        }

        .launchpad-cta {
            text-align: center;
            margin-top: 40px;
            padding: 32px;
            background: linear-gradient(180deg, var(--bg-card), transparent);
            border-radius: 16px;
        }

        .launchpad-cta p {
            color: var(--text-muted);
            margin-bottom: 14px;
            font-size: 13px;
        }

        .btn-delegate {
            display: inline-block;
            background: var(--accent);
            color: var(--bg-void);
            border: none;
            padding: 14px 32px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;
            transition: all 150ms ease;
        }

        .btn-delegate:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--accent-glow);
        }

        @media (max-width: 768px) {
            .featured-drop {
                flex-direction: column;
                padding: 20px;
                gap: 20px;
            }
            .featured-drop-img {
                width: 100%;
                height: 200px;
            }
            .featured-drop-info h2 {
                font-size: 22px;
            }
            .drop-item-img {
                width: 52px;
                height: 52px;
            }
            .launchpad-hero h1 {
                font-size: 24px;
            }
        }

        /* ============ MOBILE NAV ============ */
        .mobile-nav {
            display: none;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: rgba(4, 4, 6, 0.95);
            backdrop-filter: blur(25px);
            border-top: 1px solid var(--border);
            padding: 6px 0;
            padding-bottom: calc(6px + env(safe-area-inset-bottom));
        }

        .mobile-nav-inner {
            display: flex;
            justify-content: space-around;
        }

        .mobile-nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            padding: 6px 12px;
            color: var(--text-muted);
            font-size: 9px;
            font-weight: 600;
            background: none;
            border: none;
            cursor: pointer;
        }

        .mobile-nav-item svg {
            width: 20px;
            height: 20px;
        }

        .mobile-nav-item.active { color: var(--accent); }

        .mobile-nav-item.has-notif {
            color: var(--accent);
        }

        .mobile-nav-item.has-notif svg {
            filter: drop-shadow(0 0 4px var(--accent));
        }

        .mobile-nav-item.stake-btn-mobile {
            color: var(--accent);
        }

        .mobile-nav-item.stake-btn-mobile svg {
            filter: drop-shadow(0 0 4px var(--accent));
        }

        .mobile-nav-item.live-mint-mobile {
            color: #ff4444;
        }

        .mobile-nav-item.live-mint-mobile svg {
            stroke: #ff4444;
            filter: drop-shadow(0 0 6px rgba(255,68,68,0.8));
            animation: mobileGlow 1.5s ease-in-out infinite;
        }

        @keyframes mobileGlow {
            0%, 100% { filter: drop-shadow(0 0 4px rgba(255,68,68,0.5)); }
            50% { filter: drop-shadow(0 0 10px rgba(255,68,68,0.9)); }
        }

        .mobile-menu-expand {
            display: none;
            padding: 12px 16px;
            border-top: 1px solid var(--border);
            gap: 8px;
        }

        .mobile-menu-expand.open {
            display: flex;
        }

        .mobile-menu-item {
            flex: 1;
            padding: 12px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            color: var(--text-primary);
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
        }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 1000px) {
            .ftso-boost-stats {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 900px) {
            .hero-grid {
                grid-template-columns: 1fr;
                gap: 24px;
            }
            
            .featured-card {
                max-width: 320px;
                margin: 0 auto;
            }
            
            .nav { display: none; }
            .mobile-nav { display: block; }
            .main { padding-bottom: 70px; }

            .storefront-profile {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .storefront-actions {
                align-items: center;
            }

            .collection-header {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .collection-stats-row {
                flex-wrap: wrap;
                justify-content: center;
            }
        }

        @media (max-width: 600px) {
            .header-inner {
                padding: 0 12px;
                height: 50px;
            }
            
            .logo { font-size: 16px; }
            .connect-btn { padding: 6px 10px; font-size: 10px; }
            .chain-btn { padding: 3px 6px; font-size: 9px; }
            
            .hero { padding: 28px 0 24px; }
            .hero-text h1 { font-size: 20px; letter-spacing: -1px; }
            
            .lp-card { padding: 20px; }
            .lp-title { font-size: 20px; }
            .lp-stats { gap: 8px; }
            .lp-stat-value { font-size: 14px; }
            .lock-tiers { gap: 6px; }
            .lock-tier { padding: 10px 6px; }
            .lock-tier-mult { font-size: 14px; }
            .hero-stats { gap: 16px; }
            .hero-stat-value { font-size: 18px; }
            
            .section { padding: 20px 0; }
            .section-title { font-size: 13px; }
            
            .nft-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
            }

            .auctions-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
            }
            
            .collection-card { width: 150px; }
            .collection-image { height: 80px; }

            .ftso-boost-card { padding: 16px; }
            .ftso-boost-stats { gap: 8px; }
            .ftso-stat { padding: 10px; }
            .ftso-stat-value { font-size: 18px; }
            .ftso-boost-cta { flex-direction: column; }

            .staking-pools {
                grid-template-columns: 1fr;
            }
        }

        .hidden { display: none !important; }

        /* Storefront Modal - hidden by default */
        #storefront-modal {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(8px);
            z-index: 9999;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        #storefront-modal.open {
            display: flex;
        }
        .emoji-pick {
            width: 36px;
            height: 36px;
            border: 2px solid var(--border);
            border-radius: 8px;
            background: var(--bg-surface);
            font-size: 18px;
            cursor: pointer;
            transition: all 0.15s;
        }
        .emoji-pick:hover {
            border-color: var(--teal);
            transform: scale(1.1);
        }
        .emoji-pick.selected {
            border-color: var(--teal);
            background: rgba(0, 200, 200, 0.15);
        }
        .sf-owner-actions {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin: -20px 0 30px;
            flex-wrap: wrap;
        }
        .sf-action-btn {
            padding: 10px 20px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: var(--bg-card);
            color: var(--text);
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s;
        }
        .sf-action-btn:hover {
            border-color: var(--teal);
            background: rgba(0, 200, 200, 0.1);
        }
        .sf-action-btn.delete {
            border-color: #ff4757;
            color: #ff4757;
        }
        .sf-action-btn.delete:hover {
            background: rgba(255, 71, 87, 0.15);
        }
        .sf-action-btn.verify {
            border-color: var(--teal);
            color: var(--teal);
        }
        .sf-action-btn.verify:hover {
            background: rgba(0, 200, 200, 0.15);
        }
        .verified-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            background: var(--teal);
            border-radius: 50%;
            color: var(--bg-void);
            font-size: 12px;
            margin-left: 6px;
            vertical-align: middle;
        }

        /* Custom Dialog Modal */
        .dialog-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.85);
            backdrop-filter: blur(12px);
            z-index: 99999;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .dialog-overlay.open {
            display: flex;
        }
        .dialog-box {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 20px;
            width: 100%;
            max-width: 420px;
            animation: modalSlide 0.25s ease;
            overflow: hidden;
        }
        .dialog-header {
            padding: 28px 28px 0;
        }
        .dialog-icon {
            width: 56px;
            height: 56px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            margin-bottom: 16px;
        }
        .dialog-icon.input { background: linear-gradient(135deg, var(--accent), var(--teal)); }
        .dialog-icon.confirm { background: linear-gradient(135deg, var(--purple), #a78bfa); }
        .dialog-icon.alert { background: linear-gradient(135deg, var(--gold), #fbbf24); }
        .dialog-icon.danger { background: linear-gradient(135deg, var(--red), #f87171); }
        .dialog-title {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 8px;
        }
        .dialog-message {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
            white-space: pre-line;
        }
        .dialog-body {
            padding: 20px 28px;
        }
        .dialog-input {
            width: 100%;
            padding: 14px 16px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            color: var(--text-primary);
            font-size: 16px;
            font-family: inherit;
            outline: none;
            transition: border-color 0.2s;
        }
        .dialog-input:focus {
            border-color: var(--accent);
        }
        .dialog-input::placeholder {
            color: var(--text-muted);
        }
        .dialog-footer {
            padding: 0 28px 28px;
            display: flex;
            gap: 12px;
        }
        .dialog-btn {
            flex: 1;
            padding: 14px 20px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            border: none;
            font-family: inherit;
        }
        .dialog-btn-cancel {
            background: var(--bg-surface);
            border: 1px solid var(--border);
            color: var(--text-secondary);
        }
        .dialog-btn-cancel:hover {
            background: var(--bg-card-hover);
            color: var(--text-primary);
        }
        .dialog-btn-confirm {
            background: linear-gradient(135deg, var(--accent), var(--teal));
            color: var(--bg-void);
        }
        .dialog-btn-confirm:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 20px var(--accent-glow);
        }
        .dialog-btn-danger {
            background: linear-gradient(135deg, var(--red), #f87171);
            color: white;
        }
        .dialog-btn-danger:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 20px var(--red-glow);
        }
    </style>
</head>
<body>
    <!-- Welcome Banner -->
    <div id="welcome-banner" style="
        background: linear-gradient(135deg, rgba(139,92,246,0.2) 0%, #0e0e14 100%);
        border-left: 4px solid #8b5cf6;
        padding: 24px 32px;
        margin: 80px 20px 0 20px;
        border-radius: 12px;
        position: relative;
        z-index: 50;
    ">
        <button onclick="document.getElementById('welcome-banner').style.display='none'; localStorage.setItem('toadz_banner_dismissed','1')" style="
            position: absolute;
            top: 16px;
            right: 16px;
            background: rgba(255,255,255,0.1);
            border: none;
            color: #8a8a9a;
            cursor: pointer;
            font-size: 16px;
            width: 28px;
            height: 28px;
            border-radius: 6px;
        ">×</button>
        
        <div style="max-width: 700px;">
            <h3 style="margin: 0 0 12px; font-size: 20px; font-weight: 700; color: #fff;">
                🐸 Welcome to TOADZ Beta
            </h3>
            <p style="margin: 0; color: #8a8a9a; font-size: 14px; line-height: 1.7;">
                We're building the premier NFT marketplace for Flare & Songbird. This is an early beta — 
                things will change, improve, and occasionally break. Join our Discord to follow development 
                and help shape the future of TOADZ.
            </p>
            <div style="margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap;">
                <a href="https://discord.gg/toadz" target="_blank" style="
                    background: #8b5cf6;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                ">Join Discord</a>
                <a href="https://twitter.com/ToadzNFT" target="_blank" style="
                    background: transparent;
                    color: #8a8a9a;
                    border: 1px solid #333;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-size: 13px;
                    cursor: pointer;
                    text-decoration: none;
                ">Follow Updates</a>
            </div>
        </div>
    </div>
    <script>
        if(localStorage.getItem('toadz_banner_dismissed')==='1') {
            document.getElementById('welcome-banner').style.display='none';
        }
    </script>
    <div class="toast-container" id="toast-container"></div>
    
    <!-- Custom Dialog Modal -->
    <div class="dialog-overlay" id="dialog-overlay">
        <div class="dialog-box">
            <div class="dialog-header">
                <div class="dialog-icon" id="dialog-icon">💬</div>
                <div class="dialog-title" id="dialog-title">Title</div>
                <div class="dialog-message" id="dialog-message">Message</div>
            </div>
            <div class="dialog-body" id="dialog-body" style="display: none;">
                <input type="text" class="dialog-input" id="dialog-input" placeholder="">
            </div>
            <div class="dialog-footer" id="dialog-footer">
                <button class="dialog-btn dialog-btn-cancel" id="dialog-cancel">Cancel</button>
                <button class="dialog-btn dialog-btn-confirm" id="dialog-confirm">Confirm</button>
            </div>
        </div>
    </div>
    
    <div class="ambient"></div>

    <header class="header">
        <div class="header-inner">
            <div class="logo" onclick="showPage('home')">
                <span class="logo-icon">🐸</span>
                TOADZ
            </div>
            
            <nav class="nav">
                <button class="nav-item active" onclick="showPage('home')">Explore</button>
                <button class="nav-item highlight" onclick="showPage('staking')">Staking</button>
                <button class="nav-item" onclick="showPage('artists')">Artists</button>
                <button class="nav-item" onclick="showPage('collections')">Collections</button>
                <button class="nav-item" onclick="showPage('launchpad')">Launchpad</button>
                <button class="nav-item" onclick="showPage('socials')">📣 Socials</button>
                <button class="nav-item" onclick="showPage('my-nfts')">My NFTs</button>
            </nav>
            
            <div class="header-right">
                <div class="chain-switch">
                    <button class="chain-btn flare active" onclick="setChain('flare')"><span class="dot"></span>Flare</button>
                    <button class="chain-btn songbird" onclick="setChain('songbird')"><span class="dot"></span>Songbird</button>
                </div>
                <button class="connect-btn" onclick="openConnectModal()">Connect</button>
                <div class="user-menu" onclick="handleUserMenuClick()">👤</div>
                <div class="notif-wrapper">
                    <button class="notif-bell has-notif" onclick="toggleNotifDropdown()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/></svg>
                    </button>
                    <div class="notif-dropdown" id="notif-dropdown">
                        <div class="notif-dropdown-header">
                            <span>Notifications</span>
                            <button class="notif-clear">Clear all</button>
                        </div>
                        <div class="notif-list">
                            <div class="notif-item">
                                <div class="notif-icon sold">💰</div>
                                <div class="notif-content">
                                    <span class="notif-title">NFT Sold!</span>
                                    <span class="notif-desc">sToadz #421 sold for 2,400 FLR</span>
                                    <span class="notif-time">2 hours ago</span>
                                </div>
                            </div>
                            <div class="notif-item">
                                <div class="notif-icon offer">🎁</div>
                                <div class="notif-content">
                                    <span class="notif-title">Offer Received</span>
                                    <span class="notif-desc">850 FLR offer on Loft #89</span>
                                    <span class="notif-time">5 hours ago</span>
                                </div>
                            </div>
                            <div class="notif-item">
                                <div class="notif-icon claim">⚡</div>
                                <div class="notif-content">
                                    <span class="notif-title">FLR Ready to Claim</span>
                                    <span class="notif-desc">1,247 FLR available from rewards</span>
                                    <span class="notif-time">Just now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="main">
        <!-- HOME PAGE -->
        <div id="page-home" class="page active">
            <!-- Clean Hero -->
            <section class="hero">
                <div class="container" style="max-width: 1000px;">
                    <div class="explore-hero">
                        <h1>Trade. <span class="green">Stake</span>. Earn.</h1>
                        <p>The NFT marketplace where all fees flow back to the community</p>
                        <div class="hero-stats-row">
                            <div class="hero-stat-pill">
                                <span class="stat-value" id="hero-mcap">--</span>
                                <span class="stat-label">POND MCAP</span>
                            </div>
                            <div class="hero-stat-pill">
                                <span class="stat-value" id="hero-nfts">--</span>
                                <span class="stat-label">NFTs</span>
                            </div>
                            <div class="hero-stat-pill">
                                <span class="stat-value green" id="hero-apy">--</span>
                                <span class="stat-label">LP APY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Main Content -->
            <section class="section">
                <div class="container" style="max-width: 1000px;">
                    
                    <!-- Live Activity Banner -->
                    <div class="activity-banner">
                        <div class="activity-banner-header">
                            <span class="live-dot"></span>
                            <span>Live Activity</span>
                        </div>
                        <div class="activity-ticker-wrapper">
                            <div class="activity-ticker" id="activity-ticker"></div>
                        </div>
                    </div>

                    <!-- Spotlight Carousel -->
                    <div class="spotlight-carousel">
                        <div class="spotlight-slides" id="spotlight-slides">
                            <!-- Slide 1: Dropping Now -->
                            <div class="explore-spotlight drop-spotlight active">
                                <div class="spotlight-bg" style="background-image: url('images/11.png')"></div>
                                <div class="spotlight-content">
                                    <div class="spotlight-label">
                                        <span class="live-dot"></span>
                                        DROPPING NOW
                                    </div>
                                    <h2 class="spotlight-title foxgirls-title">Fox Girls</h2>
                                    <p class="spotlight-desc">5,000 unique foxes. Free mint for sToadz <span class="green">stakers</span>.</p>
                                    <div class="spotlight-meta">
                                        <span class="spotlight-stat"><strong>2,847</strong> minted</span>
                                        <span class="spotlight-stat"><strong>43%</strong> claimed</span>
                                    </div>
                                    <button class="spotlight-btn" onclick="showPage('launchpad')">Mint Now →</button>
                                </div>
                            </div>

                            <!-- Slide 2: LP Earnings -->
                            <div class="explore-spotlight lp-spotlight">
                                <div class="lp-spotlight-content">
                                    <div class="lp-spotlight-left">
                                        <div class="spotlight-label">
                                            <span class="live-dot"></span>
                                            EARNING NOW
                                        </div>
                                        <h2 class="spotlight-title">Every Trade Pays You!</h2>
                                        <p class="spotlight-desc">5% platform fees. All fees flow to <span class="green">stakers</span>.</p>
                                        <button class="spotlight-btn" onclick="showPage('staking')">Start Earning →</button>
                                    </div>
                                    <div class="lp-spotlight-stats">
                                        <div class="lp-fomo-stat">
                                            <span class="lp-fomo-value" id="spotlight-stakers">--</span>
                                            <span class="lp-fomo-label">Stakers Earning</span>
                                        </div>
                                        <div class="lp-fomo-stat">
                                            <span class="lp-fomo-value green" id="spotlight-distributed">--</span>
                                            <span class="lp-fomo-label">POND Distributed</span>
                                        </div>
                                        <div class="lp-fomo-stat">
                                            <span class="lp-fomo-value" id="spotlight-tvl">--</span>
                                            <span class="lp-fomo-label">Total Value Locked</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Carousel Dots -->
                        <div class="spotlight-dots">
                            <button class="spotlight-dot active" onclick="goToSlide(0)"></button>
                            <button class="spotlight-dot" onclick="goToSlide(1)"></button>
                        </div>
                    </div>

                    <!-- Featured Collections -->
                    <div class="section-block">
                        <div class="section-header">
                            <h2 class="section-title">Featured Collections</h2>
                            <span class="view-all" onclick="showPage('collections')">View All →</span>
                        </div>
                        <div class="scroll-container" id="collections-scroll"></div>
                    </div>

                    <!-- Featured Artist NFTs -->
                    <div class="section-block" id="featured-nfts-section" style="display: none;">
                        <div class="section-header">
                            <h2 class="section-title">⭐ Featured</h2>
                            <span class="view-all" onclick="showPage('artists')">View All Artists →</span>
                        </div>
                        <div class="nft-grid" id="featured-nfts-grid"></div>
                    </div>

                    <!-- Live Auctions -->
                    <div class="section-block">
                        <div class="section-header">
                            <h2 class="section-title">Live Auctions</h2>
                            <span class="view-all">View All →</span>
                        </div>
                        <div class="auctions-grid" id="auctions-grid"></div>
                    </div>

                    <!-- Trending NFTs -->
                    <div class="section-block">
                        <div class="section-header">
                            <h2 class="section-title">Trending</h2>
                            <span class="view-all">View All →</span>
                        </div>
                        <div class="nft-grid" id="nft-grid"></div>
                    </div>

                    <!-- Simple LP CTA -->
                    <div class="lp-cta-banner">
                        <div class="lp-cta-content">
                            <h3>💧 Earn from every trade</h3>
                            <p>Add liquidity to the POND pool. Stake NFTs for bonus multipliers.</p>
                        </div>
                        <button class="lp-cta-btn" onclick="showPage('staking')">Start Earning →</button>
                    </div>
                </div>
            </section>
        </div>

        <!-- LEADERBOARD PAGE -->
        <div id="page-socials" class="page">
            <section class="page-hero socials-hero">
                <div class="container">
                    <div class="page-hero-content">
                        <span class="hero-badge" style="background: linear-gradient(135deg, var(--accent), var(--teal)); color: #000;">📣 RACE TO THE CHEST</span>
                        <h1>Share. Earn. Win.</h1>
                        <p>Every share moves you closer to the prize. Top 3 split the pot every week.</p>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container" style="max-width: 1100px;">
                    
                    <!-- Race Visualization -->
                    <div class="race-arena" id="race-arena">
                        <canvas class="race-canvas" id="race-canvas"></canvas>
                        
                        <div class="race-center-prize">
                            <div class="prize-chest">🏆</div>
                            <div class="prize-amount" id="prize-amount">10,000 POND</div>
                            <div class="prize-label">Weekly Prize</div>
                        </div>
                        
                        <div class="race-info">
                            <div class="race-info-title">
                                <span class="live"></span>
                                <span>Live Race</span>
                            </div>
                            <div class="race-countdown" id="race-countdown">6d 23h 45m</div>
                        </div>
                        
                        <div class="your-position" id="your-position" style="display: none;">
                            <div class="your-position-label">Your Rank</div>
                            <div class="your-position-rank" id="your-rank">#1</div>
                            <div class="your-position-points" id="your-points">0 pts</div>
                        </div>
                    </div>
                    
                    <!-- Your Hub -->
                    <div class="hub-section" id="user-hub">
                        <div class="hub-header">
                            <div class="hub-title">🐸 Your Referral Hub</div>
                            <div class="hub-tier" id="user-tier">
                                <span>🥉</span>
                                <span class="tier-bronze">Bronze</span>
                            </div>
                        </div>
                        
                        <div class="hub-stats">
                            <div class="hub-stat">
                                <div class="hub-stat-value purple" id="hub-points">0</div>
                                <div class="hub-stat-label">Weekly Pts</div>
                            </div>
                            <div class="hub-stat">
                                <div class="hub-stat-value" id="hub-referrals">0</div>
                                <div class="hub-stat-label">Referrals</div>
                            </div>
                            <div class="hub-stat">
                                <div class="hub-stat-value" id="hub-sales">0</div>
                                <div class="hub-stat-label">Sales</div>
                            </div>
                            <div class="hub-stat">
                                <div class="hub-stat-value gold" id="hub-earnings">0</div>
                                <div class="hub-stat-label">FLR Earned</div>
                            </div>
                            <div class="hub-stat">
                                <div class="hub-stat-value" id="hub-clicks">0</div>
                                <div class="hub-stat-label">Clicks</div>
                            </div>
                        </div>
                        
                        <div class="referral-box">
                            <div class="referral-input" id="referral-link">Connect wallet to get your referral link</div>
                            <button class="referral-btn primary" onclick="copyReferralLink()">📋 Copy Link</button>
                            <button class="referral-btn twitter" onclick="shareToTwitterGeneral()">𝕏 Share</button>
                        </div>
                    </div>
                    
                    <!-- Leaderboards -->
                    <div class="socials-grid">
                        <!-- Weekly Race -->
                        <div class="social-lb">
                            <div class="social-lb-header">
                                <div>
                                    <div class="social-lb-title">🏁 Weekly Race</div>
                                    <div class="social-lb-subtitle">Points reset every Sunday</div>
                                </div>
                            </div>
                            <div class="social-lb-list" id="weekly-leaderboard">
                                <div class="social-empty">
                                    <div class="social-empty-icon">🏁</div>
                                    <p>Race starts when you share.<br>Be the first!</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- All-Time Earners -->
                        <div class="social-lb">
                            <div class="social-lb-header">
                                <div>
                                    <div class="social-lb-title">💰 Top Earners</div>
                                    <div class="social-lb-subtitle">All-time referral earnings</div>
                                </div>
                            </div>
                            <div class="social-lb-list" id="earnings-leaderboard">
                                <div class="social-empty">
                                    <div class="social-empty-icon">💰</div>
                                    <p>Earn 1% of every sale<br>from your referrals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- How It Works -->
                    <div class="how-it-works">
                        <div class="how-step">
                            <div class="how-step-icon">🔗</div>
                            <div class="how-step-title">Get Your Link</div>
                            <div class="how-step-desc">Connect wallet to generate your unique referral link</div>
                        </div>
                        <div class="how-step">
                            <div class="how-step-icon">📣</div>
                            <div class="how-step-title">Share Everywhere</div>
                            <div class="how-step-desc">Post on Twitter, Discord, anywhere. Each click = 1 point</div>
                        </div>
                        <div class="how-step">
                            <div class="how-step-icon">💵</div>
                            <div class="how-step-title">Earn 1% Forever</div>
                            <div class="how-step-desc">Get 1% of every NFT sale from people you referred</div>
                        </div>
                        <div class="how-step">
                            <div class="how-step-icon">🏆</div>
                            <div class="how-step-title">Win Weekly</div>
                            <div class="how-step-desc">Top 3 racers split 10,000 POND every Sunday</div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>

        <!-- LAUNCHPAD PAGE -->
        <div id="page-launchpad" class="page">
            <section class="launchpad-hero">
                <div class="container">
                    <div class="launchpad-badge">
                        <span class="dot"></span>
                        <span>NFT LAUNCHPAD</span>
                    </div>
                    <h1>Upcoming <span class="green">Drops</span></h1>
                    <p>Free mints for stakers, delegators, and LP providers</p>
                </div>
            </section>

            <section class="section">
                <div class="container" style="max-width: 800px;">
                    <!-- Featured Drop -->
                    <div class="featured-drop">
                        <div class="featured-drop-img">
                            <img src="images/1.png" alt="Fox Girls">
                        </div>
                        <div class="featured-drop-info">
                            <div class="featured-drop-badge">🔥 FIRST DROP</div>
                            <h2>Fox Girls</h2>
                            <p class="subtitle">5,000 unique • Hand-crafted art • Stakeable</p>
                            
                            <div class="drop-options">
                                <div class="drop-option free">
                                    <div class="label">FREE MINT</div>
                                    <div class="value">Stake 1+ sToadz in Vault</div>
                                </div>
                                <div class="drop-option paid">
                                    <div class="label">OR PAY</div>
                                    <div class="value">100 FLR</div>
                                </div>
                            </div>

                            <a href="https://discord.gg/xtoadz" target="_blank" class="btn-discord">
                                Join Discord for Updates
                            </a>
                        </div>
                    </div>

                    <!-- Carousel -->
                    <div class="carousel-wrapper">
                        <div class="drop-carousel">
                            <div class="carousel-item"><img src="images/1.png" alt=""></div>
                            <div class="carousel-item"><img src="images/2.png" alt=""></div>
                            <div class="carousel-item"><img src="images/3.png" alt=""></div>
                            <div class="carousel-item"><img src="images/4.png" alt=""></div>
                            <div class="carousel-item"><img src="images/5.png" alt=""></div>
                            <div class="carousel-item"><img src="images/6.png" alt=""></div>
                            <div class="carousel-item"><img src="images/7.png" alt=""></div>
                            <div class="carousel-item"><img src="images/8.png" alt=""></div>
                            <div class="carousel-item"><img src="images/9.png" alt=""></div>
                            <div class="carousel-item"><img src="images/10.png" alt=""></div>
                            <!-- Duplicate for seamless loop -->
                            <div class="carousel-item"><img src="images/1.png" alt=""></div>
                            <div class="carousel-item"><img src="images/2.png" alt=""></div>
                            <div class="carousel-item"><img src="images/3.png" alt=""></div>
                            <div class="carousel-item"><img src="images/4.png" alt=""></div>
                            <div class="carousel-item"><img src="images/5.png" alt=""></div>
                            <div class="carousel-item"><img src="images/6.png" alt=""></div>
                            <div class="carousel-item"><img src="images/7.png" alt=""></div>
                            <div class="carousel-item"><img src="images/8.png" alt=""></div>
                            <div class="carousel-item"><img src="images/9.png" alt=""></div>
                            <div class="carousel-item"><img src="images/10.png" alt=""></div>
                        </div>
                    </div>

                    <!-- Surprise Drops -->
                    <div class="surprise-banner">
                        <div class="surprise-left">
                            <span class="emoji">🎲</span>
                            <div>
                                <p>Surprise Drops</p>
                                <small>Unannounced drops can happen anytime. Stay ready.</small>
                            </div>
                        </div>
                        <div class="surprise-badge-box">???</div>
                    </div>

                    <!-- Schedule -->
                    <h3 class="schedule-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        Drop Schedule
                    </h3>
                    
                    <div class="schedule-list">
                        <div class="month-label">DECEMBER</div>

                        <div class="drop-item active">
                            <div class="drop-item-img">
                                <img src="images/1.png" alt="">
                            </div>
                            <div class="drop-item-info">
                                <h4>Fox Girls</h4>
                                <p>5,000 supply</p>
                            </div>
                            <div class="drop-item-price">
                                <div class="free">FREE: Stake 1+ sToadz in Vault</div>
                                <div class="paid">or 100 FLR</div>
                            </div>
                        </div>

                        <div class="drop-item">
                            <div class="drop-item-img">
                                <img src="images/geometric.png" alt="">
                            </div>
                            <div class="drop-item-info">
                                <h4>Geometric Toadz</h4>
                                <p>10,000 supply</p>
                            </div>
                            <div class="drop-item-price">
                                <div class="free">FREE: 25K Staked in LP</div>
                                <div class="paid">or 50 FLR</div>
                            </div>
                            <button class="remind-btn" onclick="this.innerHTML='✓ Reminded'; this.classList.add('reminded')">🔔 Remind</button>
                        </div>

                        <div class="month-label">JANUARY</div>

                        <div class="drop-item">
                            <div class="drop-item-img">
                                <img src="images/neon.png" alt="">
                            </div>
                            <div class="drop-item-info">
                                <h4>Neon Dreams</h4>
                                <p>3,333 supply</p>
                            </div>
                            <div class="drop-item-price">
                                <div class="free">FREE: Stake Loft or SBC</div>
                                <div class="paid">or 100 FLR</div>
                            </div>
                            <button class="remind-btn" onclick="this.innerHTML='✓ Reminded'; this.classList.add('reminded')">🔔 Remind</button>
                        </div>

                        <div class="drop-item">
                            <div class="drop-item-img">
                                <img src="images/pixel.png" alt="">
                            </div>
                            <div class="drop-item-info">
                                <h4>Pixel Warriors</h4>
                                <p>8,888 supply</p>
                            </div>
                            <div class="drop-item-price">
                                <div class="free">FREE: 30K Staked in LP</div>
                                <div class="paid">or 75 FLR</div>
                            </div>
                            <button class="remind-btn" onclick="this.innerHTML='✓ Reminded'; this.classList.add('reminded')">🔔 Remind</button>
                        </div>

                        <div class="month-label">FEBRUARY</div>

                        <div class="drop-item">
                            <div class="drop-item-img">
                                <img src="images/cyber.png" alt="">
                            </div>
                            <div class="drop-item-info">
                                <h4>Cyber Punks</h4>
                                <p>5,555 supply</p>
                            </div>
                            <div class="drop-item-price">
                                <div class="free">FREE: Hold 100k+ POND</div>
                                <div class="paid">or 115 FLR</div>
                            </div>
                            <button class="remind-btn" onclick="this.innerHTML='✓ Reminded'; this.classList.add('reminded')">🔔 Remind</button>
                        </div>

                        <div class="drop-item">
                            <div class="drop-item-img">
                                <img src="images/apes.png" alt="">
                            </div>
                            <div class="drop-item-info">
                                <h4>Astro Apes</h4>
                                <p>10,000 supply</p>
                            </div>
                            <div class="drop-item-price">
                                <div class="free">FREE: 1+ sToadz, Loft, SBC in Vault</div>
                                <div class="paid">or 200 FLR</div>
                            </div>
                            <button class="remind-btn" onclick="this.innerHTML='✓ Reminded'; this.classList.add('reminded')">🔔 Remind</button>
                        </div>

                        <div class="month-label">MARCH+</div>

                        <div class="drop-item exclusive">
                            <div class="drop-item-img">
                                <img src="images/genesis.gif" alt="">
                            </div>
                            <div class="drop-item-info">
                                <h4>Genesis Collection</h4>
                                <p>1,000 ultra-rare</p>
                            </div>
                            <span class="exclusive-badge">EXCLUSIVE</span>
                            <div class="genesis-reqs">
                                <div class="title">FREE with ALL:</div>
                                <div class="reqs">
                                    <span>✓ 5+ sToadz in Vault</span>
                                    <span>✓ 5+ Loft in Vault</span>
                                    <span>✓ 5+ SBC in Vault</span>
                                </div>
                                <div class="divider">
                                    <span>or 1,000 FLR</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom CTA -->
                    <div class="launchpad-cta">
                        <p>Get free drops by participating in the ecosystem</p>
                        <a href="#" class="btn-delegate" onclick="showPage('staking'); return false;">
                            Start Staking →
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <!-- MINT PAGE -->
        <div id="page-mint" class="page">
            <div class="mint-container">
                <!-- Left: NFT Preview -->
                <div class="mint-preview">
                    <div class="mint-preview-card">
                        <div class="mint-preview-img">
                            <img src="images/1.png" alt="Fox Girls" id="mint-preview-image">
                            <div class="mint-preview-badge">?</div>
                        </div>
                        <div class="mint-reveal-text">Your NFT will be revealed after you mint</div>
                    </div>
                    
                    <!-- Recent Mints Feed -->
                    <div class="recent-mints">
                        <h4>🔥 Live Mints</h4>
                        <div class="recent-mints-list" id="recent-mints-list">
                            <div class="recent-mint-item">
                                <img src="https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/421.png">
                                <div class="recent-mint-info">
                                    <span class="mint-user">0x8a3...f2c1</span>
                                    <span class="mint-rarity epic">EPIC</span>
                                </div>
                                <span class="mint-time">just now</span>
                            </div>
                            <div class="recent-mint-item">
                                <img src="https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/89.png">
                                <div class="recent-mint-info">
                                    <span class="mint-user">0x3b1...a8d2</span>
                                    <span class="mint-rarity rare">RARE</span>
                                </div>
                                <span class="mint-time">2s ago</span>
                            </div>
                            <div class="recent-mint-item">
                                <img src="https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/156.png">
                                <div class="recent-mint-info">
                                    <span class="mint-user">FrogKing</span>
                                    <span class="mint-rarity legendary">LEGENDARY</span>
                                </div>
                                <span class="mint-time">5s ago</span>
                            </div>
                            <div class="recent-mint-item">
                                <img src="https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/2891.png">
                                <div class="recent-mint-info">
                                    <span class="mint-user">0x7c2...d4e9</span>
                                    <span class="mint-rarity common">COMMON</span>
                                </div>
                                <span class="mint-time">8s ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Mint Info & Actions -->
                <div class="mint-info">
                    <div class="mint-header">
                        <div class="mint-live-badge">
                            <span class="live-dot red"></span>
                            MINTING NOW
                        </div>
                        <h1>Fox Girls</h1>
                        <p class="mint-desc">5,000 unique hand-crafted foxes with LP boost utility. Each NFT adds +0.01% to +0.10% to your staking rewards.</p>
                    </div>

                    <!-- Progress + Countdown Combined -->
                    <div class="mint-progress">
                        <div class="mint-progress-bar">
                            <div class="mint-progress-fill" style="width: 57%"></div>
                        </div>
                        <div class="mint-progress-stats">
                            <span><strong>2,847</strong> / 5,000 minted</span>
                            <span class="countdown-inline">
                                Ends in <span id="countdown-hours">18</span>:<span id="countdown-mins">41</span>:<span id="countdown-secs">28</span>
                            </span>
                        </div>
                    </div>

                    <!-- Rarity Breakdown -->
                    <div class="rarity-breakdown">
                        <h4>Rarity & LP Boost</h4>
                        <div class="rarity-grid">
                            <div class="rarity-item">
                                <span class="rarity-tag common">COMMON</span>
                                <span class="rarity-chance">60%</span>
                                <span class="rarity-boost">+0.01%</span>
                            </div>
                            <div class="rarity-item">
                                <span class="rarity-tag rare">RARE</span>
                                <span class="rarity-chance">25%</span>
                                <span class="rarity-boost">+0.03%</span>
                            </div>
                            <div class="rarity-item">
                                <span class="rarity-tag epic">EPIC</span>
                                <span class="rarity-chance">12%</span>
                                <span class="rarity-boost">+0.05%</span>
                            </div>
                            <div class="rarity-item">
                                <span class="rarity-tag legendary">LEGENDARY</span>
                                <span class="rarity-chance">3%</span>
                                <span class="rarity-boost">+0.10%</span>
                            </div>
                        </div>
                    </div>

                    <!-- Mint Options -->
                    <div class="mint-options">
                        <h4>Mint Options</h4>
                        <div class="mint-option free-mint active" onclick="selectMintOption(this, 'free')">
                            <div class="mint-option-left">
                                <span class="mint-option-badge">✓ ELIGIBLE</span>
                                <span class="mint-option-title">Free Mint</span>
                                <span class="mint-option-req">3 sToadz staked • <span class="green">7/10 remaining</span></span>
                            </div>
                            <div class="mint-option-right">
                                <span class="mint-option-price">FREE</span>
                            </div>
                        </div>
                        <div class="mint-option paid-mint" onclick="selectMintOption(this, 'paid')">
                            <div class="mint-option-left">
                                <span class="mint-option-title">Public Mint</span>
                                <span class="mint-option-req">Anyone • Unlimited</span>
                            </div>
                            <div class="mint-option-right">
                                <span class="mint-option-price">500 FLR</span>
                                <span class="mint-option-alt">or 10K POND</span>
                            </div>
                        </div>
                    </div>

                    <!-- Quantity Selector -->
                    <div class="mint-quantity">
                        <span class="qty-label">Quantity</span>
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="adjustQty(-1)">−</button>
                            <span class="qty-value" id="mint-qty">1</span>
                            <button class="qty-btn" onclick="adjustQty(1)">+</button>
                        </div>
                        <span class="qty-max" id="qty-max-label">Max: 10 per wallet</span>
                    </div>

                    <!-- Mint Button -->
                    <button class="mint-btn" onclick="doMint()">
                        <span class="mint-btn-text">Mint Now</span>
                        <span class="mint-btn-price">FREE</span>
                    </button>

                    <!-- Boost Reminder -->
                    <div class="mint-boost-reminder">
                        ⚡ Remember to stake your NFT to activate LP boost
                    </div>

                    <!-- Share (shows after mint) -->
                    <div class="mint-share" id="mint-share" style="display: none;">
                        <span>Share your mint!</span>
                        <div class="share-buttons">
                            <button class="share-btn twitter" onclick="shareMint('twitter')">𝕏 Post</button>
                            <button class="share-btn copy" onclick="shareMint('copy')">📋 Copy</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Toast Container -->
            <div class="toast-container" id="toast-container"></div>
        </div>

        <!-- STAKING PAGE -->
        <div id="page-staking" class="page">
            <section class="staking-hero">
                <div class="container">
                    <div class="staking-hero-content">
                        <h1>Stake & <span class="green">Earn</span></h1>
                        <p>Add liquidity, stake NFTs, earn from every trade</p>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container" style="max-width: 800px;">
                    
                    <!-- Stats Row -->
                    <div class="staking-stats-row">
                        <div class="staking-stat-pill">
                            <span class="stat-big" id="staking-mcap">--</span>
                            <span class="stat-label">POND MCAP</span>
                        </div>
                        <div class="staking-stat-pill highlight">
                            <span class="stat-big green" id="pool-apy">--</span>
                            <span class="stat-label">APY (180d)</span>
                        </div>
                        <div class="staking-stat-pill">
                            <span class="stat-big" id="pool-tvl">--</span>
                            <span class="stat-label">TVL (FLR)</span>
                        </div>
                        <div class="staking-stat-pill">
                            <span class="stat-big" id="pool-nfts-staked">--</span>
                            <span class="stat-label">NFTs Staked</span>
                        </div>
                    </div>

                    <!-- LP Card -->
                    <div class="staking-card">
                        <div class="staking-card-header">
                            <h2>💧 Add Liquidity</h2>
                            <span class="card-subtitle">Deposit FLR + POND, earn from all platform fees</span>
                        </div>

                        <!-- Lock Tiers -->
                        <div class="step-label">1. Pick your lock period</div>
                        <div class="lock-tier-row">
                            <div class="lock-tier-option active" onclick="selectLockTier(this, 0)">
                                <span class="tier-label">30 Days</span>
                                <span class="tier-mult">1x</span>
                            </div>
                            <div class="lock-tier-option" onclick="selectLockTier(this, 1)">
                                <span class="tier-label">90 Days</span>
                                <span class="tier-mult">1.5x</span>
                            </div>
                            <div class="lock-tier-option" onclick="selectLockTier(this, 2)">
                                <span class="tier-label">180 Days</span>
                                <span class="tier-mult">2.5x</span>
                            </div>
                        </div>

                        <!-- Deposit -->
                        <div class="step-label">2. Set your deposit amount</div>
                        <div class="deposit-section">
                            <div class="deposit-inputs-grid">
                                <div class="deposit-input-group">
                                    <label>FLR Amount</label>
                                    <div class="deposit-input-row">
                                        <input type="number" placeholder="0.00" id="flr-input" oninput="calculatePondRequired()">
                                        <span class="token-label">FLR</span>
                                    </div>
                                    <div class="deposit-info">
                                        <span id="flr-balance">Balance: -- FLR</span>
                                        <button class="max-btn" onclick="setMaxFLR()">MAX</button>
                                    </div>
                                </div>
                                <div class="deposit-input-group">
                                    <label>POND Required</label>
                                    <div class="deposit-input-row">
                                        <input type="number" placeholder="0.00" id="pond-input" readonly>
                                        <span class="token-label pond">POND</span>
                                    </div>
                                    <div class="deposit-info">
                                        <span id="pond-balance">Balance: -- POND</span>
                                        <span class="pond-ratio">0.5x ratio (asymmetric)</span>
                                    </div>
                                </div>
                            </div>
                            <button class="deposit-btn" onclick="doAddLiquidity()">Add Liquidity</button>
                        </div>

                        <div class="card-note">
                            Auto-wrapped to WFLR and delegated to sToadz FTSO. 70/20/10 fee split.
                        </div>
                    </div>

                    <!-- Swap Card -->
                    <div class="staking-card">
                        <div class="staking-card-header">
                            <h2>⚡ Swap</h2>
                            <span class="fee-badge">1% fee</span>
                        </div>
                        
                        <div class="swap-section">
                            <div class="swap-field">
                                <label>From</label>
                                <div class="swap-input-row">
                                    <input type="number" placeholder="0.00" id="swap-from-input" oninput="calculateSwapOutput()">
                                    <select id="swap-from-token" onchange="swapTokensChanged()">
                                        <option value="FLR">FLR</option>
                                        <option value="POND">POND</option>
                                    </select>
                                </div>
                            </div>
                            <div class="swap-arrow" onclick="flipSwapTokens()">↓</div>
                            <div class="swap-field">
                                <label>To</label>
                                <div class="swap-input-row">
                                    <input type="number" placeholder="0.00" id="swap-to-input" readonly>
                                    <select id="swap-to-token" onchange="swapTokensChanged()">
                                        <option value="POND">POND</option>
                                        <option value="FLR">FLR</option>
                                    </select>
                                </div>
                            </div>
                            <button class="swap-btn" onclick="doSwap()">Swap</button>
                        </div>
                    </div>

                    <!-- NFT Staking Info -->
                    <div class="nft-staking-banner">
                        <div class="nft-banner-left">
                            <h3>🖼 NFT Staking Bonus</h3>
                            <p>Each staked NFT = <strong>+0.001x</strong> multiplier (max +1.0x)</p>
                            <p class="muted">Max possible: 2.5x (lock) + 1.0x (NFTs) = <strong>3.5x</strong></p>
                        </div>
                    </div>

                    <!-- NFT Pools -->
                    <h3 class="pools-title">Stakeable Collections</h3>
                    <div class="staking-pools" id="staking-pools"></div>

                    <!-- Vault Section (Songbird Only) -->
                    <div class="vault-section songbird-only hidden" id="vault-section">
                        <div class="vault-card">
                            <div class="vault-header">
                                <div class="vault-icon">🔐</div>
                                <div class="vault-title-group">
                                    <h3>Forever Vault</h3>
                                    <span class="vault-badge">SONGBIRD ONLY</span>
                                </div>
                            </div>
                            <p class="vault-desc">Lock your Songbird NFTs <strong>permanently</strong> and earn POND drip forever. Plus, all vault members receive <span class="green">FREE airdrops</span> of upcoming Flare collections!</p>
                            
                            <div class="vault-airdrop-banner">
                                <div class="airdrop-title">🎁 Vault Member Airdrops</div>
                                <div class="airdrop-items">
                                    <div class="airdrop-item">
                                        <span class="airdrop-name">Flare Toadz</span>
                                        <span class="airdrop-status upcoming">Coming Soon</span>
                                    </div>
                                    <div class="airdrop-item">
                                        <span class="airdrop-name">Property Collection</span>
                                        <span class="airdrop-status upcoming">Coming Soon</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="vault-stats">
                                <div class="vault-stat">
                                    <span class="vault-stat-value">0</span>
                                    <span class="vault-stat-label">NFTs Locked</span>
                                </div>
                                <div class="vault-stat">
                                    <span class="vault-stat-value green">∞</span>
                                    <span class="vault-stat-label">Drip Duration</span>
                                </div>
                                <div class="vault-stat">
                                    <span class="vault-stat-value">0</span>
                                    <span class="vault-stat-label">Vault Members</span>
                                </div>
                            </div>
                            
                            <div class="vault-collections">
                                <span class="vault-collection-label">Eligible Collections:</span>
                                <div class="vault-collection-tags">
                                    <span class="vault-tag">sToadz</span>
                                    <span class="vault-tag">Songbird City</span>
                                    <span class="vault-tag">Luxury Lofts</span>
                                </div>
                            </div>
                            
                            <div class="vault-warning">
                                ⚠️ <strong>Permanent Lock:</strong> NFTs locked in the Forever Vault cannot be withdrawn. This is irreversible.
                            </div>
                            
                            <button class="vault-deposit-btn" onclick="openVaultModal()">Select NFTs to Lock Forever</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ARTISTS PAGE -->
        <div id="page-artists" class="page">
            <!-- Artists Hero -->
            <section class="page-hero artists-hero">
                <div class="container">
                    <div class="page-hero-content">
                        <span class="hero-badge">🎨 CREATOR HUB</span>
                        <h1>Artist Storefronts</h1>
                        <p>Discover creators and launch your own storefront</p>
                    </div>
                    <div style="text-align: center; margin-top: 20px;">
                        <button class="hero-cta-btn" onclick="openCreateStorefront()">
                            Create Storefront <span style="opacity: 0.7; font-size: 12px;">10 FLR</span>
                        </button>
                    </div>
                </div>
            </section>

            <!-- Featured Artists -->
            <section class="section">
                <div class="container">
                    <div class="featured-artists-grid" id="storefronts-grid">
                        <!-- Hardcoded featured artists -->
                        <div class="featured-artist-card" onclick="viewStorefront('0xcEA86bBdb5cd33ddbA8dC0ed3c838605EeF7c715')">
                            <div class="fa-banner" style="background-image: url('https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/421.png')"></div>
                            <div class="fa-content">
                                <div class="fa-avatar emoji-avatar">
                                    <span style="font-size: 40px;">🍝</span>
                                </div>
                                <div class="fa-badge">⭐ FEATURED</div>
                                <h3 class="fa-name">PastaPrimavera</h3>
                                <p class="fa-style">Italian-Inspired Digital Art</p>
                                <div class="fa-stats">
                                    <div class="fa-stat"><span class="fa-stat-value">--</span><span class="fa-stat-label">Items</span></div>
                                    <div class="fa-stat"><span class="fa-stat-value">--</span><span class="fa-stat-label">Volume</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="featured-artist-card" onclick="viewStorefront('freak')">
                            <div class="fa-banner" style="background-image: url('https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/667.png')"></div>
                            <div class="fa-content">
                                <div class="fa-avatar">
                                    <img src="https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/666.png" alt="">
                                </div>
                                <div class="fa-badge hot">🔥 HOT</div>
                                <h3 class="fa-name">Freak</h3>
                                <p class="fa-style">Chaos & Dark Surrealism</p>
                                <div class="fa-stats">
                                    <div class="fa-stat"><span class="fa-stat-value">--</span><span class="fa-stat-label">Items</span></div>
                                    <div class="fa-stat"><span class="fa-stat-value">--</span><span class="fa-stat-label">Volume</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ARTIST STOREFRONT (Dynamic) -->
        <div id="page-artist-storefront" class="page">
            <!-- Banner - populated dynamically -->
            <div class="artist-banner" id="sf-banner-display">
                <div class="artist-banner-overlay"></div>
            </div>

            <div class="container">
                <!-- Artist Profile Card -->
                <section class="artist-profile-section">
                    <div class="artist-profile-card" id="sf-profile-card">
                        <!-- Populated by loadStorefrontPage() -->
                        <div class="empty-state">
                            <div class="empty-icon">⏳</div>
                            <p>Loading artist...</p>
                        </div>
                    </div>
                </section>

                <!-- Owner/Admin Actions (shown conditionally) -->
                <div id="sf-owner-actions" class="sf-owner-actions" style="display: none;">
                    <button class="sf-action-btn edit" onclick="openEditStorefront()">✏️ Edit Storefront</button>
                    <button class="sf-action-btn upload" onclick="openUploadNFT()">📤 Upload NFT</button>
                    <button class="sf-action-btn bulk" onclick="openBulkUpload()">📦 Bulk Upload</button>
                    <button class="sf-action-btn announce" onclick="openAnnouncementModal()">📢 Announcement</button>
                    <button class="sf-action-btn verify" id="sf-verify-btn" style="display: none;" onclick="toggleVerify()">✓ Verify</button>
                    <button class="sf-action-btn delete" id="sf-delete-btn" style="display: none;" onclick="deleteStorefront()">🗑️ Delete</button>
                </div>

                <!-- Announcement (dynamic) -->
                <div class="artist-announcement" id="sf-announcement" style="display: none;">
                    <div class="announcement-header">
                        <span class="announcement-icon">📢</span>
                        <span class="announcement-title">Announcement</span>
                        <span class="announcement-time" id="sf-announcement-time"></span>
                    </div>
                    <p class="announcement-text" id="sf-announcement-text"></p>
                </div>

                <!-- Main Content Grid -->
                <div class="artist-content-grid">
                    <!-- Left: Main Content -->
                    <div class="artist-main">
                        <!-- Tabs & NFTs -->
                        <div class="artist-tabs" id="sf-tabs">
                            <button class="artist-tab active" onclick="filterStorefrontNFTs('all')">All Items</button>
                            <button class="artist-tab" onclick="filterStorefrontNFTs('sale')">On Sale</button>
                            <button class="artist-tab" onclick="filterStorefrontNFTs('auction')">Auction</button>
                            <button class="artist-tab" onclick="filterStorefrontNFTs('sold')">Sold</button>
                        </div>
                        <div class="nft-grid" id="sf-nft-grid">
                            <div class="empty-state" style="grid-column: 1/-1;">
                                <div class="empty-icon">🎨</div>
                                <p>No items yet</p>
                                <span id="sf-empty-hint">Artist hasn't uploaded any NFTs</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Sidebar -->
                    <aside class="artist-sidebar">
                        <!-- Activity Feed -->
                        <div class="artist-activity-card">
                            <h4 class="sidebar-card-title"><span class="live-dot"></span>Activity</h4>
                            <div class="artist-activity-list" id="sf-activity-list">
                                <div class="artist-activity-item">
                                    <span class="activity-icon sale">💰</span>
                                    <div class="activity-details">
                                        <span class="activity-event">No sales yet</span>
                                        <span class="activity-amount">--</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Top Collectors -->
                        <div class="artist-collectors-card">
                            <h4 class="sidebar-card-title">🏆 Top Collectors</h4>
                            <div class="top-collectors-list" id="sf-collectors-list">
                                <div class="collector-item">
                                    <span class="collector-rank gold">1</span>
                                    <span class="collector-avatar">🐸</span>
                                    <div class="collector-info">
                                        <span class="collector-name">--</span>
                                        <span class="collector-count">0 items</span>
                                    </div>
                                </div>
                                <div class="collector-item">
                                    <span class="collector-rank silver">2</span>
                                    <span class="collector-avatar">🦊</span>
                                    <div class="collector-info">
                                        <span class="collector-name">--</span>
                                        <span class="collector-count">0 items</span>
                                    </div>
                                </div>
                                <div class="collector-item">
                                    <span class="collector-rank bronze">3</span>
                                    <span class="collector-avatar">🐱</span>
                                    <div class="collector-info">
                                        <span class="collector-name">--</span>
                                        <span class="collector-count">0 items</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>

        <!-- UPLOAD NFT MODAL -->
        <div id="upload-nft-modal" class="modal-overlay">
            <div class="modal" style="max-width: 500px; max-height: 90vh; overflow-y: auto;">
                <button class="modal-close" onclick="closeUploadNFT()">&times;</button>
                <div style="padding: 24px;">
                    <h2 style="margin-bottom: 8px;">Upload NFT</h2>
                    <p style="color: var(--text-muted); margin-bottom: 20px;">Create and list your artwork</p>
                    
                    <form id="upload-nft-form" class="apply-form">
                        <div class="form-group">
                            <label>Image or Video *</label>
                            <div id="nft-dropzone" style="border: 2px dashed var(--border); border-radius: 16px; padding: 40px 20px; text-align: center; cursor: pointer; transition: all 0.2s;" onclick="document.getElementById('nft-file-input').click()">
                                <div id="nft-preview" style="display: none; margin-bottom: 12px;">
                                    <img id="nft-preview-img" style="max-width: 200px; max-height: 200px; border-radius: 12px;">
                                    <video id="nft-preview-video" style="max-width: 200px; max-height: 200px; border-radius: 12px; display: none;" muted loop></video>
                                </div>
                                <div id="nft-dropzone-text">
                                    <div style="font-size: 48px; margin-bottom: 8px;">📤</div>
                                    <p style="margin: 0; color: var(--text);">Drop file here or click to upload</p>
                                    <small style="color: var(--text-muted);">PNG, JPG, GIF, MP4, WEBM up to 50MB</small>
                                </div>
                            </div>
                            <input type="file" id="nft-file-input" accept="image/*,video/*" style="display: none;" onchange="handleNFTFileSelect(this)">
                            <input type="hidden" id="nft-image-url" value="">
                            <input type="hidden" id="nft-file-type" value="image">
                            <div id="nft-upload-status" style="margin-top: 8px; font-size: 13px; display: none;"></div>
                        </div>
                        <div class="form-group">
                            <label>Name *</label>
                            <input type="text" id="nft-name" placeholder="My Awesome NFT" required>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea id="nft-description" placeholder="Tell the story behind this piece..." rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Price (FLR) *</label>
                            <input type="number" id="nft-price" placeholder="1000" min="1" required>
                        </div>
                        <div class="form-group">
                            <label>Sale Type</label>
                            <select id="nft-sale-type" style="width: 100%; padding: 12px; background: var(--bg-surface); border: 1px solid var(--border); border-radius: 12px; color: var(--text);">
                                <option value="fixed">Fixed Price</option>
                                <option value="auction">Auction</option>
                            </select>
                        </div>
                        <div class="form-group" id="auction-duration-group" style="display: none;">
                            <label>Auction Duration</label>
                            <select id="nft-auction-duration" style="width: 100%; padding: 12px; background: var(--bg-surface); border: 1px solid var(--border); border-radius: 12px; color: var(--text);">
                                <option value="24">24 hours</option>
                                <option value="48">48 hours</option>
                                <option value="72">72 hours</option>
                                <option value="168">7 days</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" id="nft-featured" style="width: 18px; height: 18px;">
                                <span>⭐ Feature on homepage (costs extra 5 FLR)</span>
                            </label>
                        </div>
                        <button type="submit" class="apply-submit-btn" id="nft-submit-btn">
                            Upload & List →
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- BULK UPLOAD MODAL -->
        <div id="bulk-upload-modal" class="modal-overlay">
            <div class="modal" style="max-width: 600px; max-height: 90vh; overflow-y: auto;">
                <button class="modal-close" onclick="closeBulkUpload()">&times;</button>
                <div style="padding: 24px;">
                    <h2 style="margin-bottom: 8px;">Bulk Upload</h2>
                    <p style="color: var(--text-muted); margin-bottom: 20px;">Upload multiple NFTs at once (max 20)</p>
                    
                    <div id="bulk-dropzone" style="border: 2px dashed var(--border); border-radius: 16px; padding: 40px 20px; text-align: center; cursor: pointer; transition: all 0.2s; margin-bottom: 20px;" onclick="document.getElementById('bulk-file-input').click()" ondragover="event.preventDefault(); this.style.borderColor='var(--teal)'; this.style.background='rgba(0,212,170,0.1)';" ondragleave="this.style.borderColor='var(--border)'; this.style.background='transparent';" ondrop="event.preventDefault(); this.style.borderColor='var(--border)'; this.style.background='transparent'; handleBulkFileDrop(event)">
                        <div style="font-size: 48px; margin-bottom: 8px;">📦</div>
                        <p style="margin: 0; color: var(--text);">Drop multiple files here</p>
                        <small style="color: var(--text-muted);">PNG, JPG, GIF, MP4, WEBM up to 50MB each</small>
                    </div>
                    <input type="file" id="bulk-file-input" accept="image/*,video/*" multiple style="display: none;" onchange="handleBulkFileSelect(this)">
                    
                    <div id="bulk-items-list" style="margin-bottom: 20px;"></div>
                    
                    <div class="form-group">
                        <label>Default Price (FLR)</label>
                        <input type="number" id="bulk-default-price" placeholder="1000" value="100" min="1" style="width: 100%; padding: 12px; background: var(--bg-surface); border: 1px solid var(--border); border-radius: 12px; color: var(--text);">
                    </div>
                    
                    <div class="form-group">
                        <label>Sale Type</label>
                        <select id="bulk-sale-type" style="width: 100%; padding: 12px; background: var(--bg-surface); border: 1px solid var(--border); border-radius: 12px; color: var(--text);">
                            <option value="fixed">Fixed Price</option>
                            <option value="auction">Auction</option>
                        </select>
                    </div>
                    
                    <div id="bulk-progress" style="display: none; margin-bottom: 16px;">
                        <div style="background: var(--bg-surface); border-radius: 8px; height: 8px; overflow: hidden;">
                            <div id="bulk-progress-bar" style="background: var(--teal); height: 100%; width: 0%; transition: width 0.3s;"></div>
                        </div>
                        <p id="bulk-progress-text" style="text-align: center; margin-top: 8px; font-size: 13px; color: var(--text-muted);"></p>
                    </div>
                    
                    <button type="button" class="apply-submit-btn" id="bulk-submit-btn" onclick="submitBulkUpload()" disabled>
                        Upload All →
                    </button>
                </div>
            </div>
        </div>

        <!-- EDIT STOREFRONT MODAL -->
        <div id="edit-storefront-modal" class="modal-overlay">
            <div class="modal" style="max-width: 500px;">
                <button class="modal-close" onclick="closeEditStorefront()">&times;</button>
                <div style="padding: 24px;">
                    <h2 style="margin-bottom: 20px;">Edit Storefront</h2>
                    
                    <form id="edit-storefront-form" class="apply-form">
                        <div class="form-group">
                            <label>Artist / Studio Name *</label>
                            <input type="text" id="edit-sf-name" required>
                        </div>
                        <div class="form-group">
                            <label>Tagline</label>
                            <input type="text" id="edit-sf-tagline" placeholder="Short & punchy - e.g. Digital surrealist from Tokyo" maxlength="80">
                        </div>
                        <div class="form-group">
                            <label>Bio</label>
                            <textarea id="edit-sf-bio" rows="3" placeholder="Tell your story..."></textarea>
                        </div>
                        <div class="form-group">
                            <label>Profile Picture</label>
                            <div style="display: flex; gap: 12px; align-items: flex-start;">
                                <div id="edit-sf-avatar-preview" style="width: 64px; height: 64px; min-width: 64px; border-radius: 50%; background: var(--bg-surface); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 32px; overflow: hidden;">
                                    <span style="color: var(--text-muted);">?</span>
                                </div>
                                <div style="flex: 1;">
                                    <div style="margin-bottom: 8px;">
                                        <label style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px; display: block;">Pick an emoji</label>
                                        <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('🎨')">🎨</button>
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('🖼️')">🖼️</button>
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('✨')">✨</button>
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('🔥')">🔥</button>
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('💎')">💎</button>
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('🐸')">🐸</button>
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('👾')">👾</button>
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('🍝')">🍝</button>
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('🌙')">🌙</button>
                                            <button type="button" class="emoji-pick" onclick="selectEditEmoji('⚡')">⚡</button>
                                        </div>
                                    </div>
                                    <div>
                                        <label style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px; display: block;">Or paste image URL</label>
                                        <input type="text" id="edit-sf-avatar" placeholder="https://... or IPFS link" oninput="previewEditAvatarUrl(this.value)">
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" id="edit-sf-avatar-type" value="">
                            <input type="hidden" id="edit-sf-avatar-emoji" value="">
                        </div>
                        <div class="form-group">
                            <label>Banner URL</label>
                            <input type="url" id="edit-sf-banner" placeholder="https://... or IPFS link">
                        </div>
                        <div class="form-group">
                            <label>Twitter / X</label>
                            <input type="text" id="edit-sf-twitter" placeholder="@handle">
                        </div>
                        <div class="form-group">
                            <label>Website</label>
                            <input type="url" id="edit-sf-website" placeholder="https://yoursite.com">
                        </div>
                        <button type="submit" class="apply-submit-btn">
                            Save Changes →
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- ANNOUNCEMENT MODAL -->
        <div id="announcement-modal" class="modal-overlay">
            <div class="modal" style="max-width: 500px;">
                <button class="modal-close" onclick="closeAnnouncementModal()">&times;</button>
                <div style="padding: 24px;">
                    <h2 style="margin-bottom: 8px;">📢 Post Announcement</h2>
                    <p style="color: var(--text-muted); margin-bottom: 20px;">Share news with your collectors</p>
                    
                    <form id="announcement-form" class="apply-form">
                        <div class="form-group">
                            <label>Announcement *</label>
                            <textarea id="announcement-text" placeholder="New drop coming this Friday! Don't miss it! 🔥" rows="4" required style="width: 100%; padding: 12px; background: var(--bg-surface); border: 1px solid var(--border); border-radius: 12px; color: var(--text); resize: vertical;"></textarea>
                        </div>
                        <button type="submit" class="apply-submit-btn">
                            Post Announcement →
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- MY NFTS PAGE -->
        <div id="page-my-nfts" class="page">
            <!-- Not Connected State -->
            <div id="my-nfts-not-connected" class="connect-prompt-section">
                <div class="connect-prompt-card">
                    <div class="connect-prompt-icon">👤</div>
                    <h2>Connect Your Wallet</h2>
                    <p>Connect your wallet to view your NFTs, track staking rewards, and manage your collection.</p>
                    <button class="connect-prompt-btn" onclick="openConnectModal()">Connect Wallet →</button>
                </div>
            </div>

            <!-- Connected State (hidden by default) -->
            <div id="my-nfts-connected" style="display: none;">
                <!-- My NFTs Hero -->
                <section class="page-hero my-nfts-hero">
                    <div class="container">
                        <div class="my-profile-header">
                            <div class="my-avatar">
                                <span>👤</span>
                            </div>
                            <div class="my-profile-info">
                                <h1>My Collection</h1>
                                <p class="wallet-address" id="my-wallet-address">0x1234...5678</p>
                            </div>
                        </div>
                        <div class="hero-stats-mini">
                            <div class="mini-stat">
                                <span class="mini-value" id="my-owned-count">--</span>
                                <span class="mini-label">Owned</span>
                            </div>
                            <div class="mini-stat">
                                <span class="mini-value green" id="my-staked-count">--</span>
                                <span class="mini-label">Staked</span>
                            </div>
                            <div class="mini-stat">
                                <span class="mini-value purple" id="my-listed-count">--</span>
                                <span class="mini-label">Listed</span>
                            </div>
                            <div class="mini-stat">
                                <span class="mini-value gold" id="my-offers-count">--</span>
                                <span class="mini-label">Offers</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="container">
                    <!-- Dashboard Cards -->
                    <div class="my-dashboard-grid">
                        <!-- Portfolio Value -->
                        <div class="dashboard-card portfolio-card">
                            <div class="dashboard-card-header">
                                <span class="dashboard-icon">💰</span>
                                <h4>Portfolio Value</h4>
                            </div>
                            <div class="portfolio-value-main">
                                <span class="portfolio-amount" id="my-portfolio-value">--</span>
                                <span class="portfolio-token">FLR</span>
                            </div>
                            <div class="portfolio-change">--</div>
                        </div>

                        <!-- Your Rank -->
                        <div class="dashboard-card rank-card">
                            <div class="dashboard-card-header">
                                <span class="dashboard-icon">🏆</span>
                                <h4>Your Rank</h4>
                            </div>
                            <div class="your-rank-display">
                                <span class="rank-number" id="my-rank">--</span>
                                <span class="rank-category">NFT Stakers</span>
                            </div>
                        </div>

                        <!-- Earnings -->
                        <div class="dashboard-card earnings-card">
                            <div class="dashboard-card-header">
                                <span class="dashboard-icon">📈</span>
                                <h4>POND Earned</h4>
                            </div>
                            <div class="earnings-value">
                                <span class="earnings-amount green" id="my-pond-earned">--</span>
                                <span class="earnings-token">POND</span>
                            </div>
                        </div>

                        <!-- Recent Activity -->
                        <div class="dashboard-card activity-card">
                            <div class="dashboard-card-header">
                                <span class="dashboard-icon">⚡</span>
                                <h4>Recent Activity</h4>
                            </div>
                            <div class="my-activity-list" id="my-activity-list">
                                <div class="empty-state" style="padding: 20px;"><p>No activity yet</p></div>
                            </div>
                        </div>
                    </div>

                    <section class="section">
                        <div class="tabs" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                            <div style="display: flex; gap: 8px;">
                                <button class="tab active">All</button>
                                <button class="tab">Staked</button>
                                <button class="tab">Listed</button>
                                <button class="tab">Offers Received</button>
                                <button class="tab">My Offers</button>
                            </div>
                            <div style="display: flex; gap: 8px;">
                                <button class="bulk-action-btn" onclick="toggleBulkSelect()">☑️ Select</button>
                                <button class="bulk-action-btn" id="bulk-transfer-btn" onclick="bulkTransfer()" style="display: none;">📤 Transfer</button>
                                <button class="bulk-action-btn" id="bulk-list-btn" onclick="bulkList()" style="display: none;">💰 List</button>
                            </div>
                        </div>
                        <div class="nft-grid" id="my-nfts-grid"></div>
                    </section>
                </div>
            </div>
        </div>

        <!-- COLLECTIONS PAGE -->
        <div id="page-collections" class="page">
            <!-- Collections Hero -->
            <section class="page-hero collections-hero">
                <div class="container">
                    <div class="page-hero-content">
                        <h1>Collections</h1>
                        <p>Explore verified collections on Songbird & Flare</p>
                    </div>
                    <div class="hero-stats-mini">
                        <div class="mini-stat">
                            <span class="mini-value">12</span>
                            <span class="mini-label">Collections</span>
                        </div>
                        <div class="mini-stat">
                            <span class="mini-value">30K+</span>
                            <span class="mini-label">Total NFTs</span>
                        </div>
                        <div class="mini-stat">
                            <span class="mini-value green">4.1K</span>
                            <span class="mini-label">Staked</span>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container">
                <!-- Coming Soon Banner -->
                <div class="featured-collection-banner" style="background: linear-gradient(135deg, rgba(0,255,136,0.1), rgba(139,92,246,0.1));">
                    <div class="fcb-content" style="text-align: center; width: 100%;">
                        <span class="fcb-badge">🚀 COMING SOON</span>
                        <h3 class="fcb-title">3D Toadz on Flare</h3>
                        <p class="fcb-desc">New collections launching soon. Lock your Songbird NFTs to receive 3D airdrops.</p>
                    </div>
                </div>

                <section class="section" style="padding-top: 24px;">
                    <div class="tabs">
                        <button class="tab active">All</button>
                        <button class="tab">🔥 LP Boost</button>
                        <button class="tab">Trending</button>
                        <button class="tab">New</button>
                    </div>
                    <div class="collections-grid-full" id="all-collections-grid"></div>
                </section>
            </div>
        </div>

        <!-- COLLECTION DETAIL PAGE -->
        <div id="page-collection-detail" class="page">
            <div class="container">
                <section class="collection-header">
                    <div class="collection-header-image">
                        <img src="https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/1.png" alt="Collection">
                    </div>
                    <div class="collection-header-info">
                        <h1 class="collection-header-name">sToadz</h1>
                        <p class="collection-header-desc">The original toad collection on Songbird. Stake for POND rewards + LP boost.</p>
                        <div class="collection-stats-row">
                            <div class="collection-stat">
                                <div class="collection-stat-value">10K</div>
                                <div class="collection-stat-label">Items</div>
                            </div>
                            <div class="collection-stat">
                                <div class="collection-stat-value" style="color: var(--accent);">3.0M</div>
                                <div class="collection-stat-label">Floor</div>
                            </div>
                            <div class="collection-stat">
                                <div class="collection-stat-value">26K</div>
                                <div class="collection-stat-label">Volume</div>
                            </div>
                            <div class="collection-stat">
                                <div class="collection-stat-value">2.1K</div>
                                <div class="collection-stat-label">Owners</div>
                            </div>
                            <div class="collection-stat">
                                <div class="collection-stat-value" style="color: var(--purple);">4.1K</div>
                                <div class="collection-stat-label">Staked</div>
                            </div>
                        </div>
                    </div>
                    <button class="sweep-btn">🧹 Sweep Floor</button>
                </section>

                <section class="section">
                    <div class="tabs">
                        <button class="tab active">Items</button>
                        <button class="tab">Activity</button>
                        <button class="tab">Offers</button>
                        <button class="tab">Analytics</button>
                    </div>
                    <div class="nft-grid" id="collection-nfts"></div>
                </section>
            </div>
        </div>
    </main>

    <!-- CREATE STOREFRONT MODAL -->
    <div id="storefront-modal">
        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 24px; width: 100%; max-width: 500px; position: relative; max-height: 90vh; overflow-y: auto;" onclick="event.stopPropagation()">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid var(--border);">
                <h3 style="font-size: 18px; font-weight: 700; margin: 0;">Create Your Storefront</h3>
                <button onclick="closeStorefrontModal()" style="background: none; border: none; color: var(--text-muted); font-size: 24px; cursor: pointer; padding: 0;">×</button>
            </div>
            <form id="storefront-form" class="apply-form">
                <div class="form-group">
                    <label>Artist / Studio Name *</label>
                    <input type="text" id="sf-name" placeholder="Your artist name" required>
                </div>
                <div class="form-group">
                    <label>Bio</label>
                    <textarea id="sf-bio" placeholder="Tell people about your art..." rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label>Profile Picture</label>
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <!-- Preview circle -->
                        <div id="sf-avatar-preview" style="width: 64px; height: 64px; min-width: 64px; border-radius: 50%; background: var(--bg-surface); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 32px; overflow: hidden;">
                            <span style="color: var(--text-muted);">?</span>
                        </div>
                        <div style="flex: 1;">
                            <!-- Emoji picker -->
                            <div style="margin-bottom: 8px;">
                                <label style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px; display: block;">Pick an emoji</label>
                                <div id="sf-emoji-grid" style="display: flex; flex-wrap: wrap; gap: 4px;">
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('🎨')">🎨</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('🖼️')">🖼️</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('✨')">✨</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('🔥')">🔥</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('💎')">💎</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('🐸')">🐸</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('👾')">👾</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('🍝')">🍝</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('🌙')">🌙</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('⚡')">⚡</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('🎭')">🎭</button>
                                    <button type="button" class="emoji-pick" onclick="selectEmoji('🦊')">🦊</button>
                                </div>
                            </div>
                            <!-- Or paste URL -->
                            <div>
                                <label style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px; display: block;">Or paste image URL</label>
                                <input type="text" id="sf-avatar" placeholder="https://... or IPFS link" oninput="previewAvatarUrl(this.value)">
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="sf-avatar-type" value="">
                    <input type="hidden" id="sf-avatar-emoji" value="">
                </div>
                <div class="form-group">
                    <label>Banner URL</label>
                    <input type="url" id="sf-banner" placeholder="https://... or IPFS link">
                </div>
                <div class="form-group">
                    <label>Twitter / X</label>
                    <input type="text" id="sf-twitter" placeholder="@handle">
                </div>
                <div class="form-group">
                    <label>Website</label>
                    <input type="url" id="sf-website" placeholder="https://yoursite.com">
                </div>
                <div class="storefront-fee-note" id="sf-fee-note">
                    <span>⚡ Cost: 10 FLR</span>
                </div>
                <button type="submit" class="apply-submit-btn" id="sf-submit-btn">
                    Create Storefront →
                </button>
            </form>
        </div>
    </div>

    <!-- Connect Modal -->
    <div class="modal-overlay" id="connect-modal" onclick="closeConnectModal(event)">
        <div class="modal" onclick="event.stopPropagation()">
            <button class="modal-close" onclick="closeConnectModal()">&times;</button>
            <div class="modal-header">
                <div class="modal-logo"><img src="https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/1.png" alt="Toadz"></div>
                <h2>Connect to Toadz</h2>
                <p>Choose your wallet to get started</p>
            </div>
            <div class="wallet-options">
                <button class="wallet-option" onclick="connectWallet('metamask')">
                    <div class="wallet-icon">🦊</div>
                    <div class="wallet-info">
                        <span class="wallet-name">MetaMask</span>
                        <span class="wallet-desc">Connect using browser extension</span>
                    </div>
                    <svg class="wallet-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
                <button class="wallet-option" onclick="connectWallet('walletconnect')">
                    <div class="wallet-icon">🔗</div>
                    <div class="wallet-info">
                        <span class="wallet-name">WalletConnect</span>
                        <span class="wallet-desc">Scan with your mobile wallet</span>
                    </div>
                    <svg class="wallet-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
                <button class="wallet-option" onclick="connectWallet('bifrost')">
                    <div class="wallet-icon">🌈</div>
                    <div class="wallet-info">
                        <span class="wallet-name">Bifrost Wallet</span>
                        <span class="wallet-desc">Native Flare & Songbird wallet</span>
                    </div>
                    <svg class="wallet-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
            </div>
            <div class="modal-footer">
                <p>New to crypto? <a href="#">Learn about wallets</a></p>
            </div>
        </div>
    </div>

    <!-- NFT Detail Modal -->
    <div class="modal-overlay" id="nft-modal" onclick="closeNftModal(event)">
        <div class="nft-modal" onclick="event.stopPropagation()">
            <button class="modal-close" onclick="closeNftModal()">&times;</button>
            
            <div class="nft-modal-grid">
                <div class="nft-modal-image">
                    <img src="images/1.png" alt="Fox Girl #777">
                    <div class="nft-rarity epic">EPIC</div>
                </div>
    
                <div class="nft-modal-info">
                    <div class="nft-modal-header">
                        <div class="nft-modal-collection">Fox Girls</div>
                        <h2>Fox Girl #777</h2>
                        <div class="nft-modal-owner">
                            Owned by <span class="green">0x8a3...f2c1</span>
                        </div>
                    </div>

                    <!-- Boost Box -->
                    <div class="boost-box">
                        <div class="boost-box-left">
                            <span class="boost-icon">⚡</span>
                            <div class="boost-main-stat">
                                <span class="boost-value green">+0.05%</span>
                                <span class="boost-label">LP Boost</span>
                            </div>
                        </div>
                        <div class="boost-box-right">
                            <div class="boost-time">18d 4h</div>
                            <div class="boost-time-label">remaining</div>
                        </div>
                    </div>

                    <!-- Traits -->
                    <div class="nft-traits">
                        <div class="nft-trait">
                            <div class="trait-type">Background</div>
                            <div class="trait-value">Cosmic</div>
                            <div class="trait-rarity">4% have this</div>
                        </div>
                        <div class="nft-trait">
                            <div class="trait-type">Fur</div>
                            <div class="trait-value">Golden</div>
                            <div class="trait-rarity">2% have this</div>
                        </div>
                        <div class="nft-trait">
                            <div class="trait-type">Eyes</div>
                            <div class="trait-value">Laser</div>
                            <div class="trait-rarity">1% have this</div>
                        </div>
                        <div class="nft-trait">
                            <div class="trait-type">Outfit</div>
                            <div class="trait-value">Space Suit</div>
                            <div class="trait-rarity">5% have this</div>
                        </div>
                        <div class="nft-trait">
                            <div class="trait-type">Accessory</div>
                            <div class="trait-value">Crown</div>
                            <div class="trait-rarity">0.5% have this</div>
                        </div>
                        <div class="nft-trait">
                            <div class="trait-type">Aura</div>
                            <div class="trait-value">Rainbow</div>
                            <div class="trait-rarity">1.2% have this</div>
                        </div>
                    </div>

                    <!-- Price Options -->
                    <div class="nft-modal-price">
                        <div class="price-label">Pay with</div>
                        <div class="price-options">
                            <div class="price-option active" onclick="selectCurrency(this)">
                                <div class="price-token">FLR</div>
                                <div class="price-amount">1,850</div>
                                <div class="price-usd">≈ $42.50</div>
                            </div>
                            <div class="price-option" onclick="selectCurrency(this)">
                                <div class="price-token">POND</div>
                                <div class="price-amount">8,500</div>
                                <div class="price-usd">≈ $42.50</div>
                            </div>
                            <div class="price-option" onclick="selectCurrency(this)">
                                <div class="price-token">fXRP</div>
                                <div class="price-amount">72</div>
                                <div class="price-usd">≈ $42.50</div>
                            </div>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="nft-modal-actions">
                        <button class="buy-now-btn">Buy Now</button>
                        <button class="make-offer-btn">Make Offer</button>
                    </div>

                    <!-- Activity -->
                    <div class="nft-modal-activity">
                        <h4>Recent Activity</h4>
                        <div class="nft-activity-list">
                            <div class="nft-activity-item">
                                <span class="activity-type listed">Listed</span>
                                <span class="activity-price">1,850 FLR</span>
                                <span class="activity-user">0x8a3...f2c1</span>
                                <span class="activity-time">2h ago</span>
                            </div>
                            <div class="nft-activity-item">
                                <span class="activity-type transfer">Transfer</span>
                                <span class="activity-price">—</span>
                                <span class="activity-user">0x3b1...a8d2</span>
                                <span class="activity-time">1d ago</span>
                            </div>
                            <div class="nft-activity-item">
                                <span class="activity-type minted">Minted</span>
                                <span class="activity-price">Free</span>
                                <span class="activity-user">0x3b1...a8d2</span>
                                <span class="activity-time">5d ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Artist NFT Detail Modal -->
    <div class="modal-overlay" id="artist-nft-modal" onclick="closeArtistNftModal(event)">
        <div class="artist-nft-modal" onclick="event.stopPropagation()">
            <button class="modal-close" onclick="closeArtistNftModal()">&times;</button>
            
            <div class="artist-nft-modal-grid">
                <div class="artist-nft-media" id="artist-nft-media">
                    <!-- Media loads here -->
                </div>
                
                <div class="artist-nft-details">
                    <div class="artist-nft-badges" id="artist-nft-badges"></div>
                    <h2 id="artist-nft-title">Loading...</h2>
                    <p id="artist-nft-description" class="artist-nft-desc"></p>
                    
                    <div class="artist-nft-creator" id="artist-nft-creator">
                        <!-- Artist info loads here -->
                    </div>
                    
                    <div class="artist-nft-price-box" id="artist-nft-price-box">
                        <!-- Price/auction info loads here -->
                    </div>
                    
                    <div class="artist-nft-actions" id="artist-nft-actions">
                        <!-- Buy/Bid buttons load here -->
                    </div>
                    
                    <div class="artist-nft-meta">
                        <div class="meta-row">
                            <span class="meta-label">Contract</span>
                            <a id="artist-nft-contract" href="#" target="_blank" class="meta-value link">--</a>
                        </div>
                        <div class="meta-row">
                            <span class="meta-label">Token ID</span>
                            <span id="artist-nft-tokenid" class="meta-value">--</span>
                        </div>
                        <div class="meta-row">
                            <span class="meta-label">Network</span>
                            <span class="meta-value">Flare</span>
                        </div>
                    </div>
                    
                    <div class="artist-nft-share">
                        <button class="share-btn" onclick="shareNFT()">🔗 Share</button>
                        <button class="share-btn" onclick="shareToTwitter()" style="background:#000;border:1px solid #333;">𝕏 Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <nav class="mobile-nav">
        <div class="mobile-nav-inner">
            <button class="mobile-nav-item active" onclick="showPage('home')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>
                Home
            </button>
            <button class="mobile-nav-item" onclick="showPage('collections')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/></svg>
                Browse
            </button>
            <button class="mobile-nav-item stake-btn-mobile" onclick="showPage('staking')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Stake
            </button>
            <button class="mobile-nav-item" onclick="showPage('launchpad')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/><path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z"/></svg>
                Drops
            </button>
            <button class="mobile-nav-item" onclick="toggleMobileMenu()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
                More
            </button>
        </div>
        <!-- Expandable Menu -->
        <div class="mobile-menu-expand" id="mobile-menu-expand">
            <button class="mobile-menu-item" onclick="showPage('artists'); toggleMobileMenu()">Artists</button>
            <button class="mobile-menu-item" onclick="showPage('socials'); toggleMobileMenu()">📣 Socials</button>
            <button class="mobile-menu-item" onclick="showPage('my-nfts'); toggleMobileMenu()">My NFTs</button>
        </div>
    </nav>

    <script>
        // Current network state
        let currentNetwork = 'flare';
        const INDEXER_URL = 'https://toadz-indexer-production.up.railway.app';
        const FLARE_INDEXER_URL = 'https://flaremarket-production.up.railway.app';

        // Toast notifications
        function showToast(title, message, type = 'info') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            
            const icons = { success: '✓', error: '✕', info: 'ℹ' };
            
            toast.innerHTML = `
                <span class="toast-icon">${icons[type] || icons.info}</span>
                <div class="toast-content">
                    <div class="toast-title">${title}</div>
                    ${message ? `<div class="toast-message">${message}</div>` : ''}
                </div>
                <button class="toast-close" onclick="this.parentElement.remove()">×</button>
            `;
            
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('hiding');
                setTimeout(() => toast.remove(), 300);
            }, 4000);
        }

        // Custom Dialog System
        let dialogResolve = null;
        
        function showDialog({ title, message, type = 'input', icon = null, placeholder = '', defaultValue = '', confirmText = 'Confirm', cancelText = 'Cancel', danger = false }) {
            return new Promise((resolve) => {
                dialogResolve = resolve;
                
                const overlay = document.getElementById('dialog-overlay');
                const iconEl = document.getElementById('dialog-icon');
                const titleEl = document.getElementById('dialog-title');
                const messageEl = document.getElementById('dialog-message');
                const bodyEl = document.getElementById('dialog-body');
                const inputEl = document.getElementById('dialog-input');
                const confirmBtn = document.getElementById('dialog-confirm');
                const cancelBtn = document.getElementById('dialog-cancel');
                
                // Set icon
                const icons = { input: '✏️', confirm: '❓', alert: '⚠️', danger: '🗑️' };
                iconEl.textContent = icon || icons[type] || '💬';
                iconEl.className = 'dialog-icon ' + (danger ? 'danger' : type);
                
                titleEl.textContent = title;
                messageEl.textContent = message;
                
                // Show/hide input
                if (type === 'input') {
                    bodyEl.style.display = 'block';
                    inputEl.placeholder = placeholder;
                    inputEl.value = defaultValue;
                    setTimeout(() => inputEl.focus(), 100);
                } else {
                    bodyEl.style.display = 'none';
                }
                
                // Show/hide cancel button
                if (type === 'alert') {
                    cancelBtn.style.display = 'none';
                } else {
                    cancelBtn.style.display = 'block';
                }
                
                // Set button text and style
                confirmBtn.textContent = confirmText;
                cancelBtn.textContent = cancelText;
                confirmBtn.className = 'dialog-btn ' + (danger ? 'dialog-btn-danger' : 'dialog-btn-confirm');
                
                overlay.classList.add('open');
                
                // Handle enter key for input
                if (type === 'input') {
                    inputEl.onkeydown = (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            closeDialog(inputEl.value);
                        } else if (e.key === 'Escape') {
                            closeDialog(null);
                        }
                    };
                }
            });
        }
        
        function closeDialog(result) {
            document.getElementById('dialog-overlay').classList.remove('open');
            if (dialogResolve) {
                dialogResolve(result);
                dialogResolve = null;
            }
        }
        
        // Dialog button handlers
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('dialog-confirm').onclick = () => {
                const type = document.getElementById('dialog-body').style.display === 'block' ? 'input' : 'confirm';
                if (type === 'input') {
                    closeDialog(document.getElementById('dialog-input').value);
                } else {
                    closeDialog(true);
                }
            };
            document.getElementById('dialog-cancel').onclick = () => closeDialog(null);
            document.getElementById('dialog-overlay').onclick = (e) => {
                if (e.target.id === 'dialog-overlay') closeDialog(null);
            };
        });
        
        // Convenience wrappers
        async function customPrompt(title, message, defaultValue = '', placeholder = '') {
            return showDialog({ title, message, type: 'input', defaultValue, placeholder });
        }
        
        async function customConfirm(title, message, danger = false) {
            return showDialog({ title, message, type: 'confirm', danger, confirmText: danger ? 'Delete' : 'Confirm' });
        }
        
        async function customAlert(title, message) {
            return showDialog({ title, message, type: 'alert', confirmText: 'OK' });
        }

        // Data
        // PLACEHOLDER DATA - Will be populated from backend/blockchain
        // Collections on Flare - update with real IPFS data when available
        const collections = [];

        const auctions = [];

        const nfts = [];

        const stakingPools = [];

        const artists = [];

        // Activity - fetched from indexer backend
        const activity = [];

        // Render functions
        function renderAuctions() {
            const grid = document.getElementById('auctions-grid');
            if (auctions.length === 0) {
                grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🎯</div><p>No live auctions</p><span>Check back soon</span></div>';
                return;
            }
            grid.innerHTML = auctions.map(a => `
                <div class="auction-card">
                    <div class="auction-image">
                        <img src="${a.image}" alt="${a.name}">
                        <div class="auction-timer">
                            <span class="auction-timer-label">Ends in</span>
                            <span class="auction-timer-value">${a.time}</span>
                        </div>
                    </div>
                    <div class="auction-info">
                        <div class="auction-title">${a.name}</div>
                        <div class="auction-artist">by ${a.artist}</div>
                        <div class="auction-meta">
                            <span class="auction-bid">${a.bid}</span>
                            <span class="auction-bids">${a.bids} bids</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderCollections() {
            const scroll = document.getElementById('collections-scroll');
            if (collections.length === 0) {
                scroll.innerHTML = '<div class="empty-state"><div class="empty-icon">🐸</div><p>Collections coming soon</p><span>3D Toadz launching on Flare</span></div>';
                return;
            }
            scroll.innerHTML = collections.map(c => `
                <div class="collection-card" onclick="showPage('collection-detail')">
                    <div class="collection-image">
                        <img src="${c.image}" alt="${c.name}">
                        ${c.stakeable ? '<span class="collection-badge">LP Boost</span>' : ''}
                    </div>
                    <div class="collection-info">
                        <div class="collection-name">${c.name}</div>
                        <div class="collection-meta">
                            <span class="collection-items">${c.items}</span>
                            <span class="collection-floor">${c.floor}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderNFTs(containerId, data = nfts) {
            const container = document.getElementById(containerId);
            if (!container) return;
            if (data.length === 0) {
                container.innerHTML = '<div class="empty-state"><div class="empty-icon">🎨</div><p>No NFTs listed yet</p><span>Be the first to list!</span></div>';
                return;
            }
            container.innerHTML = data.map(n => `
                <div class="nft-card" onclick="openNftModal()">
                    <div class="nft-image">
                        <img src="${n.image}" alt="${n.name}">
                        ${n.is3d ? '<span class="nft-badge badge-3d">3D</span>' : ''}
                        ${n.live ? '<span class="nft-badge badge-live">LIVE</span>' : ''}
                    </div>
                    <div class="nft-info">
                        <div class="nft-collection">${n.collection}</div>
                        <div class="nft-name">${n.name}</div>
                        <div class="nft-footer">
                            <div>
                                <div class="nft-price-label">Price</div>
                                <div class="nft-price">${n.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderStakingPools() {
            const container = document.getElementById('staking-pools');
            if (!container) return;
            if (stakingPools.length === 0) {
                container.innerHTML = '<div class="empty-state"><div class="empty-icon">🔒</div><p>NFT staking coming soon</p><span>Stake your NFTs for LP boosts</span></div>';
                return;
            }
            container.innerHTML = stakingPools.map(p => `
                <div class="pool-card">
                    <div class="pool-header">
                        <div class="pool-icon"><img src="${p.image}" alt="${p.name}"></div>
                        <div class="pool-title">
                            <h3>${p.name}</h3>
                            <p>${p.desc}</p>
                        </div>
                        <div class="pool-badge">LP Boost</div>
                    </div>
                    <div class="pool-stats">
                        <div class="pool-stat">
                            <div class="pool-stat-value">${p.staked}</div>
                            <div class="pool-stat-label">Staked</div>
                        </div>
                        <div class="pool-stat">
                            <div class="pool-stat-value">${p.apy}</div>
                            <div class="pool-stat-label">APY</div>
                        </div>
                        <div class="pool-stat">
                            <div class="pool-stat-value">${p.rewards}</div>
                            <div class="pool-stat-label">Rewards</div>
                        </div>
                    </div>
                    <div class="pool-actions">
                        <button class="pool-btn stake">Stake</button>
                        <button class="pool-btn unstake">Unstake</button>
                    </div>
                </div>
            `).join('');
        }

        // Storefront functions
        const ADMIN_WALLET = '0xcEA86bBdb5cd33ddbA8dC0ed3c838605EeF7c715'.toLowerCase();
        const FEE_WALLET = '0xcEA86bBdb5cd33ddbA8dC0ed3c838605EeF7c715';
        const STOREFRONT_FEE = '10'; // 10 FLR

        async function loadStorefronts() {
            const container = document.getElementById('storefronts-grid');
            if (!container) return;
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/storefronts`);
                const storefronts = await res.json();
                
                if (!storefronts || storefronts.length === 0) {
                    container.innerHTML = `
                        <div class="empty-state" style="grid-column: 1/-1;">
                            <div class="empty-icon">🎨</div>
                            <p>No storefronts yet</p>
                            <span>Be the first creator on TOADZ</span>
                        </div>`;
                    return;
                }
                
                container.innerHTML = storefronts.map(s => {
                    // Handle emoji vs image avatar
                    let avatarHtml;
                    if (s.avatar_type === 'emoji' && s.avatar_emoji) {
                        avatarHtml = `<div class="fa-avatar emoji-avatar">
                            <span style="font-size: 32px;">${s.avatar_emoji}</span>
                        </div>`;
                    } else if (s.avatar) {
                        avatarHtml = `<div class="fa-avatar">
                            <img src="${s.avatar}" alt="" onerror="this.parentElement.classList.add('emoji-avatar'); this.parentElement.innerHTML='<span style=font-size:32px>${s.name.charAt(0)}</span>';">
                        </div>`;
                    } else {
                        avatarHtml = `<div class="fa-avatar emoji-avatar">
                            <span style="font-size: 32px;">${s.name.charAt(0)}</span>
                        </div>`;
                    }
                    
                    const verifiedBadge = s.verified ? '<span class="verified-badge">✓</span>' : '';
                    
                    return `
                    <div class="featured-artist-card" onclick="viewStorefront('${s.wallet}')">
                        <div class="fa-banner" style="background-image: url('${s.banner || 'https://via.placeholder.com/400x150/1a1a2e/00ff88?text='}')"></div>
                        <div class="fa-content">
                            ${avatarHtml}
                            <h3 class="fa-name">${s.name}${verifiedBadge}</h3>
                            <p class="fa-style">${s.bio || ''}</p>
                            <div class="fa-stats">
                                <div class="fa-stat"><span class="fa-stat-value">${s.item_count || 0}</span><span class="fa-stat-label">Items</span></div>
                                <div class="fa-stat"><span class="fa-stat-value">--</span><span class="fa-stat-label">Volume</span></div>
                            </div>
                        </div>
                    </div>`;
                }).join('');
            } catch (err) {
                console.error('Failed to load storefronts:', err);
                container.innerHTML = '<div class="empty-state"><p>Failed to load storefronts</p></div>';
            }
        }

        let currentStorefront = null; // Track currently viewed storefront

        function viewStorefront(wallet, skipHash = false) {
            currentStorefront = wallet;
            loadStorefrontPage(wallet);
            showPage('artist-storefront', true); // Don't let showPage set generic hash
            if (!skipHash) {
                history.pushState(null, '', '/FlareMarket/artist/' + wallet);
            }
        }

        async function loadStorefrontPage(wallet) {
            const banner = document.getElementById('sf-banner-display');
            const profileCard = document.getElementById('sf-profile-card');
            const ownerActions = document.getElementById('sf-owner-actions');
            const deleteBtn = document.getElementById('sf-delete-btn');
            const nftGrid = document.getElementById('sf-nft-grid');
            
            // Reset everything immediately
            profileCard.innerHTML = '<div class="empty-state"><div class="empty-icon">⏳</div><p>Loading artist...</p></div>';
            ownerActions.style.display = 'none';
            nftGrid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><div class="empty-icon">⏳</div><p>Loading...</p></div>';
            allStorefrontNFTs = [];
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/storefront/${wallet}`);
                if (!res.ok) throw new Error('Storefront not found');
                
                const s = await res.json();
                console.log('Loaded storefront:', s);
                
                // Set banner
                if (s.banner) {
                    banner.style.backgroundImage = `url('${s.banner}')`;
                } else {
                    banner.style.backgroundImage = 'linear-gradient(135deg, var(--purple), var(--teal))';
                }
                
                // Build avatar HTML - circular frame
                let avatarHtml;
                if (s.avatar_type === 'emoji' && s.avatar_emoji) {
                    avatarHtml = `<div class="artist-avatar-large emoji-avatar">
                        <span style="font-size: 48px;">${s.avatar_emoji}</span>
                    </div>`;
                } else if (s.avatar) {
                    avatarHtml = `<div class="artist-avatar-large">
                        <img src="${s.avatar}" alt="${s.name}" onerror="this.parentElement.innerHTML='<span style=font-size:48px>${s.name.charAt(0)}</span>'; this.parentElement.classList.add('emoji-avatar');">
                    </div>`;
                } else {
                    avatarHtml = `<div class="artist-avatar-large emoji-avatar">
                        <span style="font-size: 48px;">${s.name.charAt(0)}</span>
                    </div>`;
                }
                
                // Check if visitor (not owner)
                const userWallet = window.toadz?.userAddress?.toLowerCase();
                const isOwner = userWallet === wallet.toLowerCase();
                const isAdmin = userWallet === ADMIN_WALLET;
                const isVisitor = !isOwner && userWallet;
                
                // Build profile card with stats and actions
                profileCard.innerHTML = `
                    ${avatarHtml}
                    <div class="artist-profile-info">
                        <h1 class="artist-profile-name">${s.name}${s.verified ? '<span class="verified-badge">✓</span>' : ''}</h1>
                        ${s.tagline ? `<p class="artist-profile-tagline">${s.tagline}</p>` : ''}
                        ${s.bio ? `<p class="artist-profile-bio">${s.bio}</p>` : ''}
                        <div class="artist-socials">
                            ${s.twitter ? `<a href="https://twitter.com/${s.twitter.replace('@','')}" target="_blank" class="artist-social">𝕏</a>` : ''}
                            ${s.website ? `<a href="${s.website}" target="_blank" class="artist-social">🌐</a>` : ''}
                        </div>
                    </div>
                    <div class="artist-profile-stats">
                        <div class="artist-stat-box">
                            <span class="artist-stat-value" id="sf-stat-items">--</span>
                            <span class="artist-stat-label">Items</span>
                        </div>
                        <div class="artist-stat-box">
                            <span class="artist-stat-value gold" id="sf-stat-volume">--</span>
                            <span class="artist-stat-label">Volume</span>
                        </div>
                        <div class="artist-stat-box">
                            <span class="artist-stat-value" id="sf-stat-collectors">--</span>
                            <span class="artist-stat-label">Collectors</span>
                        </div>
                        <div class="artist-stat-box">
                            <span class="artist-stat-value purple" id="sf-stat-tips">--</span>
                            <span class="artist-stat-label">Tips</span>
                        </div>
                    </div>
                    ${isVisitor ? `
                    <div class="artist-actions">
                        <button class="artist-tip-btn" onclick="tipArtist('${wallet}')">💰 Tip Artist</button>
                        <button class="artist-follow-btn" onclick="followArtist('${wallet}')">+ Follow</button>
                    </div>
                    ` : ''}
                `;
                
                // Show owner/admin actions
                if (isOwner || isAdmin) {
                    ownerActions.style.display = 'flex';
                    deleteBtn.style.display = isAdmin ? 'block' : 'none';
                    
                    // Verify button for admin
                    const verifyBtn = document.getElementById('sf-verify-btn');
                    if (isAdmin && verifyBtn) {
                        verifyBtn.style.display = 'block';
                        verifyBtn.textContent = s.verified ? '✗ Unverify' : '✓ Verify';
                        verifyBtn.dataset.verified = s.verified ? '1' : '0';
                    }
                }
                
                // Update empty hint for owner
                const emptyHint = document.getElementById('sf-empty-hint');
                if (emptyHint) {
                    emptyHint.textContent = isOwner ? 'Click "Upload NFT" to add your first piece!' : 'Artist hasn\'t uploaded any NFTs yet';
                }
                
                // Load artist's NFTs
                try {
                    console.log('Loading NFTs for wallet:', wallet);
                    const nftRes = await fetch(`${INDEXER_URL}/api/storefront/${wallet}/nfts`);
                    const nfts = await nftRes.json();
                    console.log('Loaded NFTs:', nfts.length, 'for', wallet);
                    
                    // Store for filtering
                    allStorefrontNFTs = nfts || [];
                    
                    if (nfts && nfts.length > 0) {
                        renderStorefrontNFTs(nfts);
                        // Update items count
                        document.getElementById('sf-stat-items').textContent = nfts.length;
                    }
                    
                    // Reset tabs to All Items
                    document.querySelectorAll('#sf-tabs .artist-tab').forEach((tab, i) => {
                        tab.classList.toggle('active', i === 0);
                    });
                    
                } catch (err) {
                    console.error('Failed to load artist NFTs:', err);
                }
                    
            } catch (err) {
                console.error('Failed to load storefront:', err);
                profileCard.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">❌</div>
                        <p>Storefront not found</p>
                    </div>`;
            }
        }
        
        // Tip artist
        async function tipArtist(wallet) {
            if (!window.toadz?.isConnected) {
                showToast('Connect Wallet', 'Please connect your wallet to tip', 'error');
                openConnectModal();
                return;
            }
            
            const amount = await customPrompt('Send Tip', 'Enter tip amount in FLR', '100', 'Amount in FLR');
            if (!amount || isNaN(amount) || parseFloat(amount) <= 0) return;
            
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const tx = await signer.sendTransaction({
                    to: wallet,
                    value: ethers.parseEther(amount)
                });
                await tx.wait();
                showToast('Tip Sent! 💰', `${amount} FLR sent to artist`, 'success');
            } catch (err) {
                showToast('Error', err.message || 'Failed to send tip', 'error');
            }
        }
        
        // Follow artist (placeholder)
        function followArtist(wallet) {
            showToast('Following!', 'You\'ll be notified of new drops', 'success');
        }
        
        // View NFT detail (placeholder for now)
        // Store current NFT being viewed
        let currentViewingNFT = null;
        
        // View NFT detail modal
        async function viewNFT(id, contract, tokenId) {
            const modal = document.getElementById('artist-nft-modal');
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/artist-nft/${id}`);
                const nft = await res.json();
                currentViewingNFT = nft;
                
                const isVideo = nft.image_url?.includes('.mp4') || nft.image_url?.includes('.webm');
                const isAuction = nft.sale_type === 'auction';
                const isFeatured = nft.featured === 1;
                const userWallet = window.toadz?.userAddress?.toLowerCase();
                const isOwner = userWallet === nft.artist_wallet?.toLowerCase();
                const isAdmin = userWallet === ADMIN_WALLET;
                
                // Media
                document.getElementById('artist-nft-media').innerHTML = isVideo
                    ? `<video src="${nft.image_url}" controls autoplay loop></video>`
                    : `<img src="${nft.image_url}" alt="${nft.name}">`;
                
                // Badges
                let badges = '';
                if (isFeatured) badges += '<span class="badge featured">⭐ Featured</span>';
                if (isAuction) badges += '<span class="badge auction">🔥 Auction</span>';
                document.getElementById('artist-nft-badges').innerHTML = badges;
                
                // Title & description
                document.getElementById('artist-nft-title').textContent = nft.name;
                document.getElementById('artist-nft-description').textContent = nft.description || '';
                
                // Creator
                const avatarHtml = nft.avatar_type === 'emoji' && nft.avatar_emoji
                    ? `<span>${nft.avatar_emoji}</span>`
                    : nft.avatar
                        ? `<img src="${nft.avatar}" alt="">`
                        : `<span>🎨</span>`;
                        
                document.getElementById('artist-nft-creator').innerHTML = `
                    <div class="creator-avatar">${avatarHtml}</div>
                    <div class="creator-info">
                        <div class="creator-label">Created by</div>
                        <div class="creator-name">${nft.artist_name || 'Artist'}${nft.verified ? ' <span style="color: var(--teal);">✓</span>' : ''}</div>
                    </div>
                `;
                document.getElementById('artist-nft-creator').onclick = () => {
                    closeArtistNftModal();
                    viewStorefront(nft.artist_wallet);
                };
                
                // Price box
                const priceHtml = isAuction ? `
                    <div class="price-label">Current Bid</div>
                    <div class="price-main">${nft.price > 0 ? nft.price + ' FLR' : 'No bids yet'}</div>
                    <div class="auction-info">
                        <div>
                            <div class="auction-stat-label">Time Left</div>
                            <div class="auction-stat-value">⏱ ${nft.auction_duration || 24}h</div>
                        </div>
                        <div>
                            <div class="auction-stat-label">Min Bid</div>
                            <div class="auction-stat-value">${nft.price > 0 ? Math.ceil(nft.price * 1.05) : 100} FLR</div>
                        </div>
                    </div>
                ` : `
                    <div class="price-label">Price</div>
                    <div class="price-main">${nft.price > 0 ? nft.price + ' FLR' : 'Not for sale'}</div>
                `;
                document.getElementById('artist-nft-price-box').innerHTML = priceHtml;
                
                // Actions
                let actionsHtml = '';
                const hasValidTokenId = nft.token_id && nft.token_id !== 'unknown' && nft.token_id !== 'null';
                
                if (isOwner || isAdmin) {
                    if (isAuction && !nft.auction_id && hasValidTokenId) {
                        // Has token but no auction - show start auction button
                        actionsHtml = `
                            <button class="btn-bid" onclick="startAuctionOnChain(${nft.id})">🚀 Start Auction</button>
                            <button class="btn-edit" onclick="editNFT(${nft.id})">✏️ Edit</button>
                            <button class="btn-delete" onclick="deleteNFT(${nft.id}); closeArtistNftModal();">🗑️ Delete</button>
                        `;
                    } else {
                        actionsHtml = `
                            <button class="btn-edit" onclick="editNFT(${nft.id})">✏️ Edit</button>
                            <button class="btn-delete" onclick="deleteNFT(${nft.id}); closeArtistNftModal();">🗑️ Delete</button>
                        `;
                        // Only show warning for auctions without valid token
                        if (isAuction && !nft.auction_id && !hasValidTokenId) {
                            actionsHtml += `<p style="color: var(--gold); font-size: 12px; margin-top: 8px;">⚠️ Mint failed - delete and re-upload</p>`;
                        }
                    }
                } else if (nft.price > 0) {
                    if (isAuction && nft.auction_id) {
                        actionsHtml = `
                            <button class="btn-bid" onclick="placeBid(${nft.id})">🔥 Place Bid</button>
                            <button class="btn-offer" onclick="makeOffer(${nft.id})">💬 Make Offer</button>
                        `;
                    } else if (isAuction && !nft.auction_id) {
                        actionsHtml = `<p style="color: var(--text-muted); text-align: center;">Auction not yet active</p>`;
                    } else {
                        actionsHtml = `
                            <button class="btn-buy" onclick="buyNFT(${nft.id})">Buy Now</button>
                            <button class="btn-offer" onclick="makeOffer(${nft.id})">💬 Make Offer</button>
                        `;
                    }
                }
                document.getElementById('artist-nft-actions').innerHTML = actionsHtml;
                
                // Meta
                document.getElementById('artist-nft-contract').textContent = nft.contract_address?.slice(0,8) + '...' + nft.contract_address?.slice(-6);
                document.getElementById('artist-nft-contract').href = `https://flarescan.com/address/${nft.contract_address}`;
                document.getElementById('artist-nft-tokenid').textContent = nft.token_id || 'N/A';
                
            } catch (err) {
                console.error('Failed to load NFT:', err);
                showToast('Error', 'Failed to load NFT details', 'error');
            }
        }
        
        function closeArtistNftModal(e) {
            if (e && e.target !== e.currentTarget) return;
            
            // Pause any playing video
            const video = document.querySelector('#artist-nft-media video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
            
            document.getElementById('artist-nft-modal').classList.remove('open');
            document.body.style.overflow = '';
            currentViewingNFT = null;
        }
        
        function shareNFT() {
            if (!currentViewingNFT) return;
            const refParam = window.toadz?.userAddress ? `&ref=${window.toadz.userAddress}` : '';
            const url = window.location.origin + window.location.pathname + `?nft=${currentViewingNFT.id}${refParam}`;
            navigator.clipboard.writeText(url);
            showToast('Copied', 'Referral link copied. Earn 1% on sales!', 'success');
        }
        
        // Share to Twitter
        function shareToTwitter() {
            if (!currentViewingNFT) return;
            const refParam = window.toadz?.userAddress ? `&ref=${window.toadz.userAddress}` : '';
            const shareUrl = window.location.origin + window.location.pathname + `?nft=${currentViewingNFT.id}${refParam}`;
            const name = currentViewingNFT.name || 'NFT';
            const price = currentViewingNFT.price ? ` • ${currentViewingNFT.price} FLR` : '';
            const text = encodeURIComponent(`${name}${price}\n\nListed on @sToadz marketplace 🐸\n\n`);
            window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`, '_blank', 'width=550,height=420');
            trackTwitterShare('nft', currentViewingNFT.id);
        }
        
        // Buy NFT (with referral split)
        async function buyNFT(id) {
            if (!window.toadz?.isConnected) {
                showToast('Connect Wallet', 'Please connect your wallet', 'error');
                openConnectModal();
                return;
            }
            
            if (!currentViewingNFT) return;
            
            const price = currentViewingNFT.price;
            if (!price || price <= 0) {
                showToast('Error', 'NFT is not for sale', 'error');
                return;
            }
            
            const referrer = getReferrer();
            const confirmed = await customConfirm('Confirm Purchase', `Buy this NFT for ${price} FLR?`);
            if (!confirmed) return;
            
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const totalWei = ethers.parseEther(price.toString());
                
                // Calculate splits (1% to referrer if exists)
                const referralWei = referrer ? (totalWei * 1n) / 100n : 0n;
                const artistWei = totalWei - referralWei;
                
                // Send payment to artist
                showToast('Processing...', 'Sending payment', 'info');
                const tx = await signer.sendTransaction({
                    to: currentViewingNFT.artist_wallet,
                    value: artistWei
                });
                await tx.wait();
                
                // Send referral fee if applicable
                let refTxHash = null;
                if (referrer && referralWei > 0n) {
                    const refTx = await signer.sendTransaction({ to: referrer, value: referralWei });
                    await refTx.wait();
                    refTxHash = refTx.hash;
                    
                    // Track referral sale
                    try {
                        await fetch(`${INDEXER_URL}/api/referral/sale`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                referrer,
                                buyer: window.toadz.userAddress,
                                nftId: id,
                                salePrice: price,
                                referralAmount: parseFloat(ethers.formatEther(referralWei)),
                                txHash: tx.hash,
                                referralTxHash: refTxHash
                            })
                        });
                    } catch (e) {}
                }
                
                // Record the sale
                await fetch(`${INDEXER_URL}/api/buy-nft`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        nftId: id,
                        buyer: window.toadz.userAddress,
                        txHash: tx.hash
                    })
                });
                
                showToast('Purchased', 'NFT is now yours', 'success');
                closeArtistNftModal();
                if (currentStorefront) loadStorefrontPage(currentStorefront);
                
            } catch (err) {
                showToast('Error', err.message || 'Purchase failed', 'error');
            }
        }
        
        // Place bid
        async function placeBid(id) {
            console.log('=== placeBid called ===');
            console.log('NFT id:', id);
            
            if (!window.toadz?.isConnected) {
                showToast('Connect Wallet', 'Please connect your wallet', 'error');
                openConnectModal();
                return;
            }
            
            if (!currentViewingNFT) {
                console.log('ERROR: No currentViewingNFT');
                return;
            }
            
            try {
                // Check if there's an on-chain auction
                console.log('Fetching auction data from:', `${INDEXER_URL}/api/nft/${id}/auction`);
                const auctionRes = await fetch(`${INDEXER_URL}/api/nft/${id}/auction`);
                const auctionData = await auctionRes.json();
                console.log('Auction data received:', JSON.stringify(auctionData, null, 2));
                
                if (auctionData.onChain && auctionData.auctionId) {
                    console.log('ON-CHAIN AUCTION DETECTED');
                    console.log('Contract:', auctionData.contractAddress);
                    console.log('Auction ID:', auctionData.auctionId);
                    
                    // On-chain auction - call contract
                    const currentBid = parseFloat(auctionData.highestBid) || 0;
                    const startingPrice = parseFloat(auctionData.startingPrice) || 100;
                    const minBid = currentBid > 0 ? Math.ceil(currentBid * 1.05) : startingPrice;
                    
                    console.log('Bid calc - currentBid:', currentBid, 'startingPrice:', startingPrice, 'minBid:', minBid);
                    
                    if (auctionData.ended) {
                        showToast('Auction Ended', 'This auction has already ended', 'error');
                        return;
                    }
                    
                    if (auctionData.timeRemaining <= 0) {
                        showToast('Auction Expired', 'This auction has expired', 'error');
                        return;
                    }
                    
                    const timeStr = `${Math.floor(auctionData.timeRemaining / 3600)}h ${Math.floor((auctionData.timeRemaining % 3600) / 60)}m`;
                    const amount = await customPrompt('Place Bid', `Current high bid: ${currentBid} FLR\nTime remaining: ${timeStr}\n\nMinimum bid: ${minBid} FLR`, minBid.toString(), 'Bid amount in FLR');
                    if (!amount || isNaN(parseFloat(amount))) {
                        console.log('User cancelled or invalid input');
                        return;
                    }
                    
                    const bidAmount = parseFloat(amount);
                    console.log('User bid amount:', bidAmount);
                    
                    if (bidAmount < minBid) {
                        showToast('Error', `Minimum bid is ${minBid} FLR`, 'error');
                        return;
                    }
                    
                    const provider = new ethers.BrowserProvider(window.ethereum);
                    const signer = await provider.getSigner();
                    const signerAddr = await signer.getAddress();
                    console.log('Signer address:', signerAddr);
                    
                    const auctionABI = ['function placeBid(uint256 auctionId) external payable'];
                    const auctionContract = new ethers.Contract(auctionData.contractAddress, auctionABI, signer);
                    console.log('Auction contract created at:', auctionData.contractAddress);
                    
                    const valueWei = ethers.parseEther(bidAmount.toString());
                    console.log('Calling placeBid with auctionId:', auctionData.auctionId, 'value:', valueWei.toString(), 'wei');
                    
                    showToast('Placing Bid...', 'Please confirm in wallet', 'info');
                    const tx = await auctionContract.placeBid(auctionData.auctionId, {
                        value: valueWei
                    });
                    
                    console.log('TX SENT:', tx.hash);
                    showToast('Processing...', 'Waiting for confirmation', 'info');
                    const receipt = await tx.wait();
                    console.log('TX CONFIRMED. Block:', receipt.blockNumber);
                    
                    // Record the bid in DB
                    console.log('Recording bid in database...');
                    await fetch(`${INDEXER_URL}/api/nft/${id}/bid`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            wallet: window.toadz.userAddress,
                            amount: bidAmount,
                            txHash: tx.hash,
                            auctionId: auctionData.auctionId
                        })
                    });
                    
                    showToast('Bid Placed', `Your bid of ${bidAmount} FLR is now the highest`, 'success');
                    closeArtistNftModal();
                    
                } else {
                    console.log('NOT ON-CHAIN AUCTION');
                    console.log('onChain:', auctionData.onChain, 'auctionId:', auctionData.auctionId);
                    showToast('Error', 'This auction is not yet active on-chain', 'error');
                }
                
            } catch (err) {
                console.error('=== BID ERROR ===');
                console.error('Error object:', err);
                console.error('Message:', err.message);
                console.error('Reason:', err.reason);
                showToast('Error', err.reason || err.message || 'Bid failed', 'error');
            }
        }
        
        // Make offer
        async function makeOffer(id) {
            if (!window.toadz?.isConnected) {
                showToast('Connect Wallet', 'Please connect your wallet', 'error');
                openConnectModal();
                return;
            }
            
            if (!currentViewingNFT) return;
            
            const offerAmount = await customPrompt(
                'Make Offer',
                `Make an offer for "${currentViewingNFT.name}"\\n\\nListed price: ${currentViewingNFT.price} FLR`,
                '',
                'Offer amount in FLR'
            );
            
            if (!offerAmount || isNaN(parseFloat(offerAmount))) return;
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/nft/${id}/offer`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        wallet: window.toadz.userAddress,
                        amount: parseFloat(offerAmount)
                    })
                });
                
                const result = await res.json();
                if (result.success) {
                    showToast('Offer Sent', `Your offer of ${offerAmount} FLR has been submitted`, 'success');
                } else {
                    throw new Error(result.error || 'Failed to submit offer');
                }
            } catch (err) {
                showToast('Error', err.message || 'Failed to submit offer', 'error');
            }
        }
        
        // Start auction on-chain for existing NFT
        async function startAuctionOnChain(id) {
            if (!currentViewingNFT) return;
            if (!window.toadz?.isConnected) {
                showToast('Connect Wallet', 'Please connect your wallet', 'error');
                openConnectModal();
                return;
            }
            
            // Get valid token ID
            const tokenId = currentViewingNFT.token_id;
            if (!tokenId || tokenId === 'unknown' || tokenId === 'null') {
                showToast('Error', 'This NFT was not minted on-chain. Please delete and re-upload.', 'error');
                return;
            }
            
            const confirmed = await customConfirm('Start Auction', `Start on-chain auction for "${currentViewingNFT.name}"?\n\nStarting price: ${currentViewingNFT.price} FLR\nDuration: ${currentViewingNFT.auction_duration || 168} hours`);
            if (!confirmed) return;
            
            try {
                showToast('Creating Auction...', 'Processing on-chain', 'info');
                
                const res = await fetch(`${INDEXER_URL}/api/artist-nft/${id}/create-auction`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ wallet: window.toadz.userAddress })
                });
                
                const result = await res.json();
                
                if (result.success && result.auctionId) {
                    showToast('Auction Live! 🔥', `Auction #${result.auctionId} created`, 'success');
                    closeArtistNftModal();
                    if (currentStorefront) loadStorefrontPage(currentStorefront);
                } else {
                    throw new Error(result.error || 'Failed to create auction');
                }
                
            } catch (err) {
                console.error('Start auction error:', err);
                showToast('Error', err.message || 'Failed to start auction', 'error');
            }
        }
        
        // Edit NFT
        async function editNFT(id) {
            if (!currentViewingNFT) return;
            
            const newPrice = await customPrompt('Update Price', 'Enter new price in FLR', currentViewingNFT.price?.toString() || '100', 'Price in FLR');
            if (!newPrice || isNaN(parseFloat(newPrice))) return;
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/artist-nft/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        wallet: window.toadz.userAddress,
                        price: parseFloat(newPrice),
                        saleType: currentViewingNFT.sale_type,
                        auctionDuration: currentViewingNFT.auction_duration
                    })
                });
                
                if (res.ok) {
                    showToast('Updated', 'Price updated successfully', 'success');
                    closeArtistNftModal();
                    if (currentStorefront) loadStorefrontPage(currentStorefront);
                } else {
                    throw new Error('Failed to update');
                }
            } catch (err) {
                showToast('Error', err.message, 'error');
            }
        }
        
        // ==================== BULK UPLOAD ====================
        let bulkUploadFiles = [];
        let bulkUploadUrls = [];
        
        function openBulkUpload() {
            bulkUploadFiles = [];
            bulkUploadUrls = [];
            document.getElementById('bulk-items-list').innerHTML = '';
            document.getElementById('bulk-submit-btn').disabled = true;
            document.getElementById('bulk-progress').style.display = 'none';
            document.getElementById('bulk-upload-modal').classList.add('open');
        }
        
        function closeBulkUpload() {
            document.getElementById('bulk-upload-modal').classList.remove('open');
        }
        
        function handleBulkFileDrop(e) {
            const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/') || f.type.startsWith('video/'));
            if (files.length > 0) {
                // Create a fake input object to reuse existing handler
                handleBulkFileSelect({ files: files });
            }
        }
        
        async function handleBulkFileSelect(input) {
            const files = Array.from(input.files).slice(0, 20);
            const listEl = document.getElementById('bulk-items-list');
            
            for (const file of files) {
                const isVideo = file.type.startsWith('video/');
                const itemId = bulkUploadFiles.length;
                
                bulkUploadFiles.push({
                    file,
                    name: file.name.replace(/\.[^/.]+$/, ''),
                    description: '',
                    fileType: isVideo ? 'video' : 'image',
                    uploading: false,
                    uploaded: false,
                    url: null
                });
                
                const itemEl = document.createElement('div');
                itemEl.className = 'bulk-item';
                itemEl.style.cssText = 'display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--bg-surface); border-radius: 12px; margin-bottom: 8px;';
                itemEl.innerHTML = `
                    <div style="width: 50px; height: 50px; background: var(--bg-void); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                        ${isVideo ? '🎬' : '🖼️'}
                    </div>
                    <div style="flex: 1;">
                        <input type="text" value="${file.name.replace(/\.[^/.]+$/, '')}" 
                               onchange="bulkUploadFiles[${itemId}].name = this.value"
                               style="width: 100%; padding: 8px; background: var(--bg-void); border: 1px solid var(--border); border-radius: 8px; color: var(--text); font-size: 13px;">
                    </div>
                    <div id="bulk-item-status-${itemId}" style="font-size: 12px; color: var(--text-muted);">Ready</div>
                    <button onclick="removeBulkItem(${itemId})" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 18px;">×</button>
                `;
                listEl.appendChild(itemEl);
            }
            
            document.getElementById('bulk-submit-btn').disabled = bulkUploadFiles.length === 0;
            input.value = '';
        }
        
        function removeBulkItem(index) {
            bulkUploadFiles.splice(index, 1);
            // Rebuild list
            const listEl = document.getElementById('bulk-items-list');
            listEl.innerHTML = '';
            bulkUploadFiles.forEach((item, i) => {
                const itemEl = document.createElement('div');
                itemEl.className = 'bulk-item';
                itemEl.style.cssText = 'display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--bg-surface); border-radius: 12px; margin-bottom: 8px;';
                itemEl.innerHTML = `
                    <div style="width: 50px; height: 50px; background: var(--bg-void); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                        ${item.fileType === 'video' ? '🎬' : '🖼️'}
                    </div>
                    <div style="flex: 1;">
                        <input type="text" value="${item.name}" 
                               onchange="bulkUploadFiles[${i}].name = this.value"
                               style="width: 100%; padding: 8px; background: var(--bg-void); border: 1px solid var(--border); border-radius: 8px; color: var(--text); font-size: 13px;">
                    </div>
                    <div id="bulk-item-status-${i}" style="font-size: 12px; color: var(--text-muted);">Ready</div>
                    <button onclick="removeBulkItem(${i})" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 18px;">×</button>
                `;
                listEl.appendChild(itemEl);
            });
            document.getElementById('bulk-submit-btn').disabled = bulkUploadFiles.length === 0;
        }
        
        async function submitBulkUpload() {
            if (!window.toadz?.isConnected) {
                showToast('Connect Wallet', 'Please connect your wallet', 'error');
                return;
            }
            
            const submitBtn = document.getElementById('bulk-submit-btn');
            const progressEl = document.getElementById('bulk-progress');
            const progressBar = document.getElementById('bulk-progress-bar');
            const progressText = document.getElementById('bulk-progress-text');
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Uploading files...';
            progressEl.style.display = 'block';
            
            const defaultPrice = parseFloat(document.getElementById('bulk-default-price').value) || 100;
            const saleType = document.getElementById('bulk-sale-type').value;
            
            // Step 1: Upload all files to server
            const nfts = [];
            for (let i = 0; i < bulkUploadFiles.length; i++) {
                const item = bulkUploadFiles[i];
                const statusEl = document.getElementById(`bulk-item-status-${i}`);
                
                statusEl.textContent = 'Uploading...';
                statusEl.style.color = 'var(--teal)';
                
                try {
                    const formData = new FormData();
                    formData.append('image', item.file);
                    
                    const res = await fetch(`${INDEXER_URL}/api/upload-image`, {
                        method: 'POST',
                        body: formData
                    });
                    
                    const data = await res.json();
                    if (data.url) {
                        item.url = data.url;
                        statusEl.textContent = 'Uploaded';
                        nfts.push({
                            imageUrl: data.url,
                            name: item.name,
                            description: item.description,
                            fileType: item.fileType,
                            price: defaultPrice,
                            saleType: saleType,
                            auctionDuration: saleType === 'auction' ? 168 : 0,
                            featured: false
                        });
                    } else {
                        throw new Error('No URL returned');
                    }
                } catch (err) {
                    statusEl.textContent = 'Failed';
                    statusEl.style.color = '#ff4444';
                }
                
                progressBar.style.width = `${((i + 1) / bulkUploadFiles.length) * 50}%`;
                progressText.textContent = `Uploaded ${i + 1}/${bulkUploadFiles.length} files`;
            }
            
            // Step 2: Bulk mint
            submitBtn.textContent = 'Minting NFTs...';
            progressText.textContent = 'Minting on blockchain...';
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/bulk-mint`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        artistWallet: window.toadz.userAddress,
                        nfts: nfts
                    })
                });
                
                const result = await res.json();
                
                progressBar.style.width = '100%';
                progressText.textContent = `Minted ${result.successCount}/${result.totalCount} NFTs`;
                
                showToast('Bulk Upload Complete', `${result.successCount} NFTs created`, 'success');
                
                setTimeout(() => {
                    closeBulkUpload();
                    if (currentStorefront) loadStorefrontPage(currentStorefront);
                }, 1500);
                
            } catch (err) {
                showToast('Error', err.message, 'error');
            }
            
            submitBtn.textContent = 'Upload All →';
            submitBtn.disabled = false;
        }
        
        // ==================== BULK SELECT / TRANSFER / LIST ====================
        let bulkSelectMode = false;
        let selectedNFTs = [];
        
        function toggleBulkSelect() {
            bulkSelectMode = !bulkSelectMode;
            selectedNFTs = [];
            
            const selectBtn = document.querySelector('.bulk-action-btn');
            const transferBtn = document.getElementById('bulk-transfer-btn');
            const listBtn = document.getElementById('bulk-list-btn');
            
            if (bulkSelectMode) {
                selectBtn.classList.add('active');
                selectBtn.textContent = '✓ Done';
                transferBtn.style.display = 'inline-block';
                listBtn.style.display = 'inline-block';
                
                // Add selectable class to all NFT cards
                document.querySelectorAll('#my-nfts-grid .nft-card').forEach(card => {
                    card.classList.add('selectable');
                    // Add checkbox overlay
                    if (!card.querySelector('.select-check')) {
                        const check = document.createElement('div');
                        check.className = 'select-check';
                        check.innerHTML = '✓';
                        card.querySelector('.nft-card-media').appendChild(check);
                    }
                });
            } else {
                selectBtn.classList.remove('active');
                selectBtn.textContent = '☑️ Select';
                transferBtn.style.display = 'none';
                listBtn.style.display = 'none';
                
                // Remove selectable class
                document.querySelectorAll('#my-nfts-grid .nft-card').forEach(card => {
                    card.classList.remove('selectable', 'selected');
                });
            }
        }
        
        function toggleNFTSelection(card, nftId, collection) {
            if (!bulkSelectMode) return;
            
            const index = selectedNFTs.findIndex(n => n.id === nftId && n.collection === collection);
            if (index > -1) {
                selectedNFTs.splice(index, 1);
                card.classList.remove('selected');
            } else {
                selectedNFTs.push({ id: nftId, collection: collection });
                card.classList.add('selected');
            }
        }
        
        async function bulkTransfer() {
            if (selectedNFTs.length === 0) {
                showToast('No NFTs Selected', 'Select NFTs to transfer', 'error');
                return;
            }
            
            const recipient = await customPrompt('Transfer NFTs', `Enter recipient address for ${selectedNFTs.length} NFT(s)`, '', '0x...');
            if (!recipient || !recipient.startsWith('0x')) {
                if (recipient !== null) showToast('Invalid Address', 'Please enter a valid wallet address', 'error');
                return;
            }
            
            const confirmed = await customConfirm('Confirm Transfer', `Transfer ${selectedNFTs.length} NFT(s) to ${recipient.slice(0,8)}...?`);
            if (!confirmed) return;
            
            showToast('Transferring...', 'Please confirm transactions in wallet', 'info');
            
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                
                const ERC721_ABI = [
                    "function safeTransferFrom(address from, address to, uint256 tokenId) external",
                    "function transferFrom(address from, address to, uint256 tokenId) external"
                ];
                
                let successCount = 0;
                for (const nft of selectedNFTs) {
                    try {
                        const contract = new ethers.Contract(nft.collection, ERC721_ABI, signer);
                        const tx = await contract.transferFrom(window.toadz.userAddress, recipient, nft.id);
                        await tx.wait();
                        successCount++;
                    } catch (err) {
                        console.error(`Failed to transfer #${nft.id}:`, err);
                    }
                }
                
                showToast('Transfer Complete', `${successCount}/${selectedNFTs.length} NFTs transferred`, 'success');
                toggleBulkSelect();
                
            } catch (err) {
                showToast('Error', err.message, 'error');
            }
        }
        
        async function bulkList() {
            if (selectedNFTs.length === 0) {
                showToast('No NFTs Selected', 'Select NFTs to list', 'error');
                return;
            }
            
            const price = await customPrompt('List NFTs', `Set price for ${selectedNFTs.length} NFT(s)`, '', 'Price in FLR');
            if (!price || isNaN(parseFloat(price))) {
                if (price !== null) showToast('Invalid Price', 'Please enter a valid price', 'error');
                return;
            }
            
            showToast('Listing...', 'Processing listings', 'info');
            
            // For artist NFTs, use our API
            // For on-chain NFTs, would need marketplace contract
            // For now, show coming soon for on-chain
            showToast('Coming Soon', 'Bulk listing for on-chain NFTs coming soon', 'info');
            toggleBulkSelect();
        }
        
        // Delete NFT (owner only)
        async function deleteNFT(id) {
            const confirmed = await customConfirm('Delete NFT', 'Remove this NFT from your storefront?\nThe on-chain token will remain.', true);
            if (!confirmed) return;
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/artist-nft/${id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ wallet: window.toadz?.userAddress })
                });
                
                if (res.ok) {
                    showToast('Deleted', 'NFT removed from storefront', 'success');
                    loadStorefrontPage(currentStorefront);
                } else {
                    throw new Error('Failed to delete');
                }
            } catch (err) {
                showToast('Error', err.message, 'error');
            }
        }

        // Delete storefront (admin only)
        async function deleteStorefront() {
            if (!currentStorefront) return;
            
            const confirmed = await customConfirm('Delete Storefront', 'Are you sure you want to delete this storefront?\nThis cannot be undone.', true);
            if (!confirmed) return;
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/storefront/${currentStorefront}`, {
                    method: 'DELETE',
                    headers: {
                        'x-wallet': window.toadz?.userAddress || ''
                    }
                });
                
                const result = await res.json();
                
                if (result.success) {
                    showToast('Deleted', 'Storefront removed', 'success');
                    showPage('artists');
                    loadStorefronts();
                } else {
                    throw new Error(result.error || 'Failed to delete');
                }
            } catch (err) {
                showToast('Error', err.message, 'error');
            }
        }

        // Toggle verify status (admin only)
        async function toggleVerify() {
            if (!currentStorefront) return;
            
            const verifyBtn = document.getElementById('sf-verify-btn');
            const currentlyVerified = verifyBtn.dataset.verified === '1';
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/storefront/${currentStorefront}/verify`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-wallet': window.toadz?.userAddress || ''
                    },
                    body: JSON.stringify({ verified: !currentlyVerified })
                });
                
                const result = await res.json();
                
                if (result.success) {
                    showToast(result.verified ? 'Verified' : 'Unverified', 'Status updated', 'success');
                    loadStorefrontPage(currentStorefront);
                    loadStorefronts();
                } else {
                    throw new Error(result.error || 'Failed to update');
                }
            } catch (err) {
                showToast('Error', err.message, 'error');
            }
        }

        // Upload NFT modal
        let nftImageFile = null;
        let nftImageUrl = null;

        function openUploadNFT() {
            // Reset form
            nftImageFile = null;
            nftImageUrl = null;
            document.getElementById('nft-preview').style.display = 'none';
            document.getElementById('nft-preview-img').style.display = 'block';
            document.getElementById('nft-preview-video').style.display = 'none';
            document.getElementById('nft-preview-video').src = '';
            document.getElementById('nft-dropzone-text').style.display = 'block';
            document.getElementById('nft-upload-status').style.display = 'none';
            document.getElementById('nft-image-url').value = '';
            document.getElementById('nft-file-type').value = 'image';
            document.getElementById('upload-nft-form').reset();
            
            document.getElementById('upload-nft-modal').classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeUploadNFT() {
            document.getElementById('upload-nft-modal').classList.remove('open');
            document.body.style.overflow = '';
        }

        // Handle image/video file selection
        function handleNFTFileSelect(input) {
            const file = input.files[0];
            if (!file) return;
            
            const isVideo = file.type.startsWith('video/');
            const isImage = file.type.startsWith('image/');
            
            if (!isVideo && !isImage) {
                showToast('Error', 'Please select an image or video file', 'error');
                return;
            }
            
            if (file.size > 50 * 1024 * 1024) {
                showToast('Error', 'File must be under 50MB', 'error');
                return;
            }
            
            nftImageFile = file;
            document.getElementById('nft-file-type').value = isVideo ? 'video' : 'image';
            
            // Show preview
            const imgPreview = document.getElementById('nft-preview-img');
            const vidPreview = document.getElementById('nft-preview-video');
            
            if (isVideo) {
                imgPreview.style.display = 'none';
                vidPreview.style.display = 'block';
                vidPreview.src = URL.createObjectURL(file);
                vidPreview.play();
            } else {
                vidPreview.style.display = 'none';
                imgPreview.style.display = 'block';
                const reader = new FileReader();
                reader.onload = function(e) {
                    imgPreview.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
            
            document.getElementById('nft-preview').style.display = 'block';
            document.getElementById('nft-dropzone-text').style.display = 'none';
            
            // Upload to IPFS
            uploadNFTFile(file);
        }

        async function uploadNFTFile(file) {
            const status = document.getElementById('nft-upload-status');
            status.style.display = 'block';
            status.innerHTML = '<span style="color: var(--text-muted);">⏳ Uploading to IPFS...</span>';
            
            try {
                const formData = new FormData();
                formData.append('image', file);
                
                const res = await fetch(`${INDEXER_URL}/api/upload-image`, {
                    method: 'POST',
                    body: formData
                });
                
                const result = await res.json();
                
                if (result.success) {
                    nftImageUrl = result.url;
                    document.getElementById('nft-image-url').value = result.url;
                    status.innerHTML = '<span style="color: var(--teal);">✓ Uploaded to IPFS</span>';
                } else {
                    throw new Error(result.error || 'Upload failed');
                }
            } catch (err) {
                console.error('Upload error:', err);
                status.innerHTML = '<span style="color: #ff4757;">✗ Upload failed - try again</span>';
                nftImageUrl = null;
            }
        }

        // Drag and drop support
        const dropzone = document.getElementById('nft-dropzone');
        if (dropzone) {
            dropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropzone.style.borderColor = 'var(--teal)';
                dropzone.style.background = 'rgba(0, 200, 200, 0.05)';
            });
            
            dropzone.addEventListener('dragleave', () => {
                dropzone.style.borderColor = 'var(--border)';
                dropzone.style.background = 'transparent';
            });
            
            dropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropzone.style.borderColor = 'var(--border)';
                dropzone.style.background = 'transparent';
                
                const file = e.dataTransfer.files[0];
                if (file) {
                    document.getElementById('nft-file-input').files = e.dataTransfer.files;
                    handleNFTFileSelect({ files: [file] });
                }
            });
        }

        // Toggle auction duration visibility
        document.getElementById('nft-sale-type')?.addEventListener('change', function() {
            document.getElementById('auction-duration-group').style.display = 
                this.value === 'auction' ? 'block' : 'none';
        });

        // Upload NFT form submit
        document.getElementById('upload-nft-form')?.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (!nftImageUrl) {
                showToast('Error', 'Please upload an image first', 'error');
                return;
            }
            
            if (!window.toadz?.userAddress) {
                showToast('Error', 'Please connect your wallet', 'error');
                return;
            }
            
            const submitBtn = document.getElementById('nft-submit-btn');
            submitBtn.textContent = 'Minting...';
            submitBtn.disabled = true;
            
            const isFeatured = document.getElementById('nft-featured').checked;
            
            // If featured, charge 5 FLR first
            let featureTxHash = null;
            if (isFeatured) {
                try {
                    submitBtn.textContent = 'Paying feature fee...';
                    const provider = new ethers.BrowserProvider(window.ethereum);
                    const signer = await provider.getSigner();
                    const tx = await signer.sendTransaction({
                        to: FEE_WALLET,
                        value: ethers.parseEther('5')
                    });
                    await tx.wait();
                    featureTxHash = tx.hash;
                    showToast('Fee Paid', '5 FLR feature fee confirmed', 'success');
                } catch (err) {
                    showToast('Error', 'Feature fee payment failed: ' + err.message, 'error');
                    submitBtn.textContent = 'Upload & List →';
                    submitBtn.disabled = false;
                    return;
                }
            }
            
            submitBtn.textContent = 'Minting...';
            
            const data = {
                artistWallet: window.toadz.userAddress,
                imageUrl: nftImageUrl,
                fileType: document.getElementById('nft-file-type').value,
                name: document.getElementById('nft-name').value,
                description: document.getElementById('nft-description').value,
                price: parseFloat(document.getElementById('nft-price').value) || 0,
                saleType: document.getElementById('nft-sale-type').value,
                auctionDuration: parseInt(document.getElementById('nft-auction-duration').value) || 0,
                featured: isFeatured,
                featureTxHash: featureTxHash
            };
            
            console.log('Minting NFT:', data);
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/mint-nft`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                const result = await res.json();
                
                if (result.success) {
                    const tokenId = result.tokenId;
                    const nftId = result.nftId;
                    const auctionId = result.auctionId;
                    
                    // Show success based on what was created
                    if (data.saleType === 'auction') {
                        if (auctionId) {
                            showToast('Auction Live! 🔥', `Token #${tokenId} auction started (Auction #${auctionId})`, 'success');
                        } else if (tokenId && tokenId !== 'unknown') {
                            showToast('NFT Minted', 'Token minted but auction creation failed on-chain', 'warning');
                        } else {
                            showToast('Upload Complete', 'NFT saved but minting had issues', 'warning');
                        }
                    } else {
                        showToast('NFT Minted! 🎉', `Token #${tokenId} created`, 'success');
                    }
                    
                    closeUploadNFT();
                    // Reload storefront to show new NFT
                    if (currentStorefront) {
                        loadStorefrontPage(currentStorefront);
                    }
                } else {
                    throw new Error(result.error || 'Minting failed');
                }
            } catch (err) {
                console.error('Mint error:', err);
                showToast('Error', err.message || 'Failed to mint NFT', 'error');
            }
            
            submitBtn.textContent = 'Upload & List →';
            submitBtn.disabled = false;
        });

        // Edit storefront modal
        function openEditStorefront() {
            if (!currentStorefront) return;
            
            // Load current data into form
            fetch(`${INDEXER_URL}/api/storefront/${currentStorefront}`)
                .then(res => res.json())
                .then(s => {
                    document.getElementById('edit-sf-name').value = s.name || '';
                    document.getElementById('edit-sf-tagline').value = s.tagline || '';
                    document.getElementById('edit-sf-bio').value = s.bio || '';
                    document.getElementById('edit-sf-avatar').value = s.avatar || '';
                    document.getElementById('edit-sf-avatar-type').value = s.avatar_type || 'url';
                    document.getElementById('edit-sf-avatar-emoji').value = s.avatar_emoji || '';
                    document.getElementById('edit-sf-banner').value = s.banner || '';
                    document.getElementById('edit-sf-twitter').value = s.twitter || '';
                    document.getElementById('edit-sf-website').value = s.website || '';
                    
                    // Update preview
                    const preview = document.getElementById('edit-sf-avatar-preview');
                    if (s.avatar_type === 'emoji' && s.avatar_emoji) {
                        preview.innerHTML = `<span style="font-size: 32px;">${s.avatar_emoji}</span>`;
                        preview.style.background = 'linear-gradient(135deg, var(--purple), var(--teal))';
                    } else if (s.avatar) {
                        preview.innerHTML = `<img src="${s.avatar}" style="width: 100%; height: 100%; object-fit: cover;">`;
                        preview.style.background = 'var(--bg-surface)';
                    }
                    
                    document.getElementById('edit-storefront-modal').classList.add('open');
                    document.body.style.overflow = 'hidden';
                });
        }

        function closeEditStorefront() {
            document.getElementById('edit-storefront-modal').classList.remove('open');
            document.body.style.overflow = '';
        }

        // Storefront NFT filtering
        let allStorefrontNFTs = [];
        
        function filterStorefrontNFTs(filter) {
            // Update active tab
            document.querySelectorAll('#sf-tabs .artist-tab').forEach((tab, i) => {
                tab.classList.remove('active');
                if ((filter === 'all' && i === 0) || 
                    (filter === 'sale' && i === 1) ||
                    (filter === 'auction' && i === 2) ||
                    (filter === 'sold' && i === 3)) {
                    tab.classList.add('active');
                }
            });
            
            // Filter NFTs
            let filtered = allStorefrontNFTs;
            if (filter === 'sale') {
                filtered = allStorefrontNFTs.filter(n => n.sale_type === 'fixed' && n.price > 0 && n.status !== 'sold');
            } else if (filter === 'auction') {
                filtered = allStorefrontNFTs.filter(n => n.sale_type === 'auction' && n.status !== 'sold');
            } else if (filter === 'sold') {
                filtered = allStorefrontNFTs.filter(n => n.status === 'sold');
            }
            
            renderStorefrontNFTs(filtered);
        }
        
        function renderStorefrontNFTs(nfts) {
            const grid = document.getElementById('sf-nft-grid');
            const userWallet = window.toadz?.userAddress?.toLowerCase();
            const canDelete = userWallet === currentStorefront?.toLowerCase() || userWallet === ADMIN_WALLET;
            
            if (!nfts || nfts.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1/-1;">
                        <div class="empty-icon">🎨</div>
                        <p>No items</p>
                    </div>`;
                return;
            }
            
            grid.innerHTML = nfts.map(nft => {
                const isVideo = nft.image_url?.includes('.mp4') || nft.image_url?.includes('.webm');
                const isAuction = nft.sale_type === 'auction';
                const isFeatured = nft.featured === 1;
                const isSold = nft.status === 'sold';
                return `
                <div class="nft-card ${isFeatured ? 'featured' : ''} ${isSold ? 'sold' : ''}" onclick="viewNFT(${nft.id}, '${nft.contract_address}', '${nft.token_id}')">
                    <div class="nft-card-media">
                        ${isVideo 
                            ? `<video src="${nft.image_url}" muted loop playsinline preload="metadata" onloadeddata="this.currentTime=0.5;" onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0.5;"></video>`
                            : `<img src="${nft.image_url}" alt="${nft.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%231a1a2e%22 width=%22200%22 height=%22200%22/><text x=%2250%25%22 y=%2250%25%22 fill=%22%23666%22 text-anchor=%22middle%22 dy=%22.3em%22>No Image</text></svg>'">`
                        }
                        ${isVideo ? '<div class="video-badge">▶</div>' : ''}
                        ${isAuction && !isSold ? '<div class="auction-badge">🔥 Auction</div>' : ''}
                        ${isFeatured ? '<div class="featured-badge">⭐</div>' : ''}
                        ${isSold ? '<div class="sold-badge">SOLD</div>' : ''}
                        ${canDelete ? `<button class="nft-delete-btn" onclick="event.stopPropagation(); deleteNFT(${nft.id})">×</button>` : ''}
                    </div>
                    <div class="nft-card-info">
                        <h4>${nft.name}</h4>
                        <div class="nft-card-row">
                            <span class="nft-price">${isSold ? 'Sold' : (nft.price > 0 ? nft.price + ' FLR' : 'Not listed')}</span>
                            ${isAuction && !isSold ? `<span class="nft-time">⏱ ${nft.auction_duration || 24}h</span>` : ''}
                        </div>
                    </div>
                </div>
            `}).join('');
        }

        // Announcement functions
        function openAnnouncementModal() {
            document.getElementById('announcement-text').value = '';
            document.getElementById('announcement-modal').classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        
        function closeAnnouncementModal() {
            document.getElementById('announcement-modal').classList.remove('open');
            document.body.style.overflow = '';
        }
        
        // Announcement form submit
        document.getElementById('announcement-form')?.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const text = document.getElementById('announcement-text').value;
            if (!text) return;
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/storefront/${currentStorefront}/announcement`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        wallet: window.toadz.userAddress,
                        announcement: text 
                    })
                });
                
                const result = await res.json();
                
                if (result.success) {
                    showToast('Posted', 'Announcement posted!', 'success');
                    closeAnnouncementModal();
                    loadStorefrontPage(currentStorefront);
                } else {
                    throw new Error(result.error);
                }
            } catch (err) {
                showToast('Error', err.message, 'error');
            }
        });

        function selectEditEmoji(emoji) {
            const preview = document.getElementById('edit-sf-avatar-preview');
            preview.innerHTML = `<span style="font-size: 32px;">${emoji}</span>`;
            preview.style.background = 'linear-gradient(135deg, var(--purple), var(--teal))';
            document.getElementById('edit-sf-avatar').value = '';
            document.getElementById('edit-sf-avatar-type').value = 'emoji';
            document.getElementById('edit-sf-avatar-emoji').value = emoji;
        }

        function previewEditAvatarUrl(url) {
            if (!url) return;
            const preview = document.getElementById('edit-sf-avatar-preview');
            preview.style.background = 'var(--bg-surface)';
            preview.innerHTML = `<img src="${url}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.innerHTML='<span style=color:var(--text-muted)>?</span>'">`;
            document.getElementById('edit-sf-avatar-type').value = 'url';
            document.getElementById('edit-sf-avatar-emoji').value = '';
        }

        // Edit storefront form submit
        document.getElementById('edit-storefront-form')?.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const data = {
                name: document.getElementById('edit-sf-name').value,
                tagline: document.getElementById('edit-sf-tagline').value,
                bio: document.getElementById('edit-sf-bio').value,
                avatar: document.getElementById('edit-sf-avatar').value,
                avatarType: document.getElementById('edit-sf-avatar-type').value,
                avatarEmoji: document.getElementById('edit-sf-avatar-emoji').value,
                banner: document.getElementById('edit-sf-banner').value,
                twitter: document.getElementById('edit-sf-twitter').value,
                website: document.getElementById('edit-sf-website').value
            };
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/storefront/${currentStorefront}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                const result = await res.json();
                
                if (result.success) {
                    showToast('Saved', 'Storefront updated!', 'success');
                    closeEditStorefront();
                    loadStorefrontPage(currentStorefront);
                    loadStorefronts();
                } else {
                    throw new Error(result.error || 'Failed to save');
                }
            } catch (err) {
                showToast('Error', err.message, 'error');
            }
        });

        // Avatar/Emoji selection for CREATE storefront
        function selectEmoji(emoji) {
            const preview = document.getElementById('sf-avatar-preview');
            preview.innerHTML = `<span style="font-size: 32px;">${emoji}</span>`;
            preview.style.background = 'linear-gradient(135deg, var(--purple), var(--teal))';
            document.getElementById('sf-avatar').value = '';
            document.getElementById('sf-avatar-type').value = 'emoji';
            document.getElementById('sf-avatar-emoji').value = emoji;
            document.querySelectorAll('#storefront-modal .emoji-pick').forEach(btn => btn.classList.remove('selected'));
            event.target.classList.add('selected');
        }

        function previewAvatarUrl(url) {
            if (!url) return;
            
            const preview = document.getElementById('sf-avatar-preview');
            preview.style.background = 'var(--bg-surface)';
            preview.innerHTML = `<img src="${url}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.innerHTML='<span style=color:var(--text-muted)>?</span>'">`;
            
            // Store selection
            document.getElementById('sf-avatar-type').value = 'url';
            document.getElementById('sf-avatar-emoji').value = '';
            
            // Clear emoji selection
            document.querySelectorAll('.emoji-pick').forEach(btn => btn.classList.remove('selected'));
        }

        function openCreateStorefront() {
            if (!window.toadz || !window.toadz.isConnected) {
                showToast('Connect Wallet', 'Please connect your wallet first', 'error');
                openConnectModal();
                return;
            }
            
            // Reset avatar preview
            const preview = document.getElementById('sf-avatar-preview');
            if (preview) {
                preview.innerHTML = '<span style="color: var(--text-muted);">?</span>';
                preview.style.background = 'var(--bg-surface)';
            }
            document.querySelectorAll('.emoji-pick').forEach(btn => btn.classList.remove('selected'));
            
            // Check if admin
            const isAdmin = window.toadz.userAddress?.toLowerCase() === ADMIN_WALLET;
            const feeNote = document.getElementById('sf-fee-note');
            if (feeNote) {
                feeNote.innerHTML = isAdmin ? '<span style="color: var(--accent);">✓ Admin - Free</span>' : '<span>⚡ Cost: 10 FLR</span>';
            }
            
            document.getElementById('storefront-modal').classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeStorefrontModal(e) {
            if (!e || e.target === e.currentTarget) {
                document.getElementById('storefront-modal').classList.remove('open');
                document.body.style.overflow = '';
            }
        }

        document.getElementById('storefront-form')?.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Storefront form submitted');
            
            const wallet = window.toadz?.userAddress;
            console.log('Wallet:', wallet);
            
            if (!wallet) {
                showToast('Error', 'Please connect your wallet first', 'error');
                return;
            }
            
            const isAdmin = wallet?.toLowerCase() === ADMIN_WALLET;
            console.log('Is admin:', isAdmin);
            
            const submitBtn = document.getElementById('sf-submit-btn');
            submitBtn.textContent = 'Creating...';
            submitBtn.disabled = true;
            
            const data = {
                wallet: wallet,
                name: document.getElementById('sf-name').value,
                bio: document.getElementById('sf-bio').value,
                avatar: document.getElementById('sf-avatar').value,
                avatarType: document.getElementById('sf-avatar-type').value || 'url',
                avatarEmoji: document.getElementById('sf-avatar-emoji').value,
                banner: document.getElementById('sf-banner').value,
                twitter: document.getElementById('sf-twitter').value,
                website: document.getElementById('sf-website').value
            };
            
            console.log('Storefront data:', data);
            
            try {
                // If not admin, send payment first
                if (!isAdmin) {
                    console.log('Sending payment...');
                    const provider = new ethers.BrowserProvider(window.ethereum);
                    const signer = await provider.getSigner();
                    const tx = await signer.sendTransaction({
                        to: FEE_WALLET,
                        value: ethers.parseEther(STOREFRONT_FEE)
                    });
                    await tx.wait();
                    data.txHash = tx.hash;
                    showToast('Payment Sent', 'Creating storefront...', 'success');
                }
                
                // Create storefront
                console.log('Posting to indexer:', `${INDEXER_URL}/api/storefront`);
                const res = await fetch(`${INDEXER_URL}/api/storefront`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                console.log('Response status:', res.status);
                const result = await res.json();
                console.log('Response:', result);
                
                if (result.success) {
                    showToast('Storefront Created!', data.name, 'success');
                    closeStorefrontModal();
                    this.reset();
                    loadStorefronts();
                } else {
                    throw new Error(result.error || 'Failed to create');
                }
            } catch (err) {
                console.error('Storefront error:', err);
                showToast('Error', err.message || 'Failed to create storefront', 'error');
            }
            
            submitBtn.textContent = 'Create Storefront →';
            submitBtn.disabled = false;
        });

        // Legacy - keep for compatibility
        function renderArtists() {
            loadStorefronts();
        }

        function renderAllCollections() {
            const container = document.getElementById('all-collections-grid');
            if (!container) return;
            if (collections.length === 0) {
                container.innerHTML = '<div class="empty-state full-width"><div class="empty-icon">🐸</div><p>Collections coming soon</p><span>3D Toadz launching on Flare</span></div>';
                return;
            }
            container.innerHTML = collections.map(c => `
                <div class="collection-card-full" onclick="showPage('collection-detail')">
                    <div class="collection-card-image">
                        <img src="${c.image}" alt="${c.name}">
                        ${c.stakeable ? '<span class="collection-boost-badge">🔥 LP Boost</span>' : ''}
                    </div>
                    <div class="collection-card-info">
                        <div class="collection-card-name">${c.name}</div>
                        <div class="collection-card-stats">
                            <div class="collection-card-stat">
                                <span class="stat-label">Floor</span>
                                <span class="stat-value">${c.floor}</span>
                            </div>
                            <div class="collection-card-stat">
                                <span class="stat-label">Items</span>
                                <span class="stat-value">${c.items}</span>
                            </div>
                            <div class="collection-card-stat">
                                <span class="stat-label">Volume</span>
                                <span class="stat-value">${c.volume || '—'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Navigation
        function showPage(page, skipHash = false) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById('page-' + page).classList.add('active');
            
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            document.querySelectorAll('.mobile-nav-item').forEach(n => n.classList.remove('active'));
            
            // Update URL for routing (without triggering popstate again)
            if (!skipHash) {
                const newPath = page === 'home' ? '/FlareMarket/' : '/FlareMarket/' + page;
                history.pushState(null, '', newPath);
            }
            
            // Update my-nfts page state based on wallet connection
            if (page === 'my-nfts') {
                updateMyNftsPageState();
            }
            
            // Initialize socials page
            if (page === 'socials') {
                onSocialsPageShow();
            }
            
            window.scrollTo(0, 0);
        }
        
        // Handle URL hash routing on load and hash changes
        function handleHashRoute() {
            // Check for redirect from 404.html
            const params = new URLSearchParams(window.location.search);
            const redirectPath = params.get('p') || params.get('route');
            if (redirectPath) {
                history.replaceState(null, '', '/FlareMarket/' + redirectPath);
            }
            
            const path = window.location.pathname.replace('/FlareMarket', '').replace(/^\//, '');
            
            // Check if it's a collection route: collection/slug
            if (path.startsWith('collection/')) {
                const slug = path.replace('collection/', '');
                // Try Flare first, then Songbird
                let address = getAddressFromSlug(slug, 'flare');
                let chain = 'flare';
                if (!address) {
                    address = getAddressFromSlug(slug, 'songbird');
                    chain = 'songbird';
                }
                if (address) {
                    loadCollectionDetailByAddress(address, chain);
                    return;
                }
            }
            
            // Check if it's an artist storefront (artist/wallet)
            if (path.startsWith('artist/')) {
                const wallet = path.replace('artist/', '');
                if (wallet) {
                    viewStorefront(wallet, true);
                    return;
                }
            }
            
            const validPages = ['', 'artists', 'staking', 'collections', 'launchpad', 'socials', 'my-nfts', 'mint'];
            const page = validPages.includes(path) ? (path || 'home') : 'home';
            showPage(page, true);
        }
        
        // Navigate to URL
        function navigateTo(url) {
            history.pushState(null, '', '/FlareMarket/' + url);
            handleHashRoute();
        }
        
        // Load collection without changing URL (for direct URL access)
        async function loadCollectionDetailByAddress(address, chain) {
            // Show page IMMEDIATELY
            showPage('collection-detail', true);
            
            const indexerUrl = chain === 'flare' ? FLARE_INDEXER_URL : INDEXER_URL;
            const info = getCollectionInfo(address, chain);
            
            // Update header immediately
            const headerImg = document.querySelector('.collection-header-image img');
            if (headerImg) headerImg.src = info.image || '';
            const headerName = document.querySelector('.collection-header-name');
            if (headerName) headerName.textContent = info.name || 'Unknown';
            
            const nftGrid = document.getElementById('collection-nfts');
            nftGrid.innerHTML = '<div class="empty-state"><div class="empty-icon">⏳</div><p>Loading...</p></div>';
            
            // Fetch NFTs
            try {
                const res = await fetch(`${indexerUrl}/nfts/${address}?limit=100`);
                if (res.ok) {
                    const nfts = await res.json();
                    if (nfts.length === 0) {
                        nftGrid.innerHTML = '<div class="empty-state"><div class="empty-icon">🎨</div><h3>No NFTs indexed yet</h3></div>';
                    } else {
                        const collectionImg = info.image || '';
                        nftGrid.innerHTML = nfts.map(nft => `
                            <div class="nft-card">
                                <div class="nft-card-image">
                                    <img src="${collectionImg}" alt="#${nft.token_id}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${chain === 'flare' ? '🔥' : '🐦'}</text></svg>'">
                                </div>
                                <div class="nft-card-info">
                                    <div class="nft-card-name">#${nft.token_id}</div>
                                </div>
                            </div>
                        `).join('');
                    }
                }
            } catch (e) {
                nftGrid.innerHTML = '<div class="empty-state"><div class="empty-icon">🎨</div><h3>Error loading</h3></div>';
            }
            
            // Fetch stats in background
            fetch(`${indexerUrl}/collection/${address}`).then(r => r.json()).then(stats => {
                const statValues = document.querySelectorAll('.collection-stat-value');
                if (statValues[0]) statValues[0].textContent = stats.totalIndexed || '?';
                if (statValues[3]) statValues[3].textContent = stats.owners || '?';
            }).catch(() => {});
        }
        
        // Listen for back/forward buttons
        window.addEventListener('popstate', handleHashRoute);

        function updateMyNftsPageState() {
            const notConnected = document.getElementById('my-nfts-not-connected');
            const connected = document.getElementById('my-nfts-connected');
            
            if (window.toadz && window.toadz.isConnected) {
                notConnected.style.display = 'none';
                connected.style.display = 'block';
                // Update wallet address display
                const addr = window.toadz.userAddress;
                document.getElementById('my-wallet-address').textContent = addr ? addr.slice(0,6) + '...' + addr.slice(-4) : '';
                // Load user's NFTs
                loadMyNfts(addr);
            } else {
                notConnected.style.display = 'flex';
                connected.style.display = 'none';
            }
        }
        
        async function loadMyNfts(userAddress) {
            if (!userAddress) return;
            
            const grid = document.getElementById('my-nfts-grid');
            if (!grid) return;
            
            grid.innerHTML = '<div class="empty-state"><div class="empty-icon">⏳</div><p>Loading your NFTs...</p></div>';
            
            let allNfts = [];
            
            // Fetch from Flare indexer
            try {
                const flareRes = await fetch(`${FLARE_INDEXER_URL}/user/${userAddress}/nfts`);
                if (flareRes.ok) {
                    const data = await flareRes.json();
                    console.log('Flare NFTs:', data);
                    if (data.collections && data.collections.length > 0) {
                        for (const col of data.collections) {
                            for (const tokenId of col.tokenIds) {
                                allNfts.push({
                                    collection: col.name,
                                    collectionAddress: col.collection,
                                    tokenId: tokenId,
                                    chain: 'flare',
                                    image: '' // Would need metadata fetch
                                });
                            }
                        }
                    }
                }
            } catch (e) {
                console.log('Flare NFTs fetch error:', e);
            }
            
            // Also fetch from Songbird indexer
            try {
                const sgbRes = await fetch(`${INDEXER_URL}/user/${userAddress}/nfts`);
                if (sgbRes.ok) {
                    const data = await sgbRes.json();
                    console.log('Songbird NFTs:', data);
                    if (data.collections && data.collections.length > 0) {
                        for (const col of data.collections) {
                            for (const tokenId of col.tokenIds) {
                                const colInfo = SONGBIRD_COLLECTIONS[col.collection?.toLowerCase()] || {};
                                allNfts.push({
                                    collection: col.name || colInfo.name || 'Unknown',
                                    collectionAddress: col.collection,
                                    tokenId: tokenId,
                                    chain: 'songbird',
                                    image: colInfo.image || ''
                                });
                            }
                        }
                    }
                }
            } catch (e) {
                console.log('Songbird NFTs fetch error:', e);
            }
            
            // Update count
            document.getElementById('my-owned-count').textContent = allNfts.length;
            
            if (allNfts.length === 0) {
                grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🎨</div><p>No NFTs found</p><span>Buy or mint NFTs to see them here</span></div>';
                return;
            }
            
            // Render NFTs
            grid.innerHTML = allNfts.map(n => `
                <div class="nft-card" data-collection="${n.collectionAddress}" data-token="${n.tokenId}">
                    <div class="nft-image">
                        <img src="${n.image || ''}" alt="${n.collection} #${n.tokenId}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${n.chain === 'flare' ? '🔥' : '🐦'}</text></svg>'">
                        <span class="nft-badge">${n.chain === 'flare' ? 'FLR' : 'SGB'}</span>
                    </div>
                    <div class="nft-info">
                        <div class="nft-collection">${n.collection}</div>
                        <div class="nft-name">#${n.tokenId}</div>
                    </div>
                </div>
            `).join('');
        }

        function handleUserMenuClick() {
            if (window.toadz && window.toadz.isConnected) {
                showPage('my-nfts');
            } else {
                openConnectModal();
            }
        }

        function setChain(chain) {
            currentNetwork = chain;
            document.querySelectorAll('.chain-btn').forEach(b => b.classList.remove('active'));
            document.querySelector(`.chain-btn.${chain}`).classList.add('active');
            
            // Show/hide vault based on chain
            const vaultSection = document.getElementById('vault-section');
            if (vaultSection) {
                if (chain === 'songbird') {
                    vaultSection.classList.remove('hidden');
                } else {
                    vaultSection.classList.add('hidden');
                }
            }
            
            // Load chain-specific data
            if (chain === 'songbird') {
                loadSongbirdData();
            } else {
                // Load Flare collections from indexer
                loadFlareData();
            }
            
            showToast('Network', `Switched to ${chain === 'flare' ? 'Flare' : 'Songbird'}`, 'info');
        }

        // Flare collection data with images - ALL LOWERCASE KEYS
        const FLARE_COLLECTIONS = {
            '0xd1ef6460d9d06a4ce74d9800b1bc11ade822b349': { name: 'Block Bonez', symbol: 'BONEZ', slug: 'block-bonez', image: 'https://ipfs.io/ipfs/QmBlockBonez/1.png' },
            '0x4fd29d6c713a390aa38b650254d0cd38a4982dbd': { name: 'Focus Pass', symbol: 'FOCUS', slug: 'focus-pass', image: 'https://ipfs.io/ipfs/QmFocusPass/1.png' },
            '0x862b713fecebc5304ed7af993d79a3a6ae8747dd': { name: 'Flare Apes', symbol: 'FAPES', slug: 'flare-apes', image: 'https://ipfs.io/ipfs/QmFlareApes/1.png' },
            '0x94aa172076a59baa1b5d63ae4dbf722f74e45e57': { name: 'Block Bonez Traits', symbol: 'TRAITS', slug: 'block-bonez-traits', image: 'https://ipfs.io/ipfs/QmBlockBonezTraits/1.png' },
            '0xc5f0c8b27dd920f4f469a857d6f0fecf0fa2bdb8': { name: 'Flare Punks', symbol: 'FPUNKS', slug: 'flare-punks', image: 'https://ipfs.io/ipfs/QmFlarePunks/1.png' },
            '0x9d8644a5d8a4ed0b4ca462ef32a6d47eb03c59db': { name: 'Lucky Claw', symbol: 'CLAW', slug: 'lucky-claw', image: 'https://ipfs.io/ipfs/QmLuckyClaw/1.png' },
            '0x595fa9effad5c0c214b00b1e3004302519bfc1db': { name: 'Flaremingo Frens', symbol: 'FRENS', slug: 'flaremingo-frens', image: 'https://ipfs.io/ipfs/QmTNmPZTGqsoRxLmj9idjCpdxLsY434PgTsHB2FkoiXEUE/1.png' },
            '0x93365aace3db5407b0976c0a6c5f46b21bad3923': { name: 'The Fat Kittens', symbol: 'KITTEN', slug: 'fat-kittens', image: 'https://ipfs.io/ipfs/QmFatKittens/1.png' },
            '0x2959d636871d9714dd6e00f4e9700ccc346cc39e': { name: 'Doodle Bunny', symbol: 'BUNNY', slug: 'doodle-bunny', image: 'https://ipfs.io/ipfs/QmDoodleBunny/1.png' },
            '0xe2432f1e376482ec914ebbb910d3bfd8e3f3f29e': { name: 'The Flaremingos', symbol: 'MINGO', slug: 'flaremingos', image: 'https://ipfs.io/ipfs/QmFlaremingos/1.png' },
            '0x01269ec72cdc62eb5e90a30363264029a45f43d1': { name: 'Phoenix Project Founders', symbol: 'PHOENIX', slug: 'phoenix-founders', image: 'https://ipfs.io/ipfs/QmPhoenix/1.png' },
            '0xe6e5fa0b12d9e8ed12cb8ab733e6444f3c74c68c': { name: 'Poodle & Friends', symbol: 'POODLE', slug: 'poodle-friends', image: 'https://ipfs.io/ipfs/bafybeicd3jwz5j3sbyjadl6zwot3jaamwqsrmgq25gvxkj25ttdqzic4zy/1.png' },
            '0x5f4283cf126a4dcce16b66854cc9a713893c0000': { name: 'Smuggler Chimps', symbol: 'CHIMP', slug: 'smuggler-chimps', image: 'https://ipfs.io/ipfs/QmSmugglerChimps/1.png' },
            '0x127bb21a24b8ea5913f1c8c9868800fbcef1316e': { name: 'Super Bad Monsters', symbol: 'SBM', slug: 'super-bad-monsters', image: 'https://ipfs.io/ipfs/QmSuperBadMonsters/1.png' },
            '0xd2516a06d1fabb9ba84b5fd1de940f6f0eae3673': { name: 'Minerals', symbol: 'MINERAL', slug: 'minerals', image: 'https://ipfs.io/ipfs/QmagMFqse3TgMvjgZfUXASLqq4qiboBiG5cqvpFtbgo5CW/still.png' },
            '0xa574dd4393e828b8cf7c3c379861c748d321bbfd': { name: 'FlareRock', symbol: 'FROCK', slug: 'flarerock', image: 'https://ipfs.io/ipfs/QmFlareRock/1.png' },
            '0x9f338ac5d000baab73f619fc75115f2fe9773736': { name: 'Mutant Ape Flare Serum', symbol: 'MAFS', slug: 'mutant-ape-serum', image: 'https://ipfs.io/ipfs/QmMAFS/1.png' },
            '0xf799f44bf672f5c2a141778c328e386ecd867330': { name: 'Phoenix Project Liquidity', symbol: 'PHOENIX-LIQ', slug: 'phoenix-liquidity', image: 'https://ipfs.io/ipfs/QmPhoenixLiq/1.png' },
            '0xbc25d2997a7a7b42d2501a4c4d0169f135743a64': { name: 'PoodleFriendIslands', symbol: 'ISLAND', slug: 'poodle-islands', image: 'https://ipfs.io/ipfs/bafybeihlyofvjfavatfm3oyfog53mtxgvarphef2pumfweztpitb5xjznm/1.png' },
            '0xbc42e9a6c24664749b2a0d571fd67f23386e34b8': { name: 'Floor-Sweeper', symbol: 'SWEEP', slug: 'floor-sweeper', image: 'https://ipfs.io/ipfs/QmFloorSweeper/1.png' }
        };
        
        // Helper to find collection info regardless of address case
        function getCollectionInfo(address, chain) {
            const collections = chain === 'flare' ? FLARE_COLLECTIONS : SONGBIRD_COLLECTIONS;
            const normalized = address.toLowerCase();
            return collections[normalized] || {};
        }
        
        // Slug to address lookup
        function getAddressFromSlug(slug, chain) {
            const collections = chain === 'flare' ? FLARE_COLLECTIONS : SONGBIRD_COLLECTIONS;
            for (const [addr, info] of Object.entries(collections)) {
                if (info.slug === slug) return addr;
            }
            return null;
        }

        // Load Flare data from indexer
        async function loadFlareData() {
            const gridContainer = document.getElementById('all-collections-grid');
            const homeScroll = document.getElementById('collections-scroll');
            
            console.log('loadFlareData called');
            
            // Show loading state
            if (gridContainer) {
                gridContainer.innerHTML = '<div class="empty-state full-width"><div class="empty-icon">⏳</div><p>Loading Flare collections...</p></div>';
            }
            if (homeScroll) {
                homeScroll.innerHTML = '<div class="empty-state"><div class="empty-icon">⏳</div><p>Loading...</p></div>';
            }
            
            let collectionsArray = [];
            
            try {
                const res = await fetch(`${FLARE_INDEXER_URL}/collections`);
                if (res.ok) {
                    const collections = await res.json();
                    console.log('Flare collections from indexer:', collections);
                    
                    // Fetch stats and images for each collection
                    const provider = new ethers.JsonRpcProvider('https://flare-api.flare.network/ext/C/rpc');
                    
                    collectionsArray = await Promise.all(collections.map(async (c) => {
                        const addr = c.address.toLowerCase();
                        const info = FLARE_COLLECTIONS[addr] || { name: c.name, symbol: c.symbol, image: '' };
                        
                        // Get collection stats
                        let stats = { owners: 0, totalIndexed: 0 };
                        try {
                            const statsRes = await fetch(`${FLARE_INDEXER_URL}/collection/${addr}`);
                            if (statsRes.ok) {
                                stats = await statsRes.json();
                            }
                        } catch (e) {}
                        
                        // Fetch image from token metadata (try token 1, then 0)
                        let image = info.image || '';
                        if (!image) {
                            try {
                                const contract = new ethers.Contract(addr, ['function tokenURI(uint256) view returns (string)'], provider);
                                let tokenURI = '';
                                try {
                                    tokenURI = await contract.tokenURI(1);
                                } catch {
                                    tokenURI = await contract.tokenURI(0);
                                }
                                
                                // Convert IPFS to HTTP gateway
                                if (tokenURI.startsWith('ipfs://')) {
                                    tokenURI = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
                                }
                                
                                // Fetch metadata
                                const metaRes = await fetch(tokenURI);
                                if (metaRes.ok) {
                                    const meta = await metaRes.json();
                                    image = meta.image || '';
                                    if (image.startsWith('ipfs://')) {
                                        image = image.replace('ipfs://', 'https://ipfs.io/ipfs/');
                                    }
                                }
                            } catch (e) {
                                console.log('Failed to fetch image for', c.name, e.message);
                            }
                        }
                        
                        return {
                            address: addr,
                            name: info.name || c.name,
                            symbol: info.symbol || c.symbol,
                            slug: info.slug || '',
                            image: image,
                            supply: stats.totalIndexed || '?',
                            owners: stats.owners || 0,
                            floor: '--'
                        };
                    }));
                }
            } catch (err) {
                console.log('Flare indexer fetch failed:', err);
            }
            
            // Fallback if no data
            if (collectionsArray.length === 0) {
                collectionsArray = Object.entries(FLARE_COLLECTIONS).map(([addr, info]) => ({
                    address: addr,
                    name: info.name,
                    symbol: info.symbol,
                    slug: info.slug || '',
                    image: info.image || '',
                    supply: '?',
                    floor: '--'
                }));
            }
            
            console.log('Rendering', collectionsArray.length, 'Flare collections');
            
            renderFlareToGrid(gridContainer, collectionsArray);
            renderFlareToScroll(homeScroll, collectionsArray);
        }
        
        function renderFlareToGrid(container, collections) {
            if (!container) return;
            
            container.innerHTML = collections.map(c => `
                <div class="collection-card-full" onclick="loadCollectionDetail('${c.address}', 'flare', '${c.slug || ''}')">
                    <div class="collection-card-image">
                        <img src="${c.image || ''}" alt="${c.name}" style="${c.name === 'Block Bonez' ? 'animation: none !important;' : ''}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🔥</text></svg>'">
                    </div>
                    <div class="collection-card-info">
                        <div class="collection-card-name">${c.name}</div>
                        <div class="collection-card-stats">
                            <div class="collection-card-stat">
                                <span class="stat-label">Floor</span>
                                <span class="stat-value">${c.floor}</span>
                            </div>
                            <div class="collection-card-stat">
                                <span class="stat-label">Items</span>
                                <span class="stat-value">${typeof c.supply === 'number' ? c.supply.toLocaleString() : c.supply}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        async function loadCollectionDetail(address, chain, slug) {
            // Show page IMMEDIATELY
            showPage('collection-detail');
            
            const indexerUrl = chain === 'flare' ? FLARE_INDEXER_URL : INDEXER_URL;
            const info = getCollectionInfo(address, chain);
            
            // Update URL
            const urlSlug = slug || info.slug || address;
            history.pushState(null, '', '/FlareMarket/collection/' + urlSlug);
            
            // Update header immediately
            const headerImg = document.querySelector('.collection-header-image img');
            if (headerImg) headerImg.src = info.image || '';
            const headerName = document.querySelector('.collection-header-name');
            if (headerName) headerName.textContent = info.name || 'Unknown';
            
            const nftGrid = document.getElementById('collection-nfts');
            nftGrid.innerHTML = '<div class="empty-state"><div class="empty-icon">⏳</div><p>Loading...</p></div>';
            
            // Fetch NFTs
            try {
                const res = await fetch(`${indexerUrl}/nfts/${address}?limit=100`);
                if (res.ok) {
                    const nfts = await res.json();
                    if (nfts.length === 0) {
                        nftGrid.innerHTML = '<div class="empty-state"><div class="empty-icon">🎨</div><h3>No NFTs indexed yet</h3></div>';
                    } else {
                        const collectionImg = info.image || '';
                        nftGrid.innerHTML = nfts.map(nft => `
                            <div class="nft-card">
                                <div class="nft-card-image">
                                    <img src="${collectionImg}" alt="#${nft.token_id}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${chain === 'flare' ? '🔥' : '🐦'}</text></svg>'">
                                </div>
                                <div class="nft-card-info">
                                    <div class="nft-card-name">#${nft.token_id}</div>
                                </div>
                            </div>
                        `).join('');
                    }
                }
            } catch (e) {
                nftGrid.innerHTML = '<div class="empty-state"><div class="empty-icon">🎨</div><h3>Error loading</h3></div>';
            }
            
            // Fetch stats in background
            fetch(`${indexerUrl}/collection/${address}`).then(r => r.json()).then(stats => {
                const statValues = document.querySelectorAll('.collection-stat-value');
                if (statValues[0]) statValues[0].textContent = stats.totalIndexed || '?';
                if (statValues[3]) statValues[3].textContent = stats.owners || '?';
            }).catch(() => {});
        }
        
        function renderFlareToScroll(container, collections) {
            if (!container) return;
            
            container.innerHTML = collections.map(c => `
                <div class="collection-card" onclick="loadCollectionDetail('${c.address}', 'flare', '${c.slug || ''}')">
                    <div class="collection-image">
                        <img src="${c.image || ''}" alt="${c.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🔥</text></svg>'">
                    </div>
                    <div class="collection-info">
                        <div class="collection-name">${c.name}</div>
                        <div class="collection-meta">
                            <span class="collection-items">${typeof c.supply === 'number' ? c.supply.toLocaleString() : c.supply} items</span>
                            <span class="collection-floor">${c.floor}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Load Songbird data from indexer
        // Songbird collection data - defined once at top level
        const SONGBIRD_COLLECTIONS = {
            '0x35afb6ba51839dedd33140a3b704b39933d1e642': { name: 'sToadz', slug: 'stoadz', supply: 10000, image: 'https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/1.png' },
            '0x91aa85a172dd3e7eea4ad1a4b33e90cbf3b99ed8': { name: 'Luxury Lofts', slug: 'luxury-lofts', supply: 10000, image: 'https://nftstorage.link/ipfs/bafybeiet5uqcxxkpdwyvnufsglah6arxlukxhciz3jy2h2m24scmjyjciq/1.gif' },
            '0x360f8b7d9530f55ab8e52394e6527935635f51e7': { name: 'Songbird City', slug: 'songbird-city', supply: 10000, image: 'https://nftstorage.link/ipfs/bafybeibi35a2w5ue6s7s7ka42xhkbbtpplgyvovefetxqwr6fzmvn6umpi/1.png' },
            '0x0e759aa7166ab3b2b81abd6d9ed16ac83368f97e': { name: 'The Fat Cats', slug: 'fat-cats', supply: 1000, image: 'https://ipfs.io/ipfs/QmQFNZXPuL4efM8Dp5j2bme6zySaYEYTNmn1CF2KjAja2A/1.png' },
            '0xcdb019c0990c033724da55f5a04be6fd6ec1809d': { name: 'The Oracles', slug: 'oracles', supply: 22222, image: 'https://ipfs.io/ipfs/QmfZhkQgWgG98JmaoaiUR5qNYPJh6ZS6HVFk5U6gRPaf1W/1.jpeg' },
            '0xd83ae2c70916a2360e23683a0d3a3556b2c09935': { name: 'Songbird Punks', slug: 'songbird-punks', supply: 20000, image: 'https://ipfs.io/ipfs/Qmc6cQJaUjBZYfQ1G8tcFhdsyVLn79MKFp1kKB9Cj17gQn/1.png' },
            '0x279a222a18c033124ab02290ddec97912a8b7185': { name: 'doodcats', slug: 'doodcats', supply: 10000, image: 'https://ipfs.io/ipfs/QmWGAWmuHZ4xzMp8eRyB8Ntut9xwPuKej9XmM5AWmsNQLZ/1.png' },
            '0x7dc06ee0717c6f4905652f46f8f1891e8538e799': { name: 'Rare Pepe Club', slug: 'rare-pepe', supply: 9973, image: 'https://ipfs.io/ipfs/QmRarePepe/1.png' }
        };

        async function loadSongbirdData() {
            const gridContainer = document.getElementById('all-collections-grid');
            const homeScroll = document.getElementById('collections-scroll');
            
            console.log('loadSongbirdData called, homeScroll:', !!homeScroll, 'gridContainer:', !!gridContainer);
            
            // Show loading state on both containers
            if (gridContainer) {
                gridContainer.innerHTML = '<div class="empty-state full-width"><div class="empty-icon">⏳</div><p>Loading Songbird collections...</p></div>';
            }
            if (homeScroll) {
                homeScroll.innerHTML = '<div class="empty-state"><div class="empty-icon">⏳</div><p>Loading...</p></div>';
            }
            
            let collectionsArray = [];
            
            // Try to load live floors from indexer
            try {
                const floorsRes = await fetch(`${INDEXER_URL}/floors`);
                if (floorsRes.ok) {
                    const floors = await floorsRes.json();
                    console.log('Floors from indexer:', floors);
                    if (floors && floors.length > 0) {
                        // Merge floor data with collection info
                        collectionsArray = floors.map(f => {
                            const addr = f.collection?.toLowerCase();
                            const info = SONGBIRD_COLLECTIONS[addr] || { name: f.collection?.slice(0,8) + '...', supply: '?', image: '' };
                            const floorSgb = f.floor_sgb ? parseFloat(f.floor_sgb).toLocaleString(undefined, {maximumFractionDigits: 0}) + ' SGB' : '--';
                            return { ...info, address: addr, floor: floorSgb };
                        });
                        
                        // Add any collections we have info for but no floor data
                        Object.entries(SONGBIRD_COLLECTIONS).forEach(([addr, info]) => {
                            if (!collectionsArray.find(m => m.address === addr)) {
                                collectionsArray.push({ ...info, address: addr, floor: '--' });
                            }
                        });
                    }
                }
            } catch (err) {
                console.log('Indexer floors failed:', err);
            }
            
            // Fallback if no floors data
            if (collectionsArray.length === 0) {
                collectionsArray = Object.entries(SONGBIRD_COLLECTIONS).map(([addr, info]) => ({
                    address: addr,
                    ...info,
                    floor: '--'
                }));
            }
            
            console.log('Rendering', collectionsArray.length, 'Songbird collections');
            
            // Render to BOTH containers
            renderSongbirdToGrid(gridContainer, collectionsArray);
            renderSongbirdToScroll(homeScroll, collectionsArray);
        }

        function renderSongbirdToGrid(container, collections) {
            if (!container) return;
            
            container.innerHTML = collections.map(c => `
                <div class="collection-card-full" onclick="loadCollectionDetail('${c.address}', 'songbird', '${c.slug || ''}')">
                    <div class="collection-card-image">
                        <img src="${c.image}" alt="${c.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🐸</text></svg>'">
                        <span class="collection-boost-badge">🔥 LP Boost</span>
                    </div>
                    <div class="collection-card-info">
                        <div class="collection-card-name">${c.name}</div>
                        <div class="collection-card-stats">
                            <div class="collection-card-stat">
                                <span class="stat-label">Floor</span>
                                <span class="stat-value">${c.floor}</span>
                            </div>
                            <div class="collection-card-stat">
                                <span class="stat-label">Items</span>
                                <span class="stat-value">${typeof c.supply === 'number' ? c.supply.toLocaleString() : c.supply}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderSongbirdToScroll(container, collections) {
            if (!container) return;
            
            // Use same card format as Flare collections for home scroll
            container.innerHTML = collections.map(c => `
                <div class="collection-card" onclick="loadCollectionDetail('${c.address}', 'songbird', '${c.slug || ''}')">
                    <div class="collection-image">
                        <img src="${c.image}" alt="${c.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🐸</text></svg>'">
                        <span class="collection-badge">LP Boost</span>
                    </div>
                    <div class="collection-info">
                        <div class="collection-name">${c.name}</div>
                        <div class="collection-meta">
                            <span class="collection-items">${typeof c.supply === 'number' ? c.supply.toLocaleString() : c.supply} items</span>
                            <span class="collection-floor">${c.floor}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Keep for backwards compatibility if called elsewhere
        function renderSongbirdCollections(floors, collectionInfo) {
            loadSongbirdData();
        }

        function renderSongbirdActivity(events) {
            const ticker = document.getElementById('activity-ticker');
            if (!ticker) return;
            
            if (!events || events.length === 0) {
                ticker.innerHTML = '<div class="ticker-item">No recent activity</div>';
                return;
            }
            
            const collectionNames = {
                '0x35afb6ba51839dedd33140a3b704b39933d1e642': 'sToadz',
                '0x91aa85a172dd3e7eea4ad1a4b33e90cbf3b99ed8': 'Lofts',
                '0x360f8b7d9530f55ab8e52394e6527935635f51e7': 'SB City'
            };
            
            ticker.innerHTML = events.slice(0, 10).map(e => {
                const name = collectionNames[e.collection?.toLowerCase()] || 'NFT';
                const icon = e.event_type === 'sold' ? '💰' : e.event_type === 'listed' ? '📋' : e.event_type === 'staked' ? '🔒' : '🔔';
                const price = e.price_sgb ? parseFloat(e.price_sgb).toLocaleString() + ' SGB' : '';
                return `<div class="ticker-item">${icon} ${name} #${e.token_id || '?'} ${e.event_type} ${price}</div>`;
            }).join('');
        }

        // Initialize
        renderAuctions();
        loadFlareData(); // Load Flare collections by default
        renderNFTs('nft-grid');
        renderNFTs('artist-nfts');
        renderNFTs('collection-nfts');
        renderStakingPools();
        renderArtists();
        renderActivityTicker();
        loadFeaturedNFTs();
        loadLiveAuctions();
        loadArtistActivity();
        
        // Handle initial route from URL hash
        handleHashRoute();
        
        // Load artist activity for ticker
        async function loadArtistActivity() {
            const ticker = document.getElementById('activity-ticker');
            if (!ticker) return;
            
            try {
                // Fetch both listings and bids
                const [listingsRes, bidsRes] = await Promise.all([
                    fetch(`${INDEXER_URL}/api/artist-activity?limit=10`),
                    fetch(`${INDEXER_URL}/api/live-activity?limit=10`)
                ]);
                
                const listings = await listingsRes.json();
                const bids = await bidsRes.json();
                
                // Combine and format
                const listingItems = (listings || []).map(a => ({
                    type: a.type === 'auction' ? 'auction' : 'listed',
                    typeLabel: a.type === 'auction' ? 'AUCTION' : 'LISTED',
                    name: a.name,
                    price: a.price,
                    image: a.image_url,
                    time: a.created_at
                }));
                
                const bidItems = (bids || []).map(b => ({
                    type: 'bid',
                    typeLabel: 'BID',
                    name: b.nft_name || 'NFT',
                    price: b.amount,
                    image: b.image_url,
                    wallet: b.wallet,
                    time: b.created_at
                }));
                
                // Combine and sort by time
                const allActivity = [...listingItems, ...bidItems]
                    .sort((a, b) => (b.time || 0) - (a.time || 0))
                    .slice(0, 15);
                
                if (allActivity.length > 0) {
                    const items = allActivity.map(a => {
                        const thumb = a.image || '';
                        const isVideo = thumb.includes('.mp4') || thumb.includes('.webm');
                        const walletStr = a.wallet ? ` by ${a.wallet.slice(0,4)}...${a.wallet.slice(-3)}` : '';
                        return `
                            <div class="ticker-item-v2">
                                <div class="ticker-thumb">
                                    ${isVideo 
                                        ? `<video src="${thumb}" muted loop autoplay playsinline></video>`
                                        : `<img src="${thumb}" alt="">`
                                    }
                                </div>
                                <div class="ticker-info">
                                    <span class="ticker-type ${a.type}">${a.typeLabel}</span>
                                    <span class="ticker-name">${a.name}${walletStr}</span>
                                </div>
                                <span class="ticker-price">${a.price} FLR</span>
                            </div>`;
                    }).join('');
                    ticker.innerHTML = items + items;
                } else {
                    ticker.innerHTML = '<div class="ticker-item">No activity yet • List your first NFT</div>';
                }
            } catch (err) {
                console.error('Failed to load artist activity:', err);
                ticker.innerHTML = '<div class="ticker-item">No activity yet</div>';
            }
        }
        
        // Load featured NFTs from artist uploads
        async function loadFeaturedNFTs() {
            try {
                const res = await fetch(`${INDEXER_URL}/api/featured-nfts?limit=8`);
                const nfts = await res.json();
                
                const section = document.getElementById('featured-nfts-section');
                const grid = document.getElementById('featured-nfts-grid');
                
                if (nfts && nfts.length > 0) {
                    section.style.display = 'block';
                    grid.innerHTML = nfts.map(nft => {
                        const isVideo = nft.image_url?.includes('.mp4') || nft.image_url?.includes('.webm');
                        return `
                        <div class="nft-card featured" onclick="viewNFT(${nft.id}, '${nft.contract_address}', '${nft.token_id}')">
                            <div class="nft-card-media">
                                ${isVideo 
                                    ? `<video src="${nft.image_url}" muted loop playsinline preload="metadata" onloadeddata="this.currentTime=0.5;" onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0.5;"></video>`
                                    : `<img src="${nft.image_url}" alt="${nft.name}">`
                                }
                                ${isVideo ? '<div class="video-badge">▶</div>' : ''}
                                <div class="featured-badge">⭐</div>
                            </div>
                            <div class="nft-card-info">
                                <h4>${nft.name}</h4>
                                <div class="nft-card-artist">
                                    <span class="artist-mini-avatar">${nft.avatar_type === 'emoji' ? nft.avatar_emoji : '🎨'}</span>
                                    <span>${nft.artist_name || 'Artist'}${nft.verified ? ' ✓' : ''}</span>
                                </div>
                                <p class="nft-price">${nft.price > 0 ? nft.price + ' FLR' : 'Not listed'}</p>
                            </div>
                        </div>
                    `}).join('');
                }
            } catch (err) {
                console.error('Failed to load featured NFTs:', err);
            }
        }
        
        // Load live auctions
        async function loadLiveAuctions() {
            try {
                const res = await fetch(`${INDEXER_URL}/api/auctions?limit=8`);
                const nfts = await res.json();
                
                const grid = document.getElementById('auctions-grid');
                if (!grid) return;
                
                if (nfts && nfts.length > 0) {
                    grid.innerHTML = nfts.map(nft => {
                        const isVideo = nft.image_url?.includes('.mp4') || nft.image_url?.includes('.webm');
                        return `
                        <div class="nft-card" onclick="viewNFT(${nft.id}, '${nft.contract_address}', '${nft.token_id}')">
                            <div class="nft-card-media">
                                ${isVideo 
                                    ? `<video src="${nft.image_url}" muted loop playsinline preload="metadata" onloadeddata="this.currentTime=0.5;" onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0.5;"></video>`
                                    : `<img src="${nft.image_url}" alt="${nft.name}">`
                                }
                                ${isVideo ? '<div class="video-badge">▶</div>' : ''}
                                <div class="auction-badge">🔥 Auction</div>
                            </div>
                            <div class="nft-card-info">
                                <h4>${nft.name}</h4>
                                <div class="nft-card-row">
                                    <span class="nft-price">${nft.price > 0 ? nft.price + ' FLR' : 'No bids'}</span>
                                    <span class="nft-time">⏱ ${nft.auction_duration || 24}h</span>
                                </div>
                            </div>
                        </div>
                    `}).join('');
                } else {
                    grid.innerHTML = '<div class="empty-state"><p>No live auctions</p></div>';
                }
            } catch (err) {
                console.error('Failed to load auctions:', err);
            }
        }

        function renderActivityTicker() {
            const ticker = document.getElementById('activity-ticker');
            if (!ticker) return;
            if (activity.length === 0) {
                ticker.innerHTML = '<div class="ticker-empty">No activity yet</div>';
                return;
            }
            const items = activity.map(a => `
                <div class="ticker-item">
                    <img src="${a.image}" alt="${a.name}">
                    <div class="ticker-info">
                        <span class="ticker-type ${a.type}">${a.type}</span>
                        <span class="ticker-name">${a.name}</span>
                    </div>
                    ${a.price ? `<span class="ticker-price">${a.price}</span>` : ''}
                </div>
            `).join('');
            // Duplicate for seamless loop
            ticker.innerHTML = items + items;
        }

        // Spotlight Carousel
        let currentSlide = 0;
        const slides = document.querySelectorAll('.spotlight-slides .explore-spotlight');
        const dots = document.querySelectorAll('.spotlight-dot');

        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide((currentSlide + 1) % slides.length);
        }

        // Auto-rotate every 6 seconds
        setInterval(nextSlide, 6000);

        // Mobile menu toggle
        function toggleMobileMenu() {
            document.getElementById('mobile-menu-expand').classList.toggle('open');
        }

        // Notification dropdown toggle
        function toggleNotifDropdown() {
            document.getElementById('notif-dropdown').classList.toggle('open');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.notif-wrapper')) {
                document.getElementById('notif-dropdown').classList.remove('open');
            }
        });

        // Connect Modal
        function openConnectModal() {
            document.getElementById('connect-modal').classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeConnectModal(e) {
            if (!e || e.target === e.currentTarget) {
                document.getElementById('connect-modal').classList.remove('open');
                document.body.style.overflow = '';
            }
        }

        async function connectWallet(wallet) {
            console.log('Connecting to:', wallet);
            const success = await window.toadz.connectWallet(wallet);
            if (success) {
                closeConnectModal();
                // Update header button
                const addr = window.toadz.userAddress;
                document.querySelector('.connect-btn').innerHTML = addr ? addr.slice(0,6) + '...' + addr.slice(-4) : 'Connected';
                document.querySelector('.connect-btn').onclick = null; // Disable click after connected
                // Show toast
                showToast('Wallet Connected', addr ? addr.slice(0,6) + '...' + addr.slice(-4) : '', 'success');
                // Load pool data
                loadPoolData();
                // Update my-nfts page if we're on it
                updateMyNftsPageState();
            }
        }

        // NFT Modal
        function openNftModal() {
            document.getElementById('nft-modal').classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeNftModal(e) {
            if (!e || e.target === e.currentTarget) {
                document.getElementById('nft-modal').classList.remove('open');
                document.body.style.overflow = '';
            }
        }

        function selectCurrency(el) {
            document.querySelectorAll('.price-option').forEach(o => o.classList.remove('active'));
            el.classList.add('active');
        }

        // Mint Page Functions
        let mintQty = 1;
        let mintType = 'free'; // 'free' or 'paid'
        let mintMaxQty = 10;
        
        // Mint started timestamp (would come from contract)
        const mintStartTime = Date.now();
        const MINT_DURATION = 24 * 60 * 60 * 1000; // 24 hours
        const MINT_SUPPLY = 5000;
        let mintedCount = 2847; // Would come from contract

        function selectMintOption(el, type) {
            document.querySelectorAll('.mint-option').forEach(o => o.classList.remove('active'));
            el.classList.add('active');
            mintType = type;
            
            if (type === 'free') {
                mintMaxQty = 10;
                document.getElementById('qty-max-label').textContent = 'Max: 10 per wallet';
                document.querySelector('.mint-btn-price').textContent = 'FREE';
            } else {
                mintMaxQty = 50; // Unlimited but cap UI at 50
                document.getElementById('qty-max-label').textContent = 'No limit';
                updatePaidPrice();
            }
            
            // Reset qty if over new max
            if (mintQty > mintMaxQty) {
                mintQty = mintMaxQty;
                document.getElementById('mint-qty').textContent = mintQty;
            }
        }

        function updatePaidPrice() {
            const total = mintQty * 500;
            document.querySelector('.mint-btn-price').textContent = `${total.toLocaleString()} FLR`;
        }
        
        function adjustQty(delta) {
            mintQty = Math.max(1, Math.min(mintMaxQty, mintQty + delta));
            document.getElementById('mint-qty').textContent = mintQty;
            if (mintType === 'paid') {
                updatePaidPrice();
            }
        }

        function doMint() {
            // Simulate mint - would connect to contract
            for (let i = 0; i < mintQty; i++) {
                setTimeout(() => showMintToast(), i * 500);
            }
        }

        function showMintToast() {
            // Different odds for free vs paid
            // Free: 75% common, 18% rare, 6% epic, 1% legendary
            // Paid: 55% common, 28% rare, 13% epic, 4% legendary
            const rand = Math.random() * 100;
            let rarity;
            
            if (mintType === 'free') {
                if (rand < 75) rarity = 'common';
                else if (rand < 93) rarity = 'rare';
                else if (rand < 99) rarity = 'epic';
                else rarity = 'legendary';
            } else {
                if (rand < 55) rarity = 'common';
                else if (rand < 83) rarity = 'rare';
                else if (rand < 96) rarity = 'epic';
                else rarity = 'legendary';
            }
            
            const tokenId = Math.floor(Math.random() * 5000);
            
            // Save for sharing
            lastMintedId = tokenId;
            lastMintedRarity = rarity;
            
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `
                <img src="https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/${tokenId % 100}.png">
                <div class="toast-info">
                    <div class="toast-title">You minted Fox Girl #${tokenId}!</div>
                    <div class="toast-subtitle">+${rarity === 'legendary' ? '0.10' : rarity === 'epic' ? '0.05' : rarity === 'rare' ? '0.03' : '0.01'}% LP Boost</div>
                </div>
                <span class="toast-rarity ${rarity}">${rarity.toUpperCase()}</span>
            `;
            
            document.getElementById('toast-container').appendChild(toast);
            
            // Show share section
            document.getElementById('mint-share').style.display = 'flex';
            
            setTimeout(() => toast.remove(), 5000);
        }

        // Check if mint is still live
        function checkMintStatus() {
            const elapsed = Date.now() - mintStartTime;
            const mintComplete = mintedCount >= MINT_SUPPLY;
            const timeExpired = elapsed >= MINT_DURATION;
            
            if (mintComplete || timeExpired) {
                // Hide live mint buttons, show Launchpad instead
                document.querySelectorAll('.live-mint, .live-mint-mobile').forEach(el => {
                    el.classList.remove('live-mint', 'live-mint-mobile');
                    el.textContent = el.classList.contains('mobile-nav-item') ? 'Drops' : 'Launchpad';
                    el.onclick = () => showPage('launchpad');
                });
            }
        }
        
        // Check every minute
        setInterval(checkMintStatus, 60000);

        // Countdown timer
        let countdownEnd = Date.now() + (18 * 60 * 60 * 1000) + (42 * 60 * 1000) + (15 * 1000); // 18h 42m 15s from now
        
        function updateCountdown() {
            const now = Date.now();
            const remaining = Math.max(0, countdownEnd - now);
            
            const hours = Math.floor(remaining / (1000 * 60 * 60));
            const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((remaining % (1000 * 60)) / 1000);
            
            document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('countdown-mins').textContent = mins.toString().padStart(2, '0');
            document.getElementById('countdown-secs').textContent = secs.toString().padStart(2, '0');
            
            if (remaining === 0) {
                checkMintStatus();
            }
        }
        
        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Share functionality
        let lastMintedId = null;
        let lastMintedRarity = null;

        function shareMint(platform) {
            const text = `Just minted Fox Girl #${lastMintedId} (${lastMintedRarity.toUpperCase()}) on @ToadzGG! 🦊✨\n\nEarning +${lastMintedRarity === 'legendary' ? '0.10' : lastMintedRarity === 'epic' ? '0.05' : lastMintedRarity === 'rare' ? '0.03' : '0.01'}% LP boost!\n\nhttps://toadz.gg/mint`;
            
            if (platform === 'twitter') {
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
            } else {
                navigator.clipboard.writeText(text);
                // Could show a "Copied!" tooltip
            }
        }

        // Simulate live mints from others
        function simulateLiveMints() {
            const users = ['0x8a3...f2c1', '0x3b1...a8d2', 'FrogKing', 'WhaleWatch', '0x7c2...d4e9', 'CryptoKitty'];
            // Other users have mixed odds (average of free/paid)
            const rarityOdds = ['common', 'common', 'common', 'common', 'rare', 'rare', 'epic', 'legendary'];
            
            setInterval(() => {
                if (document.getElementById('page-mint').classList.contains('active')) {
                    const user = users[Math.floor(Math.random() * users.length)];
                    const rarity = rarityOdds[Math.floor(Math.random() * rarityOdds.length)];
                    const tokenId = Math.floor(Math.random() * 5000);
                    
                    const list = document.getElementById('recent-mints-list');
                    const item = document.createElement('div');
                    item.className = 'recent-mint-item';
                    item.innerHTML = `
                        <img src="https://ipfs.io/ipfs/QmP45Rfhy75RybFuLcwd1CR9vF6qznw95qQPxcA5TeBNYk/${tokenId % 100}.png">
                        <div class="recent-mint-info">
                            <span class="mint-user">${user}</span>
                            <span class="mint-rarity ${rarity}">${rarity.toUpperCase()}</span>
                        </div>
                        <span class="mint-time">just now</span>
                    `;
                    
                    list.insertBefore(item, list.firstChild);
                    if (list.children.length > 6) {
                        list.removeChild(list.lastChild);
                    }
                }
            }, 3000 + Math.random() * 4000);
        }
        
        simulateLiveMints();

        // Tab functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                this.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Lock tier selection
        document.querySelectorAll('.lock-tier').forEach(tier => {
            tier.addEventListener('click', function() {
                document.querySelectorAll('.lock-tier').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Micro-parallax on NFT cards
        document.querySelectorAll('.nft-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                card.style.transform = `translateY(-4px) rotateX(${y / -30}deg) rotateY(${x / 30}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });

        // ============ POOL INTERACTION FUNCTIONS ============
        let selectedLockTier = 0;
        let poolStats = null;
        let userBalances = null;

        function selectLockTier(el, tier) {
            document.querySelectorAll('.lock-tier-option').forEach(t => t.classList.remove('active'));
            el.classList.add('active');
            selectedLockTier = tier;
        }

        async function calculatePondRequired() {
            const flrInput = document.getElementById('flr-input');
            const pondInput = document.getElementById('pond-input');
            const flrAmount = parseFloat(flrInput.value) || 0;
            
            if (!poolStats || flrAmount <= 0) {
                pondInput.value = '';
                return;
            }
            
            // POND required = (FLR * reservePOND / reserveFLR) * 0.5
            const reserveFLR = parseFloat(poolStats.reserveFLR);
            const reservePOND = parseFloat(poolStats.reservePOND);
            
            if (reserveFLR > 0) {
                const pondRequired = (flrAmount * reservePOND / reserveFLR) * 0.5;
                pondInput.value = pondRequired.toFixed(2);
            }
        }

        function setMaxFLR() {
            if (userBalances && userBalances.flr) {
                const maxFlr = Math.max(0, parseFloat(userBalances.flr) - 1); // Leave 1 FLR for gas
                document.getElementById('flr-input').value = maxFlr.toFixed(2);
                calculatePondRequired();
            }
        }

        async function doAddLiquidity() {
            if (!window.toadz || !window.toadz.addLiquidity) {
                showToast('Connect Wallet', 'Please connect your wallet first', 'error');
                openConnectModal();
                return;
            }
            
            const flrAmount = parseFloat(document.getElementById('flr-input').value);
            if (!flrAmount || flrAmount <= 0) {
                showToast('Invalid Amount', 'Enter FLR amount', 'error');
                return;
            }
            
            try {
                await window.toadz.addLiquidity(flrAmount, selectedLockTier);
                document.getElementById('flr-input').value = '';
                document.getElementById('pond-input').value = '';
                loadPoolData();
            } catch (e) {
                console.error(e);
            }
        }

        async function calculateSwapOutput() {
            const fromInput = document.getElementById('swap-from-input');
            const toInput = document.getElementById('swap-to-input');
            const fromToken = document.getElementById('swap-from-token').value;
            const amount = parseFloat(fromInput.value) || 0;
            
            if (!window.toadz || amount <= 0) {
                toInput.value = '';
                return;
            }
            
            const isFLRtoPOND = fromToken === 'FLR';
            const output = await window.toadz.calculateSwapOutput(amount, isFLRtoPOND);
            toInput.value = parseFloat(output).toFixed(4);
        }

        function flipSwapTokens() {
            const fromSelect = document.getElementById('swap-from-token');
            const toSelect = document.getElementById('swap-to-token');
            const temp = fromSelect.value;
            fromSelect.value = toSelect.value;
            toSelect.value = temp;
            calculateSwapOutput();
        }

        function swapTokensChanged() {
            const fromSelect = document.getElementById('swap-from-token');
            const toSelect = document.getElementById('swap-to-token');
            if (fromSelect.value === toSelect.value) {
                toSelect.value = fromSelect.value === 'FLR' ? 'POND' : 'FLR';
            }
            calculateSwapOutput();
        }

        async function doSwap() {
            if (!window.toadz) {
                showToast('Connect Wallet', 'Please connect your wallet first', 'error');
                openConnectModal();
                return;
            }
            
            const fromToken = document.getElementById('swap-from-token').value;
            const fromAmount = parseFloat(document.getElementById('swap-from-input').value);
            const toAmount = parseFloat(document.getElementById('swap-to-input').value);
            
            if (!fromAmount || fromAmount <= 0) {
                showToast('Invalid Amount', 'Enter amount to swap', 'error');
                return;
            }
            
            const minOut = toAmount * 0.95; // 5% slippage
            
            try {
                if (fromToken === 'FLR') {
                    await window.toadz.swapFLRForPOND(fromAmount, minOut);
                } else {
                    await window.toadz.swapPONDForFLR(fromAmount, minOut);
                }
                document.getElementById('swap-from-input').value = '';
                document.getElementById('swap-to-input').value = '';
                loadPoolData();
            } catch (e) {
                console.error(e);
            }
        }

        async function loadPoolData() {
            if (!window.toadz) return;
            
            try {
                poolStats = await window.toadz.getPoolStats();
                if (poolStats) {
                    document.getElementById('pool-tvl').textContent = parseFloat(poolStats.tvl).toFixed(0);
                    // APY would need historical data - show placeholder for now
                    document.getElementById('pool-apy').textContent = '--';
                    document.getElementById('pool-nfts-staked').textContent = '--';
                }
                
                userBalances = await window.toadz.getUserBalances();
                if (userBalances) {
                    document.getElementById('flr-balance').textContent = 'Balance: ' + parseFloat(userBalances.flr).toFixed(2) + ' FLR';
                    document.getElementById('pond-balance').textContent = 'Balance: ' + parseFloat(userBalances.pond).toFixed(2) + ' POND';
                }
            } catch (e) {
                console.error('Error loading pool data:', e);
            }
        }

        // Load pool data when page loads (if wallet already connected)
        setTimeout(() => {
            if (window.toadz && window.ethereum && window.ethereum.selectedAddress) {
                loadPoolData();
            }
        }, 1000);

        // FLR price - fetch from coingecko or hardcode for now
        const FLR_PRICE_USD = 0.01499;
        const POND_SUPPLY = 11900000000; // 11.9 billion

        // Artist Application Form Handler
        document.getElementById('artist-apply-form')?.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            const formData = {
                name: document.getElementById('artist-name').value,
                email: document.getElementById('artist-email').value,
                portfolio: document.getElementById('artist-portfolio').value,
                twitter: document.getElementById('artist-twitter').value,
                style: document.getElementById('artist-style').value,
                size: document.getElementById('artist-size').value,
                bio: document.getElementById('artist-bio').value,
                wallet: document.getElementById('artist-wallet').value
            };
            
            try {
                const response = await fetch('https://toadz-indexer-production.up.railway.app/api/artist-apply', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showToast('Application Submitted', 'We\'ll review it within 48 hours', 'success');
                    this.reset();
                } else {
                    showToast('Error', result.error || 'Failed to submit', 'error');
                }
            } catch (err) {
                console.error('Submit error:', err);
                showToast('Error', 'Failed to submit. Please try again or email contact@artdept.fun', 'error');
            }
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });

        // Load public pool stats immediately (no wallet needed)
        async function loadPublicPoolStats() {
            try {
                const provider = new ethers.JsonRpcProvider('https://flare-api.flare.network/ext/C/rpc');
                const poolAddress = '0x42598464cc7fE6507C4ebf9009fe1adccE44b0BC';
                const poolABI = [
                    'function getPoolStats() view returns (uint256 reserveFLR, uint256 reservePOND, uint256 totalShares, uint256 tvl, uint256 pondPrice)',
                    'function pondRatio() view returns (uint256)'
                ];
                const pool = new ethers.Contract(poolAddress, poolABI, provider);
                
                const stats = await pool.getPoolStats();
                const reserveFLR = parseFloat(ethers.formatEther(stats[0]));
                const reservePOND = parseFloat(ethers.formatEther(stats[1]));
                const tvl = parseFloat(ethers.formatEther(stats[3]));
                
                poolStats = {
                    reserveFLR: reserveFLR,
                    reservePOND: reservePOND,
                    totalShares: ethers.formatEther(stats[2]),
                    tvl: tvl,
                    pondPrice: ethers.formatEther(stats[4])
                };
                
                // POND price = FLR in pool / POND in pool (how much FLR you get for 1 POND)
                // NOT the other way around!
                const pondPriceInFLR = reservePOND > 0 ? reserveFLR / reservePOND : 0;
                const pondPriceUSD = pondPriceInFLR * FLR_PRICE_USD;
                const marketCap = pondPriceUSD * POND_SUPPLY;
                const tvlUSD = tvl * FLR_PRICE_USD;
                
                // Format display
                function formatNumber(num) {
                    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
                    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
                    return num.toFixed(0);
                }
                function formatUSD(num) {
                    if (num >= 1000000) return '$' + (num / 1000000).toFixed(2) + 'M';
                    if (num >= 1000) return '$' + (num / 1000).toFixed(1) + 'K';
                    return '$' + num.toFixed(0);
                }
                
                const mcapFormatted = formatUSD(marketCap);
                const tvlFormatted = formatNumber(tvl) + ' FLR';
                const tvlUSDFormatted = formatUSD(tvlUSD);
                
                // Staking page
                const poolTvlEl = document.getElementById('pool-tvl');
                if (poolTvlEl) poolTvlEl.textContent = formatNumber(tvl);
                
                const poolApyEl = document.getElementById('pool-apy');
                if (poolApyEl) poolApyEl.textContent = '--';
                
                const poolNftsEl = document.getElementById('pool-nfts-staked');
                if (poolNftsEl) poolNftsEl.textContent = '--';
                
                const stakingMcapEl = document.getElementById('staking-mcap');
                if (stakingMcapEl) stakingMcapEl.textContent = mcapFormatted;
                
                // Hero stats
                const heroMcapEl = document.getElementById('hero-mcap');
                if (heroMcapEl) heroMcapEl.textContent = mcapFormatted;
                
                const heroNftsEl = document.getElementById('hero-nfts');
                if (heroNftsEl) heroNftsEl.textContent = '--';
                
                const heroApyEl = document.getElementById('hero-apy');
                if (heroApyEl) heroApyEl.textContent = '--';
                
                // Spotlight
                const spotlightTvlEl = document.getElementById('spotlight-tvl');
                if (spotlightTvlEl) spotlightTvlEl.textContent = tvlUSDFormatted;
                
                const spotlightStakersEl = document.getElementById('spotlight-stakers');
                if (spotlightStakersEl) spotlightStakersEl.textContent = '--';
                
                const spotlightDistEl = document.getElementById('spotlight-distributed');
                if (spotlightDistEl) spotlightDistEl.textContent = '--';
                
                console.log('Pool: FLR=' + reserveFLR.toFixed(2) + ', POND=' + reservePOND.toFixed(2));
                console.log('POND price in FLR:', pondPriceInFLR.toFixed(8));
                console.log('POND price USD:', pondPriceUSD.toFixed(10));
                console.log('Market cap:', marketCap);
            } catch (e) {
                console.error('Error loading public pool stats:', e);
            }
        }
        
        // Load immediately
        loadPublicPoolStats();
        
        // ==================== REFERRAL SYSTEM ====================
        const REFERRAL_KEY = 'toadz_referrer';
        let raceParticipants = [];
        let raceAnimationId = null;
        
        // Initialize referral tracking on page load
        function initReferralTracking() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            
            if (ref && ref.startsWith('0x') && ref.length === 42) {
                if (!localStorage.getItem(REFERRAL_KEY)) {
                    localStorage.setItem(REFERRAL_KEY, ref.toLowerCase());
                    trackReferralClick(ref);
                }
            }
        }
        
        // Track click
        async function trackReferralClick(referrer) {
            try {
                await fetch(`${INDEXER_URL}/api/referral/click`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ referrer })
                });
            } catch (e) {}
        }
        
        // Get referrer
        function getReferrer() {
            const ref = localStorage.getItem(REFERRAL_KEY);
            if (ref && window.toadz?.userAddress?.toLowerCase() === ref.toLowerCase()) return null;
            return ref;
        }
        
        // Get user's referral link
        function getUserRefLink() {
            if (!window.toadz?.userAddress) return null;
            return `${window.location.origin}${window.location.pathname}?ref=${window.toadz.userAddress}`;
        }
        
        // Copy referral link
        function copyReferralLink() {
            const link = getUserRefLink();
            if (!link) {
                showToast('Connect Wallet', 'Connect your wallet first', 'error');
                return;
            }
            navigator.clipboard.writeText(link);
            showToast('Copied', 'Share it everywhere. Earn 1% on every sale!', 'success');
        }
        
        // Share to Twitter (general)
        function shareToTwitterGeneral() {
            const link = getUserRefLink();
            if (!link) {
                showToast('Connect Wallet', 'Connect your wallet first', 'error');
                return;
            }
            const tweets = [
                `Trading NFTs on Flare? Check out @sToadz marketplace 🐸\n\nZero fees. Real utility.\n\n`,
                `Found the cleanest NFT marketplace on Flare 🔥\n\n@sToadz - Zero platform fees\n\n`,
                `@sToadz marketplace is what NFT trading should be.\n\nNo BS. No fees. Just trade. 🐸\n\n`
            ];
            const text = encodeURIComponent(tweets[Math.floor(Math.random() * tweets.length)]);
            window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(link)}`, '_blank', 'width=550,height=420');
            trackTwitterShare('general');
        }
        
        // Track Twitter share
        async function trackTwitterShare(type = 'general', nftId = null) {
            if (!window.toadz?.userAddress) return;
            try {
                await fetch(`${INDEXER_URL}/api/referral/twitter-share`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ wallet: window.toadz.userAddress, shareType: type, nftId })
                });
            } catch (e) {}
        }
        
        // ==================== RACE VISUALIZATION ====================
        let raceTime = 0;
        
        function initRaceCanvas() {
            const canvas = document.getElementById('race-canvas');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            const container = document.getElementById('race-arena');
            
            function resize() {
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;
            }
            resize();
            window.addEventListener('resize', resize);
            
            function animate() {
                raceTime += 0.015;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                const maxRadius = Math.min(centerX, centerY) - 70;
                
                // Draw track rings (more visible)
                for (let i = 1; i <= 5; i++) {
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, maxRadius * (i / 5), 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(255,255,255,${0.04 + (i === 5 ? 0.03 : 0)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
                
                // Draw participants
                const participants = raceParticipants.length > 0 ? raceParticipants : [];
                
                participants.forEach((p, i) => {
                    const wobble = Math.sin(raceTime + i * 1.3) * 0.04;
                    const angle = (i / Math.max(participants.length, 1)) * Math.PI * 2 - Math.PI / 2 + wobble;
                    const distance = maxRadius * p.position;
                    const x = centerX + Math.cos(angle) * distance;
                    const y = centerY + Math.sin(angle) * distance;
                    const pulse = 1 + Math.sin(raceTime * 2 + i) * 0.08;
                    
                    // Glow for top 3
                    if (i < 3) {
                        const glowColors = ['rgba(255,215,0,0.45)', 'rgba(192,192,192,0.35)', 'rgba(205,127,50,0.3)'];
                        ctx.beginPath();
                        ctx.arc(x, y, 30 * pulse, 0, Math.PI * 2);
                        ctx.fillStyle = glowColors[i];
                        ctx.fill();
                    }
                    
                    // Avatar circle
                    ctx.beginPath();
                    ctx.arc(x, y, 20 * pulse, 0, Math.PI * 2);
                    const colors = ['#FFD700', '#C0C0C0', '#CD7F32'];
                    ctx.fillStyle = i < 3 ? colors[i] : '#1a1a24';
                    ctx.fill();
                    ctx.strokeStyle = i < 3 ? colors[i] : '#444';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    
                    // Rank number
                    ctx.fillStyle = i < 3 ? '#000' : '#999';
                    ctx.font = 'bold 11px Inter, Arial, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(i + 1, x, y);
                    
                    // Wallet label for top 8
                    if (i < 8 && p.wallet) {
                        ctx.fillStyle = 'rgba(255,255,255,0.7)';
                        ctx.font = '9px Inter, Arial, sans-serif';
                        ctx.fillText(p.wallet.slice(0,6) + '...' + p.wallet.slice(-4), x, y + 28);
                        ctx.fillStyle = i < 3 ? colors[i] : '#00ff88';
                        ctx.font = 'bold 9px Inter, Arial, sans-serif';
                        ctx.fillText(p.points + ' pts', x, y + 40);
                    }
                });
                
                raceAnimationId = requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        // Load race data
        async function loadRaceData() {
            try {
                const res = await fetch(`${INDEXER_URL}/api/referral/race`);
                if (res.ok) {
                    const data = await res.json();
                    raceParticipants = data.participants || [];
                    const timeLeft = data.weekEnd - Math.floor(Date.now() / 1000);
                    updateCountdown(timeLeft);
                }
            } catch (e) {
                console.log('Failed to load race data');
            }
        }
        
        // Update countdown display
        function updateCountdown(seconds) {
            const days = Math.floor(seconds / 86400);
            const hours = Math.floor((seconds % 86400) / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const el = document.getElementById('race-countdown');
            if (el) el.textContent = `${days}d ${hours}h ${mins}m`;
        }
        
        // Load user stats
        async function loadUserStats() {
            const linkEl = document.getElementById('referral-link');
            if (!window.toadz?.userAddress) {
                if (linkEl) linkEl.textContent = 'Connect wallet to get your referral link';
                const posEl = document.getElementById('your-position');
                if (posEl) posEl.style.display = 'none';
                return;
            }
            
            if (linkEl) linkEl.textContent = getUserRefLink();
            
            try {
                const res = await fetch(`${INDEXER_URL}/api/referral/stats/${window.toadz.userAddress}`);
                if (res.ok) {
                    const stats = await res.json();
                    
                    const pts = document.getElementById('hub-points');
                    const refs = document.getElementById('hub-referrals');
                    const sales = document.getElementById('hub-sales');
                    const earn = document.getElementById('hub-earnings');
                    const clicks = document.getElementById('hub-clicks');
                    
                    if (pts) pts.textContent = stats.weeklyPoints || 0;
                    if (refs) refs.textContent = stats.referrals || 0;
                    if (sales) sales.textContent = stats.sales || 0;
                    if (earn) earn.textContent = (stats.earnings || 0).toFixed(2);
                    if (clicks) clicks.textContent = stats.clicks || 0;
                    
                    updateTierBadge(stats.earnings || 0);
                    
                    if (stats.rank) {
                        const posEl = document.getElementById('your-position');
                        const rankEl = document.getElementById('your-rank');
                        const ptsEl = document.getElementById('your-points');
                        if (posEl) posEl.style.display = 'block';
                        if (rankEl) rankEl.textContent = `#${stats.rank}`;
                        if (ptsEl) ptsEl.textContent = `${stats.weeklyPoints || 0} pts`;
                    }
                }
            } catch (e) {}
        }
        
        // Update tier badge
        function updateTierBadge(earnings) {
            const tierEl = document.getElementById('user-tier');
            if (!tierEl) return;
            
            let tier = { icon: '🥉', name: 'Bronze', class: 'tier-bronze' };
            if (earnings >= 5000) tier = { icon: '🌟', name: 'Legendary', class: 'tier-legendary' };
            else if (earnings >= 1000) tier = { icon: '💎', name: 'Diamond', class: 'tier-diamond' };
            else if (earnings >= 500) tier = { icon: '🥇', name: 'Gold', class: 'tier-gold' };
            else if (earnings >= 100) tier = { icon: '🥈', name: 'Silver', class: 'tier-silver' };
            
            tierEl.innerHTML = `<span>${tier.icon}</span><span class="${tier.class}">${tier.name}</span>`;
        }
        
        // Load leaderboards
        async function loadLeaderboards() {
            // Weekly
            try {
                const res = await fetch(`${INDEXER_URL}/api/referral/leaderboard/weekly?limit=10`);
                if (res.ok) {
                    const data = await res.json();
                    renderLeaderboard('weekly-leaderboard', data, 'weekly_points', 'pts');
                }
            } catch (e) {}
            
            // Earnings
            try {
                const res = await fetch(`${INDEXER_URL}/api/referral/leaderboard/earnings?limit=10`);
                if (res.ok) {
                    const data = await res.json();
                    renderLeaderboard('earnings-leaderboard', data, 'total_earnings', 'FLR');
                }
            } catch (e) {}
        }
        
        // Render leaderboard
        function renderLeaderboard(containerId, data, valueKey, suffix) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            if (!data || data.length === 0) {
                container.innerHTML = `
                    <div class="social-empty">
                        <div class="social-empty-icon">${containerId.includes('weekly') ? '🏁' : '💰'}</div>
                        <p>Be the first to join!</p>
                    </div>
                `;
                return;
            }
            
            container.innerHTML = data.map((item, i) => `
                <div class="slb-item">
                    <div class="slb-rank">${i + 1}</div>
                    <div class="slb-avatar">${getTierEmoji(item.total_earnings || 0)}</div>
                    <div class="slb-info">
                        <div class="slb-name">${item.wallet.slice(0,6)}...${item.wallet.slice(-4)}</div>
                        <div class="slb-meta">${item.total_referrals || item.weekly_referrals || 0} referrals</div>
                    </div>
                    <div class="slb-stats">
                        <div class="slb-primary">${item[valueKey] || 0} ${suffix}</div>
                        <div class="slb-secondary">${item.total_sales || item.weekly_sales || 0} sales</div>
                    </div>
                </div>
            `).join('');
        }
        
        function getTierEmoji(earnings) {
            if (earnings >= 5000) return '🌟';
            if (earnings >= 1000) return '💎';
            if (earnings >= 500) return '🥇';
            if (earnings >= 100) return '🥈';
            return '🥉';
        }
        
        // Called when showing socials page
        function onSocialsPageShow() {
            initRaceCanvas();
            loadRaceData();
            loadUserStats();
            loadLeaderboards();
        }
        
        // Init referral tracking on load
        initReferralTracking();
    </script>
</body>
</html>
