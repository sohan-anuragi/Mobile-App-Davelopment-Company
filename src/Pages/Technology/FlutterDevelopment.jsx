import img from './RoutImg/RoutImg.jpg';
import styles from './TechnologyPagesStyle/Technology.module.css';

export default function FlutterDevelopment() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="Flutter Development" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>Flutter Development</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          Like any other popular developing application service, Flutter is also getting famous among developers. It is an open-source framework, which is created by <a href="#" className={styles['link-style']}>Mobile App Development Services</a> <span className={styles['highlight']}>Google</span>. It is a single-code based <span className={styles['highlight']}>cross-platform development technology</span>. It enables the experts to build and scale the interfaces in less time and completes the programming in the best way. The <span className={styles['highlight']}>smoothness and efficiency</span> make Flutter, an ideal choice for companies and startups.
        </p>

        <p className={styles['main-paragraph']}>
          Some of the best features of the Flutter <a href="#" className={styles['link-style']}>Android App development Services</a> includes expedite development speed, hot reload, population in widget, material design and Cupertino, reactive framework, Dart benefits, one codebase, flexible UI, access to original code, iteration, faster coding writing, less testing, etc. With each of these benefits flutter development is one of the best services that people can avail and make it worth paying. Businessmen with different industries can use this app development service including <a href="#" className={styles['link-style']}>Health & fitness</a>, <a href="#" className={styles['link-style']}>education & e-learning</a>, <a href="#" className={styles['link-style']}>shopping & e-commerce</a>, <a href="#" className={styles['link-style']}>Sports</a>, <a href="#" className={styles['link-style']}>Travel & tourism</a>, <a href="#" className={styles['link-style']}>banking & finance</a>, <a href="#" className={styles['link-style']}>media & entertainment</a>.
        </p>

        <p className={styles['main-paragraph']}>
          We feel proud to deliver successful projects till date, hire us now to make your project successful. After all your success is our success.
        </p>

        <div className={styles['benefits-section']}>
          <h3 className={styles['benefits-heading']}>Benefits of Hiring I-Softinc for Flutter Development Services</h3>
          <ul className={styles['benefits-list']}>
            <li>We have expert developers to provide you fast app development services at reasonable prices</li>
            <li>We have <span className={styles['highlight']}>engaging UI</span> that engages the customization and provides flexible designs</li>
            <li>We assure to provide you obtaining maximum output from the application</li>
            <li>Our experts make sure to keep your assets protected</li>
          </ul>
        </div>
      </div>
    </>
  );
}
