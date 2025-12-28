import TransformingBar from "./transforming-bar/transformingbar.jsx";
import OurServices from "./ourservices-bar/ourservicesbar.jsx";
import MainCarousel from "./main-carousel/main-carousel.jsx";
import OurClients from "./Our-clients/Our-clients.jsx";
import OurPartner from "./Our-partner/Our-partner.jsx";
import OurProjects from "./Our-projects/Our-projects.jsx";
import OurStartups from "./Our-startups/Our-startups.jsx";
import OurTechnologies from "./Our-technologies/Our-technologies.jsx";
import YoutubeVdos from "./youtube-vdos/youtube-vdos.jsx";

export default function Main() {
  return (
    <>
      <TransformingBar></TransformingBar>
      <OurServices></OurServices>
      <MainCarousel></MainCarousel>
      <OurClients></OurClients>
      <OurPartner></OurPartner>
      <OurProjects></OurProjects>
      <OurStartups></OurStartups>
      <OurTechnologies></OurTechnologies>
      <YoutubeVdos></YoutubeVdos>
    </>
  );
}
