import { Icon, Box, Slide } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'

const AccoutIcon: React.FC = () => {
  const [isControlled, setControlled] = useState(false)

  return (
    <div>
        {/* アカウント連携機能 */}
        <Icon
         as={IoPersonCircleOutline}
         boxSize="9"
         mr="9"
         onClick={() => isControlled ? setControlled(false) : setControlled(true)}
         onMouseLeave={() => setControlled(false)}
         />
        <Slide direction='bottom' style={{ zIndex: 10 }} in={isControlled}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
            fontSize='xl'
          >
            α版では、アカウント連携機能をご利用いただけません。pesumi.comで
          </Box>
         </Slide>
    </div>
  )
}

export default AccoutIcon
