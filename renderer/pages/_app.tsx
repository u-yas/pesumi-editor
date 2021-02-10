// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { useReducer, createContext, useContext } from 'react'
import Header from '../components/layout/header'
import * as Type from '../interfaces/type'
import { ChakraProvider } from '@chakra-ui/react'

/**
 * .pesumiファイル(中身はjson)のコンテキストの初期化
 */
const pesumiGameContext = createContext({} as {
  pesumiState: Type.Project,
  pesumiDispatch: React.Dispatch<Type.DataAction>
})
export const folderContext = createContext('' as string)
/**
 *  JSON形式の配列の処理を管理するReducer
 * */
export const pesumiGameReducer = (state: Type.Project, action:Type.DataAction):Type.Project => {
  switch (action.action) {
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

// カスタムhooks
export const usePesumi = ():{ pesumiState: Type.Project; pesumiDispatch: React.Dispatch<Type.DataAction>; } => useContext(pesumiGameContext)

const MyApp:React.FC <AppProps> = ({ Component, pageProps }: AppProps) => {
  // エクスポートするjsonデータのstate
  const [pesumiState, pesumiDispatch] = useReducer(pesumiGameReducer, initialState)

  return (
    <>
      <pesumiGameContext.Provider value = {{ pesumiState, pesumiDispatch }}>
        <folderContext.Provider value = ''>
          <ChakraProvider>
            <Header />
            <Component {...pageProps} />
          </ChakraProvider>
        </folderContext.Provider>
      </pesumiGameContext.Provider>
    </>
  )
}

export default MyApp
