import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function AgricultureApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Agriculture App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Agriculture App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          The agriculture industry is rapidly transforming with modernization, technology, and 
          IoT-led automation. At 
          <span className={styles['highlight']}> I-Softinc Technologies</span>, our 
          Android App Design has become a powerful tool for farmers, suppliers, and agribusinesses 
          to simplify daily operations and improve productivity.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>1. Crop and Farm Management</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Easily track multiple crops, their growth cycles, seeding times, fertilizer schedules, 
            and harvesting periods.
          </li>
          <li>
            Android App Development enables farmers to monitor environmental conditions and find 
            solutions for deficiencies.
          </li>
          <li>
            Developers of Android apps carefully study farming processes to build accurate, useful tools.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>2. Equipment Management</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Manage all farming equipment with real-time updates on depreciation, maintenance, and expenses.
          </li>
          <li>
            Android app development companies design smart monitoring systems for tractors, harvesters, 
            irrigation tools, and more.
          </li>
          <li>
            Android Application Developers collect machine parameters to ensure accurate tracking.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>3. Livestock Management</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Dedicated modules to manage cows, goats, hens, and other livestock through iPhone App Design.
          </li>
          <li>
            Monitor health conditions, vaccination alerts, feeding cycles, and disease prevention.
          </li>
          <li>
            Sell livestock products more efficiently through the app.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>4. Customer Relationship Management (CRM)</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Serve both B2B and B2C customers with separate filters and structured buying options.
          </li>
          <li>
            Efficient CRM improves customer satisfaction and builds long-term trust.
          </li>
          <li>
            Our App Developers at I-Softinc Technologies build powerful CRM systems for farmers and suppliers.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>5. Warehouse Management</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Manage storage facilities, crop stock, supply data, and inventory details with ease.
          </li>
          <li>
            iOS App Development focuses on creating interactive interfaces for better user experience.
          </li>
          <li>
            As leading Ios Application Developers, we ensure smooth tracking and efficient warehouse operations.
          </li>
        </ul>

        <p className={styles['main-paragraph']}>
          The farming sector is progressing at lightning speed, and modern apps are becoming the 
          backbone of this transformation. With I-Softinc Technologies, the future of agriculture is 
          smarter, faster, and highly efficient.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Build Your Agriculture App Today</span>
        </p>

        <p className={styles['main-paragraph']}>
          Contact us at  
          <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>
            sales@isoftinc.com
          </a>  
          to develop a powerful agriculture app for your business.
        </p>
      </div>
    </>
  );
}
