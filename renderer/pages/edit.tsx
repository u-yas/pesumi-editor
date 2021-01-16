import Layout from '../components/Layout'
import { Resizable } from 're-resizable'
import { BrowserWindow, dialog, ipcMain } from 'electron'
import { useContext } from 'react'

const value = useContext()

const EditPage = (): JSX.Element => {
  return (
    <Layout title="新規作成">
      <Resizable>
        <div>

        </div>
      </Resizable>
    </Layout>
  )
}

export default EditPage
