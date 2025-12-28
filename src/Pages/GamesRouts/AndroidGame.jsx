import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function AndroidGameDev() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Android Game Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Android Game Development</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          In India, the number of <span className={styles['highlight']}>Android users</span> is far higher than iOS users, which automatically increases the demand for Android-friendly game development. At <span className={styles['highlight']}>I-Softinc Technologies</span>, we create kids-friendly Android games that can also be enjoyed by adults.
        </p>

        <p className={styles['intro-paragraph']}>
          Our experts design games with multiple difficulty levels such as <span className={styles['highlight']}>Easy</span>, <span className={styles['highlight']}>Medium</span>, and <span className={styles['highlight']}>Hard</span>. Every feature is developed carefully to ensure that the final game becomes the first choice of users.
        </p>

        <p className={styles['intro-paragraph']}>
          Whether the target audience is kids or adults, our Android App Development approach keeps everything <b>user-friendly</b>, <b>engaging</b>, and aligned with the latest industry trends. If you are looking for professional <span className={styles['highlight']}>Android Game Development</span>, your search ends here.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Benefits of Hiring I-Softinc for Android Game Development</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>We have highly experienced professionals in Android game development.</li>
          <li>Our experts carry years of rich industry experience.</li>
          <li>We always meet client expectations without disappointment.</li>
          <li>We work 24×7 and are always available for assistance.</li>
          <li>We deliver high-quality game development at affordable prices.</li>
        </ul>

        <p className={styles['main-paragraph']}>
          You just need to call us once — and leave the rest to us. We are here to turn your Android game idea into a massive success.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Contact Us</span>
        </p>

        <p className={styles['main-paragraph']}>
          Reach our experts at
          <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>
            {' '}sales@isoftinc.com
          </a>
          {' '}to build your custom Android game.
        </p>
      </div>
    </>
  );
}