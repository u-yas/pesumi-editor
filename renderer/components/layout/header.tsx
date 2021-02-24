import { Box, Flex, Text, Icon, Link } from '@chakra-ui/react'
import { BsCloudUpload } from 'react-icons/bs'
import { IoPersonCircleOutline } from 'react-icons/io5'
import React from 'react'

const Header:React.FC = () => {
  return (
    <>
      <Box
      backgroundColor="#4BACB8"
      m="0px"
      p="10px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Text
        color="whiteAlpha.900"
        fontWeight="bold"
        fontSize="18px"
        m={0}
        p={0}
      >
        <Link href="/">
          PeSuMi Editor
        </Link>
      </Text>
      {/* <Flex pt="0px" pb="0px" height="2e">
        <Text color="whiteAlpha.900" ml="10px" mr="10px">
          Text value
        </Text>
        <Text color="whiteAlpha.900" ml="10px" mr="10px">
          Text value
        </Text>
        <Text color="whiteAlpha.900" ml="10px" mr="10px">
          Text value
        </Text>
        <Text color="whiteAlpha.900" ml="10px" mr="10px">
          Text value
        </Text>
      </Flex> */}
      {/* ここに制作したプロジェクトをデプロイするようにする */}
      <Flex pt="0px" pb="0px">
        <Icon
        as={BsCloudUpload}
        boxSize="7"
        mr="5"
        onClick={() => { console.log('uploadボタン clicked') }}
        />
        {/* アカウント連携機能 */}
        <Icon
         as={IoPersonCircleOutline}
         boxSize="7"
         mr="9"
         onClick={() => { console.log('personボタン clicked') }}
         />
      </Flex>
    </Box>

    </>
  )
}

export default Header
