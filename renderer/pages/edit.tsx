import Layout from '../components/Layout'
import { Resizable } from 're-resizable'
import { useLayoutEffect, useReducer, createContext, useContext } from 'react'
// import { PesumiData } from '../utils/savedata/file'
import * as Type from '../utils/type'
import Editor from '../components/editor/editor'
import NodeView from '../components/view/nodeView'
import CommandList from '../components/command/commandList'

/**
 * 開いたときに新規作成化既存のファイルかを選択する。
 * 新規の場合->プロジェクト名を入力させる
 * 既存のファイルを開く場合は、エクスポートする既存のファイルのフォルダを選択する
 */
/**
 * .pesumiファイル(中身はjson)のコンテキストの初期化
 */
const pesumiGameContext = createContext({} as {
  state: Type.Project,
  dispatch: React.Dispatch<Type.GameAction>
})

/**
 *  ファイルに書かれているコマンドをJSON形式の配列する処理を管理するReducer
 * */
export const pesumiGameReducer = (state: Type.Project, action:Type.GameAction):Type.Project => {
  switch (action.command) {
    case 'init':
      return action.payloadProject
    case 'text' :
      state.node[state.node.length - 1].page.push(action.payloadPage)
      return { ...state }
    default :
      return state
  }
}

/**
 * ファイルを読み込んだり、消したり、ファイル内のデータをパースしたりを管理するためのReducer
 * @param state
 * @param action
 */

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
export const usePesumi = ():{ state: Type.Project; dispatch: React.Dispatch<Type.GameAction>; } => useContext(pesumiGameContext)

const EditPage = (): JSX.Element => {
  // エクスポートするjsonデータのstate
  const [state, dispatch] = useReducer(pesumiGameReducer, initialState)

  useLayoutEffect(() => {
    // const pesumiFile = new PesumiData()
  }, [])
  return (
    <Layout title="新規作成">
      <pesumiGameContext.Provider value = {{ state, dispatch }}>
        <Resizable>
          <Editor />
          <NodeView />
          <CommandList />
        </Resizable>
      </pesumiGameContext.Provider>
    </Layout>
  )
}

export default EditPage
