import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function GraphicDesign() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="Graphic Design Services" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>Graphic Design Services</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          Are you looking to get your brand noticed? Want to represent your marketing elements with innovative and creative graphic designs? If yes, then you are on the right page.
        </p>

        <p className={styles['main-paragraph']}>
          At <span className={styles['highlight']}>I-Softinc</span>, our team of 160+ experienced designers brings creativity, innovation, and imagination to produce engaging and attractive designs that showcase your brand identity. With deep knowledge and vast experience, our professional designers ensure your message reaches the audience clearly and effectively.
        </p>

        <p className={styles['main-paragraph']}>
          We combine high-resolution images, interactive graphics, and engaging visuals to help visitors instantly understand your business. We give your brand a new identity with powerful logos, memorable symbols, creative icons, and impactful visuals. With the perfect color combinations, meaningful words, and balanced shapes, we make sure your brand connects emotionally.
        </p>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>We Offer the Best</span>
        </p>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly<a href="tel:+919971731257" className={styles['link-style']}>Android App Davlopment</a> Services tailored to your business needs. Whether iOS, Android, or cross-platform — our expert developers create high-performance apps with seamless UX, strong functionality, and scalable growth. Let’s turn your idea into a world-class mobile app.
        </p>
      </div>
    </>
  );
}
