import { Flex } from '@chakra-ui/react'
import { Page } from '../../../../interfaces/projectType'
import CommandComponent from './Command/commandComponent'

interface Props {
  pages: Page[]
}

const PagesComponent: React.FC<Props> = (props: Props) => {
  const { pages } = props

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
    >
      {pages.map((value, index) => (
        // ここにpagesのコンポーネントを表示する
        // Commandリストからコマンドがドロップされたらフォームを展開する
        <CommandComponent key={index} command={value} />
      ))}
    </Flex>
  )
}

export default PagesComponent
