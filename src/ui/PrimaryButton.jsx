/* eslint-disable react/prop-types */

const PrimaryButton = ({ title }) => {
    return (
        <button
            className="bg-themeColor hover:bg-blue-500 text-white font-bold lg:py-4 py-3 lg:px-6 px-5 rounded-full transition-all roboto"
        >
            {title}
        </button>
    );
};

export default PrimaryButton;
