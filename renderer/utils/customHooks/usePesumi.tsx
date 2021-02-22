import { createContext, useContext } from 'react'
import type * as Type from '../../interfaces/type'
// const pesumiContext = createContext({} as any)
// export const usePesumi =

/**
 * .pesumiファイル(中身はjson)のコンテキストの初期化
 */
export const pesumiGameContext = createContext({} as {
  pesumiState: Type.Project,
  pesumiDispatch: React.Dispatch<Type.DataAction>
})

export const pesumiGameReducer = (state: Type.Project, action:Type.DataAction):Type.Project => {
  switch (action.action) {
    // payloadで指定したデータで初期化する
    case 'init':
      if (action.payloadProject !== undefined) { state = action.payloadProject }
      // page単位を編集し終わったらchapterの中に追加する
      return state
    case 'addPage' :
      if (action.payloadChapterIndex !== undefined && action.payloadProjectIndex !== undefined && action.payloadPage !== undefined) { state.chapter[action.payloadChapterIndex].page.splice(action.payloadProjectIndex, 0, action.payloadPage) }
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

// カスタムhooks
export const usePesumi = ():{ pesumiState: Type.Project; pesumiDispatch: React.Dispatch<Type.DataAction>; } => useContext(pesumiGameContext)
