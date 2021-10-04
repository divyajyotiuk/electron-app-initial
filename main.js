// Modules to control application life and create native browser window
// commonJS modules
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    /**
     * To attach preload.js to the renderer process, pass the path of preload script 
     * to the webPreferences.preload option in BrowserWindow constructor.
     */
    const win = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences:{
          preload: path.join(__dirname, 'preload.js')
      }
    })

    const contents = win.webContents
    console.log(contents)
  
    // load index.html of app
    win.loadFile('index.html')

    // to load a web page in a new window
    // win.loadURL('https://github.com')

    // Open the DevTools.
    // win.webContents.openDevTools()
}

/**
 * In Electron, browser windows can only be created after the app module's ready event is fired.
 * whenReady returns promise
 */
app.whenReady().then(() => {
    createWindow()

    /**
     * MacOS apps generally continue running even without any windows open, 
     * and activating the app when no windows are available should open a new one.
     */
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            console.log("create window mac os")
            createWindow()
        }
    })
})

/**
 * On Windows and Linux, exiting all windows generally quits an application entirely.
 */
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})