import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = ():JSX.Element => (
  <Layout title="PeSuMi Editorについて">
    <h1>PeSuMi とは</h1>
    <p>This is the about page</p>
    <p>PeSuMi Editorで作成したゲームはPeSuMiシアターに登録することで閲覧できます。
      PeSuMiシアターでは、ビジュアルノベルを連載形式で公開することができ、それぞれの話に対して、無料、有料を設定することができます。その他にも、
      有料の話を購入された場合、総購入金額に手数料15％を引いた金額を製作者の銀行口座に振り込むことができます。
    </p>
    <p>
      <Link href="/">
        <a>ノベルゲームを作成する</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
