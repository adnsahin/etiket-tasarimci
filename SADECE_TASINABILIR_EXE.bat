@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
title Etiket Tasarımcı - Taşınabilir EXE
where node >nul 2>nul || (echo Node.js kurulu değil.& pause & exit /b 1)
if not exist node_modules call npm install || (pause & exit /b 1)
call npm run build:portable || (pause & exit /b 1)
start "" "%~dp0dist"
pause
