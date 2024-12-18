/* eslint-disable react/prop-types */
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { useState } from "react";

// Video Modal Component
const VideoModal = ({ videoUrl, onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
            <div className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-lg">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700"
                >
                    ✕
                </button>

                {/* Video Player */}
                <div className="p-4">
                    <iframe
                        src={videoUrl}
                        title="Testimonial Video"
                        className="w-full aspect-video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {

    const [showModal, setShowModal] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");

    const openModal = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentVideoUrl("");
    };

    return (
        <div className="bg-[url('https://i.ibb.co/VMcX0bt/bg-41.jpg')] bg-cover">
            <div className="container py-20">
                <div className="text-center">
                    <h3 className="text-themeColor bilbo">
                        Testimonials
                    </h3>
                    <h1 className="my-3 max-w-xl mx-auto">
                        What Our Customer Say  About Us
                    </h1>
                    <p className="text-gray-500 max-w-3xl mx-auto mb-10">
                        At G1 Visuals.com, we’re proud of the results we’ve achieved for our clients. Hear from businesses who have trusted us to elevate their digital presence and drive growth. Their success stories are a testament to our commitment, creativity, and results-driven approach.
                    </p>
                </div>
                <div className="mt-5">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            // Mobile
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            // Tablet
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // Desktop
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl text-center max-w-sm mx-auto mb-14">
                                {/* Testimonial Text */}
                                <p className="text-gray-500 line-clamp-4">
                                    I loved the video editing services from G1 Visuals! They transformed my raw footage into a polished video that perfectly captured my vision. Highly recommended!
                                </p>

                                {/* Profile Section */}
                                <div className="flex gap-5 items-center mt-7">
                                    <div className="flex items-center">
                                        {/* Profile Image */}
                                        <img
                                            src="https://lambup.com/wp-content/uploads/2024/10/Liquey-Ray.webp"
                                            alt="Profile"
                                            className="w-14 h-14 rounded-full border-2 border-themeColor"
                                        />

                                        {/* Profile Details */}
                                        <div className="ml-4 text-left">
                                            <h5 className="text-themeColor font-bold roboto">Lique Ray</h5>
                                            <p className="text-gray-500 text-sm">Professional content creator</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => openModal("https://www.youtube.com/embed/VIDEO_ID1")}
                                            className="hover:bg-themeColor border border-themeColor hover:text-white text-themeColor font-medium lg:py-2 py-1 lg:px-5 px-4 rounded-full transition-all roboto">video</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl text-center max-w-sm mx-auto">
                                {/* Testimonial Text */}
                                <p className="text-gray-500 line-clamp-4">
                                    The motion graphics from G1 Visuals were amazing! They added creativity and flair to my project, making it really stand out. I could not be happier with the results!
                                </p>

                                {/* Profile Section */}
                                <div className="flex gap-5 items-center mt-7">
                                    <div className="flex items-center">
                                        {/* Profile Image */}
                                        <img
                                            src="https://lambup.com/wp-content/uploads/2024/10/Alisa-Applewhite-1.jpg"
                                            alt="Profile"
                                            className="w-14 h-14 rounded-full border-2 border-themeColor"
                                        />

                                        {/* Profile Details */}
                                        <div className="ml-4 text-left">
                                            <h5 className="text-themeColor font-bold roboto">Waliur</h5>
                                            <p className="text-gray-500 text-sm">Professional content creator</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => openModal("https://www.youtube.com/embed/VIDEO_ID1")}
                                            className="hover:bg-themeColor border border-themeColor hover:text-white text-themeColor font-medium lg:py-2 py-1 lg:px-5 px-4 rounded-full transition-all roboto">video</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl text-center max-w-sm mx-auto">
                                {/* Testimonial Text */}
                                <p className="text-gray-500 line-clamp-4">
                                    G1 Visuals did a fantastic job editing my short videos! They made them look professional and engaging. I highly recommend their services!
                                </p>

                                {/* Profile Section */}
                                <div className="flex gap-5 items-center mt-7">
                                    <div className="flex items-center">
                                        {/* Profile Image */}
                                        <img
                                            src="https://lambup.com/wp-content/uploads/2024/10/Louise-1.jpg"
                                            alt="Profile"
                                            className="w-14 h-14 rounded-full border-2 border-themeColor"
                                        />

                                        {/* Profile Details */}
                                        <div className="ml-4 text-left">
                                            <h5 className="text-themeColor font-bold roboto">Ash Alles</h5>
                                            <p className="text-gray-500 text-sm">Real Estate Agent</p>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={() => openModal("https://www.youtube.com/embed/VIDEO_ID1")}
                                            className="hover:bg-themeColor border border-themeColor hover:text-white text-themeColor font-medium lg:py-2 py-1 lg:px-5 px-4 rounded-full transition-all roboto">video</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl text-center max-w-sm mx-auto">
                                {/* Testimonial Text */}
                                <p className="text-gray-500 line-clamp-4">
                                    The thumbnails designed by G1 Visuals were perfect! They grabbed attention and helped my videos get more views. I am really impressed!
                                </p>

                                {/* Profile Section */}
                                <div className="flex gap-5 items-center mt-7">
                                    <div className="flex items-center">
                                        {/* Profile Image */}
                                        <img
                                            src="https://lambup.com/wp-content/uploads/2024/10/Ash-Alles.jpg"
                                            alt="Profile"
                                            className="w-14 h-14 rounded-full border-2 border-themeColor"
                                        />

                                        {/* Profile Details */}
                                        <div className="ml-4 text-left">
                                            <h5 className="text-themeColor font-bold roboto">Looise</h5>
                                            <p className="text-gray-500 text-sm">Professional content creator</p>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={() => openModal("https://www.youtube.com/embed/VIDEO_ID1")}
                                            className="hover:bg-themeColor border border-themeColor hover:text-white text-themeColor font-medium lg:py-2 py-1 lg:px-5 px-4 rounded-full transition-all roboto">video</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
            {showModal && <VideoModal videoUrl={currentVideoUrl} onClose={closeModal} />}
        </div>
    );
};

export default Testimonials;