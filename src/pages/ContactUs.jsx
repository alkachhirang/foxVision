import React from 'react'
import CommonHeader from '../components/common/CommonHeader'
import ContactWithFoxvision from '../components/contact-us/ContactWithFoxvision'
import Map from '../components/contact-us/Map'
import ReachOut from '../components/contact-us/ReachOut'

const ContactUs = () => {
  return (
    <div>
      <CommonHeader heroHeading={[
        { text: 'Contact ', isBold: false },
        { text: 'Us', isBold: true },
      ]}
        hideImage={true}
        hideParagraph={true} 
        additionalClass="mt-12 lg:mt-[76px]  mb-14 md:mb-[100px]"/>
      <ContactWithFoxvision />
      <ReachOut/>
      <Map/>
    </div>
  )
}

export default ContactUs