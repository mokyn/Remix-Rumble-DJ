const { app } = require('electron');
const createMainWindow = require('./mainWindow');
const setupSpotifyAuth = require('../auth/spotifyAuth');

app.whenReady().then(() => {
    createMainWindow();
    setupSpotifyAuth();
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
