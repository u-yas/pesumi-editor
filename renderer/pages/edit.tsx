import { NextPage } from 'next'
import SplitPane from 'react-split-pane'
import React, { } from 'react'
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
const EditPage: NextPage = () => {
  const { pesumiState } = usePesumi()
  // pesumiStateの変化に伴う副作用を管理する
  // useEffect(() => {
  //   if(pesumiState)
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <>
    <SplitPane split='vertical' resizerStyle={styles} minSize={100} maxSize={-100}>
        {/* 設定リスト */}
      <div style={{ overflow: 'hidden' }}>
        <Settings />
      </div>
        {/* コマンドからのドロップ先、ドロップしたらコンテンツに応じてフォームが表示され、そこに入力をする */}
      <div style={{ overflow: 'hidden' }}>
            <View chapters={pesumiState.chapter} />
      </div>
    </SplitPane>
    </>
  )
}

export default EditPage
