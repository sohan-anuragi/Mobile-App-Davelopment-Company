import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function HealthcareMobileApp() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Healthcare Mobile App Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Healthcare Mobile App Development Company</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Healthcare organizations are leveraging <span className={styles['highlight']}>Android and iOS app development</span> to provide medical services beyond boundaries. 
          <span className={styles['highlight']}>i-Softinc Technologies</span> is proud to be a forerunner in healthcare mobile app solutions improving communication, efficiency, and quality of healthcare services.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Healthcare Mobile Apps We Develop</span>
        </p>

        <ol className={styles['ordered-list']}>
          <li>
            <span className={styles['highlight']}>Diagnostic Apps:</span> Assist medical professionals in managing clinical practices and medical examinations.
          </li>
          <li>
            <span className={styles['highlight']}>Telemedicine Apps:</span> Enable virtual patient care through licensed doctors and medical practitioners.
          </li>
          <li>
            <span className={styles['highlight']}>Fitness & Wellness Apps:</span> Track nutrition, calories, steps, pregnancy support, and sleep for healthier living.
          </li>
          <li>
            <span className={styles['highlight']}>Health Management Apps:</span> Monitor health conditions like blood sugar, blood pressure, heart rate, cholesterol, and more.
          </li>
        </ol>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Improving Patient Engagement</span>
        </p>

        <p className={styles['main-paragraph']}>
          Our apps focus on <span className={styles['highlight']}>patient engagement</span> through personalized treatment plans and easy access to medical records. Patients can view test reports anytime without visiting hospitals, enhancing convenience and care.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Minimizing Misdiagnosis</span>
        </p>

        <p className={styles['main-paragraph']}>
          Digital record management ensures accurate patient data, reducing chances of misdiagnosis. Doctors can prescribe precise medicines by analyzing complete patient history, allergies, and test results.
        </p>

        {/* Section Heading */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Ease of Payment</span>
        </p>

        <p className={styles['main-paragraph']}>
          We integrate secure payment gateways for <span className={styles['highlight']}>instant and hassle-free billing</span>. Patients no longer need to wait in long queues, ensuring a seamless healthcare experience.
        </p>

        {/* Footer / CTA Section */}
        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we build powerful, user-friendly 
          <a href="tel:+919971731257" className={styles['link-style']}> Android App Development Services </a> 
          tailored to your healthcare business needs. Whether it’s iOS, Android, or cross-platform, our expert developers create high-performance apps that deliver seamless patient experiences, strong functionality, and scalable growth.
        </p>

      </div>
    </>
  );
}
