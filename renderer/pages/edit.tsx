import Layout from '../components/Layout'
import { Resizable } from 're-resizable'
import { useLayoutEffect, useReducer, createContext, useContext, useState } from 'react'
import * as Type from '../utils/type'
import Editor from '../components/editor/editor'
import NodeView from '../components/view/nodeList'
import CommandList from '../components/command/commandList'
import styles from './styles/popup.module.scss'
import fs from 'fs'
import { remote } from 'electron'
import { NextPage } from 'next'

/**
 * .pesumiファイル(中身はjson)のコンテキストの初期化
 */
const pesumiGameContext = createContext({} as {
  pesumiState: Type.Project,
  pesumiDispatch: React.Dispatch<Type.DataAction>
})

/**
 *  JSON形式の配列の処理を管理するReducer
 * */
export const pesumiGameReducer = (state: Type.Project, action:Type.DataAction):Type.Project => {
  switch (action.command) {
    // payloadで指定したデータで初期化する
    case 'init':
      if (action.payloadProject !== undefined) { state = action.payloadProject }
      // page単位を編集し終わったらnodeの中に追加する
      return state
    case 'addPage' :
      if (action.payloadNodeIndex !== undefined && action.payloadProjectIndex !== undefined && action.payloadPage !== undefined) { state.node[action.payloadNodeIndex].page.splice(action.payloadProjectIndex, 0, action.payloadPage) }
      return state
    default :
      return state
  }
}

/**
 * エディターに書かれているファイルを管理するContext
 */
const editorFileContext = createContext({} as {
   fileState: string,
    fileDispatch: React.Dispatch<Type.FileAction>
  })

/**
 * ファイルを読み込んだり、消したり、ファイル内のデータをパースしたりを管理するためのReducer
 * @param state
 * @param action
 */
export const EditorCommandReducer = (state: string, action: Type.FileAction):string => {
  switch (action.command) {
    case 'text':
      return state
    default:
      return state
  }
}
/**
 * reducerの初期データ
 */
const initialState:Type.Project = {
  projectName: '',
  projectId: '',
  author: {
    writer: [],
    illustrator: []
  },
  node: []
}
const initText = ''

// カスタムhooks
export const usePesumi = ():{ pesumiState: Type.Project; pesumiDispatch: React.Dispatch<Type.DataAction>; } => useContext(pesumiGameContext)

/**
 * 開いたときに新規作成化既存のファイルかを選択する。
 * 新規の場合->プロジェクト名を入力させる
 * 既存のファイルを開く場合は、エクスポートする既存のファイルのフォルダを選択する
 */
const EditPage:NextPage = () => {
  // エクスポートするjsonデータのstate
  const [pesumiState, pesumiDispatch] = useReducer(pesumiGameReducer, initialState)
  // editorのテキストのstate
  const [fileState, fileDispatch] = useReducer(EditorCommandReducer, initText)

  const [initPopup, setInitPopup] = useState(false)
  const [RenderState, setRenderState] = useState<React.FC>(() => <></>)
  useLayoutEffect(() => {
    setRenderState(initPopup
      ? () => {
          return (
      <div className={styles['popup-layout']}>
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
                fs.readFile(result.filePaths[0], { encoding: 'utf-8' }, (err, data) => {
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
          )
        }
      : () => {
          return (
      <Resizable>
        <Editor />
        <NodeView />
        <CommandList />
      </Resizable>
          )
        }
    )
    // 新規ファイルを作成するか既存のファイルを作成するかを選択する
    // 新規ファイルを作るときと既存のファイルを作るポップアップを作成する
    // const pesumiFile = new PesumiData()
  }, [initPopup])
  return (
    <Layout title="新規作成">
      <pesumiGameContext.Provider value = {{ pesumiState, pesumiDispatch }}>
        <editorFileContext.Provider value = {{ fileState, fileDispatch }}>
          <RenderState />
        </editorFileContext.Provider>
      </pesumiGameContext.Provider>
    </Layout>
  )
}

export default EditPage
