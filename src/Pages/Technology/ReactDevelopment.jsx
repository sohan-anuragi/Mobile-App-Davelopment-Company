import img from './RoutImg/RoutImg.jpg';
import styles from './TechnologyPagesStyle/Technology.module.css';

export default function ReactDevelopment() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="React Development" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>React Development</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          React is one of the widely popular <span className={styles['highlight']}>open-source JavaScript library</span> for more scalability, reusability, faster and simpler developments. This JS also carries the flexibility of <span className={styles['highlight']}>easy testing, zero dependency, and EO-compatibility</span>. This <span className={styles['highlight']}>JavaScript</span> also allows the developers to develop the huge web apps that can be easily changed without even reloading entire web page. So, there is no <a href="#" className={styles['link-style']}>Ifs and But</a> for using this brilliant JavaScript. Clients might have full-fledged knowledge about this JS, but being the trustworthy client in the development world, we assure you to provide a successful project by using React.Js.
        </p>

        <p className={styles['main-paragraph']}>
          Being one of the trusted developing companies, we at <a href="#" className={styles['link-style']}>Aman</a> provide best of the web and app developing services to all kinds of industry. To get the best one, all you need to ring us once. We make sure to <span className={styles['highlight']}>develop your project</span> as per your customization requirements. So, leave your all worries on us, just by a single call. We are happy to serve you.
        </p>
      </div>
    </>
  );
}
