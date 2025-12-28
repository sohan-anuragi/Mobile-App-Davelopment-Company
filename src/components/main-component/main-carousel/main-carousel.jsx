import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./main-carousel-style/main-carousel.module.css";
import carImg1 from "./main-carousel-img/img1.jpg";
import carImg2 from "./main-carousel-img/img2.jpg";
import carImg3 from "./main-carousel-img/img3.jpg";
import carImg4 from "./main-carousel-img/img4.jpg";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";

export default function MainCarousel() {
  const [fixed, setFixed] = useState(false);

  const myRef = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible((currState) => {
            const newVisible = [...currState];
            newVisible[myRef.current.indexOf(entry.target)] = true;
            return newVisible;
          });
        }
      });
    });
    myRef.current.forEach((c) => {
      observer.observe(c);
    });
  }, []);

  return (
    <div className={styles["outer-container"]}>
      <h3
        className={`${styles["carousel-heading"]} ${
          visible[0] ? styles["carousel-heading2"] : ""
        }`}
        ref={(el) => (myRef.current[0] = el)}
      >
        We Are Proud of our Rich Portfolio!
      </h3>
      <p
        className={styles["carousel-para"]}
        ref={(el) => (myRef.current[1] = el)}
      >
        We proudly present our rich portfolio, highlighting our commitment to
        excellence and successful projects that transform businesses.
      </p>
      <div
        className={`${
          fixed ? styles["outer-fixed-container"] : styles["not-fixed"]
        }`}
      >
        <div
          className={fixed ? styles["cross-btn"] : styles["no-cross-btn"]}
          onClick={() => setFixed(false)}
        >
          <RxCross2 />
        </div>
        <div
          className={styles["carousel-container"]}
          onClick={() => setFixed(true)}
        >
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000" // 5 sec auto-slide
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={carImg1}
                  className={`d-block w-100 ${styles["car-img1"]}`}
                  alt="Service 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={carImg2}
                  className={`d-block w-100 ${styles["car-img1"]}`}
                  alt="Service 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={carImg3}
                  className={`d-block w-100 ${styles["car-img1"]}`}
                  alt="Service 3"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={carImg4}
                  className={`d-block w-100 ${styles["car-img1"]}`}
                  alt="Service 4"
                />
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
