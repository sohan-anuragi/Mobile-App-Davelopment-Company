import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function Iphone() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="iPhone App Development Services"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>iPhone App Development Services</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          In today’s fast-paced digital world, iPhone apps have become essential for businesses and users worldwide.
          With its reputation for premium technology and strong user base, iOS offers immense opportunities for global growth.
          <span className={styles['highlight']}> I-Softinc </span> delivers top-quality international-level iPhone app development services
          designed with innovation, creativity, and user-focused experiences.
        </p>

        {/* Heading replaced with highlight */}
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>The Significance of iPhone & Mobile App Development</span>
        </p>

        <p className={styles['main-paragraph']}>
          iPhone app development plays a key role in business expansion and customer engagement.
          Successful iOS apps require deep understanding of users, clean UI/UX, and flawless performance.
          With a global audience and high expectations, developing iPhone apps demands excellence.
        </p>

        {/* Heading replaced with highlight */}
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Key Features of I-Softinc International iPhone App Development</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            <strong>User-Centric Design:</strong>  
            Intuitive designs with smooth navigation and visually appealing UI.
          </li>

          <li>
            <strong>High Performance & Speed:</strong>  
            Apps optimized for all iPhone models ensuring fast, smooth, and stable performance.
          </li>

          <li>
            <strong>Top-Tier Security:</strong>  
            Complies with Apple’s strict privacy guidelines for maximum data safety.
          </li>

          <li>
            <strong>Innovative Features:</strong>  
            Integration of AR, ML, automation, and modern functionalities for a superior experience.
          </li>

          <li>
            <strong>Full Compatibility:</strong>  
            Works perfectly across all screen sizes, iOS versions, and devices.
          </li>
        </ul>

        {/* Heading replaced with highlight */}
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Challenges in International iPhone Development</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            <strong>Diverse Global Audience:</strong>  
            Cultural differences, languages, and user behavior create complexity.
          </li>

          <li>
            <strong>Regulatory Compliance:</strong>  
            Every country has different data privacy rules to follow.
          </li>

          <li>
            <strong>Market Saturation:</strong>  
            Millions of apps on the App Store make competition extremely tough.
          </li>

          <li>
            <strong>Rapid Technological Changes:</strong>  
            Keeping up with new iOS versions, devices, and trends is challenging.
          </li>
        </ul>

        {/* Heading replaced with highlight */}
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>The Evolving Global iOS App Landscape</span>
        </p>

        <p className={styles['main-paragraph']}>
          With new technologies like AR/VR, AI, wearables, and cross-platform tools,
          the iOS app ecosystem is constantly evolving.  
          Developers now build apps that run smoothly on both iOS and Android — helping businesses grow worldwide.
        </p>

        {/* Heading replaced with highlight */}
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, our team builds powerful, user-friendly 
          <a href="tel:+919971731257" className={styles['link-style']}> Android & iOS App Development </a>
          tailored to your business needs.  
          We deliver high-performance apps with seamless UX, scalable architecture, and modern features.
          Let’s turn your idea into a world-class mobile app.
        </p>

      </div>
    </>
  );
}
