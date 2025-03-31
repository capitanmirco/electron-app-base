const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const remote = require('@electron/remote/main');
remote.initialize();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });

  // Percorso aggiornato
  const indexPath = path.join(__dirname, 'dist', 'finanze-personali', 'index.html');

  mainWindow.loadFile(indexPath); // Usa loadFile invece di loadURL
  remote.enable(mainWindow.webContents);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
