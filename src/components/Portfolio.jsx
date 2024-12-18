import Marquee from "react-fast-marquee";
import { TiMediaPlay } from "react-icons/ti";
import { Typewriter } from "react-simple-typewriter";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoLink, setCurrentVideoLink] = useState("");

    const openModal = (link) => {
        setCurrentVideoLink(link);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideoLink("");
    };

    const videoItems = [
        { thumbnail: "https://i.ytimg.com/vi/dYYeD1y95Tc/maxresdefault.jpg", url: "https://youtu.be/pnVBE8Q9ZuI" },
        { thumbnail: "https://i.ytimg.com/vi/ZmN2T5X-9Bg/maxresdefault.jpg", url: "https://www.youtube.com/embed/ZmN2T5X-9Bg" },
        { thumbnail: "https://i.ytimg.com/vi/WA6-KmDi5Zs/maxresdefault.jpg", url: "https://www.youtube.com/embed/WA6-KmDi5Zs" },
        { thumbnail: "https://i.ytimg.com/vi/vo3IDBIP36M/maxresdefault.jpg", url: "https://www.youtube.com/embed/vo3IDBIP36M" },
    ];

    return (
        <div className="bg-[url('https://i.ibb.co.com/QjdcbHF/footer-bg.webp')] bg-cover py-10 lg:py-20 mt-10">
            <div className="text-center text-white">
                <h3 className="text-themeColor mb-4 bilbo">Our Portfolio</h3>
                <h2 className="font-bold text-3xl lg:text-4xl mb-6">
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
                </h2>
                <p className="max-w-3xl mx-auto mb-10 px-2">
                    At G1 Visuals, we provide a range of innovative services designed to elevate your brand and help your business excel in the digital world. Our expertise includes
                </p>
            </div>

            <div className="flex flex-col gap-10">

                <div className="overflow-hidden relative whitespace-nowrap">
                    <div className="flex">
                        <Marquee direction="right" pauseOnHover={true}>
                            {videoItems.map((video, index) => (
                                <div key={index} className="relative w-[400px] h-60 mr-8 rounded-lg group overflow-hidden">
                                    {/* Background Image */}
                                    <img
                                        src={video.thumbnail}
                                        alt={`Video ${index + 1}`}
                                        className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                    />

                                    {/* Play Icon */}
                                    <div
                                        onClick={() => openModal(video.url)}
                                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg cursor-pointer"
                                    >
                                        <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                            <TiMediaPlay className="text-xl" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
                <div className="overflow-hidden relative whitespace-nowrap">
                    <div className="flex">
                        <Marquee direction="right" pauseOnHover={true}>
                            {videoItems.map((video, index) => (
                                <div key={index} className="relative w-[400px] h-60 mr-8 rounded-lg group overflow-hidden">
                                    {/* Background Image */}
                                    <img
                                        src={video.thumbnail}
                                        alt={`Video ${index + 1}`}
                                        className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                    />

                                    {/* Play Icon */}
                                    <div
                                        onClick={() => openModal(video.url)}
                                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg cursor-pointer"
                                    >
                                        <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                            <TiMediaPlay className="text-xl" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    data-aos="fade"
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white mx-2 rounded-lg lg:p-8 p-6 relative max-w-4xl w-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-black text-2xl lg:text-3xl font-bold"
                        >
                            &times;
                        </button>
                        <div className="relative w-full h-0 pb-[56.25%]">
                            <iframe
                                src={currentVideoLink}
                                title="Portfolio Video"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            <Link to={"/portfolio"} className="mt-10 flex justify-center">
                <PrimaryButton title={"See More Portfolio"} />
            </Link>
        </div>
    );
};

export default Portfolio;
