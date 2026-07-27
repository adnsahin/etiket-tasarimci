@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
title Etiket Tasarımcı - EXE Oluşturucu

echo.
echo =====================================================
echo   ETİKET TASARIMCI - WINDOWS EXE OLUŞTURUCU
echo =====================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo HATA: Node.js bu bilgisayarda kurulu değil.
  echo Önce Node.js LTS sürümünü kurup bu dosyayı tekrar çalıştırın.
  echo.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo HATA: npm bulunamadı. Node.js kurulumunu kontrol edin.
  pause
  exit /b 1
)

if not exist node_modules (
  echo [1/2] Gerekli paketler kuruluyor...
  call npm install
  if errorlevel 1 goto :error
) else (
  echo [1/2] Gerekli paketler zaten kurulu.
)

echo [2/2] Taşınabilir EXE ve kurulum dosyası hazırlanıyor...
call npm run build
if errorlevel 1 goto :error

echo.
echo TAMAMLANDI.
echo Dosyalar "dist" klasöründe oluşturuldu:
echo - Etiket Tasarımcı-Taşınabilir-1.0.0-x64.exe
echo - Etiket Tasarımcı-Kurulum-1.0.0-x64.exe
echo.
start "" "%~dp0dist"
pause
exit /b 0

:error
echo.
echo İŞLEM BAŞARISIZ OLDU.
echo İnternet bağlantısını ve hata mesajlarını kontrol edin.
echo.
pause
exit /b 1
