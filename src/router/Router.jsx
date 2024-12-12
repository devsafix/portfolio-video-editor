import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Services from "../pages/Services/Services";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";

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
                element: <AboutUs />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/portfolio",
                element: <PortfolioPage />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
        ]
    },
]);

export default router;