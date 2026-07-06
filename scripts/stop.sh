#!/usr/bin/env bash
set -euo pipefail

PID_DIR="$(cd "$(dirname "$0")" && pwd)/.pids"

if [ ! -d "$PID_DIR" ]; then
    echo "[STOP] Nenhum processo registrado."
    exit 0
fi

for pid_file in "$PID_DIR"/*.pid; do
    [ -f "$pid_file" ] || continue
    name="$(basename "$pid_file" .pid)"
    pid="$(cat "$pid_file")"

    if kill -0 "$pid" 2>/dev/null; then
        echo "[STOP] Encerrando $name (PID $pid)..."
        kill -TERM "$pid"
        # Aguarda até 5s para encerramento gracioso, depois força
        for _ in $(seq 1 5); do
            kill -0 "$pid" 2>/dev/null || break
            sleep 1
        done
        kill -0 "$pid" 2>/dev/null && kill -KILL "$pid"
    else
        echo "[STOP] $name (PID $pid) já não está em execução."
    fi

    rm -f "$pid_file"
done

echo "[STOP] Todos os processos encerrados."
