import { useState } from 'react'
import styles from '../styles/node.module.scss'
import type { Node, Page } from '../../../utils/type'
import { Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd'

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
      {(dragProvided, dragSnapshot) => {
        return (
          <div ref={dragProvided.innerRef}>
            {/* ここにノード単体のコンポーネントを表示する */}
          </div>
        )
      }}
    </Draggable>
  )
}

export default NodeComponent
