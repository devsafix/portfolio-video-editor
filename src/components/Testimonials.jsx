// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {

    return (
        <div className="bg-[url('https://i.ibb.co/VMcX0bt/bg-41.jpg')] bg-cover">
            <div className="container py-20">
                <div className="text-center">
                    <h3 className="text-green-700 bilbo">
                        Testimonials
                    </h3>
                    <h1 className="my-3 max-w-xl mx-auto">
                        What Our Customer Say  About Us
                    </h1>
                    <p className="text-gray-500 max-w-3xl mx-auto mb-10">
                        At LambUp.com, we’re proud of the results we’ve achieved for our clients. Hear from businesses who have trusted us to elevate their digital presence and drive growth. Their success stories are a testament to our commitment, creativity, and results-driven approach.
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
                                <p className="text-gray-500 italic">
                                    I loved the video editing services from Lambup! They transformed my raw footage into a polished video that perfectly captured my vision. Highly recommended!
                                </p>

                                {/* Profile Section */}
                                <div className="flex items-center mt-7">
                                    {/* Profile Image */}
                                    <img
                                        src="https://lambup.com/wp-content/uploads/2024/10/Liquey-Ray.webp"
                                        alt="Profile"
                                        className="w-14 h-14 rounded-full border-2 border-themeColor"
                                    />

                                    {/* Profile Details */}
                                    <div className="ml-4 text-left">
                                        <h4 className="text-green-700 font-bold roboto">Lique Ray</h4>
                                        <p className="text-gray-500 text-sm">Professional content creator</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl text-center max-w-sm mx-auto">
                                {/* Testimonial Text */}
                                <p className="text-gray-500 italic">
                                    The motion graphics from Lambup were amazing! They added creativity and flair to my project, making it really stand out. I could not be happier with the results!
                                </p>

                                {/* Profile Section */}
                                <div className="flex items-center mt-7">
                                    {/* Profile Image */}
                                    <img
                                        src="https://lambup.com/wp-content/uploads/2024/10/Alisa-Applewhite-1.jpg"
                                        alt="Profile"
                                        className="w-14 h-14 rounded-full border-2 border-themeColor"
                                    />

                                    {/* Profile Details */}
                                    <div className="ml-4 text-left">
                                        <h4 className="text-green-700 font-bold roboto">Waliur</h4>
                                        <p className="text-gray-500 text-sm">Professional content creator</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl text-center max-w-sm mx-auto">
                                {/* Testimonial Text */}
                                <p className="text-gray-500 italic">
                                    Lambup did a fantastic job editing my short videos! They made them look professional and engaging. I highly recommend their services!
                                </p>

                                {/* Profile Section */}
                                <div className="flex items-center mt-7">
                                    {/* Profile Image */}
                                    <img
                                        src="https://lambup.com/wp-content/uploads/2024/10/Louise-1.jpg"
                                        alt="Profile"
                                        className="w-14 h-14 rounded-full border-2 border-themeColor"
                                    />

                                    {/* Profile Details */}
                                    <div className="ml-4 text-left">
                                        <h4 className="text-green-700 font-bold roboto">Ash Alles</h4>
                                        <p className="text-gray-500 text-sm">Real Estate Agent</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl text-center max-w-sm mx-auto">
                                {/* Testimonial Text */}
                                <p className="text-gray-500 italic">
                                    The thumbnails designed by Lambup were perfect! They grabbed attention and helped my videos get more views. I am really impressed!
                                </p>

                                {/* Profile Section */}
                                <div className="flex items-center mt-7">
                                    {/* Profile Image */}
                                    <img
                                        src="https://lambup.com/wp-content/uploads/2024/10/Ash-Alles.jpg"
                                        alt="Profile"
                                        className="w-14 h-14 rounded-full border-2 border-themeColor"
                                    />

                                    {/* Profile Details */}
                                    <div className="ml-4 text-left">
                                        <h4 className="text-green-700 font-bold roboto">Looise</h4>
                                        <p className="text-gray-500 text-sm">Professional content creator</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;