import img from './RoutImg/RoutImg.jpg';
import styles from './TechnologyPagesStyle/Technology.module.css';

export default function WordPressDevelopment() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="WordPress Development" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>WordPress Development</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>WordPress</span> is a simple yet quite robust <span className={styles['highlight']}>Content Management System</span> that helps businesses to make their strong online presence over the internet. Being an open source program, it comes with numerous features which help enterprises and organizations to boost their online presence and improve ROI. <span className={styles['highlight']}>Wordpress</span> is not just about developing a <span className={styles['highlight']}>feature-rich and interactive business website</span> but also for individuals to create their own blogging site. Therefore if you want to turn your dreams into reality by having an engaging business website and attractive blogger site then there is no need to look beyond than <a href="#" className={styles['link-style']}>WordPress development services</a> from <a href="#" className={styles['link-style']}>Aman</a>.
        </p>

        <p className={styles['main-paragraph']}>
          Being one of the renowned WordPress development companies, we take pride in offering a comprehensive WordPress development services to startups and businesses at cost-effective pricing. We have a team of highly talented and experienced <span className={styles['highlight']}>Wordpres Davlopers </span> who strives to provide top-notch and effective web solutions for a wide array of businesses using <span className={styles['highlight']}>cutting-edge WordPress technology</span>. Our sole focus is to provide cost-effective yet effective solutions to the clients as per their business needs and requirements.
        </p>
      </div>
    </>
  );
}
