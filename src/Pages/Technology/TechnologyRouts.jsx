import AppLayout from "../../AppLayout.jsx";
import CommentSlider from "../../components/main-component/youtube-vdos/swiper.jsx";
import OurServices from "../../components/main-component/ourservices-bar/ourservicesbar.jsx";
import AndroidApp from "./AndroidApp.jsx";
import IosDevelopment from "./IOS.jsx";
import ReactDevelopment from "./ReactDevelopment.jsx";
import FlutterDevelopment from "./FlutterDevelopment.jsx";
import XamarinDevelopment from "./XamarinDevelopment.jsx";
import WordPressDevelopment from "./WordPressDevelopment.jsx";
import JavaWebDevelopment from "./JavaWebDevelopment.jsx";
import PHPWebDevelopment from "./PHPWebDevelopment.jsx";
import NodeJsDevelopment from "./NodeJsDevelopment.jsx";
import OracleDevelopment from "./OracleDevelopment.jsx";
import DotNetDevelopment from "./DotNetDevelopment.jsx";
import BlockchainDevelopment from "./BlockchainDevelopment.jsx";
import AugmentedRealityDevelopment from "./AugmentedRealityDevelopment.jsx";
import IOTDevelopment from "./IOTDevelopment.jsx";
import AIDevelopment from "./AIDevelopment.jsx";
import CloudComputingDevelopment from "./CloudComputingDevelopment.jsx";

export const TechnologyRouts = [
  {
    path: '/applayout',
    element: <AppLayout />,
    children: [
      { path: 'android-app', element: <AndroidApp></AndroidApp> },
      { path: 'ios-app', element:<IosDevelopment></IosDevelopment> },
      { path: 'react-development', element:<ReactDevelopment></ReactDevelopment> },
      { path: 'flutter-development', element:<FlutterDevelopment></FlutterDevelopment> },
      { path: 'xamarin-development', element:<XamarinDevelopment></XamarinDevelopment> },
      { path: 'wordpress-development', element:<WordPressDevelopment></WordPressDevelopment> },
      { path: 'java-web-development', element:<JavaWebDevelopment></JavaWebDevelopment> },
      { path: 'php-web-development', element:<PHPWebDevelopment></PHPWebDevelopment> },
      { path: 'nodejs-development', element:<NodeJsDevelopment></NodeJsDevelopment> },
      { path: 'oracle-development', element:<OracleDevelopment></OracleDevelopment> },
      { path: 'dotnet-development', element:<DotNetDevelopment></DotNetDevelopment> },
      { path: 'blockchain-development', element:<BlockchainDevelopment></BlockchainDevelopment> },
      { path: 'augmented-reality-development', element:<AugmentedRealityDevelopment></AugmentedRealityDevelopment> },
      { path: 'iot-development', element:<IOTDevelopment></IOTDevelopment> },
      { path: 'ai-development', element:<AIDevelopment></AIDevelopment> },
      { path: 'cloud-computing-development', element:<CloudComputingDevelopment></CloudComputingDevelopment> },
    ]
  }
];