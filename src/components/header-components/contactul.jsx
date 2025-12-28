import fbImg from './img/fb.svg';
import instaImg from './img/insta.svg'
import linkedImg from './img/linked.svg'
import youtubImg from './img/youtub.svg'
import xImg from './img/x.svg'
import styles from './header-styles/contactul.module.css'

export default function ContactUl(){

    return  <ul className={`${styles['contact-ul']}`} >
             <li><a href='#'className={`${styles['contact-li']}`} >
                <img src={fbImg} alt="Facebook" className={`${styles['fb']}`} /> 
                </a></li>
                 <li><a href='#'className={`${styles['contact-li']}`} >
                <img src={instaImg} alt="Facebook" className={`${styles['fb']}`} />    
                </a></li>
    
                 <li><a href='#'className={`${styles['contact-li']}`} >
                <img src={linkedImg} alt="Facebook" className={`${styles['fb']}`} />
                </a></li>
    
                 <li><a href='#'className={`${styles['contact-li']}`} >
                <img src={xImg} alt="Facebook" className={`${styles['fb']}`} />
                </a></li>
                 <li><a href='#'className={`${styles['contact-li']}`} >
                <img src={youtubImg} alt="Facebook" className={`${styles['fb']}`} />  
                </a></li>
                </ul>
}