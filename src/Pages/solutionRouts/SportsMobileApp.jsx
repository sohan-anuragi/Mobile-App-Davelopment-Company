import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function SportMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Sport Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Sport Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Athletes and fans now have new tools to connect with themselves via <span className={styles['highlight']}>mobile apps</span>. 
          At <span className={styles['highlight']}>I-Softinic Technologies</span>, we provide premium-grade iOS & Android app design services to help sporting franchises and institutions connect with millions of fans.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Our Sports App Development Expertise</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>Extensive experience creating sporting apps addressing core fan interests.</li>
          <li>Ability to create apps for news, statistics tracking, and advanced features integration.</li>
          <li>Android, iOS, or HTML apps with features like live streaming, podcasts, in-app purchases, and high-definition content.</li>
          <li>Revenue-based app development services for immediate profitability.</li>
        </ol>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>A Unique Approach to Developing Sporting Apps</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>
            <span className={styles['highlight']}>Marketing Integrations:</span> Special marketing experts help integrate ads, track user behavior, and improve engagement.
          </li>
          <li>
            <span className={styles['highlight']}>Sporting Marketplace:</span> Build apps where fans can buy/sell virtual commodities.
          </li>
          <li>
            <span className={styles['highlight']}>Ticket Booking & Fan Assistance:</span> Advanced ticket booking apps with filters, geolocation, and other features.
          </li>
        </ol>

        {/* Mobile App Services CTA */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly 
          <a href="tel:+919971731257" className={styles['link-style']}> Android & iOS App Development Services </a> 
          tailored to the sports industry. Our expert developers deliver high-performance apps with seamless user experiences, strong functionality, and scalable growth.
        </p>

      </div>
    </>
  );
}
