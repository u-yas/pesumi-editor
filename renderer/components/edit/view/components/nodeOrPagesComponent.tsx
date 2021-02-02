import { useState } from 'react'
import type{ Node } from '../../../../utils/type'
import PagesComponent from './pagesComponent'
import NodeComponent from './nodeComponent'
import { CloseButton } from '@chakra-ui/react'

type Props = {
  key: number
  status: boolean
  node: Node
}
const NodeOrPages:React.FC<Props> = (props:Props) => {
  const { key, status, node } = props
  const [isOpened, setIsOpened] = useState(status)
  return (
    <>
    {/* trueになればpagesコンポーネントを展開するfalseならばNodeコンポーネントを展開する */}
      {isOpened
        ? <>
            <PagesComponent pages={node.page} />
            <div
              onClick={() => setIsOpened(false)}
              onKeyDown={() => setIsOpened(false)}
              role='button'
              tabIndex={0}>
                <CloseButton />
            </div>
          </>
        : <NodeComponent key={key} node={node} />

      }

    </>
  )
}

export default NodeOrPages
