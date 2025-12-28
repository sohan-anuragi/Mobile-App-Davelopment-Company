import img from "../Technology/RoutImg/RoutImg.jpg";
import styles from "../Technology/TechnologyPagesStyle/Technology.module.css";

export default function WordPressServices() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles["image-container"]}>
        <img
          src={img}
          alt="AngularJS Web Development Services"
          className={styles["hero-image"]}
        />
        <div className={styles["overlay-text"]}>
          <h1>AngularJS Web Development Services</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles["content-section"]}>
        <p className={styles["intro-paragraph"]}>
          <span className={styles["highlight"]}>AngularJS</span> is one of the
          most powerful open-source JavaScript frameworks used to create
          dynamic, secure, and high‑performance applications. At I‑Softinic
          Technologies, we specialize in developing cross‑platform and scalable
          web and mobile applications using the flexibility and strength of
          AngularJS.
        </p>

        <p className={styles["main-paragraph"]}>
          With AngularJS, we build robust solutions that are easy to maintain,
          extremely fast, and capable of handling complex web requirements. Our
          skilled developers ensure delivering feature‑rich platforms that help
          you stand out in today’s competitive market.
        </p>

        <p className={styles["main-paragraph"]}>
          Whether you need dynamic websites, advanced applications, or
          enterprise‑grade software — our expert AngularJS development services
          ensure you get modern, efficient, and scalable digital solutions
          tailored to your business needs.
        </p>

        {/* Section Heading */}
        <p className={styles["section-heading"]}>
          <span className={styles["highlight"]}>
            On‑Demand Mobile App Services
          </span>
        </p>

        <p className={styles["main-paragraph"]}>
          Need a customized on‑demand mobile app? Our professionals understand
          your requirements and deliver highly functional applications that
          support business growth. Make your business better with our expert
          development services — hire us today.
        </p>

        {/* Section Heading */}
        <p className={styles["section-heading"]}>
          <span className={styles["highlight"]}>
            Mobile App Development Services
          </span>
        </p>

        <p className={styles["main-paragraph"]}>
          From concept to launch, we build powerful and user‑friendly
          <a href="tel:+919971731257" className={styles["link-style"]}>
            {" "}
            Android App Development Services{" "}
          </a>
          tailored to your business needs. Whether it’s iOS, Android, or
          cross‑platform — our expert developers ensure seamless performance,
          strong functionality, and scalable growth. Let’s turn your idea into a
          world‑class mobile app.
        </p>
      </div>
    </>
  );
}
