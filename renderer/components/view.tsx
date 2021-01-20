import React, { useContext } from 'react'
import { editorStateContext, EditorState } from '../pages/edit'
import NodeView from './view/components/nodeView'
import PagesView from './view/components/pagesView'
import PageView from './view/components/pageView'
/**
 * editorのステータスによってNodeView,PagesView,PageViewを表示する
 */
const View:React.FC = () => {
  const editorStatus:EditorState = useContext(editorStateContext)
  switch (editorStatus.state) {
    case 'Node':
      return <NodeView />
    case 'Pages':
      return <PagesView nodeIndex={editorStatus.index.nodeIndex} />
    case 'Page':
      return <PageView nodeIndex={editorStatus.index.nodeIndex} pagesIndex={editorStatus.index.pagesIndex}/>
    default:
      return <div>editorStatus.stateがエラーです{editorStatus.state}</div>
  }
}

export default View
