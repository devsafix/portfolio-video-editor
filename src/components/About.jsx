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
                            className="w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] xl:w-[170px] xl:h-[170px] rounded-full object-cover"
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
                    <div className="absolute xl:top-0 lg:top-10 xl:left-[350px] lg:left-[270px] rounded-full border-2 border-themeColor p-2 shadow-lg animate-scale  lg:block hidden">
                        <img
                            src="https://lambup.com/wp-content/uploads/2024/10/About-Image-2.png"
                            alt="Video Editing"
                            className="w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] rounded-full object-cover"
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
                    <div className="absolute lg:-bottom-[50px] -bottom-96 lg:left-72 xl:left-[500px] rounded-full border-2 border-themeColor p-2 shadow-lg animate-scale lg:block">
                        <img
                            src="https://lambup.com/wp-content/uploads/2024/10/About-Image-5.png"
                            alt="Editing Tools"
                            className="w-[120px] h-[120px] rounded-full object-cover"
                        />
                    </div>
                </div>


                {/* Right Section with Content */}
                <div className="max-w-lg text-gray-800">
                    <h3 className="bilbo text-themeColor mb-4">
                        About Us
                    </h3>
                    <h2 className="font-bold mb-6">
                        Transforming Ideas into Perfectly Crafted Videos
                    </h2>
                    <p className="text-gray-600">
                        At G1 Visuals, we are dedicated to crafting professional video editing and motion graphics that bring your ideas to life. With a keen eye for detail and a passion for storytelling, our team transforms raw footage into stunning, engaging content that captivates audiences.
                    </p>
                    <p className="my-3 text-gray-600">
                        Whether you need sleek promotional videos, vibrant social media content, or creative edits for personal projects, G1 Visuals delivers customized solutions tailored to your goals. Our expertise lies in creating seamless edits, dynamic motion graphics, and impactful visuals that leave a lasting impression.
                    </p>
                    <p className="mb-6 text-gray-600">
                        We don’t just edit videos; we create experiences. Let us help your brand stand out with professional, eye-catching visuals designed to inspire and connect.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
