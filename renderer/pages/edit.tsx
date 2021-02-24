import electron from 'electron'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { Resizable } from 're-resizable'
import React, { useLayoutEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Settings from '../components/edit/setting'
import View from '../components/edit/view'
import { usePesumi } from '../utils/customHooks/usePesumi'
import * as Type from '../interfaces/projectType'

const ipcRenderer = electron.ipcRenderer || false
/**
 * 開いたときに新規作成化既存のファイルかを選択する。
 * 新規の場合->プロジェクト名を入力させる
 * 既存のファイルを開く場合は、エクスポートする既存のファイルのフォルダを選択する
 */
const EditPage:NextPage = () => {
  const { pesumiState, pesumiDispatch } = usePesumi()
  const router = useRouter()

  useLayoutEffect(() => {
    if (pesumiState.projectName === '') {
      // プロジェクトフォルダーのパスを取得する
      // ipcRenderを使えるようにする
      if (ipcRenderer) {
        (async () => {
          const value:{value:string, projectJsonFile:Type.Project} | null = await ipcRenderer.invoke('openProjectFolder', '')
          try {
            // value!==nullのときは、つまりダイアログでキャンセルが押された時の処理
            if (value !== null) {
              pesumiDispatch({ type: 'init', payloadProject: value.projectJsonFile })
              // 読み込んだプロジェクトフォルダーのpathをelectron-storeに保存し、永続化する
            } else {
              router.push('/')
            }
          } catch (err) {
            console.log(`フォルダが正常に読み取れませんでした。\nエラーコード:${err}`)
          }
        })()
      }
    } else {
      alert('pesumiStateはnullじゃなかった' + pesumiState.projectName)
    }
  })

  const onDragEnd = (result:DropResult) => {
    const { source, destination } = result
    if (!result.destination) {
      return
    }

    switch (source.droppableId) {
      case destination?.droppableId:
        pesumiDispatch({
          type: 'init'
        })
    }

    if (result.type === 'NODE') {
      console.log(result)
      // const chapter = reorder(
      //   pesumiState.chapter,
      //   result.source.index,
      //   result.destination.index
      // )
      // pesumiDispatch({action:'init',payloadNode: })
    }
  }

  return (
        <Resizable >
            <DragDropContext onDragEnd={onDragEnd}>
              {/* コマンドリスト、サイドバーみたいな感じで表示する */}
              <Settings />
              {/* コマンドからのドロップ先、ドロップしたらコンテンツに応じてフォームが表示され、そこに入力をする */}
                <View chapters={pesumiState.chapter} />
            </DragDropContext>
          </Resizable>
  )
}

export default EditPage
