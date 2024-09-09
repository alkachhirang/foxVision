import React from 'react';
import CommonButton from '../common/CommonBtn';
import { Link } from 'react-router-dom';

const ProjectStarten = ({ bgColor }) => {
    return (
        <div className={bgColor}>
            <div className='container mx-auto xl:max-w-[1164px] px-3 lg:px-4 xl:px-3 -mt-10 sm:-mt-1 relative z-[1]'>
                <div className='bg-sky w-full h-[200px] sm:h-[253px] rounded-[10px] p-[25px] sm:p-[36px] relative z-[1] flex justify-center items-center flex-col translate-y-20 md:translate-y-28'>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='sm:max-w-[613px] max-w-[400px] text-2xl sm:text-4xl lg:text-4xxl text-center font-semibold text-white mb-[20px] sm:mb-[29px] !leading-3md'>
                            Möchten Sie ein Projekt starten? Wir freuen uns.
                        </h3>
                        <Link to="/contact">  <CommonButton
                            className='!border-[2px] border-white hover:!border-transparent w-[124px] sm:!py-[13px] sm:!px-[30px] px-[25px] py-[7px]'
                            btnName='Kontakt'
                        /></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStarten;
