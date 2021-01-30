import { NextPage } from 'next'
import { useState } from 'react'
import { usePesumi } from './_app'

/**
 * プレビューボタンが押されたら、指定された場面からゲームを開始する。
 * 進むボタンと戻るボタンを用意する
 */
type Props = {
  nodeIndex: number // プレビュー開始する場面のindex
  pageIndex: number
}
const PreviewPage:NextPage<Props> = (props:Props) => {
  const { pesumiState } = usePesumi()
  // ページを進めたり戻したりするのに使うCounter
  const [counter, addCounter] = useState(0)
  // ゲームをストップするかどうかの状態。trueになればプレビュー画面を閉じる
  const [isStop, setIsStop] = useState(false)
  // 指定した場面を取り出す
  return (
      <div>
        {/* 戻るボタンと進むボタンを作る */}
      </div>
  )
}

export default PreviewPage
