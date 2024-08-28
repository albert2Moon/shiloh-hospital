/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview'
import AboutPreview from '../../components/AboutPreview/AboutPreview'
import ContactPreview from '../../components/ContactPreview/ContactPreview'
import FAQs from '../../components/FAQs/FAQs'

const Home = () => {
  return (
    <>
    <div>
      <Header />
    </div>
      <AboutPreview />
      <ServicesPreview />
      <ContactPreview />
      <FAQs />
    </>
  )
}

export default Home
