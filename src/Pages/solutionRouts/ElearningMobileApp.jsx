import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function ELearningMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="ELearning Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>ELearning Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          A large number of educational institutes and students are shifting to digital courses. <span className={styles['highlight']}>Android and iOS App Design</span> is now essential for providing education anytime, anywhere. 
          <span className={styles['highlight']}>i-Softinc Technologies</span> helps institutes enter the digital education world without compromising student engagement or learning outcomes.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Key Advantages of ELearning Mobile Apps</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>
            <span className={styles['highlight']}>Targeted and Timely Assistance:</span> Android apps allow teachers to provide individualized attention and instant help to students, even during late hours.
          </li>
          <li>
            <span className={styles['highlight']}>Effective Assessments:</span> Custom modules and mock tests ensure accurate evaluation and continuous feedback for students.
          </li>
          <li>
            <span className={styles['highlight']}>Diversifying Learning:</span> Apps offer content beyond the curriculum, allowing students to explore knowledge outside standard syllabus.
          </li>
          <li>
            <span className={styles['highlight']}>Convenient Education:</span> Easy registration, user profiles, private messaging, syllabus tracking, and notifications enhance user experience and engagement.
          </li>
        </ol>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Why Choose Us</span>
        </p>

        <p className={styles['main-paragraph']}>
          We house the best <span className={styles['highlight']}>iOS and Android App Developers</span> who design intuitive, engaging, and scalable e-learning applications. 
          Read client reviews to understand why i-Softinc Technologies is the ideal partner for building effective digital education platforms.
        </p>

        {/* Mobile App Services CTA */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly 
          <a href="tel:+919971731257" className={styles['link-style']}> Android & iOS App Development Services </a> 
          tailored to your educational business needs. Our expert developers deliver high-performance apps with seamless user experiences, strong functionality, and scalable growth.
        </p>

      </div>
    </>
  );
}
