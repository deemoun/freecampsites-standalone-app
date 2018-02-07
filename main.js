const {app, BrowserWindow} = require('electron');
const path = require('path');

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true
    },
  });
  win.loadURL('file://' + path.join(__dirname, 'index.html'));
});
