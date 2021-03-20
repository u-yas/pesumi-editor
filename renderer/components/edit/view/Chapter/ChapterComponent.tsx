
import { Flex, Grid, Text, Input, Stack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React from 'react'
import { Chapter } from '../../../../interfaces/projectType'
import { usePesumi } from '../../../../utils/customHooks/usePesumi'
import { sumOfTextLength } from '../../../../utils/array/counter'
// import OpenButton from './openButton'

type Props = {
  chapter: Chapter
  index: number
}
/**
 * クリックしたときnodeが展開して、ページの配列とテキストが表示されるようにする
 * 必要: Chapterの追加と削除できるボタン
 */
const ChapterComponent:React.FC<Props> = ({ chapter, index }: Props) => {
  const { pesumiState } = usePesumi()
  return (
    <Flex flexDirection="column">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width={['100px', '130px', '250px', '300px']}
        maxHeight='200px'
        ml='auto'
        mr='auto'
      >
        <Input
          borderRadius={0}
          variant="outline"
          border="1px"
          size="sm"
          borderColor="gray"
          defaultValue={chapter.label}
          onChange={(e) => { pesumiState.chapter[index].label = e.target.value }}
        />
        <Grid
          templateColumns="repeat(3, 1fr)"
          backgroundColor="blackAlpha.100"
          rowGap={4}
          columnGap={6}
          width="100%"
          border="1px"
          borderColor="gray"
        >
          <Text fontSize="xs">文字数:</Text>
          {/* chapter[index]以下の総文字数 */}
          <Text fontSize="xs">{sumOfTextLength(chapter.pages).toString()}</Text>
          <Stack spacing={2} />
          <Text fontSize="xs">ページ数:</Text>
          <Text fontSize="xs">{chapter.pages.length.toString()}</Text>
          <Stack spacing={2} />
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          <Stack spacing={2} />
          <AddIcon mt='3' />
        </Grid>
      </Flex>
    </Flex>
  )
}

export default ChapterComponent
