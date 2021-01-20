import { useContext } from 'react'
import { editorStateContext } from '../../../pages/edit'

type Props = {
  nodeIndex: number
}

const PagesView:React.FC<Props> = (props:Props) => {
  const editorStatus = useContext(editorStateContext)

  return (
    <>
    </>
  )
}

export default PagesView
