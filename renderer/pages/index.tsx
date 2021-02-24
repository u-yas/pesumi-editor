import { NextPage } from 'next'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import IndexButton from '../components/index/indexButton'
import { usePesumi } from '../utils/customHooks/usePesumi'

// 「新しいビジュアルノベルゲームを作成する」、
// 「作成したゲームを閲覧する」、
// 「作成したゲームを配布する」、
// 「このソフトの使い方」の画面をそれぞれ用意する

const IndexPage:NextPage = () => {
  const { pesumiState } = usePesumi()
  if (pesumiState.projectName == null) alert('pesumiStateはぬる')
  return (
  // <div>
  //   <h1>Pesumi Editor</h1>
  //   <p>
  //     <Link href="/new"><a >新規作成</a>
  //     </Link>
  //   </p>
  //   <p>
  //     <button onClick={(e) => {
  //       // プロジェクトフォルダーのパスを取得する
  //       // ipcRenderを使えるようにする
  //       e.preventDefault()
  //       if (ipcRenderer) {
  //         (async () => {
  //           const value:{value:string, projectJsonFile:Type.Project} = await ipcRenderer.invoke('openProjectFolder', '')
  //           try {
  //             pesumiDispatch({ type: 'init', payloadProject: value.projectJsonFile })
  //             // 読み込んだプロジェクトフォルダーのpathをelectron-storeに保存し、永続化する
  //             router.push('/edit')
  //           } catch (err) {
  //             console.log(`フォルダが正常に読み取れませんでした。\nエラーコード:${err}`)
  //           }
  //         })()
  //       }
  //     }}
  //     >
  //       編集中のファイルを開く
  //       </button>
  //   </p>
  //   <p>
  //     <Link href="/deploy">
  //       登録する
  //     </Link>
  //   </p>
  //   <p>
  //     <Link href="/about">
  //       このソフトの使い方
  //     </Link>
  //   </p>
  // </div>
<Box
      border="2px"
      display="flex"
      flexDirection="column"
      pt="30px"
      pb="30px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="whiteAlpha.500"
      m="5rem"
   >
      <IndexButton text='新規作成' href='/new' />
      <IndexButton text='開く' href='/edit' />
      <IndexButton text='設定' href='/settings' />
      <IndexButton text='新規作成' href='/about' />
      <Text>{pesumiState.projectName}</Text>
    </Box>

  )
}

export default IndexPage
