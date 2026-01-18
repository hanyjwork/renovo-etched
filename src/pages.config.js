import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Approvals from './pages/Approvals';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Services": Services,
    "Approvals": Approvals,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};