import styles from './footer-styles/award-bar.module.css'
import img1 from './footer-img/img1.png'
import img2 from './footer-img/img2.png'
import img3 from './footer-img/img3.png'
import img4 from './footer-img/img4.png'
import img5 from './footer-img/img5.png'
import img6 from './footer-img/img6.png'

export default function AwardBar(){

    const imgs = [img1,img2,img3,img4,img5,img6]

    return (
        <>
        <div className={styles['awardbar-container']}>
          <h3 className={styles['award-heading']}>
            Award Winning App Development Company
          </h3>  
          <p className={styles['award-para']}>
            i-Softinc has won numerous awards as a top app development company and has received recognition as a global business leader.
          </p>
          <div className={styles['award-container']}>
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