
import { Flex, Stack } from '@chakra-ui/react'
import { AddIcon, ArrowDownIcon } from '@chakra-ui/icons'
import type { Chapter } from '../../interfaces/projectType'
import { usePesumi } from '../../utils/customHooks/usePesumi'
import { ChapterOrPages } from './view/components/chapterOrPages'

interface Props {
  chapters: Chapter[] // chapterの中にpages[]のデータも入っている
}

const View:React.FC<Props> = (props:Props) => {
  const { chapters } = props
  const { pesumiDispatch } = usePesumi()
  return (
    <>
      {chapters.map((chapter: Chapter, index: number) => {
        return (
          <Flex
            key={index}
            flexDirection="column"
          >
            <ChapterOrPages chapter={chapter} key={index} />
            <Flex justifyContent="space-around">
              <Stack />
              <ArrowDownIcon />
              <AddIcon onClick={() => pesumiDispatch({ type: 'addChapter', payloadChapter: {} as Chapter })}/>
            </Flex>
          </Flex>
        )
      })}
          {/* プレビューボタンをこの下に置く */}
          {/*  <Preview Chapter={chapters} */}
    </>
  )
}

export default View
