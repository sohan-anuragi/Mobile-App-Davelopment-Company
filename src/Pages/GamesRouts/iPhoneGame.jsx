import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function IPhoneGameDev() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="iPhone Game Development"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>iPhone Game Development</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          In today’s digital era, your business cannot grow unless you have a strong online
          presence. Physical stores alone are no longer enough.  
          With <span className={styles['highlight']}>online games for your business</span>,
          you can reach a global audience and stand out from the competition.  
          That is where <span className={styles['highlight']}>i-Softinc Technologies</span> comes in.
        </p>

        <p className={styles['intro-paragraph']}>
          Just like we provide top-quality Android app design services, we also help you explore
          the world of <span className={styles['highlight']}>iPhone App Design</span> and
          <span className={styles['highlight']}>iPhone Multiplayer Game Development</span>,
          all within your planned budget.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Promises to Keep</span>
        </p>

        <p className={styles['intro-paragraph']}>
          Our team consists of highly skilled iPhone game developers—similar to our dedicated
          Android development team—who ensure premium quality gaming apps for Apple users
          without unnecessary expenses.
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            A perfect fusion of stunning visuals, engaging storylines, and immersive sound effects.
          </li>
          <li>
            We build iPhone game apps for startups, entrepreneurs, and global enterprises.
          </li>
          <li>
            We are recognized as one of the leading Android app development companies for years,
            and now we bring the same expertise to iPhone game development.
          </li>
          <li>
            Our team knows all App Store submission guidelines, ensuring your game gets published
            on time without delays.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>What to Expect</span>
        </p>

        <p className={styles['intro-paragraph']}>
          Before partnering with our expert developers, here’s what our iPhone game development
          services include:
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Custom iPhone game programming beyond generic iOS action game development.
          </li>
          <li>
            Our iOS developers are ready to build business-focused gaming solutions.
          </li>
          <li>
            Separate development for each iPhone game genre with constantly updated design templates.
          </li>
          <li>
            Full support for UX and UI Development to ensure the game delivers a flawless user experience.
          </li>
          <li>
            Continuous support and maintenance throughout your game’s lifecycle.
          </li>
        </ul>

        <p className={styles['main-paragraph']}>
          With i-Softinc Technologies by your side, you’ll receive reliable, high-quality
          <span className={styles['highlight']}> iPhone Game Development Services</span> that
          help you build a successful gaming product from idea to launch.
        </p>

      </div>
    </>
  );
}
