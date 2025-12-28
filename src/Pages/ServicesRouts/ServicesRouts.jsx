import { Children } from "react";
import WebDevelopment from "./WebDevelopment.jsx";
import AppLayout from "../../AppLayout.jsx";
import GraphicDesign from "./GraphicDesign.jsx";
import OracleDBA from "./OracleDBA.jsx";
import AndroidServices from "./AndroidServices.jsx";
import MongoDBDevelopment from "./MongoDb.jsx";
import Iphone from "./iPhone.jsx";
import FlutterDevelopment from "./FlutterService.jsx";
import HybridAppDevelopment from "./HybridServices.jsx";
import WearableAppSolutions from "./WearableAppService.jsx";
import PHPMySQLDevelopment from "./PhpMySql.jsx";
import LaravelWebDevelopment from "./LaravelServices.jsx";
import ReactWebDevelopmentServices from "./ReactWebServices.jsx";
import AngularServices from "./AngularServices.jsx";
import WordPressServices from "./WordPressServices.jsx";

export const ServicesRouts = [
    {path: '/applayout', element: <AppLayout />, children:[
        {path: 'web-development', element: <WebDevelopment />},
        {path: 'graphic-design', element: <GraphicDesign />},
        {path: 'oracle-dba', element: <OracleDBA />},
        {path: 'android-services', element: <AndroidServices />},
        {path: 'mongodb-development', element: <MongoDBDevelopment />},
        {path: 'iphone', element: <Iphone></Iphone>},
        {path: 'flutter-development', element: <FlutterDevelopment />},
        {path: 'hybrid-development', element: <HybridAppDevelopment />},
        {path: 'wearable-app-solutions', element: <WearableAppSolutions />},
        {path: 'PHP-mysql-development', element: <PHPMySQLDevelopment />},
        {path: 'laravel-web-development', element: <LaravelWebDevelopment />},
        {path: 'react-web-development', element: <ReactWebDevelopmentServices />},
        {path: 'angular-js-web-development', element: <AngularServices />},
        {path: 'wordpress-web-development', element: <WordPressServices />}
    ]}
]