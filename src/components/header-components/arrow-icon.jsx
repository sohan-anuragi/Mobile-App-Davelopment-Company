import styles from './header-styles/navbar-container.module.css'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"

export default function ArrowIcon({toggle}){
    return (
        <>
        <button className={styles['arrow-btn']}>
            { toggle ? <IoIosArrowUp /> : <IoIosArrowDown /> }
        </button>
        </>
    )
}