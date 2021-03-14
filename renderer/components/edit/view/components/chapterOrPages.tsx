import React, { useState } from 'react'
import PagesComponent from './pagesComponent'
import { CloseButton } from '@chakra-ui/react'
import ChapterComponent from './ChapterComponent'
import AddChapterButton from './addChapterButton'
import { Chapter } from '../../../../interfaces/projectType'
interface Props {
  chapter:Chapter
  key:number
}
export const ChapterOrPages:React.VFC<Props> = ({ chapter, key }:Props) => {
  const [status, setStatus] = useState(false)

  return (
    <>
      {status
        ? <>
      {/* ここにpagesコンポーネントを */}
        <PagesComponent pages={chapter[key].pages} >
              <CloseButton
                onClick={() => setStatus(false)}
                onKeyDown={() => setStatus(false)}
                tabIndex={0}
              />
        </PagesComponent>
        </>
        //
        : <>
      {/* ここにChapterのコンポーネント */}
      <ChapterComponent key={key} chapter={chapter} id={chapter.id} />
      <AddChapterButton />
      </>
      }
    </>
  )
}
