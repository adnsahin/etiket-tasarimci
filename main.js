const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const WINDOW_STATE_FILE = 'window-state.json';

function statePath() {
  return path.join(app.getPath('userData'), WINDOW_STATE_FILE);
}

function readWindowState() {
  try {
    const value = JSON.parse(fs.readFileSync(statePath(), 'utf8'));
    return {
      width: Number.isFinite(value.width) ? value.width : 1380,
      height: Number.isFinite(value.height) ? value.height : 860,
      x: Number.isFinite(value.x) ? value.x : undefined,
      y: Number.isFinite(value.y) ? value.y : undefined,
      maximized: Boolean(value.maximized)
    };
  } catch {
    return { width: 1380, height: 860, x: undefined, y: undefined, maximized: false };
  }
}

function writeWindowState(win) {
  try {
    const bounds = win.isMaximized() ? win.getNormalBounds() : win.getBounds();
    fs.writeFileSync(
      statePath(),
      JSON.stringify({ ...bounds, maximized: win.isMaximized() }, null, 2),
      'utf8'
    );
  } catch (error) {
    console.error('Pencere durumu kaydedilemedi:', error);
  }
}

function createWindow() {
  const state = readWindowState();
  const win = new BrowserWindow({
    title: 'Etiket Tasarımcı',
    width: state.width,
    height: state.height,
    x: state.x,
    y: state.y,
    minWidth: 1100,
    minHeight: 700,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: '#d7dce5',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false
    }
  });

  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  win.once('ready-to-show', () => {
    if (state.maximized) win.maximize();
    win.show();
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file:')) event.preventDefault();
  });

  win.on('close', () => writeWindowState(win));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
