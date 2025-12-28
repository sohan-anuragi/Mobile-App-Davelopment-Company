import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function EcommerceMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="eCommerce Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>eCommerce Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Investing in an eCommerce app is essential for modern businesses. At <span className={styles['highlight']}>I-Softinic Technologies</span>, we create fully-functional, lag-free Android & iOS apps that can triple or quadruple your revenue while providing a seamless shopping experience.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Why Choose Our eCommerce App Development</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>Accessible on all devices and platforms, reaching billions of global smartphone users.</li>
          <li>12+ years of experience in premium-grade eCommerce app development, ensuring unmatched customer experience.</li>
          <li>Advanced features like hassle-free checkout, multiple payment options, and simple order management.</li>
          <li>Seamless customer journey design with intuitive UI/UX, React, JavaScript, Angular.js, and other modern technologies.</li>
        </ol>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>eCommerce Apps with Advanced Features</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>Streamlined registration/signup via email, Google, Facebook, or phone number with OTP.</li>
          <li>Advanced product cataloging systems with search, reviews, and comments.</li>
          <li>Custom solutions for app conceptualization, development, and launch in sync with clients.</li>
          <li>Tech stack expertise including UX design, React, JavaScript, Angular.js, C++, and more.</li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Low-Cost eCommerce App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our Android & iOS app development services are cost-effective and tailored to your business. We help you reach broader audiences and maximize revenue with premium-grade eCommerce apps. Contact our team at <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>sales@isoftinc.com</a> today to get started!
        </p>

        {/* Mobile App Services CTA */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From idea to launch, our developers create high-performance eCommerce apps for Android and iOS that provide seamless user experience, scalable growth, and strong functionality for your business.
        </p>

      </div>
    </>
  );
}
