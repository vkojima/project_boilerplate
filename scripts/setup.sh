#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VENV="$ROOT/.venv"

echo "[SETUP] Verificando ambiente Python..."

if ! command -v python3 &>/dev/null; then
    echo "[ERRO] python3 não encontrado no PATH. Instale o Python 3.11+ e tente novamente."
    exit 1
fi

echo "[SETUP] $(python3 --version) encontrado."

if [ ! -f "$VENV/bin/activate" ]; then
    echo "[SETUP] Criando ambiente virtual em .venv ..."
    python3 -m venv "$VENV"
    echo "[SETUP] .venv criado com sucesso."
else
    echo "[SETUP] .venv já existe — pulando criação."
fi

echo "[SETUP] Instalando dependências de requirements.txt ..."
"$VENV/bin/pip" install --upgrade pip --quiet
"$VENV/bin/pip" install -r "$ROOT/requirements.txt"

echo ""
echo "[SETUP] Ambiente pronto."
echo "[SETUP] Para ativar manualmente:"
echo "        source .venv/bin/activate"
echo ""
echo "[SETUP] Para rodar o projeto: bash scripts/start.sh"
