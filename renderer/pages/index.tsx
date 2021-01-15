import Link from 'next/link'
import Layout from '../components/Layout'

// 「新しいビジュアルノベルゲームを作成する」、
// 「作成したゲームを閲覧する」、
// 「作成したゲームを配布する」、
// 「このソフトの使い方」の画面をそれぞれ用意する
const IndexPage = ():JSX.Element => {
  return (
    <Layout title="VstoryMaker">
      <h1>VstoryMaker<span role="img" aria-label="">👋</span></h1>
      <p>
        <Link href="/about">
          <a>このソフトの使い方</a>
        </Link>
      <Link href="/create">
        <a>新しくゲームを作成する</a>
      </Link>
      <Link href="/view">
        <a>作成したゲームを編集する</a>
      </Link>
      <Link href="/deploy">
        <a>VstoryHubに登録する</a>
      </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
