/* eslint-disable react/prop-types */

const PrimaryButton = ({ title }) => {
    return (
        <button
            className="bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-400 hover:to-teal-600 text-white font-bold lg:py-4 py-3 lg:px-6 px-5 rounded-full transition-all roboto"
        >
            {title}
        </button>
    );
};

export default PrimaryButton;
