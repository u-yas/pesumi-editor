import React, { useContext } from 'react'
import { editorStateContext, EditorState } from '../../pages/edit'
import NodeView from './view/nodeView'
import PagesView from './view/components/pagesComponent'
/**
 * editorのステータスによってNodeView,PagesView,PageViewを表示する
 */
const View:React.FC = () => {
  const editorStatus:EditorState = useContext(editorStateContext)
  switch (editorStatus.state) {
    case 'Node':
      return <NodeView />
    case 'Pages':
      return <PagesView page={editorStatus.index.nodeIndex} />
    default:
      return <div>editorStatus.stateがエラーです{editorStatus.state}</div>
  }
}

export default View
