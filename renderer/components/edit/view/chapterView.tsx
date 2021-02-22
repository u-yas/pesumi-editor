import { Droppable } from 'react-beautiful-dnd'
import ChapterOrPages from './components/chapterOrPagesComponent'
import uuid from 'uuid'
import AddChapterButton from './components/addChapterButton'
import { usePesumi } from '../../../utils/customHooks/usePesumi'

/** pesumiData */
const ChapterView:React.FC = () => {
  // ユーザーが書き込んだテキストファイルを管理するステート
  const { pesumiState } = usePesumi()
  const drpUuid = uuid.v4()

  // Chapterの一覧がラベルと一緒に表示される、クリックするとpagesが展開される
  return (
    <>
      <Droppable key={drpUuid} droppableId={drpUuid}>
        {(provided) => {
          return (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {pesumiState.chapter.map((value, index) => {
                  return (
                    <ChapterOrPages key={index} status={false} chapter={value}/>
                  )
                })
              }
              </div>
          )
        }}
      </Droppable>
      <AddChapterButton />
    </>
  )
}

export default ChapterView
