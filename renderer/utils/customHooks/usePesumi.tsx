import { createContext, useContext, useReducer } from 'react'
import type * as Type from '../../interfaces/projectType'
// const pesumiContext = createContext({} as any)
// export const usePesumi =
type PesumIContext = {
  pesumiState:Type.Project,
  pesumiDispatch:React.Dispatch<Type.PesumiDataAction>
}
/**
 * reducerの初期データ
 */
export const initialState:Type.Project = {
  projectName: '',
  projectId: '',
  media: {
    character: [],
    bgImage: [],
    bgm: [],
    se: []
  },
  author: {
    writer: [],
    illustrator: []
  },
  chapter: []
}
/**
 *
 *pesumiDataの管理用コンテキスト
 */
export const pesumiDataContext = createContext({} as PesumIContext)

export const pesumiGameReducer = (state: Type.Project, action:Type.PesumiDataAction):Type.Project => {
  switch (action.type) {
    // payloadで指定したデータで初期化する
    case 'init':
      if (action.payloadProject !== undefined) { state = action.payloadProject }
      // page単位を編集し終わったらchapterの中に追加する
      return state
    case 'addPage' :
      if (action.payloadChapterIndex !== undefined && action.payloadProjectIndex !== undefined && action.payloadPage !== undefined) { state.chapter[action.payloadChapterIndex].pages.splice(action.payloadProjectIndex, 0, action.payloadPage) }
      return state
    case 'deleteChapter':
      if (action.payloadChapterIndex !== undefined && action.payloadProjectIndex !== undefined && action.payloadPage !== undefined) {
        state.chapter.splice(action.payloadChapterIndex)
        return state
      } else {
        throw console.error('reducerのdeleteChapterが正常に処理できなかった')
      }
    default :
      return state
  }
}

// カスタムhooks
export const usePesumi = ():{ pesumiState: Type.Project; pesumiDispatch: React.Dispatch<Type.PesumiDataAction>; } => useContext(pesumiDataContext)

const PesumiProvider:React.FC = (props) => {
  const [pesumiState, pesumiDispatch] = useReducer(pesumiGameReducer, initialState)

  return (
    <pesumiDataContext.Provider value={{ pesumiState, pesumiDispatch }} >
        {props.children}
    </pesumiDataContext.Provider>
  )
}

export default PesumiProvider
