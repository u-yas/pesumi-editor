import { NextPage } from 'next'
import SplitPane from 'react-split-pane'
import React, { } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Settings from '../components/edit/setting'
import View from '../components/edit/view'
import { usePesumi } from '../utils/customHooks/usePesumi'

const styles = {
  background: '#e9e8ea',
  minWidth: '10px',
  cursor: 'col-resize',
  margin: '0px',
  height: '100%'
}
/**
 * 開いたときに新規作成化既存のファイルかを選択する。
 * 新規の場合->プロジェクト名を入力させる
 * 既存のファイルを開く場合は、エクスポートする既存のファイルのフォルダを選択する
 */
const EditPage:NextPage = () => {
  const { pesumiState, pesumiDispatch } = usePesumi()
  // pesumiStateの変化に伴う副作用を管理する
  // useEffect(() => {
  //   if(pesumiState)
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  const onDragEnd = (result:DropResult) => {
    if (result.type === 'CHAPTER') {
      const items = Array.from(pesumiState.chapter)
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)
      pesumiDispatch({
        type: 'sortChapter', payloadChapters: items
      })
    }else if(result.type === 'PAGES') {
      const items = Array.from(pesumiState.chapter[result.source.index].pages)
      const [reorderItem] = items.splice(result.)
    }
  }

  return (
    <>
    <SplitPane split='vertical' resizerStyle={styles} minSize={100} maxSize={-100}>
        {/* 設定リスト */}
      <div style={{ overflow: 'hidden' }}>
        <Settings />
      </div>
        {/* コマンドからのドロップ先、ドロップしたらコンテンツに応じてフォームが表示され、そこに入力をする */}
      <div style={{ overflow: 'hidden' }}>
        <DragDropContext onDragEnd={onDragEnd}>
            <View chapters={pesumiState.chapter} />
        </DragDropContext>
      </div>
    </SplitPane>
    </>
  )
}

export default EditPage
