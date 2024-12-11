import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <div className="bg-[#393E46]">
            <nav className="container flex items-center justify-between px-4 py-2 text-white mb-24">
                <div className="cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white roboto">
                    <h3>Portfolio</h3>
                </div>
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    <li className="group flex font-medium cursor-pointer flex-col">
                        <Link>Home</Link><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-themeColor transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex font-medium cursor-pointer flex-col">
                        <Link>Portfolio</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-themeColor transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
                <div>
                    <PrimaryButton title={"Let's Talk Us"} />
                </div>
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-12 flex w-[200px] flex-col  rounded-lg   text-base ">
                            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                                <Link>Home</Link>
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                <Link>Portfolio</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>

    );
};

export default Navbar;