import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function RestaurantMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Restaurant Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Restaurant Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          Consumers increasingly prefer home delivery over dining out. At <span className={styles['highlight']}>I-Softinic Technologies</span>, our Android & iOS app developers help restaurants overcome industry challenges with customized apps that simplify management, improve customer experience, and boost revenue.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Challenges You Can Overcome with Mobile Apps</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            <strong>Managing Multiple Branches:</strong> Centralized app management allows you to run multiple branches seamlessly, including synchronized promotional offers.
          </li>
          <li>
            <strong>Shifting Customer Preferences:</strong> Engaging, easy-to-use, and customer-friendly apps keep your restaurant competitive and retain loyal customers.
          </li>
          <li>
            <strong>Maintaining Inventory:</strong> Efficient inventory management ensures that all branches have sufficient raw materials for dine-in and delivery, enhancing customer satisfaction.
          </li>
          <li>
            <strong>Knowing Customer Experience:</strong> Collect quick and insightful feedback via ratings and reviews for both food and delivery, helping you make timely improvements.
          </li>
        </ul>

        <p className={styles['main-paragraph']}>
          Our iOS and Android app developers are equally skilled at helping startups. From maximizing reach to accurate inventory management, our experts provide technical guidance to support your restaurant’s growth from day one.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Start Your Restaurant App Today</span>
        </p>

        <p className={styles['main-paragraph']}>
          Partner with <span className={styles['highlight']}>I-Softinic Technologies</span> to develop a premium-grade restaurant mobile app. Contact our Android and iOS app development experts at <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>sales@isoftinc.com</a> and start streamlining your restaurant business today!
        </p>
      </div>
    </>
  );
}
