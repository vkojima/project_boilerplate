@echo off
setlocal

set ROOT=%~dp0..
set PID_DIR=%ROOT%\scripts\.pids
set LOG_DIR=%ROOT%\scripts\.logs

if not exist "%PID_DIR%" mkdir "%PID_DIR%"
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

echo [START] Iniciando backend...
powershell -Command "
    $p = Start-Process python -ArgumentList '%ROOT%\main.py' -WorkingDirectory '%ROOT%' -PassThru -WindowStyle Hidden -RedirectStandardOutput '%LOG_DIR%\backend.log' -RedirectStandardError '%LOG_DIR%\backend.err';
    $p.Id | Out-File '%PID_DIR%\backend.pid' -Encoding ascii
"
echo [START] PID backend salvo em scripts\.pids\backend.pid

endlocal
