import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function FoodMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Food Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Food Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          In today’s fast-paced world, online food ordering is a necessity. At <span className={styles['highlight']}>I-Softinic Technologies</span>, our Android & iOS app developers help food businesses reach thousands of customers, increase orders, and boost revenue with user-friendly, efficient, and visually appealing food apps.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Advantages of Food Mobile Apps</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            <strong>Customer-Friendly:</strong> Allow customers to order food anytime, anywhere. Easy navigation ensures users of all ages can order effortlessly.
          </li>
          <li>
            <strong>Attract New Customers:</strong> Engaging UI, realistic food images, and intuitive design encourage new users to try your food offerings.
          </li>
          <li>
            <strong>Successful Marketing Campaigns:</strong> Personalized promotions, newsletters, emails, and discount offers help retain and attract customers effectively.
          </li>
          <li>
            <strong>Minimizing Mistakes:</strong> Reduce errors in orders and back-office calculations with a reliable app, ensuring smooth operations and increased revenue.
          </li>
        </ul>

        <p className={styles['main-paragraph']}>
          With our 12+ years of experience in Android & iOS app development, we create food apps that are fully functional, bug-free, and optimized for performance. From integrating online ordering systems to designing intuitive UI/UX, our apps help you reach more customers than ever before.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Get Your Food App Today</span>
        </p>

        <p className={styles['main-paragraph']}>
          Partner with <span className={styles['highlight']}>I-Softinic Technologies</span> to develop a premium-grade food mobile app for your restaurant or food business. Contact our Android and iOS app development experts at <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>sales@isoftinc.com</a> and start boosting your food business today!
        </p>
      </div>
    </>
  );
}
