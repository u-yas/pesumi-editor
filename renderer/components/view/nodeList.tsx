import { useEffect } from 'react'
import { usePesumi } from '../../pages/edit'
import NodeComponent from './components/nodeComponent'

const NodeList:React.FC = () => {
  // ユーザーが書き込んだテキストファイルを管理するステート
  const { pesumiState } = usePesumi()
  useEffect(() => {
    // node構造が代わったとき(追加や削除、変更が行われた場合)
  }, [pesumiState.node])
  return (
    <>
    {pesumiState.node.map((value, index):JSX.Element => {
      return (
          <NodeComponent key={index} node={value} />
      )
    })}
    </>
  )
}

export default NodeList
