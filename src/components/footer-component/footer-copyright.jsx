import styles from './footer-styles/quick-links.module.css'

export default function CopyRight(){
    return (
        <>
        <div className={styles['copyright-container']}>
            <p className={styles['copyright-para']}>
                © copyright 2025 by i-softinc, all rights reserved
            </p>
            <a href="#" className={styles['copyright-a']}>Privacy Policy |</a>
            <a href="#" className={styles['copyright-a']}>Terms & Condition |</a>
            <a href="#" className={styles['copyright-a']}>Disclaimer |</a>
        </div>
        </>
    )
}