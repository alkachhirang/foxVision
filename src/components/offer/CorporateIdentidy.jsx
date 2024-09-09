import React from 'react'
import CorporateIdentiy from "../../asstes/images/webp/offer/corporateIdentiy.webp";
import CommonWhatWeDo from '../common/CommonWhatWeDo';
import { ContactList } from '../common/Icons';
const CorporateIdentidy = () => {
  return (
    <>
      <div className=' max-w-[1164px] mx-auto px-3 lg:px-4 xl:px-3'>
        <div className='pt-12 md:pt-16 lg:pt-[70px] xl:pt-32'>
          <CommonWhatWeDo
            CommonWhatWeDoimg={CorporateIdentiy}
            textLightpurple='text-darkpurple'
            arrowPosition='left-0 lg:left-[32%] top-[-7%] lg:top-[4%] hidden xl:block'
            textSkyblue='text-darkpurple'
            paraWidth='lg:max-w-[552px]'
            SvgPosition='lg:justify-start'
            marginPara='mt-5'
            Logo={<span className="flex justify-center items-center rounded-md shadow-[0px_12.63px_25.25px_0px_#05D5FB29] w-[70px] h-[70px] sm:w-[93px] sm:h-[93px] bg-lightsky">
              <ContactList /></span>}
            ImgClass='max-w-[465px] max-h-[349px] mt-[17px]'
            CommonWhatWeDoheading='Corporate identity'
            CommonWhatWeDoTextLightpurple='corporate design,'
            CommonWhatWeDoTextblack='Many people primarily associate logo and colors with it. Corporate identity is much more. Corporate identity, together with '
            CommonWhatWeDoBetweenTextblackagain=' forms the character of your company. Give your company a face and awaken emotions and trust in your customers. '
            CommonWhatWeDoTextSkyblue='FOX VISION'
            CommonWhatWeDotext5='would be happy to develop your corporate identity.'
          />
        </div>
      </div>
    </>
  )
}

export default CorporateIdentidy
