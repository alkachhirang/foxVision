import React from 'react'
import CommonHeader from '../components/common/CommonHeader'
import PortfolioCardSection from '../components/portofolio/PortfolioCardSection'
import ProjectStarten from '../components/fox-vision/ProjectStarten'

function Portfolio() {
  return (
    <div>
      <CommonHeader heroHeading={[
        { text: 'Portfolio ', isBold: false },
      ]}
        hideImage={true}
        hideParagraph={true}
        additionalClass="mt-12 lg:mt-[76px]  mb-14 md:mb-[100px]" />
      <PortfolioCardSection />
      <ProjectStarten bgColor='bg-white'/>
    </div>
  )
}

export default Portfolio