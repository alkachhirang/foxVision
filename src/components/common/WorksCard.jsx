const WorksCard = (props) => {
    return (
        <div
            className={`${props.className} sm:pt-7 bg-lightpurple howWeWorkCard hover:bg-lightsky lg:max-w-[366px] xl:h-[383px] w-full h-full sm:px-7 sm:pb-[44px] rounded-[6px] p-5 sm:p-6  transition-all ease-linear duration-300 `}
        >
            <div
                className="sm:mb-7 mb-5 md:w-[85px] md:h-[85px] sm:w-[75px] w-[60px] h-[60px] duration-300 sm:h-[75px] rounded-[7px] shadow-[0px_10px_20px_0px_#4B17E62B] hover:shadow-[0_11.57px_23.15px_0_#05D5FB29] transition-all ease-linear flex justify-center items-center "
            >
                {props.worksvg}
            </div>
            <h3 className="text-darkblue font-semibold font-poppins xl:text-2xl text-lg sm:text-xl !leading-normal mb-2 pr-1" >
                {props.title}
            </h3>
            <p className="text-darkblue opacity-70 sm:text-base text-sm font-poppins font-normal !leading-normal" >
                {props.description}
            </p>
        </div>
    );
};

export default WorksCard;