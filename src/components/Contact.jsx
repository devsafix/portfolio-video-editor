import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="bg-gray-50 lg:py-20 py-10">
            <div className="container lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div>
                    <h3 className="text-themeColor mb-2 bilbo">Get In Touch</h3>
                    <h2 className="leading-snug mb-4">
                        Have any Project Plan In your Mind?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Have questions or need help with your digital projects? Reach out to G1Visuals! We’re here to
                        assist you with web design, marketing, and more. Let’s discuss how we can help your business grow.
                    </p>
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="bg-themeColor text-white w-12 h-12 flex items-center justify-center rounded-full">
                                <FaPhoneSquareAlt className="text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-600">For urgent help</p>
                                <p className="text-gray-800 font-medium">+880 1718211194</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-themeColor text-white w-12 h-12 flex items-center justify-center rounded-full">
                                <MdEmail className="text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-600">Mail us 24/7</p>
                                <p className="text-gray-800 font-medium">connect@g1visuals.net</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="bg-white rounded-xl lg:p-8 p-3">
                    <form className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-gray-600 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-gray-600 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label htmlFor="message" className="block text-gray-600 mb-2">
                                How Can We Help You?
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-themeColor text-white font-bold py-3 px-4 rounded-lg focus:ring-4 focus:ring-teal-300 transition duration-300"
                        >
                            Submit Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
