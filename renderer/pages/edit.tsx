import { remote } from 'electron'
import { readFile } from 'fs'
import { useState } from 'react'
import styles from './styles/edit.module.scss'
import { Resizable } from 're-resizable'
import CommandList from '../components/command/commandList'
import NodeList from '../components/view/nodeList'
import * as Type from '../utils/type'
import Editor from '../components/editor/editor'
import { usePesumi } from './_app'
import { NextPage } from 'next'

/**
 * 開いたときに新規作成化既存のファイルかを選択する。
 * 新規の場合->プロジェクト名を入力させる
 * 既存のファイルを開く場合は、エクスポートする既存のファイルのフォルダを選択する
 */
const EditPage:NextPage = () => {
  const [initPopup, setInitPopup] = useState(false)

  const { pesumiDispatch } = usePesumi()
  return (
      <>
      {
      initPopup
        ? <div className={styles['popup-layout']}>
          <button className={styles['new-file']} onInput={() => { setInitPopup(true) }} > 新規プロジェクトを作成する </button>
          {/* 既存のファイルを開くを押した場合、ファイルダイアログを開いてjsonファイルを選んで */}
          <button className={styles['exist-file']} onInput={() => {
            // ファイルオープンダイアログを表示する
            const dialog = remote.dialog
            dialog.showOpenDialog(remote.getCurrentWindow(), {
              filters: [
                { name: 'JSON File', extensions: ['json'] }
              ],
              properties: ['openFile']
            }).then(result => {
              if (result.filePaths.length !== 0) {
              // ファイル読み込み
                readFile(result.filePaths[0], { encoding: 'utf-8' }, (err, data) => {
                  if (err) {
                    alert(err)
                  } else {
                  // parseしたJSON形式がPage型に一致しているかどうかを調べて、一致していたらdispatchする
                    try {
                      const dispatchProject:Type.Project = JSON.parse(data)
                      pesumiDispatch({ command: 'init', payloadProject: dispatchProject })
                      setInitPopup(true)
                    } catch (err) {
                      // 読み込んだJSONファイルがproject型に対応していないのでエラーが出る
                      alert(err)
                    }
                  }
                })
              }
            })
          }} />
          編集中のプロジェクトを開く
        </div>
        : <Resizable >
                <Editor />
                <NodeList />
                <CommandList />
            </Resizable>
          }
      </>
  )
  // 新規ファイルを作成するか既存のファイルを作成するかを選択する
  // 新規ファイルを作るときと既存のファイルを作るポップアップを作成する
  // const pesumiFile = new PesumiData()
}

export default EditPage
