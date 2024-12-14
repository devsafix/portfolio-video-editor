import { Typewriter } from "react-simple-typewriter";
import PrimaryButton from "../ui/PrimaryButton";

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/QjdcbHF/footer-bg.webp')] bg-cover lg:pt-16 pt-6 relative">
            <div className="container py-28 text-white ">
                {/* Left Section */}
                <div className="flex lg:flex-row flex-col items-center justify-between">
                    <div className="xl:max-w-2xl max-w-xl">
                        <h1 className="text-themeColor text-3xl italic mb-3 bilbo-text">Creative Thinking</h1>
                        <h1 className="leading-tight mb-6">
                            Strategic Thinking, Tangible Results for you!
                        </h1>
                        <h3 className="mb-7">
                            We Provide <span className="text-themeColor lg:text-[40px] text-[25px]">
                                <Typewriter
                                    words={['Video Editing', 'Motion Graphics', 'Cinematography']}
                                    loop={5}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h3>
                        <p className="text-gray-400 mb-7">
                            We are a leading digital services provider, offering solutions for online
                            business success. Our expert team delivers customized Video Editing,
                            Motion Graphics, and IT support to achieve results in the evolving
                            digital landscape. Count on us to guide you.
                        </p>
                        <PrimaryButton title={"Explore Now"} />
                    </div>
                    {/* Right Section */}
                    <div className="relative mt-12 lg:mt-0">
                        <div className="rounded-full bg-themeColor p-1 animate-up-down">

                            <img
                                src="https://lambup.com/wp-content/uploads/2024/10/Home-Page-Image-2.png"
                                alt="Editing Screen"
                                className="rounded-full w-[350px] h-[550px] xl:w-[370px] xl:h-[550px] inset-0 object-cover bg-cover bg-center"
                            />
                        </div>
                        <div className="absolute bottom-7 xl:-left-40 lg:-left-10  rounded-full bg-cyan-700 p-2 animate-scale">

                            <img
                                src="https://lambup.com/wp-content/uploads/2024/10/Home-Page-Image-1.png"
                                alt="Editing Screen"
                                className="rounded-full w-[170px] h-[270px] lg:w-40 xl:w-[250px] xl:h-[350px] inset-0 object-cover bg-cover bg-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute lg:block hidden right-40 top-32 animate-scale">
                <img src="https://lambup.com/wp-content/uploads/2024/10/hero-shape-6.webp" alt="" />
            </div>
            <div className="absolute lg:block hidden left-10 top-32 animate-up-down size-40 opacity-30">
                <img src="https://lambup.com/wp-content/uploads/2024/10/shape-35.png" alt="" />
            </div>
            <div className="absolute lg:block hidden right-[700px] top-32 animate-up-down size-40 opacity-30">
                <img src="https://lambup.com/wp-content/uploads/2024/10/hero-shape-3.webp" alt="" />
            </div>
            <div className="absolute lg:block hidden right-[650px] bottom-20 animate-scale size-40">
                <img src="https://lambup.com/wp-content/uploads/2024/10/hero-shape-6.webp" alt="" />
            </div>
        </div>
    );
};

export default Banner;
