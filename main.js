const {app, BrowserWindow} = require('electron')

let mainWindow

function createMainWindow(){
  mainWindow =new BrowserWindow({
        title:'imageShrink',
        width:500,
        height:600
    })
    //mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    mainWindow.loadFile('./app/index.html')
}
app.on('ready',createMainWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
  }
})
