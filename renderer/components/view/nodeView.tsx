import { DragDropContext } from 'react-beautiful-dnd'
import { usePesumi } from '../../pages/_app'
import NodeComponent from './components/nodeComponent'
import { onDragEnd, reorder } from '../../utils/editor/reorder'
const View:React.FC = () => {
  // ユーザーが書き込んだテキストファイルを管理するステート
  const { pesumiState, pesumiDispatch } = usePesumi()

  const reorder = (list:any[], startIndex:number, endIndex:number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
  
    return result
  }
  
  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }
  
    if (result.type === 'NODE') {
      console.log(reult)
      const node = reorder(
        pesumiState.node,
        result.source.index,
        result.destination.index
      )
      pesumiDispatch({command:'init',payloadNode: })
    }
  }
  
  return (
    <>
    {pesumiState.node.map((value, index):JSX.Element => {
      return (
         <DragDropContext onDragend={()=>onDragEnd()}
      )
    })}
    </>
  )
}

export default View
