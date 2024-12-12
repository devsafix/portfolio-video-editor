import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneSquareAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/QjdcbHF/footer-bg.webp')] bg-cover text-white py-10">
            <div className="container px-8 grid grid-cols-1 md:grid-cols-3 gap-14">
                {/* Logo and Description */}
                <div className="flex flex-col gap-3 items-center md:items-start">
                    <div>
                        <img
                            className="lg:w-56 w-40"
                            src="https://lambup.com/wp-content/uploads/2024/10/LUMBUP-1-01-01-e1729165527561-1024x326.png" alt="" />
                    </div>
                    <p className="text-gray-400 text-center md:text-left">
                        Empowering brands with innovative digital solutions. From Video Editing to marketing
                        strategies, we’re here to help you thrive online. Connect with us today!
                    </p>
                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-black hover:text-white bg-white hover:bg-themeColor p-3 rounded-full transition-all duration-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-black hover:text-white bg-white hover:bg-themeColor p-3 rounded-full transition-all duration-300">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-black hover:text-white bg-white hover:bg-themeColor p-3 rounded-full transition-all duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-black hover:text-white bg-white hover:bg-themeColor p-3 rounded-full transition-all duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-black hover:text-white bg-white hover:bg-themeColor p-3 rounded-full transition-all duration-300">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div className="flex flex-col gap-3 items-start md:items-start">
                    <h3 className="mb-4 text-themeColor">Our Services</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="hover:text-themeColor transition-all duration-300 cursor-pointer">Video Editing</li>
                        <li className="hover:text-themeColor transition-all duration-300 cursor-pointer">Motion Graphic</li>
                        <li className="hover:text-themeColor transition-all duration-300 cursor-pointer">Thumbnail Design</li>
                        <li className="hover:text-themeColor transition-all duration-300 cursor-pointer">YouTube Marketing</li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-3 items-start md:items-start">
                    <h3 className="mb-4 text-themeColor">Contact Us</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center gap-1 hover:text-themeColor duration-300 transition-all cursor-pointer">
                            <FaPhoneSquareAlt className="text-themeColor" /> +880 1869-477538
                        </li>
                        <li className="flex items-center gap-1 hover:text-themeColor duration-300 transition-all cursor-pointer">
                            <MdEmail className="text-themeColor" /> lambup58@gmail.com
                        </li>
                        <li className="flex items-center gap-1 hover:text-themeColor duration-300 transition-all cursor-pointer">
                            <IoLocationSharp className="text-themeColor" /> Dhaka, Bangladesh
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
                <p>Copyright © 2024 lambup.com All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-themeColor transition-all duration-300">Privacy Policy</a>
                    <a href="#" className="hover:text-themeColor transition-all duration-300">Terms & Condition</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
