import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';
export default function OracleDBA() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="Oracle DBA Services" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>Oracle DBA Services</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          Oracle DBA service
          The time has come for you to master your data with our Oracle managed services from the house of I-Softinic Technologies. Much like presenting the best custom software development Mobile App Development Services from our reputed custom software development company, we have expanded our journey by offering advanced Oracle DBA services and support.
        </p>

        <p className={styles['main-paragraph']}>
          We have hired expert developers to optimize all critical Oracle systems through our managed services. Our 24x7 remote DBA support is one of the major reasons our services are gaining immense popularity. Much like our Android App Development Services, we now have a dedicated Oracle DBA team delivering excellence.
        </p>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Your Trusted Oracle DBA Partner</span>
        </p>

        <p className={styles['main-paragraph']}>
          We aim to be your most reliable Oracle DBA partner. With premium quality software development services, we have collaborated with global experts to manage Oracle databases in the most efficient way.
        </p>

        <ul className={styles['benefits-list']}>
          <li>Full access to the top Oracle DBAs worldwide</li>
          <li>Oracle Certified Masters, Experts, Professionals, ACEs, and ACE Directors</li>
          <li>Tailored Oracle DBA packages based on your business needs</li>
        </ul>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Benefits from Our Deep Oracle Expertise</span>
        </p>

        <p className={styles['main-paragraph']}>
          • Two millennia of combined Oracle experience  
          • Fast, precise problem resolution  
          • Scalable solutions that evolve as your business grows  
          • No long-term commitments — fully flexible engagement models  
          • Remote or onsite collaboration based on your preference  
          • Transparent system health reports and continuous monitoring
        </p>

        <p className={styles['main-paragraph']}>
          Contact I-Softinic Technologies today for premium Oracle DBA services. Once you choose us, you will never need to search for another provider.
        </p>
      </div>
    </>
  );
}
