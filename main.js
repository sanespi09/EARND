const { app, BrowserWindow } = require('electron');

const path = require('path');

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile(path.join(__dirname, `./dist/index.html`));
 
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
console.log(app);
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
