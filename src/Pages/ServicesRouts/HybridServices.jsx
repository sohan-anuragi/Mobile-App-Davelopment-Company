import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function HybridAppDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Hybrid Application Development Services"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Hybrid Application Development Services</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Hybrid Application Development</span> combines the best of both web and native apps,
          enabling developers to use technologies like JavaScript, HTML5, and CSS3 to build flexible and scalable
          mobile applications. With the ability to reuse code across multiple platforms, hybrid apps significantly
          reduce cost and development time — while ensuring smooth access to device features.
        </p>

        <p className={styles['main-paragraph']}>
          Hybrid apps can be easily downloaded from <span className={styles['highlight']}>Apple App Store</span> and 
          <span className={styles['highlight']}> Google Play Store</span>. In today's technology-driven era, hybrid app development helps businesses stay
          ahead of the competition with high-performance, cross-platform solutions.
        </p>

        <p className={styles['main-paragraph']}>
          With a strong focus on innovation and quality, our skilled team with 10+ years of experience delivers
          robust, high-performing, and feature-rich hybrid applications. From planning to deployment, we ensure
          timely delivery and seamless execution.
        </p>

        {/* Replacing H2 with highlight */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Our Hybrid App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          Being one of the leading hybrid app development companies, we offer a complete range of services to our clients:
        </p>

        <ol className={styles['ordered-list']}>
          <li>Hybrid App Development</li>
          <li>Cross-Platform App Development</li>
          <li>Hybrid App Integration</li>
          <li>Hybrid App UI/UX Design</li>
          <li>Hybrid App Maintenance</li>
          <li>Hybrid App Consultation</li>
          <li>Hybrid Application Testing</li>
          <li>Hire Hybrid Developers</li>
        </ol>

        {/* Replacing H2 with highlight */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly 
          <a href="tel:+919971731257" className={styles['link-style']}> Android App Development Services </a>
          tailored to your business needs. Whether iOS, Android, or cross-platform — our expert developers deliver seamless UI,
          strong functionality, and scalable performance.
        </p>

        {/* Replacing H2 with highlight */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Benefits of Hiring I-Softinc for Hybrid Application Development</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>Dedicated Hybrid App Developers</li>
          <li>Cost-Effective Development</li>
          <li>High Priority to Client Requirements</li>
          <li>Adoption of Latest Technologies</li>
          <li>Core Customer Satisfaction</li>
          <li>24/7 Technical Support</li>
        </ol>

      </div>
    </>
  );
}
