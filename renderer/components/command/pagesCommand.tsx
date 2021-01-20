import { useContext } from 'react'
import { editorStateContext } from '../../pages/edit'

type Props = {
  nodeIndex:number
}
/**
 * nodeIndexの配列位置にあるpages配列に対応したコマンドを表示する
 * @param props
 */
const PagesCommand:React.FC<Props> = (props:Props) => {
  const editorStatus = useContext(editorStateContext)

  return (
    <>
    </>
  )
}

export default PagesCommand
