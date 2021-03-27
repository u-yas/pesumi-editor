import { dialog } from 'electron'
import fs from 'fs'
/**
 * キャラクターの立ち絵の画像ファイルやBGMの音声ファイル等をプロジェクトフォルダにインポートする処理
 *  @param Character どのキャラクターの画像なのかを選択する
 *  @param mainWindow メインウインドウ
 *
 */
const openStandingCharacterImage = async (characterName: string, mainWindow: Electron.BrowserWindow): Promise<string> => {
  return await new Promise((resolve, reject) => {
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
      fs.copyFile(returnValue.filePaths[0], `./${characterName}/image/`, (err) => {
        if (err) reject(err)
        // エラーが無かったので、resolveして終了する
        else resolve(returnValue.filePaths[0])
      })
    }).catch(Error => {
      reject(console.log(Error))
    })
  })
}

export default openStandingCharacterImage
