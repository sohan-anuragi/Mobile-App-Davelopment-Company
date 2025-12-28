import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function TaxiMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Taxi Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Taxi Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          A high-quality mobility app can help you manage your fleet efficiently. With <span className={styles['highlight']}>I-Softinic Technologies</span>, create a custom taxi mobile app for your business that matches top iOS and Android standards. Our front-end UI developers design user-friendly apps that enhance customer experience and operational efficiency.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Key Features of Taxi Mobile Apps</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li><span className={styles['highlight']}>Geolocations:</span> Track vehicles in real-time and gain full control over fleet movement.</li>
          <li><span className={styles['highlight']}>Ease of Use:</span> Simplified pick-up and drop-off options for customers.</li>
          <li><span className={styles['highlight']}>Live Tracking:</span> Allow users to view real-time ride status through iOS & Android apps.</li>
          <li><span className={styles['highlight']}>Convenience:</span> Customers can select vehicles, book/cancel rides, and communicate with support directly.</li>
        </ol>

        <p className={styles['main-paragraph']}>
          Taxi booking apps provide essential services to thousands of users. Our iOS & Android experts help businesses deliver real-life solutions to transportation challenges with user-friendly passenger and driver apps.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Advanced Taxi App Solutions</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li><span className={styles['highlight']}>Incredible User Interfaces:</span> Create responsive, feature-rich interfaces including in-app chat and call functionalities.</li>
          <li><span className={styles['highlight']}>Constant Updates:</span> Long-term support and improvements to ensure your app stays modern and efficient.</li>
          <li><span className={styles['highlight']}>New-Age App:</span> Using Bootstrap, PHP, AngularJS, and modern frameworks, we deliver unique and advanced taxi apps.</li>
        </ol>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Premium-Quality Mobile Taxi Apps</span>
        </p>

        <p className={styles['main-paragraph']}>
          Companies providing car rentals or ride-sharing services benefit the most from our Android and iOS app development. We ensure top-quality, cost-effective solutions. Partner with our expert taxi app developers to launch your premium mobility app today.
        </p>

        {/* Mobile App Services CTA */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly <a href="tel:+919971731257" className={styles['link-style']}>Android & iOS Taxi Apps</a> tailored to your business needs. Our developers ensure high-performance apps with seamless user experience, strong functionality, and scalable growth.
        </p>

      </div>
    </>
  );
}
