import React, { useLayoutEffect } from 'react'
import { Resizable } from 're-resizable'
import CommandList from '../components/command/nodeCommand'
import NodeList from '../components/view/nodeList'
import { usePesumi } from './_app'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'

type EditorState = {
  state: 'Node'|'Pages'|'Page';
  index: number
}

const editorStateContext : React.Context<EditorState> = React.createContext({ state: 'Node', index: 0 } as EditorState)
/**
 * 開いたときに新規作成化既存のファイルかを選択する。
 * 新規の場合->プロジェクト名を入力させる
 * 既存のファイルを開く場合は、エクスポートする既存のファイルのフォルダを選択する
 */
const EditPage:NextPage = () => {
  const { pesumiState } = usePesumi()
  const router = useRouter()
  useLayoutEffect(() => {
    if (pesumiState.projectId === undefined || null || 0) {
      alert('ファイルが開かれていません。ホーム画面に戻り、新規作成か既存のファイルを開くかを選択してください')
      router.push('/')
    }
  })
  return (
      <editorStateContext.Provider value={{ state: 'Node', index: 0 }} >
        <Resizable >
                <CommandList />
                <NodeList />
            </Resizable>
      </editorStateContext.Provider>
  )
}

export default EditPage
