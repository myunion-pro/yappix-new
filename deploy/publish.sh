#!/usr/bin/env bash
# Deploy dist to yappix.net VDS. Rsync preserves macOS perms (e.g. 700) → nginx (www-data) gets 403 without chmod.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${DEPLOY_HOST:-root@80.249.150.154}"
REMOTE="${DEPLOY_REMOTE:-/var/www/yappix.net/}"
KEY="${DEPLOY_SSH_KEY:-$HOME/.ssh/myunion_vds}"

cd "$ROOT"
pnpm run build
rsync -avz --delete -e "ssh -i $KEY -o StrictHostKeyChecking=accept-new" dist/ "$HOST:$REMOTE"
ssh -i "$KEY" -o StrictHostKeyChecking=accept-new "$HOST" \
  "chown -R www-data:www-data $REMOTE && find $REMOTE -type f -exec chmod 644 {} \\; && find $REMOTE -type d -exec chmod 755 {} \\;"

echo "Published to $HOST:$REMOTE"
