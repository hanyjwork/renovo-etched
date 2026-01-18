import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Approvals from './pages/Approvals';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Services": Services,
    "Approvals": Approvals,
    "WhyUs": WhyUs,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};