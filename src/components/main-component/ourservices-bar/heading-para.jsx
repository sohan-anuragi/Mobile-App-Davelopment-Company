import { useEffect, useRef, useState } from 'react'
import styles from './ourservices-styles/ourservices.module.css'


export default function HeadingPara(){
    const heading = useRef(null)
    const [visible,setVisible] = useState(false)

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
        setVisible(true);
       observer.unobserve(heading.current); 
        }
      })
      observer.observe(heading.current)
        return () => observer.disconnect();
    })

    return(
        <>
        <div className={styles['heading-para-container']}>
          <p className={`${styles['ourservices-para1']} ${visible ? styles['heading2']: styles['']}`}
          ref={heading}>
                          WHAT WE DO
                      </p>
                      <h3 className={`${styles['heading']} ${visible ? styles['heading2']: styles['']}`}
                      >
                          Services we are offer
                      </h3>
                      <p className={`${styles['ourservices-para2']} ${visible ? styles['heading2']: styles['']} `}>
                          As a Mobile App Development Company, we take pride in crafting innovative mobile experiences <br></br> that drive engagement and growth. 
                      </p>  
        </div>
        </>
    )
}