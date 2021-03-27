import React from 'react'
import BackgroundButton from './settings/components/background/backgroundButton'
import BgmButton from './settings/components/bgm/bgmButton'
import CharacterButton from './settings/components/character/characterButton'
import SeButton from './settings/components/se/seButton'
import { Box } from '@chakra-ui/react'
/**
 * editorのステータスによって
 */
const Setting: React.FC = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      >
      <CharacterButton />
      <BackgroundButton />
      <BgmButton />
      <SeButton />
    </Box>
  )
}

export default Setting
