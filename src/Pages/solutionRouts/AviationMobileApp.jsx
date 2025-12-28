import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function AviationMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Aviation Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Aviation Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          The aviation industry is complex, and managing flight plans, autopilot systems, air traffic control, and maintenance routines requires precision. At <span className={styles['highlight']}>I-Softinc Technologies</span>, our talented Android & iOS app developers create advanced solutions to enhance efficiency, accuracy, and safety.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>3 Ways Our Aviation Apps Drive Industry Growth</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li><strong>Data Accuracy:</strong> Minimize human errors and ensure complete accuracy in data entry. Our apps incorporate logical parameters and automated filters to prevent mistakes that could impact passenger safety or operational efficiency.</li>
          <li><strong>Timely Maintenance:</strong> Monitor complex aircraft maintenance processes efficiently. Access maintenance history, estimate upcoming maintenance, and reduce compliance burdens with our iPhone & Android app solutions.</li>
          <li><strong>Prevent Multiple Data Entry Errors:</strong> Enter data once, and let our apps automatically reflect it across all associated charts and records. This prevents redundant entries and ensures consistent and accurate reporting across your aviation operations.</li>
        </ul>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Unlocking Automation:</span> Our iOS and Android application developers at <span className={styles['highlight']}>I-Softinc Technologies</span> create aviation apps tailored to your business requirements. Automation and precise app design help the aviation industry achieve higher efficiency and safety. Discuss your requirements with us, and we will develop the perfect aviation app for your operations.
        </p>

        <p className={styles['main-paragraph']}>
          Contact our experts today at <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>sales@isoftinc.com</a> to elevate your aviation business with premium mobile app solutions!
        </p>

      </div>
    </>
  );
}
