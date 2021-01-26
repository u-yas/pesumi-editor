import { Drag } from 'framer-motion/types/motion/features/drag'
import { useContext } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { editorStateContext } from '../../../pages/edit'
import * as Type from '../../../utils/type'
type Props = {
  pages: Type.Page[]
}

/**
 * indexの値をもとにして、pages配列をDroppableでできるようにする
 * @param props
 */
const PagesView:React.FC<Props> = (props:Props) => {
  const editorStatus = useContext(editorStateContext)
  const { pages } = props

  return (
    <>
      {pages.map((value, index) => {
        return (
          <Draggable key={pages[index].id} draggableId={pages[index].id} index={index} >
            {(dragProvided, dragSnapShot) => {
              return (
                <div ref={dragProvided.innerRef}>
                  {/* ここにpagesのコンポーネントを表示する
                  Commandリストからコマンドがドロップされたらフォームを展開する */}
                </div>
              )
            }}
          </Draggable>
        )
      })}
    </>
  )
}

export default PagesView
