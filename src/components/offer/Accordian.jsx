import React, { useState, useRef, useEffect } from 'react';
import { AccordianArrowDown, AccordianArrowUp } from '../common/Icons';

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRefs = useRef([]);

  const handleSetIndex = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setContentHeight(contentRefs.current[index].scrollHeight);
    }
  };

  useEffect(() => {
    if (activeIndex === null) {
      setContentHeight(0);
    } else {
      setContentHeight(contentRefs.current[activeIndex].scrollHeight);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (contentRefs.current[0]) {
      setContentHeight(contentRefs.current[0].scrollHeight);
    }
  }, []);

  return (
    <div className="accordion max-w-[970px] mx-auto relative z-10">
      {items.map((item, index) => (
        <div onClick={() => handleSetIndex(index)} key={index} className="border cursor-pointer md:p-4 sm:p-3 p-2 lg:p-[21px] border-lightOffGrey rounded-md mb-3 md:mb-5">
          <button
            className="w-full " >
            <div className="flex justify-between items-center sm:h-[26px]">
              <span className="font-semibold font-montserrat sm:text-lg text-base md:text-xl lg:text-2xl leading-md text-start text-darkblue">{item.title}</span>
              <span className='pl-4'>
                {activeIndex === index ? (
                  <AccordianArrowUp />
                ) : (
                  <AccordianArrowDown />
                )}
              </span>
            </div>
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
            style={{ maxHeight: activeIndex === index ? `${contentHeight}px` : '0' }}
          >
            <div className="pt-2 sm:pt-3 md:pt-[15px]">
              <p className='font-poppins font-normal text-[14px] sm:text-base md:text-lg lg:text-xl leading-normal sm:!leading-lg text-darkblue opacity-70 max-w-[859px]'>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
