import styles from "./transforming-styles/transformingbar.module.css";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa6";
import gemini from "./transformingbar-img/gemini.png";
import { useEffect, useRef, useState } from "react";

export default function TransformingBar() {
  const ref = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible((currVisible) => {
            const newVisible = [...currVisible];
            newVisible[ref.current.indexOf(entry.target)] = true;
            return newVisible;
          });
        }
      });
    });
    ref.current.forEach((c) => {
      observer.observe(c);
    });
  });

  return (
    <>
      <div className={styles["transformingbar-container"]}>
        <div
          className={`${styles["transformingbar-img"]} ${
            visible[0] ? styles["transformingbar-img2"] : ""
          }`}
          ref={(el) => (ref.current[0] = el)}
        >
          <img src={gemini} className={styles["gemini"]}></img>
        </div>
        <div
          className={`${styles["transformingbar-texts"]} ${
            visible[1] ? styles["transformingbar-text2"] : ""
          }`}
          ref={(el) => (ref.current[1] = el)}
        >
          <p className={styles["transformingbar-para1"]}>
            Best App development Company
          </p>
          <h3 className={styles["transformingbar-heading"]}>
            Transforming Ideas into Innovative Mobile Apps
          </h3>
          <p className={styles["transformingbar-para2"]}>
            We specialize in turning your ideas into innovative mobile apps that
            are user-friendly, engaging, and tailored to meet your business
            needs, driving success and growth.
          </p>
          <div className={styles["partner-logo-container"]}>
            <div className={styles["logo-container"]}>
              <FaHandshakeSimple />
            </div>
            <div className={styles["heading-para-container"]}>
              <h5 className={styles["partner-heading"]}>
                Your Mobile App Partner
              </h5>
              <p className={styles["partner-para"]}>
                We collaborate with you to design and develop <br></br>mobile
                apps that drive your business forward.
              </p>
            </div>
          </div>

          <div className={styles["partner-logo-container"]}>
            <div className={styles["logo-container"]}>
              <FaMobile />
            </div>
            <div className={styles["heading-para-container"]}>
              <h5 className={styles["partner-heading"]}>
                Build Powerful Mobile App
              </h5>
              <p className={styles["partner-para"]}>
                Develop robust and scalable mobile applications <br></br> that
                enhance user engagement and performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
