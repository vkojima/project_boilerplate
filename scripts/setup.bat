@echo off
setlocal

set ROOT=%~dp0..
set VENV=%ROOT%\.venv
set PYTHON=python

echo [SETUP] Verificando ambiente Python...

:: Verificar se Python está disponível
where python >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Python nao encontrado no PATH. Instale o Python 3.11+ e tente novamente.
    exit /b 1
)

for /f "tokens=*" %%i in ('python --version 2^>^&1') do echo [SETUP] %%i encontrado.

:: Criar .venv se não existir
if not exist "%VENV%\Scripts\activate.bat" (
    echo [SETUP] Criando ambiente virtual em .venv ...
    %PYTHON% -m venv "%VENV%"
    if errorlevel 1 (
        echo [ERRO] Falha ao criar .venv.
        exit /b 1
    )
    echo [SETUP] .venv criado com sucesso.
) else (
    echo [SETUP] .venv ja existe — pulando criacao.
)

:: Ativar .venv e instalar dependências
echo [SETUP] Instalando dependencias de requirements.txt ...
call "%VENV%\Scripts\activate.bat"
python -m pip install --upgrade pip --quiet
pip install -r "%ROOT%\requirements.txt"

if errorlevel 1 (
    echo [ERRO] Falha ao instalar dependencias.
    exit /b 1
)

echo.
echo [SETUP] Ambiente pronto.
echo [SETUP] Para ativar manualmente:
echo         PowerShell : .\.venv\Scripts\Activate.ps1
echo         CMD        : .\.venv\Scripts\activate.bat
echo.
echo [SETUP] Para rodar o projeto: scripts\start.bat

endlocal
