import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
type Props = {
  text: string
  href?: string
  onClick?:(event: React.MouseEvent<HTMLInputElement>) => void
}
const IndexButton:React.FC<Props> = (props:Props) => {
  return (
  <Link href={props.href === undefined ? '/' : props.href}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#5cffce"
        mt="3vh"
        mb="3vh"
        onClick={() => props.onClick}
        _active={{ bg: '#4AC699' }}
        width={['100px', '200px', '250px', '250px']}
        height={['50px', '70px', '100px', '90px']}
        borderRadius="10px"
        borderColor="#C0C0C0"
        boxShadow='lg'
      >

      <div style={{ WebkitTextStrokeColor: 'white', WebkitTextStrokeWidth: '0.4px' }}>
          <Text
            justifyContent="center"
            alignItems="center"
            fontSize={['md', '2xl', '3xl', '3xl']}
            fontWeight="bold"
            color='blackAlpha.900'
          >
              {props.text}
          </Text>
        </div>
      </Box>
    </Link>
  )
}

export default IndexButton
