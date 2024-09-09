import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Desktop from "../../asstes/images/webp/hero/cloudDesktop.webp";
import { PathArrow } from './Icons';

const CommonHeader = ({ heroHeading, hideImage, hideParagraph, additionalClass }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  let pathChangeText = '';
  if (currentPath === '/about') {
    pathChangeText = 'About Us';
  } else if (currentPath === '/offer') {
    pathChangeText = 'Offer';
  } else if (currentPath === '/portfolio') {
    pathChangeText = 'Portfolios';
  } else if (currentPath === '/contact') {
    pathChangeText = 'Contact Us';
  }
  const isHomePage = currentPath === '/';
  return (
    <div className={`bg-darkpurple custom-header 2xl:flex 2xl:flex-col relative ${isHomePage ? 'min-h-screen' : ''}`}>
      <div className="px-3">
        <Navbar />
      </div>
      <div className="container xl:max-w-[1164px] mx-auto px-3 2xl:flex-grow flex justify-center flex-col">
        <div className='flex justify-start flex-col'>
          <div className="sm:px-12 md:px-8 lg:px-0 flex flex-col  w-full">
            <h1 className={`sm:!leading-[107%] !leading-[120%] font-montserrat text-center text-white text-[33px] sm:text-4xl md:text-6xxl lg:text-6xl xl:text-8xxl ${additionalClass}`}>
              {heroHeading ? (
                heroHeading.map((part, index) => (
                  <span key={index} className={part.isBold ? 'font-bold' : 'font-normal'}>
                    {part.text}
                  </span>
                ))
              ) : (
                <>
                  <span className='font-bold'>FOX</span> Vision<br /> Ihre Design Agentur!
                </>
              )}
            </h1>
            {!hideParagraph && (
              <p className='text-white !leading-[150%] text-center font-poppins px-3 text-base md:text-lg xl:text-2xl mt-3 lg:mt-9 mb-1'>
                Kreativagentur für Branding, Social Media & digitale Lösungen.
              </p>
            )}
            {!hideImage && (
              <img src={Desktop} alt="desktop" className='w-[714.51px] !mx-auto mb-12 sm:mb-[59px] xl:ml-20 xl:!h-[469px]' />
            )}
          </div>
          {currentPath !== '/' && (
            <p className="flex items-center md:gap-2 xl:gap-4 text-white font-medium font-poppins text-sm sm:text-base pb-5 sm:pb-[30px] text-start">
              <Link to="/" className='relative before:absolute before:flex before:h-[3px] before:transition-all before:bg-white before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:w-0 hover:before:w-full before:rounded-lg before:duration-300 cursor-pointer'>Home</Link> <PathArrow /> <span className='relative before:absolute before:flex before:h-[3px] duration-300 transition-all before:transition-all before:bg-white before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:w-0 hover:before:w-full before:rounded-lg before:duration-300 cursor-pointer'>{pathChangeText}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;

