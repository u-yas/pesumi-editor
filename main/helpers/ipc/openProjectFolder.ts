import { dialog } from 'electron'
import { readFileSync } from 'fs'
import type { Project } from '../../../renderer/interfaces/projectType'

interface ReturnOpenFolder {
  path: string
  projectJsonData: Project
}
/**
 * フォルダを開くダイアログが出てきて、フォルダーのpathとJSONのデータを返す
 * @param mainWindow :Electron.BrowserWindow
 */
export const openProjectFolder = (mainWindow:Electron.BrowserWindow):Promise<ReturnOpenFolder| null> => {
  return new Promise((resolve, reject) => {
    const folderPath = dialog.showOpenDialogSync(mainWindow, {
      buttonLabel: '開く',
      properties: [
        'openDirectory'
      ]
    })
    if (folderPath === undefined) {
      resolve(null)
    } else {
      try {
        const value = readFileSync(`${folderPath[0]}/project.json`, { encoding: 'utf-8' })
        const returnValue:ReturnOpenFolder = {
          path: folderPath[0] as string,
          projectJsonData: JSON.parse(value) as Project
        }
        resolve(returnValue)
      } catch (err) {
        reject(console.log('jsonファイルの読み込みでエラーが発生しました¥n' + err))
      }
    }
  })
}

export default openProjectFolder
