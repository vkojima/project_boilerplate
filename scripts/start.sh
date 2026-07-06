#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VENV="$ROOT/.venv"
PYTHON="$VENV/bin/python"
PID_DIR="$ROOT/scripts/.pids"
LOG_DIR="$ROOT/scripts/.logs"

mkdir -p "$PID_DIR" "$LOG_DIR"

if [ ! -f "$PYTHON" ]; then
    echo "[ERRO] .venv não encontrado. Execute bash scripts/setup.sh primeiro."
    exit 1
fi

echo "[START] Iniciando backend com .venv ..."

nohup "$PYTHON" "$ROOT/main.py" \
    > "$LOG_DIR/backend.log" \
    2> "$LOG_DIR/backend.err" &

echo $! > "$PID_DIR/backend.pid"
echo "[START] PID backend ($!) salvo em scripts/.pids/backend.pid"
echo "[START] Logs em scripts/.logs/backend.log"
