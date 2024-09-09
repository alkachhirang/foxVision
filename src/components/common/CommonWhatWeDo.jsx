import React from 'react'
import CommonBtn from './CommonBtn'
import { Arrow } from './Icons';
import { Link } from 'react-router-dom';

const CommonWhatWeDo = ({ CommonWhatWeDosubheading, CommonWhatWeDoimg, CommonWhatWeDoheading, CommonWhatWeDoTextblack, CommonWhatWeDoTextSkyblue, CommonWhatWeDoBetweenTextblackagain, ImgClass, textLightpurple, textOffblack, textSkyblue, CommonWhatWeDoTextLightpurple, CommonWhatWeDotext5, arrowPosition, paraWidth, Logo,
  SvgPosition, marginPara
}) => {
  return (
    <>
      <div className='flex-row flex flex-wrap items-center -mx-3 relative'>
        <span className={`${arrowPosition} absolute z-[-1] w-[98px] h-[139px] hidden xl:block`}><Arrow /></span>
        <div className='w-full lg:w-1/2 px-3'>
          <p className='font-poppins font-bold sm:text-xl text-sm xl:leading-lg text-darkblue text-center lg:text-start' >{CommonWhatWeDosubheading}</p>
          <h2 className='font-semibold font-montserrat text-3xl  md:mt-3 md:text-5xl xl:text-6xxl leading-md text-darkblue text-center lg:text-start relative  z-[2]' >{CommonWhatWeDoheading}</h2>
          <img src={CommonWhatWeDoimg} alt="displayAvatar" className={`${ImgClass} mx-auto w-full xl:w-auto lg:-mx-3`} />
        </div>
        <div className='w-full lg:w-1/2 px-3 flex flex-col lg:items-end mt-5 lg:mt-3'>
          <div className={`${paraWidth} lg:ml-auto`}>
            <span className={`${SvgPosition} flex justify-center`} >
              {Logo}
            </span>
            <p className={`${marginPara} font-normal font-poppins text-base sm:text-lg md:text-xl !leading-[160%] xl:!leading-lg opacity-70 text-darkblue text-center lg:text-start`} >
              {CommonWhatWeDoTextblack}
              <span className={`${textLightpurple}`}> {CommonWhatWeDoTextLightpurple} </span>
              <span className={`${textOffblack}`}> {CommonWhatWeDoBetweenTextblackagain} </span>
              <span className={`${textSkyblue}`}> {CommonWhatWeDoTextSkyblue} </span>
              {CommonWhatWeDotext5}</p>
            <div className='pt-5 lg:pt-10 flex justify-center lg:justify-start' ><Link to="/contact"><CommonBtn btnName='Contact' className='sm:!p-[14px_33px] w-[126px]' /></Link> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonWhatWeDo