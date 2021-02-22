import Link from 'next/link'

const Header:React.FC = () => {
  return (
    <>
      <div>
        <Link href='/'>
          <a>
            {/* SVGのアイコンをreact-icon形式で載せる */}
          </a>
        </Link>
        <div>
          <Link href='/edit'>
            <a>プロジェクトを新規作成する</a>
          </Link>
          <Link href='/deploy'>
            <a>PeSuMiに登録する</a>
          </Link>
          <Link href='/about'>
            <a>当ソフトについて</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
