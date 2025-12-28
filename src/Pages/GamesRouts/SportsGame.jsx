import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function SportGameDev() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Sport Game Development"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Sport Game Development</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Mobile games have shown that there is no age limit when it comes to gaming.
          From little kids to adults, everyone enjoys mobile games. If you are planning
          to build a gaming Android app, you must hire the best technical support to
          ensure high-quality development.  
          <span className={styles['highlight']}>i-Softinc Technologies</span> offers the perfect
          expertise for building advanced gaming apps.
        </p>

        <p className={styles['intro-paragraph']}>
          Before starting your project, our experts ask a few important questions to
          ensure the final game meets user expectations and delivers a flawless gaming experience.
        </p>

        {/* Question 1 */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Question #1 : What is the dimension specification?</span>
        </p>

        <p className={styles['intro-paragraph']}>
          The first step is deciding whether your game will be **2D** or **3D**.  
          Today, the demand for immersive 3D games is increasing rapidly.
        </p>

        <ul className={styles['unordered-list']}>
          <li>No compromise in graphics and visual quality.</li>
          <li>Carefully building all characters and background elements.</li>
          <li>Ensuring smooth and appealing visual representation.</li>
        </ul>

        {/* Question 2 */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Question #2 : Will there be financial involvement?</span>
        </p>

        <p className={styles['intro-paragraph']}>
          Many games include in-app purchases, digital coins, or paid features.  
          This is especially important when developing **sports betting** or financial
          interaction–based games.
        </p>

        <ul className={styles['unordered-list']}>
          <li>Highly secure payment gateways are implemented.</li>
          <li>User data and transaction details are fully protected.</li>
          <li>Security is the top priority of our Android developers.</li>
        </ul>

        {/* Question 3 */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Question #3 : Do you need cross-platform apps?</span>
        </p>

        <p className={styles['intro-paragraph']}>
          If you want the game to run on both Android and iPhone using the same code,
          cross-platform development is the best option.  
          At I-Softinc, we use the latest technologies to build games compatible with all platforms.
        </p>

        {/* Question 4 */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Question #4 : What features do you need?</span>
        </p>

        <p className={styles['intro-paragraph']}>
          Every game has unique features. Clear planning and explanation of all stages
          help us build a game that provides an engaging player experience.
        </p>

        <p className={styles['intro-paragraph']}>
          Whether developing for Android or iOS, our experts can build exactly what your game needs
          with high precision and creativity.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Constant Technical Support</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our iOS and Android developers provide **24/7 technical support**.  
          If there is any issue or glitch, our team resolves it immediately to ensure smooth gameplay.
        </p>
      </div>
    </>
  );
}
