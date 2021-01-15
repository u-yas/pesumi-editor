// Native
import { join } from 'path'
import { format } from 'url'

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent, Menu, MenuItem } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: join(__dirname, 'preload.js')
    }
  })

  const url = isDev
    ? 'http://localhost:8000/'
    : format({
      pathname: join(__dirname, '../renderer/out/index.html'),
      protocol: 'file:',
      slashes: true
    })

  mainWindow.loadURL(url)
})

// すべてのウィンドウが閉じたら、アプリを終了します
app.on('window-all-closed', app.quit)

// チャネル messageをリッスンし、受信したメッセージをレンダラープロセスに再送信します
ipcMain.on('message', (event: IpcMainEvent, message: any) => {
  event.sender.send('message', message)
})

// メニューバー
Menu.setApplicationMenu(Menu.buildFromTemplate([
  {
    label: 'ファイル',
    submenu: [
      { label: '新規作成', click () {} },
      { label: 'ファイルを保存する', click () {} },
      { label: '名前をつけて保存する', click () {} },
      { label: '終了', click () { app.quit() } }
    ]
  },
  {
    label: '編集',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'undo' }
    ]
  },
  {
    label: '選択',
    submenu: [
      { role: 'selectAll' }
    ]
  },
  {
    label: '表示',
    submenu: [
      { role: 'minimize' },
      { role: 'close' },
      { role: 'togglefullscreen' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' }
    ]
  }
])
)
