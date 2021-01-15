'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
// Native
const path_1 = require('path')
const url_1 = require('url')
// Packages
const electron_1 = require('electron')
const electron_is_dev_1 = __importDefault(require('electron-is-dev'))
const electron_next_1 = __importDefault(require('electron-next'))
// Prepare the renderer once the app is ready
electron_1.app.on('ready', async () => {
  await electron_next_1.default('./renderer')
  const mainWindow = new electron_1.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: path_1.join(__dirname, 'preload.js')
    }
  })
  const url = electron_is_dev_1.default
    ? 'http://localhost:8000/'
    : url_1.format({
      pathname: path_1.join(__dirname, '../renderer/out/index.html'),
      protocol: 'file:',
      slashes: true
    })
  mainWindow.loadURL(url)
})
// すべてのウィンドウが閉じたら、アプリを終了します
electron_1.app.on('window-all-closed', electron_1.app.quit)
// チャネル messageをリッスンし、受信したメッセージをレンダラープロセスに再送信します
electron_1.ipcMain.on('message', (event, message) => {
  event.sender.send('message', message)
})
