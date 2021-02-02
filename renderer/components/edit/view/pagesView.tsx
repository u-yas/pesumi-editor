import { useRouter } from 'next/dist/client/router'
import React, { useContext, useEffect, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { editorStateContext } from '../../../pages/edit'
import * as Type from '../../../utils/type'
import PagesComponent from './components/pagesComponent'

type Props = {
  pages: Type.Page[]
}

const PagesView:React.FC<Props> = (props:Props) => {
  const [editorStatus, setEditorState] = useState(useContext(editorStateContext).state)
  const { pages } = props

  return (
    <>
      <div onClick={() => setEditorState('Node')} role='button' tabIndex={0} onKeyDown={() => { setEditorState('Node') }}>
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
                  <PagesComponent page={value}/>
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
