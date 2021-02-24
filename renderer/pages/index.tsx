import electron from 'electron'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import * as Type from '../interfaces/projectType'
import { usePesumi } from '../utils/customHooks/usePesumi'

// 「新しいビジュアルノベルゲームを作成する」、
// 「作成したゲームを閲覧する」、
// 「作成したゲームを配布する」、
// 「このソフトの使い方」の画面をそれぞれ用意する

const IndexPage:NextPage = () => {
  const router = useRouter()
  const { pesumiDispatch } = usePesumi()

  return (
      <div>
        <h1>Pesumi Editor</h1>
        <p>
          <Link href="/new"><a >新規作成</a>
          </Link>
        </p>
        <p>
          <button onClick={() => {
            // プロジェクトフォルダーのパスを取得する
            // ipcRenderを使えるようにする
            const ipcRenderer = electron.ipcRenderer || false
            if (ipcRenderer) {
              ipcRenderer.on('openProjectFolder', (_event:Event, value:{folderPath:string, projectJsonFile:Type.Project}) => {
                try {
                  pesumiDispatch({ type: 'init', payloadProject: value.projectJsonFile })
                  // 読み込んだプロジェクトフォルダーのpathをelectron-storeに保存し、永続化する
                  router.push('/edit')
                } catch (err) {
                  console.log(`フォルダが正常に読み取れませんでした。\nエラーコード:${err}`)
                }
              })
            }
          }}
          >
            編集中のファイルを開く
            </button>
        </p>
        <p>
          <Link href="/deploy"><a>登録する</a>
          </Link>
        </p>
        <p>
          <Link href="/about"><a>このソフトの使い方</a>
          </Link>
        </p>
      </div>
  )
}

export default IndexPage
