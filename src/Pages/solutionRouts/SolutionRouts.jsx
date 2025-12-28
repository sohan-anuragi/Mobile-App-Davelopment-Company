import { children } from "react";
import  AppLayout  from "../../AppLayout";
import EducationMobileApp from "./EducationMobileApp";
import HealthcareMobileApp from "./HealthcareMobileApp";
import RetailMobileApp from "./RetailMobileApp";
import FintechMobileApp from "./FintageMobileApp";
import ElearningMobileApp from "./ElearningMobileApp";
import SportMobileApp from "./SportsMobileApp";
import CasinoMobileAppApp from "./CasinoMobileApp";
import GamingMobileApp from "./GamingMobileApp";
import TaxiMobileApp from "./TaxiMobileApp";
import MarketplaceMobileApp from "./MarketplaceMobileApp";
import EcommerceMobileApp from "./EcommerceMobileApp";
import HospitalMobileApp from "./HospitalMobileApp";
import TravelMobileApp from "./TravelMobileApp";
import AviationMobileApp from "./AviationMobileApp";
import FoodMobileApp from "./FoodMobileApp";
import OnDemandMobileApp from "./OnDemandMobileApp";
import RestaurantMobileApp from "./RestorantMobileApp";
import JewelleryMobileApp from "./JewelleryMobileApp";
import EntertainmentApp from "./EntertainmentMobileApp";
import AutomotiveMobileApp from "./AutomativeMobileApp";
import AgricultureMobileApp from "./AgricultureMobileApp";
import EventMobileApp from "./EventMobileApp";
import BankingMobileApp from "./BankingMobileApp";


export const solutionRouts = [
    {path: 'applayout', element:<AppLayout />, children:[
       {path: 'educationmobileapp', element: <EducationMobileApp />},
       {path: 'healthcaremobileapp', element: <HealthcareMobileApp />},
       {path: 'retailmobileapp', element: <RetailMobileApp />},
       {path: 'fintechmobileapp', element: <FintechMobileApp />},
       {path: 'elearningmobileapp', element:<ElearningMobileApp />},
       {path: 'sportsmobileapp', element:<SportMobileApp />},
       {path: 'casinomobileapp', element:<CasinoMobileAppApp />},
       {path: 'gamingmobileapp', element:<GamingMobileApp />},
       {path: 'taximobileapp', element:<TaxiMobileApp />},
       {path: 'marketplacemobileapp', element:<MarketplaceMobileApp />},
       {path: 'ecommercemobileapp', element:<EcommerceMobileApp />},
       {path: 'hospitalmobileapp', element:<HospitalMobileApp />},
       {path: 'travelmobileapp', element:<TravelMobileApp />},
       {path: 'aviationmobileapp', element:<AviationMobileApp />},
       {path: 'foodmobileapp', element:<FoodMobileApp />},
       {path: 'ondemandmobileapp', element:<OnDemandMobileApp />},
       {path: 'restaurantmobileapp', element:<RestaurantMobileApp />},
       {path: 'jewellerymobileapp', element:<JewelleryMobileApp />},
       {path: 'entertainmentmobileapp', element:<EntertainmentApp />},
       {path: 'automotivemobileapp', element:<AutomotiveMobileApp />},
       {path: 'agriculturemobileapp', element:<AgricultureMobileApp />},
       {path: 'eventmobileapp', element:<EventMobileApp />},
       {path: 'bankingmobileapp', element:<BankingMobileApp />}
    ]},


]