import React, { useContext } from 'react'
import { editorStateContext, EditorState } from '../../pages/edit'
import NodeView from './view/nodeView'
import PagesView from './view/pagesView'
// import PagesView from './view/components/pagesComponent'
/**
 * editorのステータスによってNodeView,PagesView,PageViewを表示する
 */
const View:React.FC = () => {
  const editorStatus:EditorState = useContext(editorStateContext)
  return (
    <>
      <NodeView ></NodeView>
    </>
  )
}

export default View
