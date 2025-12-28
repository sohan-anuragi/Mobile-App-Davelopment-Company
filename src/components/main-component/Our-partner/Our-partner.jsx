import styles from './Our-partner-style/Our-partner.module.css';
import img1 from './Our-partner-img/partner1.png';
import img2 from './Our-partner-img/partner2.svg';
import img3 from './Our-partner-img/partner3.png';
import img4 from './Our-partner-img/partner4.png';
import img5 from './Our-partner-img/partner5.jpg';
import img6 from './Our-partner-img/partner6.png';
import img7 from './Our-partner-img/partner7.jpg';
import img8 from './Our-partner-img/partner8.png';
import img9 from './Our-partner-img/partner9.jpg';
import img10 from './Our-partner-img/partner10.svg';
import { useEffect, useRef, useState } from 'react';

export default function OurPartner() {
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current);
      }
      setVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
  }, []);

  return (
    <>
      <div className={styles['outer-container']}>
        <h3
          className={visible ? styles['heading2'] : styles['heading']}
          ref={ref}
        >
          Our Technology Partners
        </h3>

        <div className={styles['client-container']}>
          {imgs.map((img, index) => (
            <div key={index} className={styles['img-container']}>
              <img src={img} className={styles['imgs']}></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}