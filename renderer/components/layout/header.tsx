import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import AccoutIcon from './components/accountIcon'
import CloudIcon from './components/cloudIcon'
import Link from 'next/link'
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
            textColor='white'
            fontWeight="bold"
            fontSize="1.5rem"
            m={0}
            p={0}
            cursor='default'
            _hover={{ textColor: '#C4C4C4' }}
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
