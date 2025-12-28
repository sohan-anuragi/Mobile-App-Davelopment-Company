import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';
import img from '../Technology/RoutImg/RoutImg.jpg';

export default function LaravelWebDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Laravel Web Development"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Laravel Web Development Services</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>I-Softinic Technologies</span> hires the best Laravel developers to deliver top-quality web development solutions. As a trusted custom software development company, we ensure secure, scalable, and high‑performance Laravel applications.
        </p>

        {/* About Laravel */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Let’s Learn About Laravel</span>
        </p>

        <p className={styles['main-paragraph']}>
          Laravel is a powerful <span className={styles['highlight']}>PHP MySQL framework</span> used to build safe, fast, and cost‑effective applications. It is one of our major development categories besides mobile app development.
        </p>

        <ol className={styles['ordered-list']}>
          <li>Highly secure and affordable solution.</li>
          <li>Dedicated outsourcing team model for end‑to‑end development.</li>
          <li>We build applications from scratch to full maintenance.</li>
          <li>Our Laravel apps are used by millions globally.</li>
        </ol>

        {/* Best Results */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>The Best Results You Get</span>
        </p>

        <p className={styles['main-paragraph']}>
          As your trusted <span className={styles['highlight']}>software solutions company</span>, we deliver high‑quality Laravel web development — from landing pages to fully scalable enterprise applications.
        </p>

        {/* Custom Web Apps */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Get Customized Web Apps</span>
        </p>

        <p className={styles['main-paragraph']}>
          We develop powerful custom applications using Laravel. Whether upgrading an existing system or adding new features, our experts ensure smooth development and maintenance.
        </p>

        {/* Custom Websites */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Custom Websites All The Way</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our team builds full websites with backend functionality using Laravel. We also integrate corporate sites and service platforms with internal business systems.
        </p>

        {/* E‑Learning & E‑Commerce */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>E‑Learning & E‑Commerce Platforms</span>
        </p>

        <p className={styles['main-paragraph']}>
          From single‑store e‑commerce to large marketplace platforms, we provide complete end‑to‑end development including UI/UX, backend, and maintenance.
        </p>

        {/* Mobile App Services */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful and user‑friendly
          <a href="tel:+919971731257" className={styles['link-style']}> Android App Development Services </a>
          tailored to your business needs. Whether Android, iOS, or cross‑platform — our team ensures smooth performance and high scalability.
        </p>

      </div>
    </>
  );
}
