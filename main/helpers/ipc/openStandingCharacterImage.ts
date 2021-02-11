import { dialog } from 'electron'
import fs from 'fs'
/**
 * キャラクターの立ち絵の画像ファイルやBGMの音声ファイル等をプロジェクトフォルダにインポートする処理
 *  @param Character どのキャラクターの画像なのかを選択する
 *  @param mainWindow メインウインドウ
 *  @param fileType インポートするファイルの種類、例えば、背景画像なのか、キャラクターの立ち絵なのか、EventCGなのか
 */
const openStandingCharacterImage = (name:string, fileType:string, mainWindow:Electron.BrowserWindow):Promise<string> => {
  return new Promise((resolve, reject) => {
    // ダイアログを選択してファイルのパスを取得、そのパスからプロジェクトフォルダにあるキャラクター名のフォルダにコピーする
    dialog.showOpenDialog(mainWindow, {
      buttonLabel: '開く',
      properties: [
        'openFile'
      ],
      filters: [
        // 音声ファイル、画像ファイルのうちのどれか
      ]
    }).then(returnValue => {
      // ファイルパスを所得したのでそのパスのファイルをプロジェクトフォルダの所定の位置にコピーする
      fs.copyFile(returnValue.filePaths[0], `./${name}/image/`, (err) => {
        if (err) reject(err)
        else resolve(returnValue.filePaths[0])
      })
    }).catch(Error => {
      reject(console.log('openStandingCharacterImageでエラーが発生しました¥n' + Error))
    })
  })
}

export default openStandingCharacterImage
