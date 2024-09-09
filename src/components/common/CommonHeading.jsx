import React from 'react';

export const CommonHeading = ({ heading, className }) => {
  return (
    <h2
      className={`${className} capitalize font-semibold font-montserrat text-center lg:text-start text-3xl md:text-5xl xl:text-6xxl !leading-md text-darkblue`}
    >
      {heading}
    </h2 >
  );
};
export const CommonsubHeading = ({ subheading, className }) => {
  return (
    <p
      className={`${className} uppercase font-poppins text-darkblue !text-center font-bold lg:text-xl sm:text-base text-sm !leading-normal mb-1 lg:mb-3`}
    >
      {subheading}
    </p>
  );
};



