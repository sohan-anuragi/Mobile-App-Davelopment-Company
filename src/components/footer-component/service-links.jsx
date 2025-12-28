import styles from './footer-styles/quick-links.module.css'
import { IoIosArrowForward } from "react-icons/io";


export default function ServiceLinks(){

const service = [
  [
    { text: "Website Design Services", icon: <IoIosArrowForward /> },
    { text: "Graphic Design Services", icon: <IoIosArrowForward /> },
    { text: "Oracle DBA Services", icon: <IoIosArrowForward /> },
    { text: "MongoDB Development", icon: <IoIosArrowForward /> },
    { text: "CRM Software Development", icon: <IoIosArrowForward /> }
  ],
  [
    { text: "Android App Development Services", icon: <IoIosArrowForward /> },
    { text: "iOS App Development Services", icon: <IoIosArrowForward /> },
    { text: "Flutter App Development", icon: <IoIosArrowForward /> },
    { text: "Hybrid Application Development", icon: <IoIosArrowForward /> },
    { text: "Wearable App Development", icon: <IoIosArrowForward /> }
  ],
  [
    { text: "PHP MySQL Development", icon: <IoIosArrowForward /> },
    { text: "Laravel Web Development", icon: <IoIosArrowForward /> },
    { text: "React Web Development", icon: <IoIosArrowForward /> },
    { text: "Angular JS Web Development", icon: <IoIosArrowForward /> },
    { text: "WordPress Web Development", icon: <IoIosArrowForward /> }
  ]
];


    return (
          <>
          <div className={styles['service-heading-container']}>
          <h3 className={styles['service-heading']}>
            Our Services
          </h3>
          <div className={styles['servicelinks-container']}>
          {service.map((obj) => (
           <div className={styles['obj-container']}>
             {obj.map((data) => (
                <a href='#' className={styles['data-container']}>
                    <span className={styles['span-icon']}>
                        {data.icon}
                    </span>
                    <div className={styles['heading-container']}>
                        {data.text}
                    </div>
                </a>
             ))}
           </div>
          ))}
          </div>
          </div>
         </>
       )
}