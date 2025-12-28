import AwardBar from "./award-bar.jsx";
import FooterContact from "./footer-contact.jsx";
import CopyRight from "./footer-copyright.jsx";
import QuickLinks from "./quick-links.jsx";
import ServiceLinks from "./service-links.jsx";

export default function Footer() {
  return (
    <>
      <FooterContact></FooterContact>
      <AwardBar></AwardBar>
      <ServiceLinks></ServiceLinks>
      <CopyRight></CopyRight>
    </>
  );
}
