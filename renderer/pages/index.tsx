import { NextPage } from 'next'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import IndexButton from '../components/index/indexButton'
import { usePesumi } from '../utils/customHooks/usePesumi'
import { ReturnOpenFolder } from '../../main/helpers/ipc/openProjectFolder'
import { useRouter } from 'next/dist/client/router'

// 「新しいビジュアルノベルゲームを作成する」、
// 「作成したゲームを閲覧する」、
// 「作成したゲームを配布する」、
// 「このソフトの使い方」の画面をそれぞれ用意する

const IndexPage:NextPage = () => {
  const { pesumiState, pesumiDispatch } = usePesumi()
  const router = useRouter()
  if (pesumiState.projectName == null) alert('pesumiStateはぬる')
  return (
    <>
      <Box
          border="2px"
          borderStyle="solid"
          borderColor="#9E9E9E"
          borderRadius="20px"
          display="flex"
          flexDirection="column"
          pt="auto"
          pb="auto"
          justifyContent="center"
          alignItems="center"
          backgroundColor="whiteAlpha.500"
          m={['1rem', '5rem', '5rem', '5rem']}
        >
            <IndexButton text='新規作成' href='/new' />
            <div onClick={() => {
              if (pesumiState.projectName === '') {
                // プロジェクトフォルダーのパスを取得する
                // ipcRenderを使えるようにする
                if (window.myIpcRenderer) {
                  (async () => {
                    const value:ReturnOpenFolder | null = await window.myIpcRenderer.openFolder()
                    // value!==nullのときは、つまりダイアログでキャンセルが押された時の処理
                    if (value !== null) {
                      pesumiDispatch({ type: 'init', payloadProject: value.projectJsonData })
                      // 読み込んだプロジェクトフォルダーのpathをelectron-storeに保存し、永続化する
                      router.push('/edit')
                    }
                  })()
                }
              } else {
                console.log('pesumiStateはnullじゃなかった' + JSON.stringify(pesumiState) + '\n' + pesumiState.projectName)
              }
            }}>
            <IndexButton text='開く' />
          </div>
            <IndexButton text='設定' href='/setting' />
            <IndexButton text='PeSuMiとは' href='/about' />
            <Text>{pesumiState.projectName}</Text>
      </Box>
    </>

  )
}

export default IndexPage
