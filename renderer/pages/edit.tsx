import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { Resizable } from 're-resizable'
import React, { useLayoutEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Settings from '../components/edit/setting'
import View from '../components/edit/view'
import { usePesumi } from '../utils/customHooks/usePesumi'

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
          type: 'init'
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
        <Resizable >
              <DragDropContext onDragEnd={onDragEnd}>
                {/* コマンドリスト、サイドバーみたいな感じで表示する */}
                <Settings />
                {/* コマンドからのドロップ先、ドロップしたらコンテンツに応じてフォームが表示され、そこに入力をする */}
                  <View chapters={pesumiState.chapter} />
              </DragDropContext>
          </Resizable>
  )
}

export default EditPage
