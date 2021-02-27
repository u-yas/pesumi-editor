import { dialog } from 'electron'
import { readFileSync } from 'fs'
import { Project } from '../../../renderer/interfaces/projectType'

export interface ReturnOpenFolder {
  path: string
  projectJsonData: Project
}
/**
 * フォルダを開くダイアログが出てきて、フォルダーのpathとJSONのデータを返す
 * @param mainWindow :Electron.BrowserWindow
 */
export const openProjectFolder = (mainWindow:Electron.BrowserWindow):Promise<ReturnOpenFolder| null> => {
  return new Promise((resolve) => {
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
        dialog.showMessageBoxSync(mainWindow, {
          type: 'error',
          buttons: ['はい'],
          title: '読み込みエラー',
          message: 'フォルダの読み込みでエラーが発生しました。',
          detail: '正しいフォルダを選択してください。'
        })
        resolve(null)
      }
    }
  })
}

export default openProjectFolder
