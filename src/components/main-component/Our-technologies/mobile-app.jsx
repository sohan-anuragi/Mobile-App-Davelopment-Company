import styles from './Our-technologies-style/Our-technologies.module.css'
import img1 from './Our-technologies-img/mobile1.png'
import img2 from './Our-technologies-img/mobile2.svg'
import img3 from './Our-technologies-img/mobile3.svg'
import img4 from './Our-technologies-img/mobile4.png'
import img5 from './Our-technologies-img/mobile5.png'
import img6 from './Our-technologies-img/mobile6.png'
import img7 from './Our-technologies-img/mobile7.png'
import img8 from './Our-technologies-img/mobile8.png'

export default function MobileApp(){

    const imgs = [img1,img2,img3,img4,img5,img6,img7,img8]

    return (
             <>
                <div className={styles['outer-container']}>
        
                  <div className={styles['client-container']}>
                    {imgs.map((img, index) => (
                    <div key={index} className={styles['img-container']}>
                        <img src={img} className={styles['imgs']}></img>
                    </div>
                  ))}
                 </div>

                </div> 
                </>
    )
}