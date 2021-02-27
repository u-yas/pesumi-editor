import { Box, Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'
import AccoutIcon from './components/accountIcon'
import CloudIcon from './components/cloudIcon'

const Header:React.FC = () => {
  return (
    <>
      <Flex
      backgroundColor="#4BACB8"
      m="0px"
      p="10px"
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
    >
      <Box>
        <Link href="/">
          <Text
            color="whiteAlpha.900"
            fontWeight="bold"
            fontSize="18px"
            m={0}
            p={0}
          >
            PeSuMi Editor
          </Text>
        </Link>
      </Box>
      {/* ここに制作したプロジェクトをデプロイするようにする */}
      <Flex pt="0px" pb="0px" ml='auto'>
        <CloudIcon />
        <AccoutIcon />
      </Flex>
    </Flex>

    </>
  )
}

export default Header
