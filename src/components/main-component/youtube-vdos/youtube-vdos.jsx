import styles from './youtube-vdos-style/youtube-vdos.module.css'
import CommentSlider from './swiper.jsx'
import ReactPlayer from 'react-player';

export default function YoutubeVdos(){

    return (
             <>
                <div className={styles['outer-container']}>
                  <h3 className={styles['heading']}>
                    What Our Clients Say!
                  </h3>  
                  <p className={styles['para']}>
                    Hear from our 200+ satisfied clients about their experiences and success stories with i-Softinc
                  </p>
                  <div className={styles['client-container']}>
                    <CommentSlider></CommentSlider>
               </div>
                </div> 
                </>
    )
}