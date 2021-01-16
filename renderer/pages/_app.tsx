import { AppProps } from 'next/app'
import { useReducer, createContext, useContext } from 'react'
import * as Type from '../utils/type'

/**
 * .pesumiファイル(中身はjson)のコンテキストの初期化
 */
const pesumiContext = createContext({} as {
  state: Type.Project,
  dispatch: React.Dispatch<Type.Action>
})

/**
 *  編集するファイルを管理するReducer
 * */
export const pesumiReducer = (state: Type.Project, action: Type.Action):Type.Project => {
  switch (action.command) {
    case 'text' :
      return { ...state }
    default :
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

/**
 * 最上層の親コンポーネント
 * @param {Component,pageProps}
 */
export default function App ({ Component, pageProps }: AppProps):JSX.Element {
  const [state, dispatch] = useReducer(pesumiReducer, initialState)
  return (
    <pesumiContext.Provider value = {{ state, dispatch }}>
      <Component {...pageProps} />
    </pesumiContext.Provider>
  )
}

export const usePesumi = ():{ state: Type.Project; dispatch: React.Dispatch<Type.Action>; } => useContext(pesumiContext)
