#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
command -v npm >/dev/null || { echo "Install Node/npm first"; exit 1; }
npm install
echo "→ Login to Cloudflare if needed"
npx wrangler login || true
echo "→ Ensure secrets exist (skip if already set):"
echo "  wrangler secret put VERIFY_TOKEN"
echo "  wrangler secret put WHATSAPP_TOKEN"
echo "  wrangler secret put PHONE_NUMBER_ID"
echo "  wrangler secret put OWNER_NOTIFY_NUMBER"
npm run deploy
echo "Done. Set Meta webhook to: https://<worker>/webhook"
