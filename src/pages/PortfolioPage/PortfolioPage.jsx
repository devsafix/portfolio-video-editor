import { useState } from "react";
import TinnyBanner from "../../ui/TinnyBanner";
import { TiMediaPlay } from "react-icons/ti";

const PortfolioPage = () => {
    const [activeTab, setActiveTab] = useState("videoEditing");


    return (
        <div>
            <TinnyBanner title={"Our Portfolio"} />
            <div className="container lg:py-20 py-10">
                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-3 mb-8">
                    <button
                        onClick={() => setActiveTab("videoEditing")}
                        className={`border border-themeColor font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto ${activeTab === "videoEditing"
                            ? "bg-gradient-to-b from-teal-400 to-teal-600 text-white"
                            : "text-themeColor hover:bg-gradient-to-b from-teal-400 to-teal-600 hover:text-white"
                            }`}
                    >
                        Video Editing
                    </button>
                    <button
                        onClick={() => setActiveTab("thumbnails")}
                        className={`border border-themeColor font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto ${activeTab === "thumbnails"
                            ? "bg-gradient-to-b from-teal-400 to-teal-600 text-white"
                            : "text-themeColor hover:bg-gradient-to-b from-teal-400 to-teal-600 hover:text-white"
                            }`}
                    >
                        Thumbnails
                    </button>
                    <button
                        onClick={() => setActiveTab("motionGraphic")}
                        className={`border border-themeColor font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto ${activeTab === "motionGraphic"
                            ? "bg-gradient-to-b from-teal-400 to-teal-600 text-white"
                            : "text-themeColor hover:bg-gradient-to-b from-teal-400 to-teal-600 hover:text-white"
                            }`}
                    >
                        Motion Graphic
                    </button>
                    <button
                        onClick={() => setActiveTab("shortAndReels")}
                        className={`border border-themeColor font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto ${activeTab === "shortAndReels"
                            ? "bg-gradient-to-b from-teal-400 to-teal-600 text-white"
                            : "text-themeColor hover:bg-gradient-to-b from-teal-400 to-teal-600 hover:text-white"
                            }`}
                    >
                        Shorts & Reels
                    </button>
                </div>

                {/* Tab Content */}
                <div>
                    {activeTab === "videoEditing" && (
                        <div
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="500"
                            className="flex flex-wrap justify-center gap-4">
                            {videoEditingData.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative xl:w-[400px] xl:h-60 lg:w-72 lg:h-40 rounded-lg group overflow-hidden"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={item.img}
                                        alt={`Portfolio Video ${index + 1}`}
                                        className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                    />

                                    {/* Play Icon */}
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg"
                                    >
                                        <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                            <TiMediaPlay className="text-xl" />
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "thumbnails" && (
                        <div
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="500"
                            className="flex flex-wrap justify-center gap-4">
                            {thumbnailData.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="xl:w-[400px] xl:h-60 lg:w-72 lg:h-40 rounded-lg object-cover"
                                />
                            ))}
                        </div>
                    )}

                    {activeTab === "motionGraphic" && (
                        <div
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="500"
                            className="flex flex-wrap justify-center gap-4">
                            {motionGraphicData.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative xl:w-[400px] xl:h-60 lg:w-72 lg:h-40 rounded-lg group overflow-hidden"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={item.img}
                                        alt={`Portfolio Video ${index + 1}`}
                                        className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                    />

                                    {/* Play Icon */}
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg"
                                    >
                                        <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                            <TiMediaPlay className="text-xl" />
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "shortAndReels" && (
                        <div
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="500"
                            className="flex flex-wrap justify-center gap-4">
                            {shortsAndReelsData.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative xl:w-[400px] xl:h-60 lg:w-72 lg:h-40 rounded-lg group overflow-hidden"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={item.img}
                                        alt={`Portfolio Video ${index + 1}`}
                                        className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                                    />

                                    {/* Play Icon */}
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg"
                                    >
                                        <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                                            <TiMediaPlay className="text-xl" />
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;



const videoEditingData = [
    {
        img: "https://i.ytimg.com/vi/dYYeD1y95Tc/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/ZmN2T5X-9Bg/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/WA6-KmDi5Zs/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/vo3IDBIP36M/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/JQf_dUwgzYo/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/H0nZy0Q2pc4/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/cISvMYFvR4M/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/16g81lfYWDo/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/9stPqGwE0-E/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-2.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/12.png",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-5.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-1.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-4.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-3.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
];

const thumbnailData = [
    "https://lambup.com/wp-content/uploads/2024/10/lambup-3.jpg",
    "https://lambup.com/wp-content/uploads/2024/10/lambup-4.jpg",
    "https://lambup.com/wp-content/uploads/2024/10/12.png",
    "https://lambup.com/wp-content/uploads/2024/10/lambup-5.jpg",
    "https://lambup.com/wp-content/uploads/2024/10/lambup-1.jpg",
    "https://lambup.com/wp-content/uploads/2024/10/lambup-2.jpg",
];

const motionGraphicData = [
    {
        img: "https://i.ytimg.com/vi/XaH-8LUsJK8/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/O0Q9OuZTO4E/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/QaqCbOS8rl8/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/KaCMXo8Nc5s/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/s98bDB91xRU/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/zFrw_4172V4/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
];

const shortsAndReelsData = [
    {
        img: "https://i.ytimg.com/vi/8bJgcBOnksI/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/caT7KSgHEUI/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/5Acyg_t4fyQ/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/6Nsu3QVT7AU/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
    {
        img: "https://i.ytimg.com/vi/6Qrmiid8X1g/maxresdefault.jpg",
        link: "https://youtu.be/ZzXEZkBAaLs?si=VzgC28aYSm1usNPx",
    },
];