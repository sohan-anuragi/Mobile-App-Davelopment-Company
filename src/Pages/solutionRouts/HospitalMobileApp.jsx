import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function HospitalMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Hospital Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Hospital Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          A well-designed hospital mobile app can transform the way people access healthcare services. At <span className={styles['highlight']}>I-Softinic Technologies</span>, we provide advanced iOS & Android app development solutions that streamline hospital operations and enhance patient care.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Addressing the Challenges of Medical App Development</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>Our Android & iOS app developers ensure full transparency and real-time operational visibility for hospital staff and government health departments.</li>
          <li>All apps are compliant with local and international healthcare regulations, providing safe, secure, and comprehensive solutions.</li>
          <li>Features range from patient booking and health activity tracking to video consultation capabilities.</li>
          <li>Seamless integration for nurses, doctors, clinicians, and patients to enhance workflow and communication.</li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Creating a Digital Flow for Hospitals</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>UX/UI designed for clarity, ease-of-use, and patient-friendly interfaces.</li>
          <li>Secure databases for medical records, health histories, and sensitive patient data.</li>
          <li>Integration with cloud storage, AI, and ML for smarter hospital management.</li>
          <li>Advanced features that improve diagnostic accuracy, convenience, and accessibility.</li>
        </ul>

        <p className={styles['main-paragraph']}>
          Our iOS & Android app development experts have 12+ years of experience building custom hospital apps. Whether you want to digitize your hospital or clinic, our team ensures your mobile solutions are secure, efficient, and feature-rich. Contact us at <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>sales@isoftinc.com</a> to learn more!
        </p>

      </div>
    </>
  );
}
