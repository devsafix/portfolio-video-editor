import About from "../../components/About";
import Banner from "../../components/Banner";
import Portfolio from "../../components/Portfolio";
import Service from "../../components/Service";
import States from "../../components/States";


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <States />
            <Service />
            <Portfolio />
        </div>
    );
};

export default Home;