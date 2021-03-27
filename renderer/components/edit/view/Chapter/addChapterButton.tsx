import { usePesumi } from '../../../../utils/customHooks/usePesumi'
import { initChapter } from '../../../../utils/initVariable'
/**
 *ボタンを押すと空のノードを作成する
 * @param props
 */

const AddChapterButton: React.FC = () => {
  const { pesumiDispatch } = usePesumi()
  return (
    <>
      <div
        onClick={() => {
          pesumiDispatch({ type: 'addChapter', payloadChapter: initChapter })
        }}
        role='button'
        tabIndex={0}
        onKeyDown={() => {
          pesumiDispatch({ type: 'addChapter', payloadChapter: initChapter })
        }}>

      </div>
    </>
  )
}

export default AddChapterButton
