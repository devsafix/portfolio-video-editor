import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        // Handle closing dropdown menu when clicking outside
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };
        document.addEventListener("mousedown", closeDropDown);

        // Handle navbar background on scroll
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", closeDropDown);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"
                }`}
        >
            <nav className="container flex items-center justify-between py-4 text-white">
                <div>
                    <img
                        className="lg:w-56 w-40"
                        src="https://lambup.com/wp-content/uploads/2024/10/LUMBUP-1-01-01-e1729165527561-1024x326.png" alt="" />
                </div>
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    <li className="group flex font-medium cursor-pointer flex-col">
                        <Link>Home</Link>
                        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-themeColor transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex font-medium cursor-pointer flex-col">
                        <Link>About us</Link>
                        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-themeColor transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex font-medium cursor-pointer flex-col">
                        <Link>Service</Link>
                        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-themeColor transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex font-medium cursor-pointer flex-col">
                        <Link>Portfolio</Link>
                        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-themeColor transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex font-medium cursor-pointer flex-col">
                        <Link>Contact</Link>
                        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-themeColor transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
                <div>
                    <PrimaryButton title={"Let's Talk Us"} />
                </div>
                <div
                    ref={dropDownMenuRef}
                    onClick={() => setDropDownState(!dropDownState)}
                    className="relative flex transition-transform md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    {dropDownState && (
                        <ul
                            data-aos="fade-left"
                            data-aos-delay="50"
                            data-aos-duration="700"
                            className="z-10 gap-2 bg-gradient-to-b from-teal-600 to-teal-400 absolute right-0 top-14 flex w-[200px] flex-col rounded-lg text-base">
                            <li className="cursor-pointer px-6 py-2 text-white rounded-t-lg hover:bg-sky-600">
                                <Link>Home</Link>
                            </li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
                                <Link>About Us</Link>
                            </li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
                                <Link>Service</Link>
                            </li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
                                <Link>Portfolio</Link>
                            </li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
