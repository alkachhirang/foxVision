import React from 'react'
import { CommonHeading, CommonsubHeading } from '../common/CommonHeading'
import { reachOutData } from '../common/Helper'
import { Link } from 'react-router-dom'

const ReachOut = () => {
    return (
        <div className='pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-[130px]'>
            <div className="container md:max-w-[768px] lg:max-w-[1164px] px-3 lg:px-4 xl:px-3 mx-auto">
                <CommonsubHeading subheading="FOX VISION - Friendly and reliable" />
                <CommonHeading heading="More Ways to Reach Out" className="!text-center" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5  md:mt-10 lg:mt-[70px] xl:mt-[88px] gap-[30px]">
                    {reachOutData.map((data, index) => (
                        <Link to={data.link} target={data.target} rel='noreferrer' key={index} className={`min-[425px]:max-w-[360px]  md:max-w-[360px] mx-auto w-full max-h-[265px] group hover:translate-y-[-12px] lg:hover:translate-y-[-38px] py-7 duration-300 shadow-[0_4px_27px_0_#4B17E614] ${index === 0 ? "sm:py-10 " : index === 1 ? "sm:py-10 " : index === 2 ? "sm:py-7 sm:col-span-2 lg:col-span-1 " : ""} `} >
                            <div className='w-[60px] sm:w-[85px]  h-[60px] sm:h-[85px] bg-offpurple group-hover:bg-darkpurple duration-300 mx-auto  flex items-center justify-center rounded-[7px] shadow-[0_11.57px_27px_0_#4B17E61A]' >
                                <div >{data.icon}</div>
                            </div>
                            <p className=' text-darkblue text-center font-poppins font-semibold xl:text-2xl text-lg sm:text-xl !leading-[150%] sm:pb-4 pt-3 pb-2 sm:pt-6' >{data.heading}</p>
                            <p className='text-base font-normal font-poppins text-center text-black max-w-[304px] !leading-[150%] mx-auto' >{data.para}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReachOut
