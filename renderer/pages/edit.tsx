import React, { useLayoutEffect } from 'react'
import { Resizable } from 're-resizable'
import Settings from '../components/edit/setting'
import View from '../components/edit/view/chapterView'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { usePesumi } from '../utils/customHooks/usePesumi'

export type EditorState = {
  state: 'Chapter'|'Pages'|'Page';
  index: {
    chapterIndex: number
    pagesIndex: number
  }
}

export const editorStateContext : React.Context<EditorState> = React.createContext({} as EditorState)
/**
 * 開いたときに新規作成化既存のファイルかを選択する。
 * 新規の場合->プロジェクト名を入力させる
 * 既存のファイルを開く場合は、エクスポートする既存のファイルのフォルダを選択する
 */
const EditPage:NextPage = () => {
  const { pesumiState, pesumiDispatch } = usePesumi()
  const router = useRouter()
  useLayoutEffect(() => {
    if (pesumiState.projectId === undefined || null || 0) {
      alert('ファイルが開かれていません。ホーム画面から、新規作成か、既存のファイルを開くかを選択してください')
      router.push('/')
    }
  })

  const onDragEnd = (result:DropResult) => {
    const { source, destination } = result
    if (!result.destination) {
      return
    }

    switch (source.droppableId) {
      case destination?.droppableId:
        pesumiDispatch({
          action: 'init'
        })
    }

    if (result.type === 'NODE') {
      console.log(result)
      // const chapter = reorder(
      //   pesumiState.chapter,
      //   result.source.index,
      //   result.destination.index
      // )
      // pesumiDispatch({action:'init',payloadNode: })
    }
  }

  return (
      <editorStateContext.Provider value={{ state: 'Chapter', index: { chapterIndex: 0, pagesIndex: 0 } }} >
        <Resizable >
              <DragDropContext onDragEnd={onDragEnd}>
                {/* コマンドリスト、サイドバーみたいな感じで表示する */}
                <Settings />
                {/* コマンドからのドロップ先、ドロップしたらコンテンツに応じてフォームが表示され、そこに入力をする */}
                  <View />
              </DragDropContext>
            </Resizable>
      </editorStateContext.Provider>
  )
}

export default EditPage
