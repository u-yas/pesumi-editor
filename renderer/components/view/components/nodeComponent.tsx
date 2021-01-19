import { useState } from 'react'
import styles from '../styles/node.module.scss'
import type { Node, Page } from '../../../utils/type'

type Props = {
  node: Node
  key: number
}
/**
 * クリックしたときnodeが展開して、ページの配列とテキストが表示されるようにする
 * @param props
 */
const NodeComponent:React.FC<Props> = (props: Props) => {
  // クリックしたとき
  const [condition, setCondition] = useState(false)
  return (
    <>
    {
      condition
        ? <div className={styles['pages-wrapper']}
                    onClick={() => setCondition(false)}
                    onKeyPress={() => setCondition(false)}
                    role='button'
                    tabIndex={0} >
              <ul style={{ listStyle: 'none' }}>
              {props.node.page.map((value:Page, index:number) => {
                return (
                    <li key={index}>
                      <div className={styles.command}>
                        {value.command}
                      </div>
                      <div className={styles.option}>
                        {value.option}
                      </div>
                      <div className={styles.content}>
                        {value.content}
                      </div>
                    </li>
                )
              })
              }
            </ul>
          </div>
        : <div className={styles['node-wrapper']}
                    onClick={() => setCondition(true)}
                    onKeyPress={() => setCondition(true)}
                    role='button'
                    tabIndex={0} >
            <div className={styles.label}>
              {props.node.label}
            </div>
          </div>
    }
    </>
  )
}

export default NodeComponent
