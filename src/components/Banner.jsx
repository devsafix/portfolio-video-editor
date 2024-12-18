import { Typewriter } from "react-simple-typewriter";
import PrimaryButton from "../ui/PrimaryButton";
import Video from "../assets/banner video.mp4";

const Banner = () => {
    const handleRedirect = () => {
        // Redirect to your WhatsApp profile
        window.open("https://wa.me/8801718211194", "_blank");
    };

    return (
        <div className="relative bg-black overflow-hidden lg:pt-16 pt-6">
            {/* Video Background */}
            <video
                className="absolute inset-0 opacity-50 w-full h-full object-cover"
                src={Video}
                autoPlay
                loop
                muted
                playsInline
            ></video>

            {/* Overlay for darker background */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="container relative z-10 xl:py-[140px] lg:py-32 pt-28 pb-10 text-white">
                {/* Left Section */}
                <div className="flex lg:flex-row flex-col items-center justify-between">
                    <div className="xl:max-w-2xl max-w-xl">
                        <h1 className="text-themeColor text-3xl italic mb-3 bilbo-text">Creative Thinking</h1>
                        <h1 className="leading-tight mb-6">
                            Strategic Thinking, Tangible Results for you!
                        </h1>
                        <h3 className="mb-7">
                            We Provide{" "}
                            <span className="text-themeColor lg:text-[40px] text-[25px]">
                                <Typewriter
                                    words={['Video Editing', 'Motion Graphics', 'Sitdown Video', 'Explainer Video', 'Collage Art Video']}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h3>
                        <p className="text-gray-400 mb-7 max-w-xl">
                            We specialize in dynamic Video Editing and compelling Motion Graphics, helping businesses grow in the ever-evolving digital realm. Let’s build something extraordinary together.
                        </p>
                        <div onClick={handleRedirect}>
                            <PrimaryButton title={"Explore Now"} />
                        </div>
                    </div>

                    {/* Right Section - Responsive YouTube Video */}
                    <div className="relative mt-12 lg:mt-0 w-full lg:w-[50%]">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="700"
                            className="rounded-[30px] overflow-hidden shadow-lg border-2 border-themeColor">
                            <iframe
                                src="https://www.youtube.com/embed/pnVBE8Q9ZuI?autoplay=1&mute=1&loop=1&playlist=pnVBE8Q9ZuI&controls=0&showinfo=0&modestbranding=1"
                                title="YouTube Video"
                                className="w-full h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
                                frameBorder="0"
                                allow="autoplay; encrypted-media; fullscreen"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
