import styles from './footer-styles/quick-links.module.css'
import QL1 from './ql1'

export default function QuickLinks(){
      return (
        <>
        <div className={styles['quicklinks-container']}>
            <QL1></QL1>
        </div>
        </>
      )
}