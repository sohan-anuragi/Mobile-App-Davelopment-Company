import styles from './header-styles/navbar-container.module.css'
import { FaPhone } from "react-icons/fa6";

export default function ContactBox(){
  return (
  <>
    <div className={styles['contact-box']}>
      <h5 className={styles['contact-heading']}>
        Contact Us
      </h5>
      <div className={styles['contactnum-container']}>
        <div className={`${styles['contact-container2']}`}>
          <a href='#' className={`${styles['contact-numb2']}`}>
            <FaPhone className={`${styles['phone-icon']}`} /> +91 63927 02800
          </a>
          <h6 className={styles['h6']}>(INDIA)</h6>
        </div>

        <div className={`${styles['contact-container2']}`}>
          <a href='#' className={`${styles['contact-numb2']}`}>
            <FaPhone className={`${styles['phone-icon']}`} />+91 (764)9827068
          </a>
          <h6 className={styles['h6']}>(USA)</h6>
        </div>

        <div className={`${styles['contact-container2']}`}>
          <a href='#' className={`${styles['contact-numb2']}`}>
            <FaPhone className={`${styles['phone-icon']}`} /> +91 7649827068
          </a>
          <h6 className={styles['h6']}>(24*7)</h6>
        </div>

         <div className={`${styles['contact-container2']}`}>
          <a href='#' className={`${styles['contact-numb2']}`}>
            <FaPhone className={`${styles['phone-icon']}`} /> Sales@Aman.com
          </a>
          <h6 className={styles['h6']}>(24*7)</h6>
        </div>

        <div className={styles['heading-containerr']}>
                        <span className={styles['heading-spann']}> Get Quote</span>
                 </div>

      </div>
    </div>
  </>
)

}