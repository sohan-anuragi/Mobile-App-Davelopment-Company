import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function EventApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Event Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Event Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Innovative ideation is the foundation of modern <span className={styles['highlight']}>Android App Design</span>. 
          At <span className={styles['highlight']}>i-Softinc Technologies</span>, we lead the market with unmatched 
          creativity, logical structuring, user-friendly layouts, and strong security layers.  
          If you want <b>App Development</b> for your event management company, you will get the perfect support here.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>
            Understanding Important Features
          </span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Our work as App Developers starts with analyzing your event categories and target audience.
          </li>
          <li>
            If your platform hosts events for multiple age groups, our Android App Development team 
            will include smart filters to sort by age.
          </li>
          <li>
            If you organize musicals, theatres, dance shows, weddings, or birthday parties, 
            our Developers of Android apps will create clear categories on the landing page.
          </li>
          <li>
            The aim is to create smooth and intuitive navigation for your users.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>
            Providing Necessary Details
          </span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Customers want instant information. They should see upcoming events within seconds, not after 
            multiple clicks.
          </li>
          <li>
            As one of the leading Android app development companies, we apply simple logic to design 
            what users expect on an event management app’s homepage.
          </li>
          <li>
            Simplicity & logical structure are the core strengths of our Android Application Developers.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>
            Payment Security
          </span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Customers will make payments through your app — so security is a top priority in our 
            iPhone App Design.
          </li>
          <li>
            Our security team ensures that the payment gateway stays protected from malware, attacks, 
            and hacking attempts.
          </li>
          <li>
            The App Developers add multiple layers of encryption and verification for secure transactions.
          </li>
          <li>
            A highly secure payment gateway directly increases the trust and popularity of your app.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>
            Verifying Certifications
          </span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Clients can review our certifications to understand the strength of our iOS App Development services.
          </li>
          <li>
            With years of experience, the Developers of iOS apps at i-Softinc Technologies know exactly 
            what an event management platform needs.
          </li>
          <li>
            Our expertise surpasses most other Ios app development companies in this domain.
          </li>
          <li>
            We have built multiple similar apps, helping our Ios Application Developers find the best solutions.
          </li>
        </ul>

        <p className={styles['main-paragraph']}>
          Hire us if you want a unique, feature-rich, and secure application for your event management company. 
          At i-Softinc Technologies, we turn your ideas into high-performing digital experiences.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Contact Us</span>
        </p>

        <p className={styles['main-paragraph']}>
          Reach out at  
          <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>
            sales@isoftinc.com
          </a>  
          to build a powerful event management app.
        </p>

      </div>
    </>
  );
}
