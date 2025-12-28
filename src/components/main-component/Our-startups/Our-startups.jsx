import styles from './Our-startups-style/Our-startups.module.css'
import img1 from './Our-startups-img/startup2.png'
import img2 from './Our-startups-img/startup3.png'
import img3 from './Our-startups-img/startup4.png'
import img4 from './Our-startups-img/startup5.svg'
import img5 from './Our-startups-img/startup6.png'
import img6 from './Our-startups-img/startup7.png'
import img7 from './Our-startups-img/startup8.png'
import img8 from './Our-startups-img/startup9.png'






export default function OurStartups(){

    const imgs = [img1,img2,img3,img4,img5,img6,img7,img8]

    return (
             <>
                <div className={styles['outer-container']}>
                  <h3 className={styles['heading']}>
                    Growing Tech Startups Built with Us
                  </h3>  
                  
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