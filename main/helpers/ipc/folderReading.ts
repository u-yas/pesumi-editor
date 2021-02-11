import { dialog } from 'electron'
import { readFile } from 'fs'
import type { Project } from '../../../renderer/interfaces/type'

interface ReturnOpenFolder {
  path: string
  projectJsonData: Project
}
/**
 * フォルダを開くダイアログが出てきて、フォルダーのpathとJSONのデータを返す
 * @param mainWindow :Electron.BrowserWindow
 */
export const openProjectFolder = (mainWindow:Electron.BrowserWindow):Promise<ReturnOpenFolder> => {
  return new Promise((resolve, reject) => {
    const folderPath = dialog.showOpenDialog(mainWindow, {
      buttonLabel: '開く',
      properties: [
        'openDirectory'
      ]
    }).catch(Error => {
      reject(console.log(`プロジェクトフォルダーを開くことに失敗した\nエラーコード：${Error}`))
    })

    readFile(`${folderPath[0]}/project.json`, { encoding: 'utf-8' }, (err, value) => {
      if (err) reject(console.log('jsonファイルの読み込みでエラーが発生しました¥n' + err))
      else {
        const returnValue:ReturnOpenFolder = {
          path: folderPath[0] as string,
          projectJsonData: JSON.parse(value) as Project
        }
        resolve(returnValue)
      }
    })
  })
}

export default openProjectFolder
