import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function AutomotiveApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Automotive Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Automotive Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          Mobile apps have revolutionized every industry, and the automotive sector is no exception.
          At <span className={styles['highlight']}>I-Softinc Technologies</span>, our expert
          App Developers build powerful Android & iOS solutions that accelerate business growth,
          enhance customer interaction, and modernize automotive operations.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Software for Showrooms</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Mobile apps give customers a complete virtual tour of your showroom, including all brands and car specifications.
          </li>
          <li>
            Our Android App Development includes smart algorithms to help you monitor daily performance of sales teams.
          </li>
          <li>
            Easily communicate with customers—send updates, reminders, and important notifications instantly.
          </li>
          <li>
            Our Developers of Android apps ensure your showroom runs smoothly and professionally through a centralized system.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Software for Fleet Management</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Cloud-integrated fleet apps allow you to access crucial data anytime, anywhere.
          </li>
          <li>
            Android Application Developers analyze your business model and create tailored functionalities.
          </li>
          <li>
            We build three connected versions—Owner App, Driver App, and Customer App.
          </li>
          <li>
            Cross-platform solutions ensure smooth functionality on both Android and iOS.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Listing Applications</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Build a platform showcasing nearby showrooms and detailed car information.
          </li>
          <li>
            Our iOS App Development ensures proper placement of ratings, reviews, and categories.
          </li>
          <li>
            A strong landing page design boosts platform popularity — and our designers excel at it.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Why Outsource Automotive App Development?</span>
        </p>

        <p className={styles['main-paragraph']}>
          Apps represent your business in the digital market. They must be fast, flawless,
          and visually appealing. Our experienced Ios Application Developers handle everything from design
          to performance upgrades, ensuring your automotive platform operates smoothly and grows consistently.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Start Building Your Automotive App</span>
        </p>

        <p className={styles['main-paragraph']}>
          Reach out to us at  
          <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>
            sales@isoftinc.com
          </a>  
          and let’s develop a powerful automotive mobile app that transforms your business.
        </p>
      </div>
    </>
  );
}
