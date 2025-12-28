import { softwareIcons } from "./icons";
import styles from "./header-styles/navbar-container.module.css";
import { HeaderDataContext } from "./header-context.jsx";
import { useContext } from "react";
import ContactBox from "./contact-box.jsx";
import { Link } from "react-router-dom";

export default function SoftwereBar() {
  const software = [
    {
      textIcon: [
        {
          text: "Online Shopping Software",
          icon: softwareIcons.OnlineShopping,
          link: "/applayout/ecommercemobileapp",
        },
        {
          text: "Hospital Management Software",
          icon: softwareIcons.HospitalMgmt,
          link: "/applayout/healthcaremobileapp",
        },
        {
          text: "Hotel Management Software",
          icon: softwareIcons.HotelMgmt,
          link: "/applayout/healthcaremobileapp",
        },
        {
          text: "HR Management Software",
          icon: softwareIcons.HRMgmt,
          link: "/applayout/eventmobileapp",
        },
        {
          text: "Logistics Management Software",
          icon: softwareIcons.LogisticsMgmt,
          link: "/applayout/travelmobileapp",
        },
        {
          text: "Retail ERP Management Software",
          icon: softwareIcons.RetailERP,
          link: "/applayout/retailmobileapp",
        },
        {
          text: "Banking Software Solution",
          icon: softwareIcons.BankingSoftware,
          link: "/applayout/bankingmobileapp",
        },
      ],
    },
    {
      textIcon: [
        {
          text: "LMS Software",
          icon: softwareIcons.LMSSoftware,
          link: "/applayout/elearningmobileapp",
        },
        {
          text: "On Demand Mobile App Development",
          icon: softwareIcons.OnDemandApp,
          link: "/applayout/ondemandmobileapp",
        },
        {
          text: "Restaurant Management Software",
          icon: softwareIcons.RestaurantMgmt,
          link: "/applayout/restaurantmobileapp",
        },
        {
          text: "Food App Development",
          icon: softwareIcons.FoodApp,
          link: "/applayout/foodmobileapp",
        },
        {
          text: "Taxi Management Software",
          icon: softwareIcons.TaxiMgmt,
          link: "/applayout/taximobileapp",
        },
        {
          text: "Event & Ticketing Software",
          icon: softwareIcons.EventTicketing,
          link: "/applayout/eventmobileapp",
        },
        {
          text: "eLearning Application Development",
          icon: softwareIcons.eLearningApp,
          link: "/applayout/elearningmobileapp",
        },
      ],
    },
  ];

  const { toggle2, hoverEnter, hoverLeave } = useContext(HeaderDataContext);

  return (
    <div
      className={styles["drop-box2"]}
      onMouseEnter={() => hoverEnter(toggle2)}
      onMouseLeave={() => hoverLeave()}
    >
      <div className={styles["drop-box"]}>
        {software.map((colum, idx) => (
          <div className={styles["inner-box"]} key={idx}>
            {colum.textIcon.map((ram, ridx) => (
              <Link key={ridx} to={ram.link} className={styles["inner-a"]}>
                <span className={styles["icon-span"]}>{ram.icon}</span>
                <div className={styles["heading-div"]}>{ram.text}</div>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <ContactBox />
    </div>
  );
}
