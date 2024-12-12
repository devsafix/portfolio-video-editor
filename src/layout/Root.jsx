import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { SiWhatsapp } from "react-icons/si";


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <button
                className="fixed lg:bottom-6 bottom-4 right-4 lg:right-6 bg-themeColor text-white p-3 rounded-full shadow-lg hover:bg-navyBlue transition-all transform hover:scale-110 duration-300"
                aria-label="Scroll to top"
            >
                <SiWhatsapp className="text-2xl" />
            </button>
        </div>
    );
};

export default Root;