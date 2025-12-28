import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function BankingApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Banking Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Banking Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Cashless transactions have become the new norm, transforming how banks operate 
          and increasing the demand for <span className={styles['highlight']}>Banking App Development</span>.  
          At <span className={styles['highlight']}>i-Softinc Technologies</span>, we simplify this shift by delivering 
          secure, scalable, and user-friendly <span className={styles['highlight']}>Android App Design</span> solutions 
          for modern financial institutions.
        </p>

        <p className={styles['main-paragraph']}>
          Below are the <span className={styles['highlight']}>6 Must-Have Features</span> we incorporate into every 
          high-performance banking application.
        </p>

        {/* 1. Efficient Account Management */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>1. Efficient Account Management</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>Your customers can easily view and manage account details.</li>
          <li>Edit personal information like phone numbers with just one tap.</li>
          <li>Customers can monitor credit card usage and limits.</li>
          <li>
            Our App Developers offer smart 
            <span className={styles['highlight']}> goal-setting tools</span> to help users make better financial decisions.
          </li>
        </ul>

        {/* 2. Advanced Security Alerts */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>2. Advanced Security Alerts</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>We use highly secured technology layers to prevent cyber attacks.</li>
          <li>
            <span className={styles['highlight']}>Secure sign-in</span> and 2-step verification 
            ensure complete protection.
          </li>
          <li>
            Our Developers maintain the perfect balance — maximum security without irritating users.
          </li>
        </ul>

        {/* 3. CORE Banking Facilities */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>3. CORE Banking Facilities</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>Open new bank accounts digitally.</li>
          <li>Manage deposits and withdrawals through mobile.</li>
          <li>Loan management module for seamless approvals.</li>
          <li>Automatic interest rate calculation.</li>
          <li>Customer relationship management tools.</li>
          <li>Full transaction & record maintenance.</li>
          <li>Introduction of new financial products.</li>
        </ul>

        {/* 4. QR Code Payments */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>4. QR Code Payments</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>Scan & Pay feature for quick, contactless payments.</li>
          <li>
            Trusted by leading banks — now added in our 
            <span className={styles['highlight']}> iPhone App Design</span> as well.
          </li>
          <li>Fast, secure, and highly reliable for merchants and customers.</li>
        </ul>

        {/* 5. Mobile Check Deposit */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>5. Mobile Check Deposit</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>Deposit checks using your mobile camera — no branch visit required.</li>
          <li>Digital check scanning ensures complete accuracy.</li>
          <li>Highly secured & extremely convenient for users on the go.</li>
        </ul>

        {/* 6. Pay Bills */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>6. Pay Bills Instantly</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>Electricity, water, mobile, credit card — pay every bill instantly.</li>
          <li>Our iOS App Developers add easy-access widgets for quick bill payments.</li>
          <li>Schedule recurring payments linked to utility accounts.</li>
        </ul>

        <p className={styles['main-paragraph']}>
          With our advanced security, powerful banking features, and intuitive UI,  
          <span className={styles['highlight']}>i-Softinc Technologies</span> delivers banking apps that are 
          safe, fast, and future-ready.
        </p>

        {/* Contact */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Contact Us</span>
        </p>

        <p className={styles['main-paragraph']}>
          Start your secure banking app with us →  
          <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>
            sales@isoftinc.com
          </a>
        </p>

      </div>
    </>
  );
}
