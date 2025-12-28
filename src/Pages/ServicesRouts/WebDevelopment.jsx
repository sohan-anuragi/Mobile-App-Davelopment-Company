import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function WebDevelopment() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="Website Design Services" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>Website Design Services</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>I-Softinic Technologies Provides Custom Web Design For A Flawless Business Module</span>
        </p>

        <p className={styles['main-paragraph']}>
          Join us at <a href="#" className={styles['link-style']}>Aman Technologies</a> for a custom site optimized for SEO and for mobile. Apart from getting custom software development from our top-notch custom software development company, we offer the best website design practices to help you gain higher traffic from major search engines like <span className={styles['highlight']}>Google, Yahoo, and Bing</span>.
        </p>

        <p className={styles['main-paragraph']}>
          We are a leading <span className={styles['highlight']}>web design agency</span> with an award-winning team that creates effective and innovative websites to capture your brand identity. These designs improve conversion rates, maximize revenue, and help your business grow.
        </p>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Designing a website properly is a necessity these days</span>
        </p>

        <p className={styles['main-paragraph']}>
          In the digital world, the website is the first interaction consumers have with your business. Around <span className={styles['highlight']}>95% of first impressions</span> depend on website design. Our services help you create a strong, professional online presence.
        </p>

        <p className={styles['main-paragraph']}>
          We have partnered with startups and enterprises, generating over <span className={styles['highlight']}>$3 billion in revenue</span> for our clients. With multiple awards, our custom-designed websites meet the expectations of top software development companies.
        </p>

        <p className={styles['main-paragraph']}>
          Contact us at <a href="tel:+919971731257" className={styles['link-style']}>+91 997 173 1257</a> and share your business details. We will create the best custom website for your needs.
        </p>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Get an instant quote</span>
        </p>

        <p className={styles['main-paragraph']}>
          Visit our official website and use the sliders to specify your requirements. Our <span className={styles['highlight']}>IT software company</span> will return with a transparent pricing estimate.
        </p>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Benefits of Hiring I-Softinic for Website Design Services:</span>
        </p>

        <ul className={styles['benefits-list']}>
          <li>Young and highly skilled team</li>
          <li>Industry-specific design approach</li>
          <li>On-time project delivery</li>
          <li>Post-handover assistance</li>
          <li>Affordable and budget-friendly design packages</li>
        </ul>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>We Offer the Best Mobile App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          From concept to launch, we create powerful and user-friendly <span className={styles['highlight']}>mobile applications</span> tailored to your business. Whether <span className={styles['highlight']}>iOS, Android, or cross-platform</span>, we build high-performance apps with seamless UX and scalable architecture.
        </p>

        <p className={styles['main-paragraph']}>
          For more details, contact us at <a href="mailto:sales@i-softinc.com" className={styles['link-style']}>sales@i-softinc.com</a>.
        </p>
      </div>
    </>
  );
}
