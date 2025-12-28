import img from './RoutImg/RoutImg.jpg';
import styles from './TechnologyPagesStyle/Technology.module.css';

export default function XamarinDevelopment() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="Xamarin App Development" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>Xamarin Development</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Xamarin</span> is a popular and widely used cross-platform development framework that helps developers to create multiple mobile platforms by using widespread code reusability. This framework also renders complete access to <a href="#" className={styles['link-style']}>iOS</a> & <a href="#" className={styles['link-style']}>Android</a> APIs. It allows developers to use the same language and data structures across every platform. Startups and large enterprises can simply depend on Xamarin development services to create applications for both platforms within the given timeline, without burning the client's pocket. So if you want to have innovative and feature-rich <span className={styles['highlight']}>Xamarin App Development services and solutions</span> for your business, then I-Softinc is the right door to knock.
        </p>

        <p className={styles['main-paragraph']}>
          We are one of the <span className={styles['highlight']}>leading Xamarin Application Development service providers</span> who always strive to secure the best advantages of this modern framework. We have a team of <span className={styles['highlight']}>Xamarin specialists</span> and developers who use their in-depth knowledge to develop multi-platform web and mobile applications for businesses of all kinds. Hire <span className={styles['highlight']}>Xamarin developers</span> to create secure, scalable, and innovative <span className={styles['highlight']}>iOS and Android mobile apps</span> that will surely take your business to the next level and help you stay ahead in the digital world.
        </p>
      </div>
    </>
  );
}
