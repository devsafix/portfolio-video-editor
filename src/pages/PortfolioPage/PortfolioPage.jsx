/* eslint-disable react/prop-types */
import { useState } from "react";
import TinnyBanner from "../../ui/TinnyBanner";
import { TiMediaPlay } from "react-icons/ti";

const PortfolioPage = () => {
    const [activeTab, setActiveTab] = useState("videoEditing");
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

    return (
        <div>
            <TinnyBanner title={"Our Portfolio"} />
            <div className="container lg:py-20 py-10">
                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-3 mb-8">
                    <button
                        onClick={() => setActiveTab("videoEditing")}
                        className={`border border-themeColor font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto ${activeTab === "videoEditing"
                            ? "bg-themeColor text-white"
                            : "text-themeColor hover:bg-themeColor hover:text-white"
                            }`}
                    >
                        Video Editing
                    </button>
                    <button
                        onClick={() => setActiveTab("thumbnails")}
                        className={`border border-themeColor font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto ${activeTab === "thumbnails"
                            ? "bg-themeColor text-white"
                            : "text-themeColor hover:bg-themeColor hover:text-white"
                            }`}
                    >
                        Thumbnails
                    </button>
                    <button
                        onClick={() => setActiveTab("motionGraphic")}
                        className={`border border-themeColor font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto ${activeTab === "motionGraphic"
                            ? "bg-themeColor text-white"
                            : "text-themeColor hover:bg-themeColor hover:text-white"
                            }`}
                    >
                        Motion Graphic
                    </button>
                    <button
                        onClick={() => setActiveTab("shortAndReels")}
                        className={`border border-themeColor font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto ${activeTab === "shortAndReels"
                            ? "bg-themeColor text-white"
                            : "text-themeColor hover:bg-themeColor hover:text-white"
                            }`}
                    >
                        Shorts & Reels
                    </button>
                </div>

                {/* Tab Content */}
                <div>
                    {activeTab === "videoEditing" && (
                        <PortfolioContent
                            data={videoEditingData}
                            openModal={openModal}
                        />
                    )}

                    {activeTab === "thumbnails" && (
                        <div className="flex flex-wrap justify-center gap-4">
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
                        <PortfolioContent
                            data={motionGraphicData}
                            openModal={openModal}
                        />
                    )}

                    {activeTab === "shortAndReels" && (
                        <PortfolioContent
                            data={shortsAndReelsData}
                            openModal={openModal}
                        />
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div data-aos="fade" className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
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
        </div>
    );
};

const PortfolioContent = ({ data, openModal }) => (
    <div className="flex flex-wrap justify-center gap-4">
        {data.map((item, index) => (
            <div
                key={index}
                className="relative xl:w-[400px] xl:h-60 lg:w-72 lg:h-40 rounded-lg group overflow-hidden cursor-pointer"

            >
                {/* Background Image */}
                <img
                    src={item.img}
                    alt={`Portfolio Video ${index + 1}`}
                    className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-500"
                />
                {/* Play Icon */}
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-lg">
                    <div className="w-12 h-12 bg-themeColor hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500">
                        <TiMediaPlay onClick={() => openModal(item.link)} className="text-xl" />
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default PortfolioPage;



const videoEditingData = [
    {
        img: "https://i.ytimg.com/vi/dYYeD1y95Tc/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/pnVBE8Q9ZuI?si=3jXm3oYAEa47s3vR",
    },
    {
        img: "https://i.ytimg.com/vi/ZmN2T5X-9Bg/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/Z1bVvOmTvB0?si=IL10KruFeYZpwQgH",
    },
    {
        img: "https://i.ytimg.com/vi/WA6-KmDi5Zs/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xznAAfO81Xo?si=A5OA8-lQdfKITEad",
    },
    {
        img: "https://i.ytimg.com/vi/vo3IDBIP36M/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/HxvFXqqebcY?si=jVaSgdvjynCH3Mr9",
    },
    {
        img: "https://i.ytimg.com/vi/JQf_dUwgzYo/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/hQugEadsBDE?si=BbARDRaRXp26Qlv1",
    },
    {
        img: "https://i.ytimg.com/vi/H0nZy0Q2pc4/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/wZl2v9I8BQk?si=7735cYIfgD9eJXdF",
    },
    {
        img: "https://i.ytimg.com/vi/cISvMYFvR4M/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/jHdZruWNlZU?si=jEBZWyHKnsF5WADh",
    },
    {
        img: "https://i.ytimg.com/vi/16g81lfYWDo/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/eY-yjfCoemw?si=KHsB2M-JoNK_Zo4H",
    },
    {
        img: "https://i.ytimg.com/vi/9stPqGwE0-E/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/1LQjRyuQLHA?si=zdd7azh5Sxl-cAcC",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-2.jpg",
        link: "https://www.youtube.com/embed/B5ipJZsF8nY?si=aMbMqOwgWx9pYfWZ",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/12.png",
        link: "https://www.youtube.com/embed/Z1bVvOmTvB0?si=IL10KruFeYZpwQgH",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-5.jpg",
        link: "https://www.youtube.com/embed/xznAAfO81Xo?si=A5OA8-lQdfKITEad",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-1.jpg",
        link: "https://www.youtube.com/embed/HxvFXqqebcY?si=jVaSgdvjynCH3Mr9",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-4.jpg",
        link: "https://www.youtube.com/embed/hQugEadsBDE?si=BbARDRaRXp26Qlv1",
    },
    {
        img: "https://lambup.com/wp-content/uploads/2024/10/lambup-3.jpg",
        link: "https://www.youtube.com/embed/wZl2v9I8BQk?si=7735cYIfgD9eJXdF",
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
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
    {
        img: "https://i.ytimg.com/vi/O0Q9OuZTO4E/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
    {
        img: "https://i.ytimg.com/vi/QaqCbOS8rl8/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
    {
        img: "https://i.ytimg.com/vi/KaCMXo8Nc5s/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
    {
        img: "https://i.ytimg.com/vi/s98bDB91xRU/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
    {
        img: "https://i.ytimg.com/vi/zFrw_4172V4/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
];

const shortsAndReelsData = [
    {
        img: "https://i.ytimg.com/vi/8bJgcBOnksI/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
    {
        img: "https://i.ytimg.com/vi/caT7KSgHEUI/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
    {
        img: "https://i.ytimg.com/vi/5Acyg_t4fyQ/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
    {
        img: "https://i.ytimg.com/vi/6Nsu3QVT7AU/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
    {
        img: "https://i.ytimg.com/vi/6Qrmiid8X1g/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/xHM2VZxyAB0?si=jKUNKNJ0oilCYqy0",
    },
];