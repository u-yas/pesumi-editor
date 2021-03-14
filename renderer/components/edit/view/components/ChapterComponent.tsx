
import { Flex, Grid, Text, Input, Stack } from '@chakra-ui/react'
import { AddIcon, ArrowDownIcon } from '@chakra-ui/icons'
import React from 'react'
import { Chapter } from '../../../../interfaces/projectType'
// import OpenButton from './openButton'

type Props = {
  chapter: Chapter
  key: number
  id: Chapter['id']
}
/**
 * クリックしたときnodeが展開して、ページの配列とテキストが表示されるようにする
 */
const ChapterComponent:React.FC<Props> = ({ chapter, key, id }: Props) => {
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
        onDoubleClick={() => setStatus(true)}
      >
        <Input
          borderRadius={0}
          variant="outline"
          border="1px"
          size="sm"
          borderColor="gray"
          defaultValue={chapter.label}
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
          <Text fontSize="xs">3443</Text>
          <Stack spacing={2} />
          <Text fontSize="xs">ページ数:</Text>
          <Text fontSize="xs">50</Text>
          <Stack spacing={2} />
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          <Stack spacing={2} />
          <ArrowDownIcon boxSize={9} onClick={() => setStatus(true)}/>
          <AddIcon mt='3' />
        </Grid>
      </Flex>
    </Flex>
  )
}

export default ChapterComponent
