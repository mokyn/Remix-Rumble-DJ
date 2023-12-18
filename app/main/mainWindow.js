const { BrowserWindow } = require('electron');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        // other window options...
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js') // Update with correct path
        }
    });

    // Correct the path according to your file structure
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
    
    return mainWindow;
}

module.exports = createMainWindow;
