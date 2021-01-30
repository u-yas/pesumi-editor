
import type { Node } from '../../../utils/type'
import { Draggable } from 'react-beautiful-dnd'
import { Box } from '@chakra-ui/react'

type Props = {
  node: Node
  key: number

}
/**
 * クリックしたときnodeが展開して、ページの配列とテキストが表示されるようにする
 * @param props @type Props
 */
const NodeComponent:React.FC<Props> = (props: Props) => {
  const { node, key } = props
  return (
    <Draggable key={node.id} draggableId={node.id} index={key}>
      {(dragProvided) => {
        return (
          <div ref={dragProvided.innerRef}>
            {/* ここにノード単体のコンポーネントを表示する */}
            <Box />
          </div>
        )
      }}
    </Draggable>
  )
}

export default NodeComponent
