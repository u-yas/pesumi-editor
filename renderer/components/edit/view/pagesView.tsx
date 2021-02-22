import React, { useContext, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Page } from '../../../interfaces/type'
import { editorStateContext } from '../../../pages/edit'
import CommandComponent from './components/commandComponent'

type Props = {
  pages: Page[]
}

const PagesView:React.FC<Props> = (props:Props) => {
  const [, setEditorState] = useState(useContext(editorStateContext).state)
  const { pages } = props

  return (
    <>
      <div
        onClick={() => setEditorState('Chapter')}
        role='button' tabIndex={0}
        onKeyDown={() => { setEditorState('Chapter') }}
      >
        {/* このボタンを押すと */}
      </div>
      {pages.map((value, index) => {
        return (
          <Draggable key={pages[index].id} draggableId={pages[index].id} index={index} >
            {(dragProvided) => {
              return (
                <div ref={dragProvided.innerRef}>
                  {/* ここにpagesのコンポーネントを表示する
                  Commandリストからコマンドがドロップされたらフォームを展開する */}
                  <CommandComponent command={value}/>
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
