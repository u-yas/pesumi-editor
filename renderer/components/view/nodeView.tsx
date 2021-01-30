import { Droppable } from 'react-beautiful-dnd'
import { usePesumi } from '../../pages/_app'
import NodeOrPages from './components/nodeOrPagesComponent'
import uuid from 'uuid'
import AddNodeButton from '../view/components/addNodeButton'

/** pesumiData */
const NodeView:React.FC = () => {
  // ユーザーが書き込んだテキストファイルを管理するステート
  const { pesumiState } = usePesumi()
  const drpUuid = uuid.v4()

  // Nodeの一覧がラベルと一緒に表示される、クリックするとpagesが展開される
  return (
    <>
      <Droppable key={drpUuid} droppableId={drpUuid}>
        {(provided) => {
          return (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {pesumiState.node.map((value, index) => {
                  return (
                    <NodeOrPages key={index} status={false} node={value}/>
                  )
                })
              }
              </div>
          )
        }}
      </Droppable>
      <AddNodeButton />
    </>
  )
}

export default NodeView
