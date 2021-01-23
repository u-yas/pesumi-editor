import { useContext } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { editorStateContext } from '../../../pages/edit'
import * as Type from '../../../utils/type'
type Props = {
  node: Type.Node
  nodeIndex: number
}

const PagesView:React.FC<Props> = (props:Props) => {
  const editorStatus = useContext(editorStateContext)
  const { node, nodeIndex } = props

  return (
    <Droppable droppableId={'node'} type={`${nodeIndex}`}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} style={}>
            {node.page.map((pages, index) => {
              return (
                <Draggable key={`${nodeIndex}${index}`} draggableId={`${nodeIndex}${index}`} index={index}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} style={}>
                      <span {...provided.dragHandleProps}>
                        <div>pageのテキストを表示する</div>
                      </span>
                      {pages}
                    </div>
                  )}
                </Draggable>
              )
            })}
          </div>
        )}
    </Droppable>
  )
}

export default PagesView
