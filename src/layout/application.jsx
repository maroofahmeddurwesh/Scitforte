import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home/home';
import Footer from '../components/Footer';
import Products from '../pages/Products/product';
import Contact from '../pages/Contact/contact';
import About from '../pages/About/about';
import ItServices from '../pages/itServices/itServices';
import DigitalMarketing from '../pages/digitalMarketing/digitalMarketing';
import ServicesOverview from '../pages/Services/services';
import ServiceDetail from '../pages/Services/ServiceDetail';
import ClientReview from '../pages/ClientReview/ClientReview';
import FAQ from '../pages/Contact/FAQ';
import Affiliations from "../pages/Affiliations/affiliations"
import HospitalManagementSystem from '../pages/hms/hms';
import RealEstateManagementSystem from '../pages/rems/rems';
import EnvironmentSocialAndGovernance from '../pages/esg/esg';
import IntegratedBusinessSuite from '../pages/ibs/ibs';
import InstituteManagementSystem from '../pages/ims/ims';
import EnterpriseResourcePlanning from '../pages/erp/erp';

const Application = () => {
    const location = useLocation();
    const path = location.pathname;

    const renderTabContent = () => {
        if (path === '/') {
            return <Home />;
        } else if (path === '/softwareProducts') {
            return <Products />;
        }
        else if (path === '/softwareProducts/hms') {
            return <HospitalManagementSystem />
        } else if (path === '/ourAffiliations') {
            return <Affiliations />
        } else if (path === '/softwareProducts/rems') {
            return <RealEstateManagementSystem />
        }else if (path === '/softwareProducts/esg') {
            return <EnvironmentSocialAndGovernance />
        }else if (path === '/softwareProducts/ibs') {
            return <IntegratedBusinessSuite />
        }else if (path === '/softwareProducts/ims') {
            return <InstituteManagementSystem />
        }else if (path === '/softwareProducts/erp') {
            return <EnterpriseResourcePlanning />
        }
        else if (path === '/contact') {
            return <Contact />;
        } else if (path === '/about') {
            return <About />;
        } else if (path === '/itServices') {
            return <ItServices />;
        } else if (path === '/digitalMarketing') {
            return <DigitalMarketing />;
        } else if (path === '/services') {
            return <ServicesOverview />;
        } else if (path === '/client-review') {
            return <ClientReview />;
        } else if (path === '/faq') {
            return <FAQ />;
        } else if (path.startsWith('/service/')) {
            return <ServiceDetail />;
        }
        else {
            return <Home />;
        }
    }

    return (
        <div>
            <Navbar />
            {renderTabContent()}
            <Footer />
        </div>
    )
}

export default Application;