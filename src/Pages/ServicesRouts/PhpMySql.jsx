import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function PhpMySqlDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="PHP MySQL Development"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>PHP MySQL Development</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>I-Softinc Technologies</span> helps you reduce cost, save time, and maximize ROI
          on PHP MySQL development projects. It is one of the most powerful custom software
          development services we handle effortlessly.
        </p>

        <p className={styles['main-paragraph']}>
          Our PHP development services provide access to highly skilled and diversified PHP experts.
          From our custom software development company, you get assistance from dedicated project
          managers who work closely with developers to handle assignments and maintain daily
          communication with clients.
        </p>

        <p className={styles['main-paragraph']}>
          We offer a transparent engagement model along with complete reporting. You get full control
          over your project flow. Your PHP or app development project is built in an agile ecosystem,
          giving you real-time visibility of each development stage.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Why Choose PHP MySQL?</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>Fast data processing whenever required.</li>
          <li>Simple and easy functionality.</li>
          <li>Low overall development cost.</li>
          <li>Highly interactive and feature-rich website development.</li>
          <li>Secure and stable interface for long-term reliability.</li>
          <li>JQuery & AJAX integration for enhanced performance.</li>
          <li>Improved efficiency and usability.</li>
          <li>Compatible with all major operating systems.</li>
          <li>Easily integrates with major web applications.</li>
        </ol>

        <p className={styles['main-paragraph']}>
          Our cutting-edge PHP MySQL solutions help you conquer the dynamic web application space.
          Whether you need a robust backend, dynamic website, or business automation tool —
          our advanced technology stack is ready to support you.
        </p>

        <p className={styles['main-paragraph']}>
          Looking for a reliable development partner? Hire expert
          <span className={styles['highlight']}> PHP MySQL developers</span> from I-Softinc Technologies and get the most trusted software
          development experience.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful and user-friendly
          <a href="tel:+919971731257" className={styles['link-style']}>
            {' '}Android App Development Services{' '}
          </a>
          tailored to your business needs. Whether it’s iOS, Android, or cross-platform — our
          expert team creates high-performance apps with smooth UI, solid functionality, and
          scalable growth.
        </p>

      </div>
    </>
  );
}
