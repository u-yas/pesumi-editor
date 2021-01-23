import { useContext } from 'react'
import { editorStateContext } from '../../../pages/edit'
import { DragDropContext } from 'react-beautiful-dnd'
import {usePesumi} from '../../../pages/_app'

const NodeView:React.FC = () => {
  const editorStatus = useContext(editorStateContext)
  const {pesumiState, pesumiDispatch } = usePesumi()
  const onDragEnd = (result: { destination: { index: any }; source: { index: any } }) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      pesumiState.node,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
  }
  }
  return (
    <DragDropContext >
    </>
  )
}

export default NodeView
