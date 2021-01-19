import { NextPage } from 'next'
import Layout from '../components/Layout'
import { usePesumi } from './edit'
import NodeList from '../components/view/nodeList'
/**
 * node形式でシナリオの構造を可視化する
 */
const ViewPage:NextPage = () => {
  const { pesumiState } = usePesumi()
  return (
    <Layout title={pesumiState.projectName}>
      <NodeList/>
    </Layout>
  )
}

export default ViewPage
