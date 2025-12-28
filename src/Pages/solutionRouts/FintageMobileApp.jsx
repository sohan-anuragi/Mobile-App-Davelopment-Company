import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function FintechMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Fintech Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Fintech Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          The fintech industry is revolutionizing banking and financial services with <span className={styles['highlight']}>mobile app solutions</span>. 
          Android App Design has made it possible to reduce traditional banking needs and improve financial outcomes. 
          <span className={styles['highlight']}>i-Softinc Technologies</span> provides top-notch fintech mobile app development services for startups and established institutions.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>4 Reasons to Invest in Fintech Mobile Apps</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>
            <span className={styles['highlight']}>Lower Service Costs:</span> Automation and app features reduce operational costs, replacing manual staff and minimizing call center expenses.
          </li>
          <li>
            <span className={styles['highlight']}>Go Digital for Security:</span> Enable cashless transactions with secure payment gateways and accept modern payment methods including cryptocurrencies.
          </li>
          <li>
            <span className={styles['highlight']}>Data Security:</span> Cloud-based storage and advanced cybersecurity ensure safe storage and access to sensitive financial data.
          </li>
          <li>
            <span className={styles['highlight']}>Wallet-less Economy:</span> Seamless mobile payment solutions allow users to make transactions efficiently, enhancing customer banking experience.
          </li>
        </ol>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly 
          <a href="tel:+919971731257" className={styles['link-style']}> Android App Development Services </a> 
          tailored to your fintech business needs. Whether it’s iOS, Android, or cross-platform, our expert developers deliver high-performance apps with seamless user experiences, strong functionality, and scalable growth.
        </p>

      </div>
    </>
  );
}
