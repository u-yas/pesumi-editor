import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
type Props = {
  text: string
  href: string
  onClick?:(event: React.MouseEvent<HTMLInputElement>) => void
}
const IndexButton:React.FC<Props> = (props:Props) => {
  return (
  <Link href={props.href}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#44e9ad"
        mt="3vh"
        mb="3vh"
        onClick={() => props.onClick}
        _hover={{ bg: '#4AC699' }}
        width={['150px', '250px', '300px', '400px']}
        height={['50px', '70px', '100px', '120px']}
        borderRadius="10px"
      >

        <Text
          justifyContent="center"
          alignItems="center"
          fontSize={['xs', 'xl', '2xl', '2xl']}
          fontWeight="bold"
        >
          {props.text}
        </Text>
      </Box>
    </Link>
  )
}

export default IndexButton
