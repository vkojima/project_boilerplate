@echo off
setlocal enabledelayedexpansion

set PID_DIR=%~dp0.pids

for %%F in ("%PID_DIR%\*.pid") do (
    set /p PID=<"%%F"
    echo [STOP] Encerrando PID !PID! (%%~nF)...
    taskkill /PID !PID! /T /F >nul 2>&1
    del "%%F"
)

echo [STOP] Todos os processos encerrados.
endlocal
