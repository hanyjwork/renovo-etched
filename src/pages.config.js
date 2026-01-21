import About from './pages/About';
import Approvals from './pages/Approvals';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Approvals": Approvals,
    "Contact": Contact,
    "Home": Home,
    "Services": Services,
    "WhyUs": WhyUs,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};