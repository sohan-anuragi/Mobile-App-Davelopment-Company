import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function GamingMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Gaming Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Gaming Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Do you have a dream game in mind? At <span className={styles['highlight']}>I-Softinic Technologies</span>, we bring your game concept to life using the latest Android & iOS technologies. Our gaming mobile app development teams create dynamic and immersive experiences, enhancing gameplay with high-definition visuals, innovative features, and exciting mechanics.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Revenue-Based Gaming Solutions</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our developers are masters at creating monetization strategies that let you earn revenue directly from players. We build unforgettable gaming experiences that ensure brand recognition and consistent revenue growth.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Cross-Platform Game Development</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>
            <span className={styles['highlight']}>Games that Stand Out:</span> Specialized features for Android & iOS platforms to ensure top-quality gaming experiences on all devices.
          </li>
          <li>
            <span className={styles['highlight']}>Advanced Features:</span> Perfect integration of gameplay, design, audio, and graphics for a seamless experience.
          </li>
          <li>
            <span className={styles['highlight']}>Experience and Quality:</span> 12+ years of expertise in action, adventure, arcade, racing, quiz, and multiplayer games.
          </li>
        </ol>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Leverage Our Programming Excellence</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our developers use Android SDK, Java, Open GL, Unity, and Unreal Engine to deliver games with industry-leading UI/UX, audio, and graphics. Each game undergoes extensive testing and quality assurance to ensure flawless performance across all devices. Partner with our masters of game and app development to bring your gaming ideas to life.
        </p>

        {/* Mobile App Services CTA */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly <a href="tel:+919971731257" className={styles['link-style']}>Android & iOS Gaming Apps</a> tailored to your requirements. Our developers ensure high-performance games with seamless user experience, strong functionality, and scalable growth.
        </p>

      </div>
    </>
  );
}
