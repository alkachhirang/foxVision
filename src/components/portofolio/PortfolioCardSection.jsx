import React, { useState, useEffect } from 'react';
import CommonBtn from '../common/CommonBtn';
import { portfolioData } from '../common/Helper';

const PortfolioCardSection = () => {
    const [btnName, setBtnName] = useState('See more');
    const [showAll, setShowAll] = useState(false);
    const [initialCardsToShow, setInitialCardsToShow] = useState(11);
    const [, setAdditionalCardsToShow] = useState(15);

    useEffect(() => {
        const updateCardCount = () => {
            if (window.innerWidth <= 640) {
                setInitialCardsToShow(4);
                setAdditionalCardsToShow(portfolioData.length);
            } else {
                setInitialCardsToShow(12);
                setAdditionalCardsToShow(portfolioData.length);
            }
        };
        updateCardCount();
        window.addEventListener('resize', updateCardCount);
        return () => {
            window.removeEventListener('resize', updateCardCount);
        };
    }, []);

    const handleButtonClick = () => {
        setBtnName((prevName) => (prevName === 'See more' ? 'See less' : 'See more'));
        setShowAll((prevShowAll) => !prevShowAll);
    };

    return (
        <div className='md:max-w-[768px] lg:max-w-[1164px] mx-auto px-3 lg:px-4 xl:px-3 mt-12 sm:mt-[70px] lg:mt-[123px]'>
            <div className='flex flex-wrap flex-row -mx-3'>
                {portfolioData.slice(0, showAll ? portfolioData.length : initialCardsToShow).map(item => (
                    <div key={item.id} className='lg:w-1/3 w-full sm:w-1/2 px-3 mb-4 md:mb-6'>
                        <div className='border border-extraLightOffGrey group rounded-md p-[10px] sm:p-[15px_17px] h-full max-w-[364px] mx-auto lg:mx-0' >
                            <div className='max-w-[330px] max-h-[200px] sm:max-h-[311px] rounded-md overflow-hidden'><img src={item.image} alt={item.name} className='max-w-[330px] object-cover duration-300 group-hover:scale-105  max-h-[200px] sm:max-h-[311px] w-full h-full rounded-md' /></div>
                            <p className='mt-2 sm:mt-3 font-poppins font-bold text-base sm:text-lg md:text-xl !leading-[150%] text-darkblue'>{item.name}</p>
                            <p className='mt-1 sm:mt-[10px] font-poppins font-normal text-sm sm:text-base text-darkblue opacity-70 !leading-[150%]'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='sm:mt-[26px] mt-2 flex justify-center relative z-10'>
                <CommonBtn btnName={btnName} onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default PortfolioCardSection;
