import { NextPage } from 'next'

/**
 *  新規にプロジェクトを作成するときの初期フォームを作成する
 *  フォームに入力をしたら非同期処理でpesumiStateにデータを移せたらeditに移動する
 */
const New:NextPage = () => {
  const baka:Baka = { name: 'bakarayou' }
  console.log(baka.name)
  // プロジェクト名 著者名を入力する
  return (
    <>
    </>
  )
}

export default New
