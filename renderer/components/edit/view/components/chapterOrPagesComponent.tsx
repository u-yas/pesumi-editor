import { useState } from 'react'
import type{ Chapter } from '../../../../interfaces/type'
import PageComponent from './commandComponent'
import ChapterComponent from './chapterComponent'
import { CloseButton } from '@chakra-ui/react'

type Props = {
  key: number
  status: boolean
  chapter: Chapter
}
const ChapterOrPages:React.FC<Props> = (props:Props) => {
  const { key, status, chapter } = props
  const [isOpened, setIsOpened] = useState(status)

  return (
    <>
    {/* trueになればpagesコンポーネントを展開するfalseならばNodeコンポーネントを展開する */}
      {isOpened
        ? <>
            <PageComponent command={chapter.page[key]} />
            <div
              onClick={() => setIsOpened(false)}
              onKeyDown={() => setIsOpened(false)}
              role='button'
              tabIndex={0}
            >
                <CloseButton />
            </div>
          </>
        : <ChapterComponent key={key} chapter={chapter} />

      }

    </>
  )
}

export default ChapterOrPages
