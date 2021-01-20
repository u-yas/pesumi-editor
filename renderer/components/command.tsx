import { useContext } from 'react'
import { editorStateContext, EditorState } from '../pages/edit'
import NodeCommand from './command/nodeCommand'
import PageCommand from './command/pageCommand'
import PagesCommand from './command/pagesCommand'

/**
 * editorのステータスによってNodeCommand,PagesCommand,PageCommandを表示する
 */
const Command:React.FC = () => {
  const editorStatus:EditorState = useContext(editorStateContext)
  switch (editorStatus.state) {
    case 'Node':
      return <NodeCommand />
    case 'Pages':
      return <PagesCommand nodeIndex={editorStatus.index.nodeIndex} />
    case 'Page':
      return <PageCommand nodeIndex={editorStatus.index.nodeIndex} pagesIndex={editorStatus.index.pagesIndex}/>
    default:
      return <div>editorStatus.stateがエラーです{editorStatus.state}</div>
  }
}

export default Command
