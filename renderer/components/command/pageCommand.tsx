import { useContext } from 'react'
import { editorStateContext } from '../../pages/edit'

type Props = {
  nodeIndex: number,
  pagesIndex: number
}
/**
 * nodeIndexとpagesIndexの配列の位置にあるpage単位に対応したコマンドを表示する
 */
const PageCommand:React.FC<Props> = (props:Props) => {
  const editorStatus = useContext(editorStateContext)
  return (
    <>
    </>
  )
}

export default PageCommand
