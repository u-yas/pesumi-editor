import { NextPage } from 'next'
import SplitPane from 'react-split-pane'

const styles = {
  background: '#e9e8ea',
  width: '7px',
  minWidth: '7px',
  cursor: 'col-resize',
  margin: '0px',
  height: '100%',
  '&:hover': {
    background: 'black'
  }

}
/**
 *  新規にプロジェクトを作成するときの初期フォームを作成する
 *  フォームに入力をしたら非同期処理でpesumiStateにデータを移せたらeditに移動する
 */
const New:NextPage = () => {
  // プロジェクト名 著者名を入力する
  return (
    <SplitPane split='vertical' resizerStyle={styles} minSize={200} maxSize={-200} >
      <div style={{ height: '100%', overflow: 'hidden' }}>
        <div style={{ height: '100%' }}>
        ここに左側
        </div>
      </div>
      <div style={{ height: '100%' }}>
        <div style={{ height: '100%' }}>
          ここは右側
        </div>
        </div>
    </SplitPane>
  )
}

export default New
