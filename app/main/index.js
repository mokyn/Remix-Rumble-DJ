const { app, BrowserWindow, ipcMain, shell } = require('electron');
const createMainWindow = require('./mainWindow');
const setupSpotifyAuth = require('../auth/spotifyAuth');

app.whenReady().then(() => {
    createMainWindow();
});

ipcMain.handle('open-external', async (event, url) => {
    await shell.openExternal(url);
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});
