import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function TravelMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Travel Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Travel Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          From booking cabs to checking into hotels, a travel app can handle it all. At <span className={styles['highlight']}>I-Softinic Technologies</span>, our mobile app development teams create custom travel solutions that make planning, booking, and managing trips easy and efficient.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Why Choose Our Travel App Development?</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li><strong>Information Sharing:</strong> Turn your app into an information hub with blogs, travel tips, or chat features for travelers.</li>
          <li><strong>Admin Support:</strong> We collaborate closely with your brand to ensure the app looks and feels exactly as you want.</li>
          <li><strong>Constant Updates:</strong> Regular technical changes, UI/UX improvements, and ongoing support to keep your app engaging.</li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Create Travel Apps with All the Latest Features</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>Secure online ticket booking for flights, hotels, and other travel services.</li>
          <li>Customer-friendly travel planning, vehicle booking, and location tracking features.</li>
          <li>Advanced customer management (CRM) solutions to help users find public transport, book services, and manage trips efficiently.</li>
        </ul>

        <p className={styles['main-paragraph']}>
          With 12+ years of experience in iOS & Android travel app development, <span className={styles['highlight']}>I-Softinic Technologies</span> helps your travel business reach millions of users with a premium-grade app. Contact our experts at <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>sales@isoftinc.com</a> to create your custom travel app now!
        </p>

      </div>
    </>
  );
}
