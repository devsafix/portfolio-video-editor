/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const TinnyBanner = ({ title }) => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/QjdcbHF/footer-bg.webp')] bg-cover text-white">
            <div className="container xl:py-36 lg:py-32 py-28">
                <div>
                    <h2>{title}</h2>
                </div>
                <div className="flex items-center gap-2 lato">
                    <h5>
                        <Link
                            to={"/"}
                        >
                            Home .
                        </Link>
                    </h5>
                    <h5>Pages .</h5>
                    <h5 className="text-pink">
                        {title}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default TinnyBanner;