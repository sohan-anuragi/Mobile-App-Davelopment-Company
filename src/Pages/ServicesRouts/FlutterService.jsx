import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function FlutterDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Flutter Development Services"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Flutter Development Services</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>I-Softinc Technologies</span> brings you top-quality Flutter development services that help you build beautiful, fast, and scalable cross-platform mobile applications using Google’s open-source framework. With a single codebase, Flutter makes development faster, smoother, and more efficient.
        </p>

        <p className={styles['main-paragraph']}>
          Flutter is rapidly becoming one of the most popular technologies among developers worldwide. It allows businesses to create high-performance apps for both Android and iOS simultaneously. Features like <span className={styles['highlight']}>Hot Reload, rich widget library, Material & Cupertino UI, reactive framework, and Dart programming</span> make Flutter the ideal choice for startups, enterprises, and product-based companies.
        </p>

        <p className={styles['main-paragraph']}>
          Companies across various industries — Health & Fitness, Education, E-Learning, E-commerce, Sports, Travel, Finance, Media & Entertainment — trust Flutter for fast development and seamless performance.
        </p>

        <p className={styles['main-paragraph']}>
          With pride in delivering multiple successful projects, we invite you to hire our Flutter experts today.  
          <strong>After all, your success is our success.</strong>
        </p>

        <h2 className={styles['section-heading']}>Benefits of Hiring I-Softinc for Flutter Development Services</h2>

        <ol className={styles['ordered-list']}>
          <li>Expert Flutter developers providing fast and reliable app development at affordable prices.</li>
          <li>Engaging UI/UX with complete customization and flexible design options.</li>
          <li>Maximum performance and output from your Flutter mobile application.</li>
          <li>Access to secure development processes and complete asset protection.</li>
        </ol>

        <p className={styles['main-paragraph']}>
          For Flutter development services, call us at 
          <a href="tel:+919971731257" className={styles['link-style']}> +91 997-173-1257</a> 
          or email us at  
          <a href="mailto:info@i-softinc.com" className={styles['link-style']}> info@i-softinc.com</a>.  
          Our team provides complete support and real-time communication for your project.
        </p>

      </div>
    </>
  );
}
