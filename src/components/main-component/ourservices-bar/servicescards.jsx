import { FaMobileScreen } from "react-icons/fa6";
import { FaWindows } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import styles from "./ourservices-styles/ourservices.module.css";
import { useEffect, useRef, useState } from "react";

export default function ServicesCards() {
  const servicesCards = [
    {
      heading: "Mobile App Development",
      text: "We specialize in creating custom mobile applications for Android, iOS, and cross-platform use. Our apps are designed to offer seamless user experiences and are tailored to meet your business goals.",
      icon: <FaMobileScreen />,
      link: "/applayout/android-app",
    },
    {
      heading: "Software Development",
      text: "Our software development services focus on creating robust, customized solutions that improve efficiency, streamline operations, and meet the evolving demands of your business.",
      icon: <FaWindows />,
      link: "/applayout/software-development",
    },
    {
      heading: "Iot Development",
      text: "At i-Softinc, we develop advanced IoT applications that seamlessly connect devices, enabling smart automation, real-time data insights, and enhanced operational efficiency for businesses",
      icon: <FaWifi />,
      link: "/applayout/iot-development",
    },
    {
      heading: "Game Development",
      text: "We develop immersive and engaging games with top-notch graphics and interactive gameplay, delivering exceptional experiences across all platforms.",
      icon: <IoGameControllerOutline />,
      link: "/applayout/game-development",
    },
    {
      heading: "Ai Development",
      text: "Our AI development services leverage machine learning and advanced algorithms to deliver smart solutions that streamline processes and enhance decision-making efficiency.",
      icon: <FaRobot />,
      link: "/applayout/ai-development",
    },
    {
      heading: "Web Development",
      text: "We design and develop responsive, feature-rich websites that enhance your online presence, boost engagement, and drive business growth with scalable and innovative web solutions.",
      icon: <MdMonitor />,
      link: "/applayout/web-development",
    },
  ];

  const ref = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible((curVisible) => {
            const newVisible = [...curVisible];
            newVisible[ref.current.indexOf(entry.target)] = true;
            return newVisible;
          });
        }
      });
    });
    ref.current.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles["cards-container"]}>
        {servicesCards.map((cards, index) => (
          <div
            className={`${styles["card-container"]} ${
              visible[index] ? styles["card-container2"] : ""
            }`}
            ref={(el) => (ref.current[index] = el)}
          >
            <div className={styles["icon-container"]}>{cards.icon}</div>
            <h4 className={styles["card-heading"]}>{cards.heading}</h4>
            <p className={styles["card-para"]}>{cards.text}</p>
            <a href={cards.link || "#"}>
              <button
                type="button"
                class={`${styles["card-btn"]} btn btn-primary`}
              >
                Read More
              </button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
