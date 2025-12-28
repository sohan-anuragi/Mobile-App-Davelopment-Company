import styles from "./footer-styles/quick-links.module.css";
import { FaPhone } from "react-icons/fa6";

export default function QL1() {
  const data = [
    //     {
    //   heading: "logo",
    //   links: [
    //     'We are a leading mobile app development company with over 15 years of experience and a team of 400 skilled developers.',
    //   ]
    // },
    {
      heading: "Technologies",
      links: [
        "Android",
        "iOS",
        "React",
        "Magento",
        "Laravel",
        "Java",
        "Flutter",
        "Angular",
        "Kotlin",
        "Python",
        "PHP",
        "Node Js",
        "Dot Net",
      ],
    },
    {
      heading: "Quick Links",
      links: ["Contact us", "FAQs", "Careers", "Testimonials"],
    },
    {
      heading: "Locations",
      links: [
        "Noida",
        "Delhi",
        "Mumbai",
        "Pune",
        "Hyderabad",
        "Bangalore",
        "Chennai",
        "Gurgaon",
        "USA",
        "UK",
        "Germany",
      ],
    },
    {
      heading: "Contact us",
      links: [`764-982-7068`, "sales@i-softinc.com", "764-982-7068"],
    },
  ];

  return (
    <>
      <div className={styles["ql1-container"]}>
        {data.map((obj) => (
          <div className={styles["links-container"]}>
            <h3 className={styles["ql1-heading"]}>{obj.heading}</h3>
            <div className={styles["link-container"]}>
              {obj.links.map((link) => (
                <a className={styles["ql-a"]} href="#">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
