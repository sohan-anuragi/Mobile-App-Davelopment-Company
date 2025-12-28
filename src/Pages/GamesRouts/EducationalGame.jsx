import img from '../Technology/RoutImg/RoutImg.jpg';
import styles from '../Technology/TechnologyPagesStyle/Technology.module.css';

export default function EducationalGameDev() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles['image-container']}>
        <img
          src={img}
          alt="Educational Game Development Company"
          className={styles['hero-image']}
        />
        <div className={styles['overlay-text']}>
          <h1>Educational Game Development</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles['content-section']}>

        <p className={styles['intro-paragraph']}>
          Gone are the days when students learnt from books and textbooks. In today’s tech-savvy world,
          there are a wide range of <span className={styles['highlight']}>educational game applications</span> 
          that help students learn beyond traditional methods.
        </p>

        <p className={styles['intro-paragraph']}>
          Whether it's <span className={styles['highlight']}>mathematics, science, language, art,</span> 
          or any other subject, students can grasp complex concepts in a fun and interactive way.
          The internet is full of e-books, PDFs, and educational games that build strong fundamentals and
          help children apply knowledge in real life.
        </p>

        <p className={styles['intro-paragraph']}>
          Parents worried about their kids' education can now relax — there are countless 
          <b> educational games </b> available that simplify even the most challenging topics.
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Benefits of Hiring I-Softinc for Educational Game Development</span>
        </p>

        <ul className={styles['unordered-list']}>
          <li>We have the best team to develop educational games.</li>
          <li>Our experts have strong knowledge across multiple subjects.</li>
          <li>We design and develop as per educational standards and requirements.</li>
          <li>We test everything thoroughly before delivery.</li>
          <li>We ensure the game is extremely user-friendly for kids.</li>
        </ul>

        <p className={styles['main-paragraph']}>
          Hiring us for educational game development will help you see how beneficial our services are.
          We work 24×7 and provide complete assistance. Hire us now and get your
          <span className={styles['highlight']}> educational game ready at an affordable price.</span>
        </p>

        <p className={styles['section-heading']}>
          <span className={styles['highlight']}>Contact Us</span>
        </p>

        <p className={styles['main-paragraph']}>
          Reach our experts at
          <a href="mailto:sales@isoftinc.com" className={styles['link-style']}>
            {' '}sales@isoftinc.com
          </a>
          {' '}to build your custom educational game.
        </p>
      </div>
    </>
  );
}
