import Header from './components/header-components/header';
import OurProjects from './components/main-component/Our-projects/Our-projects';
import AwardBar from './components/footer-component/award-bar';
import ContactBox from './components/header-components/contact-box';
import FooterContact from './components/footer-component/footer-contact';
import QuickLinks from './components/footer-component/quick-links';
import ServiceLinks from './components/footer-component/service-links';
import CopyRight from './components/footer-component/footer-copyright';
import { Outlet } from 'react-router-dom';

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
