import { Box, Text } from '@chakra-ui/react'

type Props = {
  colorCode: string,
  text: string
}
const MediaButton:React.FC<Props> = (props:Props) => {
  return (
    <>
      <Box
      backgroundColor="#80D6FF"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="250px"
      height="100px"
      borderRadius="10px"
    >
      <Text color="whiteAlpha.900" fontSize='xl' fontWeight='bold'>
        <div
          style={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: props.colorCode
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
