import About from "../../components/About";
import Banner from "../../components/Banner";
import Portfolio from "../../components/Portfolio";
import Service from "../../components/Service";
import States from "../../components/States";
import Testimonials from "../../components/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <States />
            <Service />
            <Portfolio />
            <Testimonials />
        </div>
    );
};

export default Home;