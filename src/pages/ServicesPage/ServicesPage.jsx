import { FaChalkboardTeacher, FaImages, FaPhotoVideo, FaVideo } from "react-icons/fa";
import TinnyBanner from "../../ui/TinnyBanner";
import OutlineButton from "../../ui/OutlineButton";
import { GiVideoCamera } from "react-icons/gi";
import { Typewriter } from "react-simple-typewriter";
import { IoIosColorFill } from "react-icons/io";


const ServicesPage = () => {
    return (
        <div>
            <TinnyBanner title={"Our Services"} />
            <div className="bg-white py-10 lg:py-20">
                <div className="container text-center">
                    {/* Section Title */}
                    <h3 className="text-themeColor mb-4 bilbo">
                        Our Services
                    </h3>
                    <h2 className="font-bold text-3xl lg:text-4xl mb-6">
                        We Provide <span className="text-themeColor lg:text-[40px] text-[25px]">
                            <Typewriter
                                words={['Video Editing', 'Motion Graphics', 'Sitdown Video', 'Explainer Video', 'Collage Art Video']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                        At G1Visuals.com, we offer a range of cutting-edge digital services to help your
                        business thrive online. Our expertise includes:
                    </p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 px-5">

                        <div
                            className="bg-white border border-themeColor hover:border-gray-700 rounded-xl p-6 hover:shadow-2xl transition-shadow duration-500 group"
                        >
                            <div className="flex justify-center items-center mb-4">
                                {/* Ensure group-hover works */}
                                <div className="bg-black group-hover:bg-themeColor rounded-full p-4 shadow-lg transition-all duration-700">
                                    <div className="text-white">
                                        <FaPhotoVideo className="size-12" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-bold text-gray-600 mb-4">Video Editing</h4>
                            <p className="text-gray-600 mb-6 max-w-sm line-clamp-5">
                                At G1 Visuals, we specialize in crafting professional, high-quality videos that engage and inspire. Our expert video editing services transform your footage into a polished masterpiece, perfectly capturing your vision and delivering a powerful impact.

                            </p>
                            <OutlineButton title={"Order Now"} />
                        </div>


                        <div
                            className="bg-white border border-themeColor hover:border-gray-700 rounded-xl p-6 hover:shadow-2xl transition-shadow duration-500 group"
                        >
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-black group-hover:bg-themeColor rounded-full p-4 shadow-lg transition-all duration-700">
                                    <div className="text-white">
                                        <GiVideoCamera className="size-12" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-bold text-gray-600 mb-4">Motion Graphic</h4>
                            <p className="text-gray-600 mb-6 max-w-sm line-clamp-5">G1 Visuals creates dynamic motion graphics that bring your ideas to life. Our custom animations help you engage your audience and communicate your message in a visually compelling way.</p>
                            <OutlineButton title={"Order Now"} />
                        </div>

                        <div
                            className="bg-white border border-themeColor hover:border-gray-700 rounded-xl p-6 hover:shadow-2xl transition-shadow duration-500 group"
                        >
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-black group-hover:bg-themeColor rounded-full p-4 shadow-lg transition-all duration-700">
                                    <div className="text-white">
                                        <IoIosColorFill className="size-12" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-bold text-gray-600 mb-4">Color Grading</h4>
                            <p className="text-gray-600 mb-6 max-w-sm line-clamp-5">G1 Visuals takes your visuals to the next level with professional color grading. In addition to video editing and motion graphics, we ensure every frame is color-enhanced for a cinematic and cohesive look that amplifies your story.</p>
                            <OutlineButton title={"Order Now"} />
                        </div>

                        <div
                            className="bg-white border border-themeColor hover:border-gray-700 rounded-xl p-6 hover:shadow-2xl transition-shadow duration-500 group"
                        >
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-black group-hover:bg-themeColor rounded-full p-4 shadow-lg transition-all duration-700">
                                    <div className="text-white">
                                        <FaVideo className="size-12" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-bold text-gray-600 mb-4">Sitdown Video</h4>
                            <p className="text-gray-600 mb-6 max-w-sm line-clamp-5">
                                At G1Visuals, we produce professional sitdown videos tailored to share stories, interviews, and testimonials. Our clean and focused editing ensures clarity and impact for your audience.
                            </p>
                            <OutlineButton title={"Order Now"} />
                        </div>

                        {/* Explainer Video */}
                        <div
                            className="bg-white border border-themeColor hover:border-gray-700 rounded-xl p-6 hover:shadow-2xl transition-shadow duration-500 group"
                        >
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-black group-hover:bg-themeColor rounded-full p-4 shadow-lg transition-all duration-700">
                                    <div className="text-white">
                                        <FaChalkboardTeacher className="size-12" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-bold text-gray-600 mb-4">Explainer Video</h4>
                            <p className="text-gray-600 mb-6 max-w-sm line-clamp-5">
                                Our explainer videos simplify complex ideas and deliver your message effectively. We combine engaging visuals, animations, and a clear narrative to captivate your target audience.
                            </p>
                            <OutlineButton title={"Order Now"} />
                        </div>

                        {/* Collage Art Video */}
                        <div
                            className="bg-white border border-themeColor hover:border-gray-700 rounded-xl p-6 hover:shadow-2xl transition-shadow duration-500 group"
                        >
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-black group-hover:bg-themeColor rounded-full p-4 shadow-lg transition-all duration-700">
                                    <div className="text-white">
                                        <FaImages className="size-12" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-bold text-gray-600 mb-4">Collage Art Video</h4>
                            <p className="text-gray-600 mb-6 max-w-sm line-clamp-5">
                                Bring your moments to life with our collage art videos. We curate stunning visuals, photos, and animations into a cohesive masterpiece perfect for storytelling or celebrations.
                            </p>
                            <OutlineButton title={"Order Now"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;