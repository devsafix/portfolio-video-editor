import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";
import Service from "../../components/Service";
import States from "../../components/States";
import Testimonials from "../../components/Testimonials";
import WorkingProcess from "../../components/WorkingProcess";


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <States />
            <Service />
            <Portfolio />
            <WorkingProcess />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;