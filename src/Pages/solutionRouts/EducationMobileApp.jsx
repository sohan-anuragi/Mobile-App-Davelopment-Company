import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function EducationMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Education Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Education Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Learning and innovation go hand in hand. In today’s era, <span className={styles['highlight']}>mobile education apps</span> are redefining the way students learn, making education accessible anytime, anywhere.
        </p>

        <p className={styles['main-paragraph']}>
          A mobile phone or device connected to a network is all you need to participate in modern online education. 
          <span className={styles['highlight']}>I-Softinc Technologies</span> has earned a strong reputation by developing high-quality educational apps that enhance learning experiences.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Advantages of Mobile Learning</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>24/7 Accessibility</li>
          <li>Cost-Effective</li>
          <li>Flexible Learning</li>
          <li>More Effective</li>
          <li>Time-Saving</li>
          <li>Systematic Approach</li>
        </ol>

        <p className={styles['main-paragraph']}>
          Mobile apps for education help learners of all ages access knowledge in ways they never imagined.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Ease of Joining Professional Courses</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our <span className={styles['highlight']}>Android and iOS app developers</span> enable educational institutes to offer certification courses online with flexible schedules, allowing students to learn at their convenience.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Online Training Made Easier</span>
        </p>

        <p className={styles['main-paragraph']}>
          Mobile apps help companies save time and costs on employee training. Our iOS app solutions ensure training is engaging, interactive, and effective.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Kids Enjoy Educational Apps</span>
        </p>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>I-Softinc Technologies</span> develops fun and interactive apps for children, combining visual and audio learning to make education enjoyable and effective.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>eBooks for Modern Learning</span>
        </p>

        <p className={styles['main-paragraph']}>
          Mobile education apps with <span className={styles['highlight']}>eBook functionality</span> provide learners with instant access to knowledge without spending hours in libraries, making learning highly resourceful.
        </p>

        {/* Footer / CTA Section */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly 
          <a href="tel:+919971731257" className={styles['link-style']}> Android App Development Services </a> 
          tailored to your educational business needs. Whether it’s iOS, Android, or cross-platform, our expert developers create high-performance apps that deliver seamless learning experiences, strong functionality, and scalable growth.
        </p>

      </div>
    </>
  );
}
