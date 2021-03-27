import { app, ipcMain, IpcMainEvent, Menu } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import changeCharacterFolderName from './helpers/ipc/changeFolderName'
import openProjectFolder from './helpers/ipc/openProjectFolder'
import openStandingCharacterImage from './helpers/ipc/openStandingCharacterImage'

const isProd: boolean = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}
let mainWindow: Electron.BrowserWindow
(async () => {
  await app.whenReady()
  mainWindow = createWindow('main', {
    width: 1000,
    height: 600
  })
  if (isProd) {
    await mainWindow.loadURL('app://./home.html')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/`)
    mainWindow.webContents.openDevTools()
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

// メニューバー
Menu.setApplicationMenu(Menu.buildFromTemplate([
  {
    label: 'ファイル',
    submenu: [
      // { label: '新規作成', click () {} },
      // { label: 'ファイルを保存する', click () {} },
      // { label: '名前をつけて保存する', click () {} },
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

// チャネル messageをリッスンし、受信したメッセージをレンダラープロセスに再送信します
ipcMain.on('message', (event: IpcMainEvent, message: unknown) => {
  event.sender.send('message', message)
})

// チャネルopenProjectFolderは/renderer/pages/index.tsxにあり、プロジェクトフォルダを開く
ipcMain.handle('openProjectFolder', async () => {
  // const projectJson = readFile()
  return await openProjectFolder(mainWindow)
})

// message[0]とかは後できちんとした型を用意する
ipcMain.on('importFile', async (_event: IpcMainEvent, characterName: string) => {
  // value<-ipcRenderから送られてくるデータ
  return await openStandingCharacterImage(characterName, mainWindow)
})

// キャラクター名などが変更されたとき、フォルダ名を変更する
ipcMain.on('changeCharacterName', async (_event, { oldName, newName }) => {
  // value<-ipcRenderから送られてくるデータ
  return await changeCharacterFolderName(oldName, newName)
})
