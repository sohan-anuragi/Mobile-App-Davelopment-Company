import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function ActionGameDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Action Game Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Action Game Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          Action games have always been a major attraction in the gaming world. At
          <span className={styles['highlight']}> I-Softinc Technologies</span>, our expert game developers specialize in creating
          <span className={styles['highlight']}> immersive, fast‑paced, and visually stunning action games</span>. From powerful storytelling to
          breathtaking graphics, we turn ideas into engaging gaming experiences.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>1. Conceptualization & Game Design</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Our team collaborates with writers, designers, and artists to create core mechanics, characters,
            storylines, and gameplay loops.
          </li>
          <li>
            We define the game type: FPS, Action‑Adventure, Hack‑and‑Slash RPG, or Multiplayer Action.
          </li>
          <li>
            Gameplay elements such as combat design, boss fights, and level progression are crafted to deliver
            a thrilling experience.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>2. Game Engine & Programming</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            We work with top engines like Unity, Unreal Engine, and CryEngine to ensure smooth performance.
          </li>
          <li>
            Our developers integrate advanced AI, physics mechanics, multiplayer systems, and optimized coding.
          </li>
          <li>
            Performance optimization is our priority — ensuring your game runs without lags or glitches.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>3. Art, Animation & Visual Effects</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Stunning environments, characters, weapons, and VFX are created by our experienced artists.
          </li>
          <li>
            Realistic animations for combat, movement, and interactions with HD textures and dynamic lighting.
          </li>
          <li>
            High‑quality particle effects make the gameplay feel intense and cinematic.
          </li>
        </ul>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>4. Testing & Quality Assurance</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            Every action game undergoes rigorous testing to detect bugs, glitches, exploits, and balance issues.
          </li>
          <li>
            QA teams test multiple scenarios to ensure smooth gameplay and top‑tier performance.
          </li>
          <li>
            Final builds are polished through multiple iterations until they meet global gaming standards.
          </li>
        </ul>

        <p className={styles['main-paragraph']}>
          At <span className={styles['highlight']}>I-Softinc Technologies</span>, our action game development services combine creativity,
          technology, and innovation to deliver games that players love and remember.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Start Building Your Action Game Today</span>
        </p>

        <p className={styles['main-paragraph']}>
          Contact our expert game developers at
          <a href="mailto:sales@isoftinc.com" className={styles['link-style']}> sales@isoftinc.com</a>
          to bring your action game vision to life.
        </p>
      </div>
    </>
  );
}
