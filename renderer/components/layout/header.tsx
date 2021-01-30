import Link from 'next/link'
import styles from './styles/header.module.scss'

const Header:React.FC = () => {
  return (
    <>
      <div className={styles['header-wrapper']}>
        <Link href='/'>
          <a className={styles.logo}>
            {/* SVGのアイコンをreact-icon形式で載せる */}
          </a>
        </Link>
        <div className={styles['menu-wrapper']}>
          <Link href='/edit'>
            <a className={styles.menu}>プロジェクトを新規作成する</a>
          </Link>
          <Link href='/deploy'>
            <a className={styles.menu}>PeSuMiに登録する</a>
          </Link>
          <Link href='/about'>
            <a className={styles.menu}>当ソフトについて</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
