/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview'
import AboutPreview from '../../components/AboutPreview/AboutPreview'
import FundraisingPreview from '../../components/FundraisingPreview/FundraisingPreview'
import ContactPreview from '../../components/ContactPreview/ContactPreview'

const Home = () => {
  return (
    <>
    <div>
      <Header />
    </div>
      <AboutPreview />
      <ServicesPreview />
      <FundraisingPreview />
      <ContactPreview />
    </>
  )
}

export default Home
