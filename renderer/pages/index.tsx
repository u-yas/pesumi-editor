import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from './styles/index.module.scss'

// 「新しいビジュアルノベルゲームを作成する」、
// 「作成したゲームを閲覧する」、
// 「作成したゲームを配布する」、
// 「このソフトの使い方」の画面をそれぞれ用意する

const IndexPage:NextPage = () => {
  return (
    <Layout title="VstoryMaker">
      <h1 className={styles['pesumi-logo']}>Pesumi Editor<span role="img" aria-label="">👋</span></h1>
      <p>
        <Link href="/about">
          <a className={styles['about-button']}>このソフトの使い方</a>
        </Link>
        <div>
          作成したゲームを編集する
        </div>
      <Link href="/new">
        <a className={styles['new-button']}>新規作成</a>
      </Link>
      <Link href="/deploy">
        <a className={styles['deploy-button']}>VstoryHubに登録する</a>
      </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
