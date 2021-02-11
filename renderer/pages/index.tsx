import { ipcRenderer } from 'electron'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import styles from './styles/index.module.scss'
import { usePesumi, folderContext } from './_app'
import * as Type from '../interfaces/type'
import { useContext, useState } from 'react'
// 「新しいビジュアルノベルゲームを作成する」、
// 「作成したゲームを閲覧する」、
// 「作成したゲームを配布する」、
// 「このソフトの使い方」の画面をそれぞれ用意する

const IndexPage:NextPage = () => {
  const router = useRouter()
  const { pesumiDispatch } = usePesumi()
  const [, setFolderPathState] = useState(useContext(folderContext))
  return (
      <div>
        <h1 className={styles['pesumi-logo']}>Pesumi Editor</h1>
        <p>
          <Link href="/new"><a className={styles['new-button']}>新規作成</a>
          </Link>
        </p>
        <p>
          <button className={styles.edit} onClick={() => {
            // プロジェクトフォルダーのパスを取得する
            ipcRenderer.on('openProjectFolder', (_event:Event, value:{folderPath:string, projectJsonFile:Type.Project}) => {
              try {
                pesumiDispatch({ action: 'init', payloadProject: value.projectJsonFile })
                setFolderPathState(value.folderPath)
                router.push('/edit')
              } catch (err) {
                console.log(`フォルダが正常に読み取れませんでした。\nエラーコード:${err}`)
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
