import { usePesumi } from '../../pages/_app'
import NodeComponent from './components/nodeComponent'

const NodeList:React.FC = () => {
  // ユーザーが書き込んだテキストファイルを管理するステート
  const { pesumiState } = usePesumi()

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
