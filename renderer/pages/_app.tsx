// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { useReducer, createContext, useContext } from 'react'
import * as Type from '../utils/type'

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
  node: [{
    label: '',
    id: 0,
    page: []
  }]
}
const initText = ''

// カスタムhooks
export const usePesumi = ():{ pesumiState: Type.Project; pesumiDispatch: React.Dispatch<Type.DataAction>; } => useContext(pesumiGameContext)

const MyApp:React.FC <AppProps> = ({ Component, pageProps }: AppProps) => {
  // エクスポートするjsonデータのstate
  const [pesumiState, pesumiDispatch] = useReducer(pesumiGameReducer, initialState)
  // editorのテキストのstate
  const [fileState, fileDispatch] = useReducer(EditorCommandReducer, initText)

  return (
    <pesumiGameContext.Provider value = {{ pesumiState, pesumiDispatch }}>
      <editorFileContext.Provider value = {{ fileState, fileDispatch }}>
        <Component {...pageProps} />
      </editorFileContext.Provider>
</pesumiGameContext.Provider>
  )
}

export default MyApp
