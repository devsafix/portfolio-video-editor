import About from "../../components/About";
import States from "../../components/States";
import Testimonials from "../../components/Testimonials";
import TinnyBanner from "../../ui/TinnyBanner";


const AboutUs = () => {
    return (
        <div>
            <TinnyBanner title={"About Us"} />
            <About />
            <States />
            <Testimonials />
        </div>
    );
};

export default AboutUs;