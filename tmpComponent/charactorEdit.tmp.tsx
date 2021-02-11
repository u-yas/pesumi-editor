import React from 'react'
import {
  ChakraProvider,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Box,
  IconButton,
  Flex,
  Text,
  Tooltip,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import { DownloadIcon, SmallAddIcon } from '@chakra-ui/icons'

// これはcommandのキャラクターエディット画面の画面コンポーネント
const CharacterEdit = () => {
  return (
    <ChakraProvider resetCSS>
      <Button
        variant="solid"
        size="md"
        backgroundColor="#c0fffe"
        color="gray.700"
        ml={3}
      >
        Button text
      </Button>
      <Text
        mt="1rem"
        textAlign="center"
        color="#211c1c"
        border="1px"
        borderColor="blackAlpha.200"
      >
        立ち絵一覧
      </Text>
      {/* start 二重配列[キャラクターの種類の配列] */}
      <Accordion allowMultiple reduceMotion>
        {/* End キャラクターの立ち絵の配列 */}
        <AccordionItem>
          <AccordionButton backgroundColor="whiteAlpha.500">
            {/* <Editable defaultValue={value.name}> */}
            <Tooltip label="キャラクター名を変更するにはクリックしてください">
              <Editable
                defaultValue="キャラクター"
                placeholder="キャラクター名を入力してください"
              >
                <EditableInput />
                <EditablePreview />
              </Editable>
            </Tooltip>
            <AccordionIcon ml={'1rem'} />
          </AccordionButton>
          <AccordionPanel>
            <Flex>
              {/* <Text>{standPicValue}</Text> */}
              {/* 立ち絵の名称のラベル、立ち絵のファイル名を読み込む
                (ファイル名を project/character/hoge/image/${ファイル名})
                の形式で保存する */}
              <Editable
                placeholder="立ち絵"
                startWithEditView
              >
                <EditableInput justifyContent="center" mt="auto" />
                <EditablePreview justifyContent="center" mt="auto" />
              </Editable>
              {/* <Text>
                {file}
              </Text> */}
            <Box
              // ml={["10rem", "12rem", "15rem", "18rem"]}
              pl={['15px', '15px', '15px', '15px']}
              pr={['15px', '15px', '15px', '15px']}
              ml="auto"
              outline="dotted"
              color="blackAlpha.200"
              minWidth={['13rem', '15rem', '18rem', '20rem']}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* ファイルをインポートできたら isFile?ファイル名を乗せる＋downloadIcon:downloadIconの形にする　*/}
              <DownloadIcon
                color="blackAlpha.400"
                textAlign="center"
              />

            </Box>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* End キャラクターの立ち絵の配列 */}
      </Accordion>
      {/* End 二重配列[キャラクターの種類の配列  */}

      <Flex mb="1rem">
        <Tooltip label="キャラクターを追加する" aria-label="A tooltip">
          <IconButton aria-label="icon" icon={<SmallAddIcon />} size="md" />
        </Tooltip>
      </Flex>
    </ChakraProvider>
  )
}

export default CharacterEdit
