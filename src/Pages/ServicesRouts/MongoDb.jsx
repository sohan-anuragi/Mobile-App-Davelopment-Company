import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function MongoDBDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img src={img} alt="MongoDB Development Services" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>MongoDB Development Services</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>I-Softinic Technologies</span> brings you the finest MongoDB developers
          to build powerful, scalable, and high-tech mobile and web applications powered by next-generation NoSQL databases.
          Designed for diverse business needs, our MongoDB development ensures unmatched performance.
        </p>

        <p className={styles['main-paragraph']}>
          Being recognized as one of the best <span className={styles['highlight']}>Custom Software Development Companies</span>, 
          we expanded our expertise by integrating a dedicated MongoDB development team — and the results have been exceptional.
          Along with providing top-notch <a href="tel:+919971731257" className={styles['link-style']}>Android App Development Services</a>, 
          we now offer complete MongoDB development solutions.
        </p>

        <h2 className={styles['section-heading']}>Why Choose Us for MongoDB Development?</h2>

        <ol className={styles['ordered-list']}>
          <li>Hassle-free and transparent payment processes.</li>
          <li>Dedicated MongoDB developers for all your database needs.</li>
          <li>Agile methodologies for faster, efficient development.</li>
          <li>Integrity and transparency in all operations.</li>
          <li>Years of experience delivering MongoDB solutions across industries.</li>
          <li>Flexible engagement models — full-time, hourly, or project-based.</li>
        </ol>

        <p className={styles['main-paragraph']}>
          For MongoDB services, call us at 
          <a href="tel:+919971731257" className={styles['link-style']}> +91 997-173-1257</a> 
          or email us at <a href="mailto:sales@localhost" className={styles['link-style']}>sales@localhost</a>. 
          Our experts are available on Skype as well for real-time discussions.
        </p>

        <h2 className={styles['section-heading']}>Our MongoDB Development Offerings</h2>

        <ol className={styles['ordered-list']}>
          <li>MEAN Stack Development</li>
          <li>Performance Optimization</li>
          <li>RESTful API Development</li>
          <li>Big Data Efficiency Solutions</li>
          <li>MongoDB Integration Services</li>
          <li>Maintenance & 24/7 Support</li>
        </ol>

        <p className={styles['intro-paragraph']}>
          Whenever you are looking for premium-quality MongoDB services,
          <span className={styles['highlight']}> I-Softinic Technologies </span>
          is just a call away. We promise high-end solutions with complete reliability.
        </p>

      </div>
    </>
  );
}
