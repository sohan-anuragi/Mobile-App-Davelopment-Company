import Header from "./components/header-components/header.jsx";
import OurProjects from "./components/main-component/Our-projects/Our-projects.jsx";
import AwardBar from "./components/footer-component/award-bar.jsx";
import ContactBox from "./components/header-components/contact-box.jsx";
import FooterContact from "./components/footer-component/footer-contact.jsx";
import QuickLinks from "./components/footer-component/quick-links.jsx";
import ServiceLinks from "./components/footer-component/service-links.jsx";
import CopyRight from "./components/footer-component/footer-copyright.jsx";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <OurProjects />
      <AwardBar />
      <FooterContact />
      <QuickLinks />
      <ServiceLinks />
      <CopyRight />
    </>
  );
}
