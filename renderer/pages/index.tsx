import { NextPage } from 'next'
import Link from 'next/link'
import styles from './styles/index.module.scss'

// 「新しいビジュアルノベルゲームを作成する」、
// 「作成したゲームを閲覧する」、
// 「作成したゲームを配布する」、
// 「このソフトの使い方」の画面をそれぞれ用意する

const IndexPage:NextPage = () => {
  return (
      <div>
        <h1 className={styles['pesumi-logo']}>Pesumi Editor</h1>
        <p>
          <Link href="/about"><a className={styles['about-button']}>このソフトの使い方</a>
          </Link>
        </p>
        <p>
          <Link href='/edit'><a className={styles.edit}>編集する</a>
          </Link>
        </p>
        <p>
          <Link href="/new"><a className={styles['new-button']}>新規作成</a>
          </Link>
        </p>
        <p>
          <Link href="/deploy"><a className={styles['deploy-button']}>登録する</a>
          </Link>
        </p>
      </div>
  )
}

export default IndexPage
