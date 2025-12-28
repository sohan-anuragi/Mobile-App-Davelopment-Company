import styles from './header-styles/contactnumb.module.css'
import { FaPhone } from "react-icons/fa6";

export default function ContactNumb(){
    return  <div className={`${styles['contact-numb']}`}>
                <a href='#' className={`${styles['contact-numb']}`} ><FaPhone className={`${styles['phone-icon']}`} /> +91 764-982-7068</a>
               </div>
}