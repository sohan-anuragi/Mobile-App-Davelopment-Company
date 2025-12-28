import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function OnDemandMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="On-Demand Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>On-Demand Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Fast, reliable, and user-friendly – that’s what every on-demand service app should deliver. At <span className={styles['highlight']}>I-Softinic Technologies</span>, our iOS & Android app developers create seamless on-demand platforms that connect users instantly with service providers, ensuring convenience and satisfaction.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Key Features of Our On-Demand Apps</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>
            <strong>Real-Time Tracking:</strong> Track service providers’ geolocations using integrated tools like Google Maps.
          </li>
          <li>
            <strong>Wide Service Coverage:</strong> From plumbers and chefs to personal shoppers and cleaning professionals – our apps support multiple industries.
          </li>
          <li>
            <strong>Revenue-Driven Features:</strong> Integrated payment gateways and e-wallets allow businesses to generate direct revenue efficiently.
          </li>
        </ul>

        <p className={styles['main-paragraph']}>
          Our 12+ years of experience in Android & iOS app development allows us to integrate advanced UX and technical features. Admins can oversee daily operations easily, track availability statuses, and get timely app updates. Our flexible hiring model ensures experienced developers work on short-term or specialized projects, creating top-rated apps.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Create On-Demand Apps for Your Brand</span>
        </p>

        <p className={styles['main-paragraph']}>
          Whether B2B, B2C, or P2P, our Android & iOS app development experts build powerful on-demand service apps that scale globally. Partner with <span className={styles['highlight']}>I-Softinic Technologies</span> to design a five-star rated on-demand app for your business. Contact us today at <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>sales@isoftinc.com</a> to start planning your app launch strategy!
        </p>

      </div>
    </>
  );
}
