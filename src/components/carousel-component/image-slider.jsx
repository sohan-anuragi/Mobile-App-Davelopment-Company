import appImg from "./carousel-img/app-dav2.webp";
import bcImg from "./carousel-img/blockchain.webp";
import styles from "./carousel-style/carousel.module.css";
import eComImg from "./carousel-img/ecommerce.webp";
import aiImg from "./carousel-img/ai.webp";
import { Link } from "react-router-dom";

// ✅ Note: Ensure you import bootstrap JS in main.jsx/index.js for carousel functionality
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ImageSlider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
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

      <div className="carousel-inner">
        {/* ✅ Slide 1: App Development */}
        <div className={`${styles["img-div"]} carousel-item active`}>
          <div className={styles["info-container"]}>
            <h4 className={styles["carousel-heading"]}>
              App Davlopment <br /> Company In India
            </h4>
            <p className={styles["carousel-para"]}>
              We are leading mobile App Davlopment company in india,
              <br />
              We turn your business ideas into powerful mobile experiences that
              people love to use
            </p>
            <Link
              to="/applayout/android-app"
              className={styles["carousel-btn"]}
            >
              Inquery Now
            </Link>
          </div>
          <img
            src={appImg}
            className={`${styles["img1"]} d-block w-100`}
            loading="lazy"
            alt="App Development"
          />
        </div>

        {/* ✅ Slide 2: E-Commerce */}
        <div className="carousel-item">
          <div className={styles["info-container"]}>
            <h4 className={styles["carousel-heading"]}>
              Crafting Scale <br /> E-commerce Solution
            </h4>
            <p className={styles["carousel-para"]}>
              We are a leading E-Commerce development company in India.
              <br />
              We build online stores that boost sales and deliver seamless
              shopping experiences.
            </p>
            <Link
              to="/applayout/ecommerce-development"
              className={styles["carousel-btn"]}
            >
              Inquery Now
            </Link>
          </div>
          <img
            src={eComImg}
            className={`${styles["img1"]} d-block w-100`}
            loading="lazy"
            alt="E-commerce"
          />
        </div>

        {/* ✅ Slide 3: Blockchain */}
        <div className="carousel-item">
          <div className={styles["info-container"]}>
            <h4 className={styles["carousel-heading"]}>
              BlockChain Davlopment <br /> Company
            </h4>
            <p className={styles["carousel-para"]}>
              We are a leading Blockchain development company in India.
              <br />
              We build secure and scalable decentralized solutions.
            </p>
            <Link
              to="/applayout/blockchain-development"
              className={styles["carousel-btn"]}
            >
              Inquery Now
            </Link>
          </div>
          <img
            src={bcImg}
            className={`${styles["img1"]} d-block w-100`}
            loading="lazy"
            alt="Blockchain"
          />
        </div>

        {/* ✅ Slide 4: AI */}
        <div className="carousel-item">
          <div className={styles["info-container"]}>
            <h4 className={styles["carousel-heading"]}>
              Artificial Intelligence
            </h4>
            <p className={styles["carousel-para"]}>
              We are a leading AI development company in India.
              <br />
              We create intelligent solutions that enhance business efficiency.
            </p>
            <Link
              to="/applayout/ai-development"
              className={styles["carousel-btn"]}
            >
              Inquery Now
            </Link>
          </div>
          <img
            src={aiImg}
            className={`${styles["img1"]} d-block w-100`}
            loading="lazy"
            alt="AI"
          />
        </div>
      </div>

      {/* ✅ Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
