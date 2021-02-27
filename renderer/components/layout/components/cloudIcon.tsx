import { Icon, Box, Slide } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs'

const CloudIcon = () => {
  const [isControlled, setControlled] = useState(false)
  return (
    <>
      <Icon
          as={BsCloudUpload}
          boxSize="7"
          mr="5"
          onClick={() => isControlled ? setControlled(false) : setControlled(true)}
          onMouseLeave={() => setControlled(false)}
          />
        <Slide direction='bottom' in={isControlled} style={{ zIndex: 10 }}>
          <Box
            color='white'
            bg="teal.500"
            rounded="md"
            shadow="md"
            p='40px'
          >
            α版ではプロジェクトアップデート機能はご利用いただけません。
          </Box>
        </Slide>
    </>
  )
}

export default CloudIcon
