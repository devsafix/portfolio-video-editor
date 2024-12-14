/* eslint-disable react/prop-types */

const PrimaryButton = ({ title }) => {
    return (
        <button
            className="bg-themeColor text-white font-bold lg:py-4 py-3 lg:px-6 px-5 rounded-full transition-all roboto"
        >
            {title}
        </button>
    );
};

export default PrimaryButton;
