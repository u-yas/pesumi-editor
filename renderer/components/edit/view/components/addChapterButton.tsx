import { Chapter } from '../../../../interfaces/projectType'
import { usePesumi } from '../../../../utils/customHooks/usePesumi'
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
          pesumiDispatch({ type: 'addChapter', payloadChapter: {} as Chapter })
        }}
        role='button'
        tabIndex={0}
        onKeyDown={() => {
          pesumiDispatch({ type: 'addChapter', payloadChapter: {} as Chapter })
        }}>

      </div>
    </>
  )
}

export default AddChapterButton
