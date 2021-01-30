import { useContext } from 'react'
import { editorStateContext } from '../../pages/edit'
import { Grid, Box } from '@chakra-ui/react'

type Props = {
  nodeIndex:number
}
/**
 * nodeIndexの配列位置にあるpages配列に対応したコマンドを表示する
 * @param props
 */
const PagesCommand:React.FC<Props> = (props:Props) => {
  const editorStatus = useContext(editorStateContext)

  return (
    <>
      <Grid
        templateColumns="repeat(1, 1fr)"
        backgroundColor="#eefbff"
        rowGap={20}
        area="c"
        justifyItems="center"
        opacity={1}
        overflow="visible"
        m={0}
        p={0}
        display="grid"
        pb="1rem"
        pt="1rem"
      >
        <Box
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          borderRadius="1rem"
          minWidth="14rem"
          minHeight="5rem"
          border="2px"
          borderColor="blackAlpha.300"
          as="button"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.99)',
            borderColor: '#bec3c9'
          }}
          fontSize="3xl"
          fontWeight="bold"
          onClick={() => {}}
        >
          Text
        </Box>
        <Box
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          borderRadius="1rem"
          minWidth="14rem"
          minHeight="5rem"
          border="2px"
          borderColor="blackAlpha.300"
          as="button"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.99)',
            borderColor: '#bec3c9'
          }}
          fontSize="3xl"
          fontWeight="bold"
        >
          Voice
        </Box>
        <Box
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          borderRadius="1rem"
          minWidth="14rem"
          minHeight="5rem"
          border="2px"
          borderColor="blackAlpha.300"
          as="button"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.99)',
            borderColor: '#bec3c9'
          }}
          fontSize="3xl"
          fontWeight="bold"
        >
          Background
        </Box>
        <Box
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          borderRadius="1rem"
          minWidth="14rem"
          minHeight="5rem"
          border="2px"
          borderColor="blackAlpha.300"
          as="button"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.99)',
            borderColor: '#bec3c9'
          }}
          fontSize="3xl"
          fontWeight="bold"
        >
          BGM
        </Box>
        <Box
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          borderRadius="1rem"
          minWidth="14rem"
          minHeight="5rem"
          border="2px"
          borderColor="blackAlpha.300"
          as="button"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.99)',
            borderColor: '#bec3c9'
          }}
          fontSize="3xl"
          fontWeight="bold"
        >
          SE
        </Box>
      </Grid>
    </>
  )
}

export default PagesCommand
