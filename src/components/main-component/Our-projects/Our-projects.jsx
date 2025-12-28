import styles from "./Our-projects-style/Our-projects.module.css";
import img1 from "./Our-projects-img/project1.webp";
import img2 from "./Our-projects-img/project2.webp";
import img3 from "./Our-projects-img/project3.webp";
import img4 from "./Our-projects-img/project4.webp";
// removed unused imports img5, img6
import { useEffect, useRef } from "react";

export default function OurProjects() {
  const imgs = [img1, img2, img3, img4];
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["animate-in"]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const imgContainers = containerRef.current?.querySelectorAll(
      `.${styles["img-container"]}`
    );
    imgContainers?.forEach((container) => observer.observe(container));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="ourwork" className={styles["outer-container"]}>
        <h3 className={styles["heading"]}>
          Our Portfolio - Showcasing Breakthrough Projects
        </h3>

        <div className={styles["client-container"]} ref={containerRef}>
          {imgs.map((img, index) => (
            <a href="#" key={index} className={styles["img-container"]}>
              <img src={img} className={styles["imgs"]}></img>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
