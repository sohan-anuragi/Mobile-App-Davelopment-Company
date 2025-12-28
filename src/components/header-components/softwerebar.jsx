import { softwareIcons } from "./icons";
import styles from "./header-styles/navbar-container.module.css";
import { HeaderDataContext } from "./header-context.jsx";
import { useContext } from "react";
import ContactBox from "./contact-box.jsx";

export default function SoftwereBar() {
  const software = [
    {
      textIcon: [
        {
          text: "Online Shopping Software",
          icon: softwareIcons.OnlineShopping,
          link: "ecommercemobileapp",
        },
        {
          text: "Hospital Management Software",
          icon: softwareIcons.HospitalMgmt,
          link: "healthcaremobileapp",
        },
        {
          text: "Hotel Management Software",
          icon: softwareIcons.HotelMgmt,
          link: "healthcaremobileapp",
        },
        {
          text: "HR Management Software",
          icon: softwareIcons.HRMgmt,
          link: "eventmobileapp",
        },
        {
          text: "Logistics Management Software",
          icon: softwareIcons.LogisticsMgmt,
          link: "travelmobileapp",
        },
        {
          text: "Retail ERP Management Software",
          icon: softwareIcons.RetailERP,
          link: "retailmobileapp",
        },
        {
          text: "Banking Software Solution",
          icon: softwareIcons.BankingSoftware,
          link: "bankingmobileapp",
        },
      ],
    },
    {
      textIcon: [
        {
          text: "LMS Software",
          icon: softwareIcons.LMSSoftware,
          link: "elearningmobileapp",
        },
        {
          text: "On Demand Mobile App Development",
          icon: softwareIcons.OnDemandApp,
          link: "ondemandmobileapp",
        },
        {
          text: "Restaurant Management Software",
          icon: softwareIcons.RestaurantMgmt,
          link: "restaurantmobileapp",
        },
        {
          text: "Food App Development",
          icon: softwareIcons.FoodApp,
          link: "foodmobileapp",
        },
        {
          text: "Taxi Management Software",
          icon: softwareIcons.TaxiMgmt,
          link: "taximobileapp",
        },
        {
          text: "Event & Ticketing Software",
          icon: softwareIcons.EventTicketing,
          link: "eventmobileapp",
        },
        {
          text: "eLearning Application Development",
          icon: softwareIcons.eLearningApp,
          link: "elearningmobileapp",
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
              <a href={ram.link} className={styles["inner-a"]} key={ridx}>
                <span className={styles["icon-span"]}>{ram.icon}</span>
                <div className={styles["heading-div"]}>{ram.text}</div>
              </a>
            ))}
          </div>
        ))}
      </div>
      <ContactBox></ContactBox>
    </div>
  );
}
