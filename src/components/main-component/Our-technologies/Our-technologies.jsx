import Backend from "./backend.jsx";
import DataBase from "./data-base.jsx";
import Frontend from "./frontend.jsx";
import MobileApp from "./mobile-app.jsx";
import OurTechnologiesHeading from "./Our-technologies-headings.jsx";
import styles from "./Our-technologies-style/Our-technologies.module.css";
import { useState } from "react";

export default function OurTechnologies() {
  const [toggleBlue, setToggleBlue] = useState("Mobile App");

  const handleOnclick = (variable) => {
    setToggleBlue(variable);
  };

  return (
    <>
      <div className={styles["outer-container2"]}>
        <h3 className={styles["heading"]}>
          Technologies We Use For Development
        </h3>

        <p className={styles["para"]}>
          We leverage a wide array of technologies, utilizing the latest and
          most trusted tech stacks and platforms.
        </p>
        <div className={styles["Our-technologies-container"]}>
          <OurTechnologiesHeading
            handleOnclick={handleOnclick}
            toggleBlue={toggleBlue}
          ></OurTechnologiesHeading>
          {toggleBlue === "Mobile App" && <MobileApp></MobileApp>}
          {toggleBlue === "Backend" && <Backend></Backend>}
          {toggleBlue === "Frontend" && <Frontend></Frontend>}
          {toggleBlue === "Data Base" && <DataBase></DataBase>}
        </div>
      </div>
    </>
  );
}
