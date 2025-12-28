import { solutionIcons } from "./icons"
import styles from './header-styles/navbar-container.module.css'
import { headerDataProvider } from './headerstore';
import { useContext } from 'react';
import ContactBox from "./contact-box";

export default function SolutionBar(){

 const solution = [
  {
    textIcon: [
      { text: "Education Mobile App Development Company", icon: solutionIcons.EducationApp, link: "educationmobileapp" },
      { text: "Healthcare Mobile App Development Company", icon: solutionIcons.HealthcareApp, link: "healthcaremobileapp" },
      { text: "Retail Mobile App Development Company", icon: solutionIcons.RetailApp, link: "retailmobileapp" },
      { text: "Fintech Mobile App Development Company", icon: solutionIcons.FintechApp, link: "fintechmobileapp" },
      { text: "ELearning Mobile App Development Company", icon: solutionIcons.ELearningApp, link: "elearningmobileapp" },
      { text: "Sport Mobile App Development Company", icon: solutionIcons.SportApp, link: "sportsmobileapp" },
      { text: "Casino Mobile App Development Company", icon: solutionIcons.CasinoApp, link: "casinomobileapp" },
      { text: "Gaming Mobile App Development Company", icon: solutionIcons.GamingApp, link: "gamingmobileapp" }
    ]
  },
  {
    textIcon: [
      { text: "Taxi Mobile App Development Company", icon: solutionIcons.TaxiApp, link: "taximobileapp" },
      { text: "Marketplace App Development Company", icon: solutionIcons.MarketplaceApp, link: "marketplacemobileapp" },
      { text: "eCommerce App Development Company", icon: solutionIcons.eCommerceApp, link: "ecommercemobileapp" },
      { text: "Hospital Mobile App Development Company", icon: solutionIcons.HospitalApp, link: "hospitalmobileapp" },
      { text: "Travel App Development Company", icon: solutionIcons.TravelApp, link: "travelmobileapp" },
      { text: "Aviation Mobile App Development Company", icon: solutionIcons.AviationApp , link: "aviationmobileapp"},
      { text: "Food Mobile App Development Company", icon: solutionIcons.FoodApp, link: "foodmobileapp" },
      { text: "onDemand Mobile App Development Company", icon: solutionIcons.OnDemandApp, link: "ondemandmobileapp" }
    ]
  },
  {
    textIcon: [
      { text: "Restaurant Mobile App Development Company", icon: solutionIcons.RestaurantApp, link: "restaurantmobileapp" },
      { text: "Jewellery Mobile App Development Company", icon: solutionIcons.JewelleryApp, link: "jewellerymobileapp" },
      { text: "Entertainment App Development Company", icon: solutionIcons.EntertainmentApp, link: "entertainmentmobileapp" },
      { text: "Automotive App Development Company", icon: solutionIcons.AutomotiveApp, link: "automotivemobileapp" },
      { text: "Agriculture App Development Company", icon: solutionIcons.AgricultureApp, link: "agriculturemobileapp" },
      { text: "Event Mobile App Development Company", icon: solutionIcons.EventApp, link: "eventmobileapp" },
      { text: "Banking Mobile App Development Company", icon: solutionIcons.BankingApp, link: "bankingmobileapp" },
      { text: "Custom Mobile App Development Company", icon: solutionIcons.CustomApp,link: "ondemandmobileapp" }
    ]
  }
];

    const {toggle2, hoverEnter,hoverLeave } = useContext(headerDataProvider)

    return (
          <>
          <div className={styles['drop-box2']}
                   onMouseEnter={() => hoverEnter(toggle2)}
                   onMouseLeave={() => hoverLeave()}>
                <div className={styles['drop-box']}>
           {solution.map((colum) => (
             <div className={styles['inner-box']}>
              {colum.textIcon.map((ram) => (
              <a href={ram.link} className={styles['inner-a']}>
               <span className={styles['icon-span']}>{ram.icon}</span>
               <div className={styles['heading-div']}>
                   {ram.text}
               </div>
             </a>
           ))}
             </div>
           ))}
             </div>
      <ContactBox></ContactBox>
    </div>
         </>
       )
}