/* eslint-disable no-unused-vars */

import React from 'react'
import './AboutUs.css'
import AboutUsHeader from '../../components/AboutUSHeader/AboutUsHeader'
import KeyStaff from '../../components/KeyStaff/KeyStaff'
import OurHistory from '../../components/OurHistory/OurHistory'
import OurMission from '../../components/OurMission/OurMission'

const AboutUs = () => {
  return (
    <>
    <div>
      <AboutUsHeader />
    </div>

    <OurMission />
    <OurHistory />
    <KeyStaff />

    </>
  )
}

export default AboutUs
