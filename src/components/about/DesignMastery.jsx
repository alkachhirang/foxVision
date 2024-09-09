import React from 'react'
import { CommonHeading } from '../common/CommonHeading'
import MhillPaloka from '../../asstes/images/webp/design-mastery/mhillPaloka.webp';
import CommonWhatWeDo from '../common/CommonWhatWeDo';
import DesignProject from "../../asstes/images/webp/about-us/designProject.webp";
import { Logo } from '../common/Icons';

const DesignMastery = () => {
  return (
    <div>
      <div className="max-w-[1164px] mx-auto px-3">
        <div className='pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-32'>

          {/* --------design projet agency----------------- */}

          <CommonWhatWeDo
            CommonWhatWeDosubheading='FOX VISION'
            paraWidth='lg:max-w-[512px]'
            Logo={<Logo />}
            SvgPosition='lg:justify-end'
            CommonWhatWeDoimg={DesignProject}
            marginPara='mt-3 lg:mt-5'
            textLightpurple='text-lightsky2'
            arrowPosition='left-0 lg:left-[43%] top-[-11%] lg:top-[11%]'
            textSkyblue='text-lightsky2'
            ImgClass='max-w-[564px] max-h-[328px] mt-[29px]'
            CommonWhatWeDoheading='Design Project Agency'
            CommonWhatWeDoTextLightpurple='distinctive appearance'
            CommonWhatWeDoTextblack='As a design agency, we create a contemporary and'
            CommonWhatWeDoBetweenTextblackagain=' for you. Style is more in demand than ever. We help you show your best side to your customers.'
            CommonWhatWeDoTextSkyblue='Strong branding sets'
            CommonWhatWeDotext5='you apart from your competition and creates trust and seriousness.'
          />
        </div>

        {/* --------------------- our genes------------- */}

        <div className="overflow-hidden pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-[150px]">
          <p className='font-poppins text-darkblue text-center font-bold sm:text-xl text-sm !leading-normal uppercase sm:mb-3'>FOX VISION - Friendly and reliable</p>
          <CommonHeading heading="Design Mastery in Our Genes" className="!text-center" />
          <div className="mt-6 lg:mt-[55px] py-6 sm:p-4 lg:p-9 shadow-[0px_0px_51px_8px_#00000012] justify-center flex flex-wrap items-center xl:items-start ">
            <div className="md:w-1/2 px-2 sm:px-4 xl:px-0">
              <h4 className='font-poppins font-semibold text-2xl mb-1 text-center md:text-start xl:mb-4 text-darkblue !leading-[150%] xl:pt-10' >Mhill Paloka</h4>
              <p className='font-poppins text-base lg:text-xl font-normal lg:max-w-[500px] text-center md:text-start text-offgrey !leading-[183%]' >Mhill Paloka deepened his know-how in the areas of purchasing, marketing and controlling in a large international company. He has also been a founding member of a facility management company since 2009. Design has always been extremely important to him and he is happy to help you stay up to date.</p>
            </div>
            <div className="md:w-1/2 px-2 sm:px-4 xl:px-0">
              <img src={MhillPaloka} alt="Mhill Paloka" className='w-[330px] sm:w-[530px] mt-5 md:mt-0 sm:mt-8 max-h-[392px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignMastery