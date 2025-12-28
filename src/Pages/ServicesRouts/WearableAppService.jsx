import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function WearableAppSolutions() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Wearable App Solutions"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Wearable App Solutions</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          In today’s fast-moving world, <span className={styles['highlight']}>wearable technology</span> is evolving rapidly.
          From tracking temperature and heart rates to entertainment and business automation —
          wearables have become an essential part of modern life.
        </p>

        <p className={styles['main-paragraph']}>
          Wearable app solutions make life easier for fitness enthusiasts and entrepreneurs.
          By integrating <span className={styles['highlight']}>IoT</span>, wearable technology plays a crucial role in multiple industries.
          Our expert team delivers customized wearable applications tailored to your specific business needs.
        </p>

        <p className={styles['main-paragraph']}>
          Our developers ensure smooth performance across devices like
          <span className={styles['highlight']}> Apple iWatch</span>,
          <span className={styles['highlight']}> Android Wear</span>,
          and <span className={styles['highlight']}>Google Glasses</span>.
          As a trusted leader, we provide scalable wearable app solutions for diverse sectors.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Industries We Serve</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>IoT-based Applications</li>
          <li>Sports</li>
          <li>Entertainment</li>
          <li>Medical</li>
          <li>AR & VR</li>
          <li>Utility</li>
          <li>Enterprise</li>
          <li>Education</li>
          <li>iOS & Android Wearables</li>
          <li>Health & Fitness</li>
          <li>iPhone & iPad Wearables</li>
          <li>Gaming</li>
        </ol>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful and user-friendly
          <a href="tel:+919971731257" className={styles['link-style']}>
            {' '}Android App Development Services{' '}
          </a>
          tailored to your business goals. Whether iOS, Android, or cross-platform —
          our expert team ensures smooth performance and scalable solutions.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>
            Benefits of Choosing I-Softinc for Wearable App Solutions
          </span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>Low Development & Operational Cost</li>
          <li>Highly Proficient Workforce</li>
          <li>Guaranteed Client Satisfaction</li>
          <li>Cost-effective & Efficient Solutions</li>
          <li>Innovative and Time-tested Approaches</li>
        </ol>

      </div>
    </>
  );
}
