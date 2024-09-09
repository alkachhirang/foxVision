import React from 'react'
import DisplayAvatar from "../../asstes/images/webp/what-we-do/displayAvatar.webp";
import Watch from "../../asstes/images/webp/what-we-do/uiUxWatch.webp";
import TwoPhone from "../../asstes/images/webp/what-we-do/uiUxTwoPhone.webp";
import Men from "../../asstes/images/webp/what-we-do/uiUxMen.webp";
import ModelLady from "../../asstes/images/webp/what-we-do/uiUxModelLady.webp";
import Boodie from "../../asstes/images/webp/what-we-do/uiUxBoodie.webp";
import Rebio from "../../asstes/images/webp/what-we-do/uiUxRebio.webp";
import SmileEmoji from "../../asstes/images/webp/what-we-do/smileEmoji.webp";
import Joker from "../../asstes/images/webp/what-we-do/visualJoker.webp";
import Dog from "../../asstes/images/webp/what-we-do/visualDog.webp";
import Reptiles from "../../asstes/images/webp/what-we-do/visualReptiles.webp";
import BlackMagic from "../../asstes/images/webp/what-we-do/visualBlackMagic.webp";
import Strawberry from "../../asstes/images/webp/what-we-do/visualStrawberry.webp";
import MobilePhone from "../../asstes/images/webp/what-we-do/visualMobilePhone.webp";
import StarEmoji from "../../asstes/images/webp/what-we-do/starEmoji.webp";
import CommonWhatWeDo from '../common/CommonWhatWeDo';
import { BlueElipseBg, GraphicDesigner, Logo, PaintingBoard, PurpleElipseBg } from '../common/Icons';
const WhatWeDo = () => {
    return (
        <div className='overflow-hidden'>
            <div className='container xl:max-w-[1164px] mx-auto px-3 lg:px-4 xl:px-3 pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-60'>
                <CommonWhatWeDo
                    CommonWhatWeDosubheading='A RESULTS-DRIVEN AGENCY'
                    ImgClass='max-w-[590.5px] max-h-[378.96px] mt-4 sm:mt-6 xl:mt-[49.87px]'
                    CommonWhatWeDoimg={DisplayAvatar}
                    Logo={<Logo />}
                    CommonWhatWeDoheading='What we do'
                    SvgPosition='lg:justify-end'
                    paraWidth='lg:max-w-[512px]'
                    textLightpurple='text-darkpurple'
                    marginPara='mt-3 md:mt-5'
                    arrowPosition='left-0 lg:left-[38%] top-[-11%] sm:-top-[10%] lg:top-[1%]'
                    CommonWhatWeDoTextLightpurple='trust and loyalty to your brand.'
                    CommonWhatWeDoTextblack='We define the intangible assets of your brand and subsequently increase'
                    CommonWhatWeDoBetweenTextblackagain='Uniqueness, value proposition, clearly understandable core messages and an innovative design result in a brand personality that will be. We then transfer this genetic code to the relevant target groups cross-media via relevant channels. And we will reposition you profitably' />
                <div className='flex pt-20 sm:pt-[130px]  xl:pt-[197px] flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap -mx-3 relative z-[1] items-center'>
                    <span className=' absolute right-0 1xl:right-[-9%] top-[26%] lg:top-[36%] z-[-1]'>
                        <PurpleElipseBg />
                    </span>
                    <div className='w-full lg:w-5/12 px-3 mt-8 lg:mt-0'>
                        <span className='flex justify-center items-center rounded-md shadow-[0px_12.63px_25.25px_0px_#4B17E62B] w-[70px] h-[70px] sm:w-[93px] sm:h-[93px] bg-lightpurple mx-auto lg:mx-0'><PaintingBoard /></span>
                        <p className='font-poppins font-semibold text-2xl !leading-[150%] text-darkblue text-center lg:text-start mt-4 sm:mt-5 md:mt-7 lg:mt-[39px]'>UI/UX Creative Design</p>
                        <p className='font-poppins font-normal text-base sm:text-lg xl:text-xl sm:px-10 lg:px-0 !leading-[150%] text-darkblue opacity-70 mt-2 lg:max-w-[386px] text-center lg:text-start'>UI/UX creative design is the art of crafting digital experiences that seamlessly blend aesthetics with functionality. It's about understanding users' needs and behaviors and translating that knowledge into intuitive, visually appealing interfaces. </p>
                    </div>
                    <div className='w-full lg:w-7/12 px-3 relative mx-auto'>
                        <div className='flex justify-center lg:justify-start gap-2 sm:gap-[22.63px]'>
                            <div className='flex flex-col gap-2 sm:gap-[25.97px]'>
                                <div className='max-w-[203.39px]'><img src={Watch} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                                <div className='max-w-[203.39px]'><img src={ModelLady} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[159px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                            </div>
                            <div className='flex flex-col'>
                                <div className=' relative'>
                                    <img src={SmileEmoji} alt="smileemoji" className=' absolute left-[32%] top-[-28%] max-w-[60px] sm:max-w-[123px] max-h-[123px]' />
                                    <img src={TwoPhone} alt="watch" className=' hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' />
                                </div>
                                <div className='max-w-[203.39px]'><img src={Boodie} alt="watch" className='mt-4 sm:mt-[68.69px] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[150px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                            </div>
                            <div className='flex flex-col gap-2 sm:gap-[25.97px]'>
                                <div className='max-w-[203.39px]'><img src={Men} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                                <div className='max-w-[203.39px]'><img src={Rebio} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[150px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' pt-16 sm:pt-[100px] md:p t-16 lg:pt-20 xl:pt-[202px] flex-row flex-wrap lg:flex-nowrap -mx-3 flex items-center relative pb-8  xl:pb-[102px]'>
                    <span className=' absolute left-0 1xl:left-[-9%] top-[21%] sm:top-[26%] lg:top-[28%] z-[-1]'>
                        <BlueElipseBg />
                    </span>
                    <div className='lg:w-7/12 px-3 relative mx-auto'>
                        <div className='flex gap-2 sm:gap-[22.63px]'>
                            <div className='flex flex-col gap-3 md:gap-[26.5px]'>
                                <div className='max-w-[203.39px]'><img src={Joker} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                                <div className='max-w-[203.39px]'><img src={BlackMagic} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[159px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                            </div>
                            <div className='flex flex-col gap-3 md:gap-[26.5px]'>
                                <div className='mt-5 sm:mt-10 relative'>
                                    <img src={StarEmoji} alt="smileemoji" className=' absolute left-[10%] top-[-28%] max-w-[60px] sm:max-w-[123px] max-h-[123px]' />
                                    <img src={Dog} alt="watch" className=' hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203px] w-full max-h-[219.03px] border duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' />
                                </div>
                                <div className='max-w-[203.39px]'><img src={Strawberry} alt="watch" className='hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[150px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                            </div>
                            <div className='flex flex-col gap-3 md:gap-[26.5px]'>
                                <div className='max-w-[203.39px]'><img src={Reptiles} alt="watch" className=' hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                                <div className='max-w-[203.39px]'><img src={MobilePhone} alt="watch" className=' hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[150px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12 px-3 mt-5 lg:mt-0'>
                        <div className='lg:max-w-[425px] lg:ml-auto'>
                            <span className='flex justify-center items-center rounded-md shadow-[0px_12.63px_25.25px_0px_#05D5FB29] w-[70px] h-[70px] sm:w-[93px] sm:h-[93px] bg-lightsky mx-auto lg:mx-0' ><GraphicDesigner /></span>
                            <p className='font-poppins font-semibold text-2xl !leading-[150%] text-darkblue text-center lg:text-start mt-4 sm:mt-5 md:mt-7 lg:mt-[39px]' >Visual Graphic Design</p>
                            <p className='font-poppins font-normal text-base sm:text-lg xl:text-xl sm:px-10 lg:px-0 !leading-[150%] text-darkblue opacity-70 mt-2  text-center lg:text-start' >Visual graphic design is the art of using visual elements, such as images, typography, color, and layout, to convey a message, tell a story, or evoke emotions.</p>
                        </div>
                    </div>
                </div>
                <div className='mb-12 md:mb-8 flex justify-center xl:justify-start'>
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo