import { dialog } from 'electron'
import fs from 'fs'

// 変更する
export const changeBackgroundImages = (oldImageFile, mainWindow) => {
  return new Promise((resolve, reject) => {
    // ダイアログを選択してファイルのパスを取得、そのパスからプロジェクトフォルダにあるキャラクター名のフォルダにコピーする
    const returnValue = dialog.showOpenDialogSync(mainWindow, {
      buttonLabel: '開く',
      properties: [
        'openFile'
      ],
      filters: [
        { name: 'Images', extensions: ['jpg', 'png'] }
      ]
    })
    try {
      // ファイルパスを所得したのでそのパスのファイルをプロジェクトフォルダの所定の位置にコピーする
      fs.copyFileSync(returnValue[0], `./background/${oldImageFile}`)
      resolve(returnValue[0])
    } catch (Error) {
      reject(console.log('openStandingCharacterImageでエラーが発生しました¥n' + Error))
    }
  })
}
