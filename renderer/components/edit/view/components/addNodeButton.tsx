import { usePesumi } from '../../../pages/_app'
import * as Type from '../../../utils/type'
/**
 *ボタンを押すと空のノードを作成する
 * @param props
 */
const AddNodeButton: React.FC = () => {
  const { pesumiDispatch } = usePesumi()
  return (
    <>
      <div
        onClick={() => {
          pesumiDispatch({ action: 'addNode', payloadNode: {} as Type.Node })
        }}
        role='button'
        tabIndex={0}
        onKeyDown={() => {
          pesumiDispatch({ action: 'addNode', payloadNode: {} as Type.Node })
        }}>

      </div>
    </>
  )
}

export default AddNodeButton
