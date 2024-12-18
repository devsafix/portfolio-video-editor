
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    const videoData = [
        { 
            name: "Lique Ray", 
            role: "Professional content creator", 
            img: "https://lambup.com/wp-content/uploads/2024/10/Liquey-Ray.webp", 
            video: "https://www.youtube.com/embed/pnVBE8Q9ZuI?si=3jXm3oYAEa47s3vR" 
        },
        { 
            name: "Waliur", 
            role: "Professional content creator", 
            img: "https://lambup.com/wp-content/uploads/2024/10/Alisa-Applewhite-1.jpg", 
            video: "https://www.youtube.com/embed/Z1bVvOmTvB0?si=IL10KruFeYZpwQgH" 
        },
        { 
            name: "Ash Alles", 
            role: "Real Estate Agent", 
            img: "https://lambup.com/wp-content/uploads/2024/10/Louise-1.jpg", 
            video: "https://www.youtube.com/embed/xznAAfO81Xo?si=A5OA8-lQdfKITEad" 
        },
        { 
            name: "Looise", 
            role: "Professional content creator", 
            img: "https://lambup.com/wp-content/uploads/2024/10/Ash-Alles.jpg", 
            video: "https://www.youtube.com/embed/HxvFXqqebcY?si=jVaSgdvjynCH3Mr9" 
        },
        { 
            name: "Ash Alles", 
            role: "Real Estate Agent", 
            img: "https://lambup.com/wp-content/uploads/2024/10/Louise-1.jpg", 
            video: "https://www.youtube.com/embed/xznAAfO81Xo?si=A5OA8-lQdfKITEad" 
        },
        { 
            name: "Looise", 
            role: "Professional content creator", 
            img: "https://lambup.com/wp-content/uploads/2024/10/Ash-Alles.jpg", 
            video: "https://www.youtube.com/embed/HxvFXqqebcY?si=jVaSgdvjynCH3Mr9" 
        },
    ];

    return (
        <div className="bg-[url('https://i.ibb.co/VMcX0bt/bg-41.jpg')] bg-cover">
            <div className="container py-20">
                <div className="text-center">
                    <h3 className="text-themeColor bilbo">
                        Testimonials
                    </h3>
                    <h1 className="my-3 max-w-xl mx-auto">
                        What Our Customer Say About Us
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
                            0: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {videoData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-10 rounded-xl text-center max-w-sm mx-auto mb-14">
                                    {/* Video Section */}
                                    <iframe
                                        src={testimonial.video}
                                        title={`Testimonial Video ${index}`}
                                        className="w-full aspect-video rounded-lg"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    ></iframe>

                                    {/* Profile Section */}
                                    <div className="flex gap-5 items-center mt-7">
                                        <img
                                            src={testimonial.img}
                                            alt="Profile"
                                            className="w-14 h-14 rounded-full border-2 border-themeColor"
                                        />
                                        <div className="text-left">
                                            <h5 className="text-themeColor font-bold roboto">{testimonial.name}</h5>
                                            <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
