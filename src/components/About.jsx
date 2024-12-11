const About = () => {
    return (
        <div className="bg-white py-10 lg:py-32">
            <div className="container relative mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Section with Images */}
                <div>
                    {/* Top Left Image */}
                    <div className="absolute lg:-top-[50px] lg:left-[80px] rounded-full border-2 border-themeColor p-2 shadow-lg animate-scale  lg:block hidden">
                        <img
                            src="https://lambup.com/wp-content/uploads/2024/10/About-Image-4.png"
                            alt="Editing Screen"
                            className="w-[100px] h-[100px] lg:w-[170px] lg:h-[170px] rounded-full object-cover"
                        />
                    </div>
                    <div className="absolute lg:-top-[50px] lg:-left-16 left-0 -bottom-96 animate-up-down">
                        <img
                            src="https://lambup.com/wp-content/uploads/2024/10/about1-shape-1.webp"
                            alt="Editing Screen"
                            className="w-[150px] h-[150px] lg:w-[150px] lg:h-[250px] rounded-full object-cover"
                        />
                    </div>

                    {/* Middle Right Image */}
                    <div className="absolute lg:top-0 lg:left-[350px] rounded-full border-2 border-themeColor p-2 shadow-lg animate-scale  lg:block hidden">
                        <img
                            src="https://lambup.com/wp-content/uploads/2024/10/About-Image-2.png"
                            alt="Video Editing"
                            className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"
                        />
                    </div>

                    {/* Left Bottom Image */}
                    <div className="absolute lg:bottom-0 lg:left-[30px] -bottom-56 left-10 rounded-full border-2 border-themeColor p-2 shadow-lg animate-scale">
                        <img
                            src="https://lambup.com/wp-content/uploads/2024/10/About-Image-3.png"
                            alt="Color Grading"
                            className="w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] rounded-full object-cover"
                        />
                    </div>

                    {/* Bottom Right Image */}
                    <div className="absolute lg:-bottom-[70px] -bottom-96 lg:left-[500px] rounded-full border-2 border-themeColor p-2 shadow-lg animate-scale lg:block">
                        <img
                            src="https://lambup.com/wp-content/uploads/2024/10/About-Image-5.png"
                            alt="Editing Tools"
                            className="w-[120px] h-[120px] rounded-full object-cover"
                        />
                    </div>
                </div>


                {/* Right Section with Content */}
                <div className="max-w-lg text-gray-800">
                    <h3 className="font-semibold text-themeColor mb-4">
                        About Us
                    </h3>
                    <h2 className="font-bold mb-6">
                        Crafting Stunning Videos with Precision & Creativity
                    </h2>
                    <p className="mb-6 text-gray-600">
                        At LambUp.Com, we deliver top-quality video editing and motion graphics services tailored to your unique needs. With a passion for creativity and attention to detail, our expert team transforms raw footage into polished, captivating content that tells your story. Whether for marketing, social media, or personal projects, we bring your vision to life with seamless edits, vibrant effects, and engaging motion graphics. Let us help you stand out with professional, eye-catching videos that leave a lasting impact.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
