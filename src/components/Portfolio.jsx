import Marquee from "react-fast-marquee";
import { TiMediaPlay } from "react-icons/ti";
import { Typewriter } from "react-simple-typewriter";
import PrimaryButton from "../ui/PrimaryButton";


const Portfolio = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/QjdcbHF/footer-bg.webp')] bg-cover py-10 lg:py-20 mt-10">
            <div className="text-center text-white">
                <h3 className="text-themeColor mb-4 bilbo">
                    Our Portfolio
                </h3>
                <h2 className="font-bold text-3xl lg:text-4xl mb-6">
                    We Provide <span className="text-themeColor lg:text-[40px] text-[25px]">
                        <Typewriter
                            words={['Video Editing', 'FB Marketing', 'Thumbnail Design', 'YT Marketing']}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <p className="max-w-3xl mx-auto mb-10 px-2">
                    At LambUp.com, we offer a range of cutting-edge digital services to help your
                    business thrive online. Our expertise includes:
                </p>
            </div>

            <div className="flex flex-col gap-10">
                <div className="overflow-hidden relative whitespace-nowrap">
                    <div className="flex">
                        <Marquee
                            direction="right"
                            pauseOnHover={true}
                        >
                            <div className="relative w-[400px] h-60 mr-8 rounded-lg group overflow-hidden">
                                {/* Background Image */}
                                <img
                                    src="https://lambup.com/wp-content/uploads/2024/10/lambup-2.jpg"
                                    alt="Portfolio Item 3"
                                    className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                />

                                {/* Play Icon */}
                                <a
                                    href="https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg"
                                >
                                    <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                        <TiMediaPlay className="text-xl" />
                                    </div>
                                </a>
                            </div>
                            <div className="relative w-[400px] h-60 mr-8 rounded-lg group overflow-hidden">
                                {/* Background Image */}
                                <img
                                    src="https://lambup.com/wp-content/uploads/2024/10/12.png"
                                    alt="Portfolio Item 3"
                                    className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                />

                                {/* Play Icon */}
                                <a
                                    href="https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg"
                                >
                                    <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                        <TiMediaPlay className="text-xl" />
                                    </div>
                                </a>
                            </div>
                            <div className="relative w-[400px] h-60 mr-8 rounded-lg group overflow-hidden">
                                {/* Background Image */}
                                <img
                                    src="https://lambup.com/wp-content/uploads/2024/10/lambup-5.jpg"
                                    alt="Portfolio Item 3"
                                    className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                />

                                {/* Play Icon */}
                                <a
                                    href="https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg"
                                >
                                    <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                        <TiMediaPlay className="text-xl" />
                                    </div>
                                </a>
                            </div>
                            <div className="relative w-[400px] h-60 mr-8 rounded-lg group overflow-hidden">
                                {/* Background Image */}
                                <img
                                    src="https://lambup.com/wp-content/uploads/2024/10/lambup-1.jpg"
                                    alt="Portfolio Item 3"
                                    className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                />

                                {/* Play Icon */}
                                <a
                                    href="https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg"
                                >
                                    <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                        <TiMediaPlay className="text-xl" />
                                    </div>
                                </a>
                            </div>
                            <div className="relative w-[400px] h-60 mr-8 rounded-lg group overflow-hidden">
                                {/* Background Image */}
                                <img
                                    src="https://lambup.com/wp-content/uploads/2024/10/lambup-4.jpg"
                                    alt="Portfolio Item 3"
                                    className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                />

                                {/* Play Icon */}
                                <a
                                    href="https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg"
                                >
                                    <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                        <TiMediaPlay className="text-xl" />
                                    </div>
                                </a>
                            </div>
                            <div className="relative w-[400px] h-60 mr-8 rounded-lg group overflow-hidden">
                                {/* Background Image */}
                                <img
                                    src="https://lambup.com/wp-content/uploads/2024/10/lambup-3.jpg"
                                    alt="Portfolio Item 3"
                                    className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                />

                                {/* Play Icon */}
                                <a
                                    href="https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg"
                                >
                                    <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                        <TiMediaPlay className="text-xl" />
                                    </div>
                                </a>
                            </div>

                        </Marquee>
                    </div>
                </div>

                <div className="overflow-hidden relative whitespace-nowrap">
                    <div className="flex">
                        <Marquee
                            pauseOnHover={true}
                        >
                            <img src="https://lambup.com/wp-content/uploads/2024/10/lambup-3.jpg" alt="Portfolio Item 1" className="w-[400px] h-60 mr-8 rounded-lg object-cover" />
                            <img src="https://lambup.com/wp-content/uploads/2024/10/lambup-4.jpg" alt="Portfolio Item 2" className="w-[400px] h-60 mr-8 rounded-lg object-cover" />
                            <img src="https://lambup.com/wp-content/uploads/2024/10/12.png" alt="Portfolio Item 3" className="w-[400px] h-60 mr-8 rounded-lg object-cover" />
                            <img src="https://lambup.com/wp-content/uploads/2024/10/lambup-5.jpg" alt="Portfolio Item 4" className="w-[400px] h-60 mr-8 rounded-lg object-cover" />
                            <img src="https://lambup.com/wp-content/uploads/2024/10/lambup-1.jpg" alt="Portfolio Item 2" className="w-[400px] h-60 mr-8 rounded-lg object-cover" />
                            <img src="https://lambup.com/wp-content/uploads/2024/10/lambup-2.jpg" alt="Portfolio Item 3" className="w-[400px] h-60 mr-8 rounded-lg object-cover" />
                        </Marquee>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <PrimaryButton title={"See More Portfolio"} />
            </div>

        </div>
    );
};

export default Portfolio;