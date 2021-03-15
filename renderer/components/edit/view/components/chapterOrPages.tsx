import React, { useState } from 'react'
import PagesComponent from '../Pages/pagesComponent'
import { CloseButton, Icon as OpenButton } from '@chakra-ui/react'
import { FaRegFolderOpen } from 'react-icons/fa'
import ChapterComponent from '../Chapter/ChapterComponent'
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
      <ChapterComponent index={key} chapter={chapter} >
        <OpenButton
          as={FaRegFolderOpen}
          onClick={() => setStatus(false)}
          onKeyDown={() => setStatus(false)}
          tabIndex={0}
        />
      </ChapterComponent>
      </>
      }
    </>
  )
}
