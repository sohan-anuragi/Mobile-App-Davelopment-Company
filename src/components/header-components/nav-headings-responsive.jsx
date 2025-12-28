import { useContext, useState } from 'react'
import ArrowIcon from './arrow-icon'
import { headerDataProvider } from './headerstore'
import styles from './header-styles/navbar-container.module.css'
import { IoMenu } from "react-icons/io5";
import DropBox from './dropbox';

export default function NavHeadingsResponsive(){

    const dropBoxDataFromContext = useContext(headerDataProvider)
    const hoverEnterFromContext = dropBoxDataFromContext.hoverEnter
    const hoverLeaveFromContext = dropBoxDataFromContext.hoverLeave

    const headings = ['Technology','Services','Solutions','Softwere','Game Zone']
    const [activeIndex,setActiveIndex] = useState(null)
    
    const handleHoverEnter = (heading,index) => {
        setActiveIndex(index)
        hoverEnterFromContext(heading)
    }

    const handleHoverLeave = (heading) => {
        setActiveIndex(null)
        hoverLeaveFromContext(heading)
    }

    return (
        <>
        <div className={styles['headings-container-responsive']} >
         {headings.map((heading, index) => (
             <div className={styles['heading-container']}
             onMouseEnter={() => handleHoverEnter(heading,index)}
             onMouseLeave={() => handleHoverLeave(heading)}
             >
                <div>
                   <span className={styles['heading-span']}>{heading}</span>
                <ArrowIcon toggle={activeIndex===index}></ArrowIcon> 
                    </div>
                {activeIndex === index && <DropBox></DropBox>}
             </div>
         ))}
         <div className={styles['heading-container']}>
                <span className={styles['heading-span']}>Our Work</span>
         </div>
        </div>
          
         </>
    )
}