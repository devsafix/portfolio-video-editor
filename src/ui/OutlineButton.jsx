/* eslint-disable react/prop-types */


const OutlineButton = ({ title }) => {
    return (
        <button
            className="hover:bg-themeColor border border-themeColor hover:text-white text-green-800 font-medium lg:py-3 py-2 lg:px-7 px-5 rounded-full transition-all roboto"
        >
            {title}
        </button>
    );
};

export default OutlineButton;