import type { Page } from '../../utils/type'
import styles from './styles/pages.module.scss'
const Pages:React.FC<Page> = (props:Page) => {
  return (
    <div className={styles['pages-wrapper']}>
      <div className={styles['command-wrapper']}>
        <div className={styles.command}>
          {props.command}
        </div>
        <div className={styles.option}>
          {props.option}
        </div>
        <div className={styles.content}>
          {props.content}
        </div>
      </div>
    </div>
  )
}

export default Pages
