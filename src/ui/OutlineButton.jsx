/* eslint-disable react/prop-types */

const OutlineButton = ({ title }) => {
    const handleRedirect = () => {
        // Redirect to your WhatsApp profile
        window.open("https://wa.me/8801718211194", "_blank");
    };

    return (
        <button
            onClick={handleRedirect}
            className="hover:bg-themeColor border border-themeColor hover:text-white text-themeColor font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto"
        >
            {title}
        </button>
    );
};

export default OutlineButton;
