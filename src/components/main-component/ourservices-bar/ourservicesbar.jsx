import HeadingPara from "./heading-para.jsx";
import styles from "./ourservices-styles/ourservices.module.css";
import ServicesCards from "./servicescards.jsx";

export default function OurServices() {
  return (
    <>
      <div className={styles["ourservices-container"]}>
        <HeadingPara></HeadingPara>
        <ServicesCards></ServicesCards>
        <div className={styles["service-btn-container"]}>
          <button className={styles["service-btn"]}>Request a Callback</button>
        </div>
      </div>
    </>
  );
}
