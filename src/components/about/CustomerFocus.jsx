import React from 'react';
import customerFocus from '../../asstes/images/webp/customer-focus/customerFocus.webp';
import { CommonHeading } from '../common/CommonHeading';
import { FoxWhiteLogo } from '../common/Icons';

export const CustomerFocus = () => {
    return (
        <div className='bg-darkpurple pt-[48px] md:pt-[64px] lg:pt-[77px] mb-[-2px]'>
            <div className='container xl:max-w-[1164px] px-3 mx-auto'>
                <div className='flex flex-row flex-wrap items-center justify-center lg:justify-between pb-[25px] md:pb-[30px] xl:pb-[78px]'>
                    <div className='lg:w-[48%] w-full'>
                        <p
                            className='font-poppins text-white text-center lg:text-start font-bold sm:text-xl text-sm uppercase !leading-normal sm:mb-3'>FOX philosophy</p>
                        <CommonHeading className="text-white mb-[21px]" heading="Customer Focus" />
                        <p className='text-white text-xl font-normal font-poppins lg:max-w-[481px] !leading-normal text-center lg:text-start' >The customer is our focus. We do everything we can to provide our customers with individual, needs-based advice.</p>
                    </div>
                    <div className='lg:w-[49%] w-full mt-[30px] lg:mt-0 flex justify-center lg:justify-end' >
                        <img src={customerFocus} alt="customerFocus" className='max-w-[556px] w-full xl:h-[371px]' />
                    </div>
                </div>
                <div className="flex justify-center" >
                    <FoxWhiteLogo className="xl:w-[141px] xl:h-[172px] sm:w-[120px] sm:h-[100px] h-[80px] w-[101px] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default CustomerFocus;
