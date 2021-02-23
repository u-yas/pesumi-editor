import { Button } from '@chakra-ui/react'
import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import uuid from 'uuid'
import type { Chapter } from '../../interfaces/projectType'
import AddChapterButton from './view/components/addChapterButton'
import ChapterComponent from './view/components/ChapterComponent'

type Props = {
  chapters: Chapter[] // chapterの中にpages[]のデータも入っている
}
// import PagesView from './view/components/pagesComponent'
/**
 *pesumiState.Chapter[]のデータをmapで展開する
 */
const View:React.FC<Props> = (props:Props) => {
  const { chapters } = props
  const drpUuid = uuid.v4()

  return (
      <>
        <Droppable key={drpUuid} droppableId={drpUuid}>
        {(provided) => {
          return (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                      {chapters.map((chapter: Chapter, index: number) => {
                        return (
                            <ChapterComponent key={index} chapter={chapter} id={chapter.id} >
                                <Button />
                            </ChapterComponent>
                        )
                      })
                    }
                </div>
          )
        }}
            </Droppable>
            <AddChapterButton />
            {/* プレビューボタンをこの下に置く */}
            {/*  <Preview Chapter={chapters} */}
          </>
  )
}

export default View
