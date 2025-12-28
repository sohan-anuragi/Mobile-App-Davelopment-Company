import appImg from "./carousel-img/app-dav2.jpg";
import bcImg from "./carousel-img/blockchain.jpg";
import styles from "./carousel-style/carousel.module.css";
import eComImg from "./carousel-img/ecommerce.png";
import aiImg from "./carousel-img/ai.jpg";

// ✅ Note: Ensure you import bootstrap JS in main.jsx/index.js for carousel functionality
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ImageSlider() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel" // ✅ Added: makes carousel auto-start
        data-bs-interval="5000" // ✅ Added: sets auto-slide interval to 5000ms (5 sec)
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
                We turn your business ideas into powerful mobile experiences
                that people love to use
              </p>
              <a
                href="/applayout/android-app"
                className={`${styles["carousel-btn"]}`}
              >
                Inquery Now
              </a>
            </div>
            <img
              src={appImg}
              className={`${styles["img1"]} d-block w-100`}
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
              <a
                href="/applayout/ecommerce-development"
                className={styles["carousel-btn"]}
              >
                Inquery Now
              </a>
            </div>
            <img
              src={eComImg}
              className={`${styles["img1"]} d-block w-100`}
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
              <a
                href="/applayout/blockchain-development"
                className={styles["carousel-btn"]}
              >
                Inquery Now
              </a>
            </div>
            <img
              src={bcImg}
              className={`${styles["img1"]} d-block w-100`}
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
                We create intelligent solutions that enhance business
                efficiency.
              </p>
              <a
                href="/applayout/ai-development"
                className={styles["carousel-btn"]}
              >
                Inquery Now
              </a>
            </div>
            <img
              src={aiImg}
              className={`${styles["img1"]} d-block w-100`}
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
    </>
  );
}
