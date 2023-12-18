const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openExternal: url => ipcRenderer.invoke('open-external', url)
    // Add more functions here if needed
});
