import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about-us",
                element: <AboutPage />
            },
            {
                path: "/services",
                element: <ServicesPage />
            },
            {
                path: "/portfolio",
                element: <PortfolioPage />
            },
            {
                path: "/contact-us",
                element: <ContactPage />
            },
        ]
    },
]);

export default router;