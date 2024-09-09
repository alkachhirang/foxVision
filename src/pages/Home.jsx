import React from 'react'
import CommonHeader from "../components/common/CommonHeader"
import WhatWeDo from '../components/fox-vision/WhatWeDo'
import HowWeWorks from '../components/fox-vision/HowWeWorks'
import ProjectStarten from '../components/fox-vision/ProjectStarten'
import LogoDesign from '../components/fox-vision/LogoDesign'
import Angebot from '../components/fox-vision/Angebot'
const Home = () => {

  return (
    <div>
      <div className="2xl:min-h-screen">
        <CommonHeader
          additionalClass="mt-12 lg:mt-16" />
      </div>
      <WhatWeDo />
      <LogoDesign />
      <HowWeWorks />
      <Angebot />
      <ProjectStarten bgColor='bg-darkpurple' />
    </div>
  )
}

export default Home