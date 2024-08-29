/* eslint-disable no-unused-vars */

import React from 'react'
import './AboutUs.css'
import AboutUsHeader from '../../components/AboutUSHeader/AboutUsHeader'
import KeyStaff from '../../components/KeyStaff/KeyStaff'
import OurHistory from '../../components/OurHistory/OurHistory'
import OurMission from '../../components/OurMission/OurMission'
import OurValues from '../../components/OurValues/OurValues'

const AboutUs = () => {
  return (
    <>
    <div>
      <AboutUsHeader />
    </div>

    <OurMission />
    <OurValues />
    <OurHistory />
    <KeyStaff />

    </>
  )
}

export default AboutUs
