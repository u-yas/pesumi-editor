
import { Box, CloseButton, Flex, Grid, Tag, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import type { Chapter } from '../../../../interfaces/projectType'
import { usePesumi } from '../../../../utils/customHooks/usePesumi'
import OpenButton from './openButton'
import PagesComponent from './pagesComponent'

type Props = {
  chapter: Chapter
  key: number
  id: Chapter['id']
}
/**
 * クリックしたときnodeが展開して、ページの配列とテキストが表示されるようにする
 * @param {Props.Chapter} props
 *  @type Props
 */
const ChapterComponent:React.FC<Props> = (props: Props) => {
  const { chapter, key, id } = props
  const [status, setStatus] = useState(false)
  const { pesumiDispatch } = usePesumi()
  return (
    <Draggable key={id} draggableId={id} index={key}>
      {(dragProvided) => {
        return (
          <div ref={dragProvided.innerRef}>
            {/* ステータスによってchapterコンポーネントかpagesコンポーネントを展開する */}
            {status
              ? <>
              {/* ここにpagesコンポーネントを */}
                <PagesComponent pages={chapter.pages} >
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
                <Flex
              display="flex"
              justifyContent="flex-start"
              flexDirection="column"
              alignItems="center"
            >
            <Box
              backgroundColor="gray.100"
              borderRadius="20px"
              maxWidth="20rem"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              opacity={1}
              boxShadow="md"
            >
            <Textarea
              backgroundColor="whiteAlpha.900"
              resize="none"
              maxLength={100}
              rows={3}
              fontSize="14px"
              size="sm"
              ml="1rem"
              mt="1rem"
              display="flex"
              justifyContent="center"
              flexDirection="row"
              alignItems="center"
              borderRadius="10px"
              mr="1rem"
              mb="1rem"
              textAlign="left"
              variant="outline"
              letterSpacing="wide"
              isInvaild={false}
              defaultValue={chapter.label}
            />
            <Grid templateColumns="repeat(4, 1fr)" gap={2}>
              <Flex flexDirection="column" p={0} m={0}>
                <Tag
                  backgroundColor="whiteAlpha.50"
                  rounded="sm"
                  fontSize="12px"
                  size="sm"
                >
                  総文字数:
                </Tag>
                <Tag backgroundColor="whiteAlpha.50" fontSize="12px">
                  ページ数:
                </Tag>
              </Flex>
              <Box>
                <Tag
                  backgroundColor="whiteAlpha.50"
                  rounded="sm"
                  fontSize="14px"
                  size="sm"
                >
                  1200
                </Tag>
                <Tag backgroundColor="whiteAlpha.50">50</Tag>
              <OpenButton onClick={ () => setStatus(true)}/>
              {/* chapterの配列の添字をもとにreducer側でchapterを削除する */}
              <CloseButton size="md" onClick={() => { pesumiDispatch({ action: 'deleteChapter', payloadChapterIndex: key }) }}/>
              </Box>
            </Grid>
          </Box>
        </Flex>
              </>
          }

          </div>
        )
      }}
    </Draggable>
  )
}

export default ChapterComponent
