import styles from './Our-technologies-style/Our-technologies.module.css'
import img1 from './Our-technologies-img/frontend1.svg'
import img2 from './Our-technologies-img/frontend2.svg'
import img3 from './Our-technologies-img/frontend3.svg'
import img4 from './Our-technologies-img/frontend4.svg'
import img5 from './Our-technologies-img/frontend5.svg'
import img6 from './Our-technologies-img/frontend6.webp'


export default function Frontend(){

    const imgs = [img1,img2,img3,img4,img5,img6]

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