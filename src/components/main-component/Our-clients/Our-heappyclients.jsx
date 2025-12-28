import styles from './Our-clients-style/Our-clients.module.css'
import img1 from './Our-clients-img/Our-img1.jpg'
import img2 from './Our-clients-img/Our-img2.jpg'
import img3 from './Our-clients-img/Our-img3.png'
import img4 from './Our-clients-img/Our-img4.jpg'
import img5 from './Our-clients-img/Our-img5.jpg'
import img6 from './Our-clients-img/Our-img6.jpg'
import img7 from './Our-clients-img/Our-img7.jpg'
import htmlLogo from './Our-clients-img/html.svg'


export default function OurHappyClients(){

    const imgs = [img1,img2,img3,img4,img5,htmlLogo,img6,img7]

    return (
             <>
                <div className={styles['outer-container']}>
                  <h3 className={styles['heading']}>
                    Our Happy Clients
                  </h3>  
                  <p className={styles['para']}>
                    Global Companies That Trust I-Softinc as Their Mobile App Development Partner
                  </p>
                  <div className={styles['client-container']}>
                    {imgs.map((img, index) => (
                    <div key={index} className={styles['img-container']}>
                        <img src={img} className={styles['imgs']}></img>
                    </div>
                  ))}
        </div>

                 <div className={styles['btn-container']}>
                            <button className={styles['btn']}>
                                View All Clients </button>
                            </div>
                </div> 
                </>
    )
}