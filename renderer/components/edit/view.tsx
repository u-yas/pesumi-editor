
import { CloseButton, Flex, Grid, Text, Input, Stack } from '@chakra-ui/react'
import { AddIcon, ArrowDownIcon } from '@chakra-ui/icons'
import React from 'react'
import type { Chapter } from '../../interfaces/projectType'
// import OpenButton from './openButton'
import { ChapterOrPages } from './view/components/chapterOrPages'
type Props = {
  chapters: Chapter[] // chapterの中にpages[]のデータも入っている
}

const View:React.FC<Props> = (props:Props) => {
  const { chapters } = props

  return (
    <>
      {chapters.map((chapter: Chapter, index: number) => {
        return (
          <>
            <ChapterOrPages chapter={chapter} key={index} />
            <AddIcon />
            <ArrowDownIcon />
          </>
        )
      })}
          {/* プレビューボタンをこの下に置く */}
          {/*  <Preview Chapter={chapters} */}
    </>
  )
}

export default View
