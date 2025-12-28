import styles from './Our-clients-style/Our-clients.module.css'
import Img from './Our-clients-img/Our-clients-img.jpg'
import { useEffect, useRef, useState } from 'react'

export default function OurClients1(){

    const myRef = useRef(null)
    const [visible, setVisible] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if(entry.isIntersecting){
                setVisible(true)
            }
        })
        observer.observe(myRef.current)
    })

    return (
        <>
        <div className={styles['our-clients1-container']}>
            <div className={styles['heading-para-container']}>
            <h3 className={`${styles['heading1']} ${visible ? styles['heading2']:''}`}
             ref={myRef}
            >
                We Are I-Softinc - Crafting <br></br> Innovative Mobile App Solution
            </h3>
            <p className={`${styles['para1']} ${visible ? styles['heading2']:''}`}
             ref={myRef}
            >
                We craft innovative mobile app solutions tailored to meet your business needs.<br></br> As a top mobile app development company, we turn ideas into powerful applications.
            </p>
            <div className={styles['btn-container']}>
            <button className={styles['btn']}>
                Discover More
            </button>
            </div>
            
            </div>
          <img src={Img} alt='img' className={styles['img']}>
          </img>
        </div>
        </>
    )
}