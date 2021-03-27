import { Box, Text } from '@chakra-ui/react'

interface Props {
  colorCode: string
  text: string
}
const MediaButton: React.FC<Props> = (props: Props) => {
  return (
    <>
     <Box
      backgroundColor={props.colorCode}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={['150px', '300px', '250px', '300px']}
      height={['60px', '90px', '120px', '100px']}
      borderRadius="10px"
      mt='50px'
      mb='50px'
      boxShadow='2xl'
      _active={{ transform: 'scale(0.98)' }}
    >
      <Text color="whiteAlpha.900" fontSize='3xl' fontWeight='bold'>
        <div
          style={{
            WebkitTextStrokeWidth: '1.2px',
            WebkitTextStrokeColor: '#908D8D'
          }}
        >
          {props.text}
        </div>
      </Text>
      </Box>
    </>
  )
}
export default MediaButton
