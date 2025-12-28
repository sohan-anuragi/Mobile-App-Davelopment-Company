import img from './RoutImg/RoutImg.jpg';
import styles from './TechnologyPagesStyle/Technology.module.css';

export default function BlockchainDevelopment() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="Blockchain Development" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>Blockchain Development</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>I-Softnic spearheads custom software development for pro-level blockchain solutions</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our staunch custom software development professionals at <a href="#" className={styles['link-style']}>I-Softnic Technologies</a> create innovative solutions to solve challenging problems.
        </p>

        <p className={styles['main-paragraph']}>
          Though it is not easy to build android app development software applications with seamless flow, we exercise our innate skills to develop things in a user-friendly manner. This is why we stand tall among the top software development companies in the world.
        </p>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Prolific blockchain and software solutions company at your disposal</span>
        </p>

        <p className={styles['main-paragraph']}>
          At <a href="#" className={styles['link-style']}>I-Softnic Technologies</a>, we are a pristine custom software development company. Our team is fused with energy and enthusiasm for any blockchain and software development project. Our software developer assigned will match your requirements and carry the project with precision. This is why you get prolific blockchain support.
        </p>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Skills that we entail as software development services</span>
        </p>

        <ul className={styles['benefits-list']}>
          <li>We are at the helm with <span className={styles['highlight']}>Microsoft Azure</span></li>
          <li>We have significant command over <span className={styles['highlight']}>C++ Programming language</span></li>
          <li>We are adept at software testing phases</li>
          <li><span className={styles['highlight']}>OOD</span> or object-oriented design is our forte</li>
          <li>We can carry out software improvements with ease</li>
        </ul>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Benefits that we offer</span>
        </p>

        <ul className={styles['benefits-list']}>
          <li>You get control over contracts that are <a href="#" className={styles['link-style']}>Fraud-Proof</a></li>
          <li>Your brand gets sufficient digital identity</li>
          <li>Achieve transparency at work</li>
          <li>Streamlined supply chain management</li>
          <li>Easy data sharing across business networks</li>
          <li>Trace and control transactions in decentralized structure</li>
          <li>More lenient cost factors</li>
        </ul>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Security as well as privacy</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our android app development software company focuses on blockchain security and privacy. We deliver software maximizing efficiency and control.
        </p>

        <p className={styles['main-paragraph']}>
          As a software development agency, we deliver bespoke blockchain platforms. You can contact us at <a href="#" className={styles['link-style']}>sales@i-softinc.com</a> to learn more about our services and solutions.
        </p>
      </div>
    </>
  );
}
