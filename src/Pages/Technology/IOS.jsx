import img from './RoutImg/RoutImg.jpg';
import styles from './TechnologyPagesStyle/Technology.module.css';

export default function IosDevelopment() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="IOS App Development" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>IOS App Development</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
     <span className={styles['highlight']}>IOS</span> has become quite popular among developers and users. Its popularity is growing at a rapid pace and there is no doubt in saying that the Android platform has the largest number of users today. Startups, small and large businesses keen to build a robust presence on this platform with an aim to connect with the large number of users.
        </p>

        <p className={styles['main-paragraph']}>
         If you want to have a strong presence on <span className={styles['highlight']}>ios platform</span> then it is important to hire the best <span className={styles['highlight']}>ios App Davlopment company</span>.  <a href="#" className={styles['link-style']}>Aman</a> is one of the most trusted names in providing professional  <a href="#" className={styles['link-style']}>ios app devloment services</a> to its clients dealing in diverse businesses. Since inception, we have been working hard in this sector and have successfully delivered many projects as per the need and requirements of the companies. With a team of highly qualified and skilled developers, we have developed several outstanding Android apps for our prestigious clients. Our team strives to adopt innovative technologies and creative approach to creative powerful apps ensuring to cater the needs of the businesses. We are  <a href="#" className={styles['link-style']}>one-stop solution</a> for a comprehensive <a href="#" className={styles['link-style']}>Android app devlopment services</a>.
        </p>
      </div>
    </>
  );
}