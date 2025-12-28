import styles from "./header-styles/navbar-container.module.css";
import { serviceIcons } from "./icons";
import { HeaderDataContext } from "./header-context.jsx";
import { useContext } from "react";
import ContactBox from "./contact-box.jsx";

export default function ServiceBar() {
  const service = [
    {
      heading: "SOFTWARE DEVELOPMENT",
      textIcon: [
        {
          text: "Website Design Services",
          icon: serviceIcons.WebsiteDesign,
          link: "/applayout/web-development",
        },
        {
          text: "Graphic Design Services",
          icon: serviceIcons.GraphicDesign,
          link: "/applayout/graphic-design",
        },
        {
          text: "Oracle DBA Services",
          icon: serviceIcons.OracleDBA,
          link: "/applayout/oracle-dba",
        },
        {
          text: "MongoDB Development",
          icon: serviceIcons.MongoDB,
          link: "/applayout/mongodb-development",
        },
        { text: "CRM Software Development", icon: serviceIcons.CRMSoftware },
      ],
    },
    {
      heading: "APP DEVELOPMENT",
      textIcon: [
        {
          text: "Android App Development Services",
          icon: serviceIcons.AndroidApp,
          link: "/applayout/android-services",
        },
        {
          text: "iOS App Development Services",
          icon: serviceIcons.iOSApp,
          link: "/applayout/iphone",
        },
        {
          text: "Flutter App Development",
          icon: serviceIcons.FlutterApp,
          link: "/applayout/flutter-development",
        },
        {
          text: "Hybrid Application Development",
          icon: serviceIcons.HybridApp,
          link: "/applayout/hybrid-development",
        },
        {
          text: "Wearable App Development",
          icon: serviceIcons.WearableApp,
          link: "/applayout/wearable-app-solutions",
        },
      ],
    },
    {
      heading: "WEB DEVELOPMENT",
      textIcon: [
        {
          text: "PHP MySQL Development",
          icon: serviceIcons.PHPMySQL,
          link: "/applayout/PHP-mysql-development",
        },
        {
          text: "Laravel Web Development",
          icon: serviceIcons.Laravel,
          link: "/applayout/laravel-web-development",
        },
        {
          text: "React Web Development",
          icon: serviceIcons.ReactWeb,
          link: "/applayout/react-web-development",
        },
        {
          text: "Angular JS Web Development",
          icon: serviceIcons.AngularJS,
          link: "/applayout/angular-js-web-development",
        },
        {
          text: "WordPress Web Development",
          icon: serviceIcons.WordPressWeb,
          link: "/applayout/wordpress-web-development",
        },
      ],
    },
  ];

  const { toggle2, hoverEnter, hoverLeave } = useContext(HeaderDataContext);

  return (
    <>
      <div
        className={styles["drop-box2"]}
        onMouseEnter={() => hoverEnter(toggle2)}
        onMouseLeave={() => hoverLeave()}
      >
        <div className={styles["drop-box"]}>
          {service.map((colum) => (
            <div className={styles["inner-box"]}>
              <h5 className={styles["heading"]}>{colum.heading}</h5>
              {colum.textIcon.map((ram) => (
                <a href={ram.link} className={styles["inner-a"]}>
                  <span className={styles["icon-span"]}>{ram.icon}</span>
                  <div className={styles["heading-div"]}>{ram.text}</div>
                </a>
              ))}
            </div>
          ))}
        </div>
        <ContactBox></ContactBox>
      </div>
    </>
  );
}
