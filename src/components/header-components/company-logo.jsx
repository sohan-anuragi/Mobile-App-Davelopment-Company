import styles from './header-styles/navbar-container.module.css'
import logoImg from './img/aman-logo2.svg'

export default function CompanyLogo(){
    return <a href='/' className={`${styles['navbar-logo']}`}>
       <img src={logoImg} alt='Aman' className={`${styles['logo-img']}`}></img>
    </a>
}