import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function RetailMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Retail Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Retail Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          The retail industry is transforming rapidly with the adoption of <span className={styles['highlight']}>mobile app solutions</span>. 
          From streamlining store management to enhancing customer experience, retail apps are becoming indispensable tools. 
          <span className={styles['highlight']}>i-Softinc</span> provides custom retail mobile app development services in the USA and India for global clients.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Key Features of Retail Mobile Apps</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>
            <span className={styles['highlight']}>Contactless Payment:</span> Enable payments via mobile wallets like Google Pay or Apple Pay, and use RFID technology for smooth transactions.
          </li>
          <li>
            <span className={styles['highlight']}>Customer Loyalty Tracking:</span> Track loyal customers, offer rewards, discounts, or exclusive offers to maintain and enhance customer retention.
          </li>
          <li>
            <span className={styles['highlight']}>Stock Management:</span> Monitor inventory directly from the app, receive alerts for low stock, and manage products efficiently in real-time.
          </li>
        </ol>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly 
          <a href="tel:+919971731257" className={styles['link-style']}> Android App Development Services </a> 
          tailored to your retail business needs. Whether it’s iOS, Android, or cross-platform, our expert developers create high-performance apps that deliver seamless user experiences, strong functionality, and scalable growth.
        </p>

      </div>
    </>
  );
}
