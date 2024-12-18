import { FiUpload, FiEdit, FiFileText, FiDownload } from "react-icons/fi";
import img from "../assets/video svg.svg"

const WorkingProcess = () => {
    return (
        <section className="lg:my-20 my-10 px-2">
            <div className="container lg:mb-10 mb-7">
                <h3 className="text-themeColor mb-4 bilbo">Working Process</h3>
                <h2 className="text-4xl font-bold mt-2 text-gray-800">
                    HOW DOES THIS WORK?
                </h2>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-16 justify-center items-center">
                {/* Left Side */}
                <div className="lg:w-1/2 space-y-8">
                    {/* Step 1 */}
                    <div className="flex items-start">
                        <div className="flex items-center justify-center w-14 h-14 bg-gray-800 text-white rounded-full flex-shrink-0">
                            <FiUpload size={28} />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-bold text-gray-900">Amazing Work Process</h3>
                            <p className="text-gray-600">
                                YOU GIVE THE BRIEF & UPLOAD THE FILE VIA FTP. At Lambup, we make
                                things simple. From planning to delivery, our process is smooth,
                                efficient, and focused on delivering the best results for your
                                project.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start">
                        <div className="flex items-center justify-center w-14 h-14 bg-themeColor text-white rounded-full flex-shrink-0">
                            <FiEdit size={28} />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-bold text-gray-900">Connecting Potential</h3>
                            <p className="text-gray-600">
                                WE EDIT THE VIDEO ACCORDING TO THE BRIEF. Lambup connects your
                                brand with its full potential. We use smart strategies and
                                creative solutions to help your business grow and reach new
                                heights.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start">
                        <div className="flex items-center justify-center w-14 h-14 bg-gray-800 text-white rounded-full flex-shrink-0">
                            <FiFileText size={28} />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-bold text-gray-900">Increase Productivity</h3>
                            <p className="text-gray-600">
                                YOU REVIEW THE FINAL OUTPUT FOR APPROVAL. At Lambup, we help you
                                work smarter, not harder. Our services streamline your processes
                                and boost productivity.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start">
                        <div className="flex items-center justify-center w-14 h-14 bg-themeColor text-white rounded-full flex-shrink-0">
                            <FiDownload size={28} />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-bold text-gray-900">File Delivery</h3>
                            <p className="text-gray-600">
                                EDITED FILE READY TO DOWNLOAD VIA FTP. We ensure that the
                                delivery is fast and seamless, so you can use your final product
                                without any hassle.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2 mt-12 lg:mt-0">
                    <img
                        src={img}
                        alt="Working Process"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkingProcess;
