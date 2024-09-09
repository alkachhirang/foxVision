export const CommonBtn = ({ btnName, className, onClick }) => {
    return (
        <div >
            <button onClick={onClick}
                className={`${className} lg:py-[14px] py-2 sm:px-[30px] px-7 bg-sky hover:bg-darkpurple transition-all duration-300 ease-in-out flex items-center justify-center  rounded-[69px] text-white font-semibold sm:text-base text-sm !leading-[145%] md:!leading-normal`}
            >
                {btnName}
            </button>
        </div >
    );
};

export default CommonBtn;