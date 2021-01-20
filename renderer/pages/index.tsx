import { remote } from 'electron'
import { readFile } from 'fs'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import styles from './styles/index.module.scss'
import { usePesumi } from './_app'
import * as Type from '../utils/type'
// 「新しいビジュアルノベルゲームを作成する」、
// 「作成したゲームを閲覧する」、
// 「作成したゲームを配布する」、
// 「このソフトの使い方」の画面をそれぞれ用意する

const IndexPage:NextPage = () => {
  const router = useRouter()
  const { pesumiDispatch } = usePesumi()
  return (
      <div>
        <h1 className={styles['pesumi-logo']}>Pesumi Editor</h1>
        <p>
          <Link href="/new"><a className={styles['new-button']}>新規作成</a>
          </Link>
        </p>
        <p>
          <button className={styles.edit} onClick={() => {
            const dialog = remote.dialog
            dialog.showOpenDialog(remote.getCurrentWindow(), {
              filters: [
                { name: 'JSON File', extensions: ['json'] }
              ],
              properties: ['openFile']
            }).then(result => {
              if (result.filePaths.length !== 0) {
                // ファイル読み込み
                readFile(result.filePaths[0], { encoding: 'utf-8' }, (err, data) => {
                  if (err) {
                    alert(err)
                  } else {
                    // parseしたJSON形式がPage型に一致しているかどうかを調べて、一致していたらdispatchする
                    try {
                      const dispatchProject:Type.Project = JSON.parse(data)
                      pesumiDispatch({ command: 'init', payloadProject: dispatchProject })
                      router.push('/edit')
                    } catch (err) {
                      // 読み込んだJSONファイルがproject型に対応していないのでエラーが出る
                      alert(err)
                    }
                  }
                })
              }
            })
          }}
          >
            編集中のファイルを開く
            </button>
        </p>
        <p>
          <Link href="/deploy"><a className={styles['deploy-button']}>登録する</a>
          </Link>
        </p>
        <p>
          <Link href="/about"><a className={styles['about-button']}>このソフトの使い方</a>
          </Link>
        </p>
      </div>
  )
}

export default IndexPage
