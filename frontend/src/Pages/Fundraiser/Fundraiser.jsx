/* eslint-disable no-unused-vars */
import React from 'react'
import './Fundraiser.css'
import FundraisingHeader from '../../components/FundraisingHeader/FundraisingHeader'
import ImpactStories from '../../components/ImpactStories/ImpactStories'
import HowToContribute from '../../components/HowToContribute/HowToContribute'
import OurFundraising from '../../components/OurFundraising/OurFundraising'
import Donate from '../../components/Donate/Donate'

const Fundraiser = () => {
  return (
    <>
      <div>
        <FundraisingHeader />
      </div>
      <OurFundraising />
      <HowToContribute />
      <ImpactStories />
      <Donate />
    </>
  )
}

export default Fundraiser
