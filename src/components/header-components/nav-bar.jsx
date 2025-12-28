import styles from "./header-styles/navbar-container.module.css";
import CompanyLogo from "./company-logo.jsx";
import NavHeadings from "./nav-headings.jsx";
import DropBoxDataProvider from "./headerstore.jsx";
import DropBox from "./dropbox.jsx";
import NavHeadingsResponsive from "./nav-headings-responsive.jsx";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { SiTekton } from "react-icons/si";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    if (toggleMenu === false) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };

  return (
    <>
      <div href="#" className={`${styles["navbar-container"]}`}>
        <CompanyLogo></CompanyLogo>
        {window.innerWidth > 1030 && <NavHeadings></NavHeadings>}
        <div className={styles["menu-btn"]} onClick={handleMenu}>
          {toggleMenu === false ? (
            <IoMenu className={styles["menu-icon"]}></IoMenu>
          ) : (
            <RxCross2 className={styles["menu-icon"]}></RxCross2>
          )}
        </div>
      </div>
      {toggleMenu === true && <NavHeadingsResponsive></NavHeadingsResponsive>}
    </>
  );
}
