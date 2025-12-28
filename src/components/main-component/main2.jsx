import TransformingBar from './transforming-bar/transformingbar'
import OurServices from './ourservices-bar/ourservicesbar'
import MainCarousel from './main-carousel/main-carousel'
import OurClients from './Our-clients/Our-clients'
import OurPartner from './Our-partner/Our-partner'
import OurProjects from './Our-projects/Our-projects'
import OurStartups from './Our-startups/Our-startups'
import OurTechnologies from './Our-technologies/Our-technologies'
import YoutubeVdos from './youtube-vdos/youtube-vdos'

export default function Main(){
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
    )
}