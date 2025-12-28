import AwardBar from "./award-bar";
import FooterContact from "./footer-contact";
import CopyRight from "./footer-copyright";
import QuickLinks from "./quick-links";
import ServiceLinks from "./service-links";


export default function Footer(){
    return (
        <>
        <FooterContact></FooterContact>
        <AwardBar></AwardBar>
        <ServiceLinks></ServiceLinks>
        <CopyRight></CopyRight>
        </>
    )
}