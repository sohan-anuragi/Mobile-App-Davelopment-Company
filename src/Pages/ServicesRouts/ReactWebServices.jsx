import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function ReactWebDevelopmentServices() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="React Web Development Services"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>React Web Development Services</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          Boost your business success with <span className={styles['highlight']}>flexible</span> and
          <span className={styles['highlight']}> highly scalable ReactJS solutions</span>. As a trusted custom software development company, I-Softinic Technologies delivers world-class ReactJS development tailored to your business needs.
        </p>

        <p className={styles['main-paragraph']}>
          ReactJS has emerged as a powerful platform for modern mobile and web development. Much like our excellence in Android app development, we ensure the same level of commitment, innovation, and precision in ReactJS solutions.
        </p>

        <p className={styles['main-paragraph']}>
          For queries, contact us at <a href="tel:+919971731257" className={styles['link-style']}>+91 997 173 1257</a> or email us at
          <a href="mailto:sales@i-softinc.com" className={styles['link-style']}> sales@i-softinc.com</a>.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Your Full-Service ReactJS Development Firm</span>
        </p>

        <p className={styles['main-paragraph']}>
          We unleash the complete potential of ReactJS to build <span className={styles['highlight']}>interactive</span>,
          <span className={styles['highlight']}> scalable</span>, and <span className={styles['highlight']}>secure user interfaces</span>. Since its launch in 2013, ReactJS has rapidly evolved and become one of the most preferred platforms for mobile and web apps.
        </p>

        <ol className={styles['ordered-list']}>
          <li>ReactJS enables building rich and interactive UIs.</li>
          <li>Highly scalable, extensible, and simple to maintain.</li>
          <li>Perfect for crafting large, complex applications.</li>
          <li>Updates and renders components dynamically based on data changes.</li>
          <li>An economical, open-source framework for both mobile and web apps.</li>
        </ol>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Unlocking All Possibilities with ReactJS</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our expert ReactJS developers build <span className={styles['highlight']}>robust</span>,
          <span className={styles['highlight']}> scalable</span>, and <span className={styles['highlight']}>feature-rich</span> applications with stunning and dynamic UIs. We deliver client-centric solutions that are built to perform on a global scale.
        </p>

        <p className={styles['main-paragraph']}>
          Whether you're looking to build a new app or upgrade an existing one, our experienced team at I-Softinic Technologies is here to deliver top-notch results from start to finish.
        </p>

        {/* Mobile App Dev Section */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful and user-friendly
          <a href="tel:+919971731257" className={styles['link-style']}> Android App Development Services </a>
          designed to meet your business objectives. Whether iOS, Android, or cross-platform, our team ensures seamless performance and fully scalable solutions.
        </p>

      </div>
    </>
  );
}