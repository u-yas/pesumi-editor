import { dialog } from 'electron'
import fs from 'fs'

// 変更する
export const changeBackgroundImages = (oldImageFile, newImageFile, mainWindow) => {
  return new Promise((resolve, reject) => {
    // ダイアログを選択してファイルのパスを取得、そのパスからプロジェクトフォルダにあるキャラクター名のフォルダにコピーする
    dialog.showOpenDialog(mainWindow, {
      buttonLabel: '開く',
      properties: [
        'openFile'
      ],
      filters: [
        { name: 'Images', extensions: ['jpg', 'png'] }
      ]
    }).then(returnValue => {
      // ファイルパスを所得したのでそのパスのファイルをプロジェクトフォルダの所定の位置にコピーする
      fs.copyFile(returnValue.filePaths[0], `./background/${returnValue.filePaths[0].replace(/^.*[\\/]/, '')}`, (err) => {
        if (err) reject(err)
        // エラーが無かったので、resolveして終了する
        else resolve(returnValue.filePaths[0])
      })
    }).catch(Error => {
      reject(console.log('openStandingCharacterImageでエラーが発生しました¥n' + Error))
    })
  })
}
