import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function MarketplaceMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Marketplace Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Marketplace Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Secure payments, push notifications, swift checkout processes, and e-commerce integration are the hallmarks of high-quality marketplace mobile apps. With <span className={styles['highlight']}>I-Softinic Technologies</span>, create dynamic Android & iOS apps to tap into untapped marketplaces, regardless of your industry.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Key Features of Marketplace Apps</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li><span className={styles['highlight']}>Unified Access:</span> Connect users easily with the best sellers and services in your niche.</li>
          <li><span className={styles['highlight']}>Full Marketplace Functionality:</span> Live order tracking, contact sellers, and maximum convenience for customers.</li>
          <li><span className={styles['highlight']}>Revenue-Based Services:</span> Enable multiple payment gateways to enhance your revenue-generating capabilities.</li>
          <li><span className={styles['highlight']}>Cross-Device Support:</span> Android and iOS apps with equally robust features and seamless navigation.</li>
        </ol>

        <p className={styles['main-paragraph']}>
          Every marketplace app must evolve with changing tech trends. Our iOS & Android developers stay ahead with expertise in C++, JavaScript, React, Angular.js, and other modern tools, delivering bug-free, feature-rich apps.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Advanced Features We Integrate</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>Social logins and account integrations</li>
          <li>Voice-assisted search functionality</li>
          <li>Reviews & ratings for sellers and services</li>
          <li>Google Maps integration for location-based services</li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Best iOS & Android App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          Marketplace apps need to be dynamic, live, and operational 24/7. Our team ensures your app is optimized for mobile payments, e-wallets, and superior UI & UX design. Ready to launch your marketplace app? Contact our iOS & Android developers at <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>sales@isoftinc.com</a> now!
        </p>

        {/* Mobile App Services CTA */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, our expert developers create high-performance marketplace apps for Android and iOS, ensuring seamless user experience, strong functionality, and scalable growth for your business.
        </p>

      </div>
    </>
  );
}
