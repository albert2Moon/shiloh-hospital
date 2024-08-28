/* eslint-disable no-unused-vars */
import React from 'react'
import './ContactUs.css'
import ContactHeader from '../../components/ContactHeader/ContactHeader'
import EmbededMap from '../../components/EmbededMap/EmbededMap'
import NewsLetters from '../../components/NewsLetters/NewsLetters'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactCards from '../../components/ContactCards/ContactCards'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import FAQs from '../../components/FAQs/FAQs'

const ContactUs = () => {
  return (
    <div>
      <ContactHeader />
      <div className='form-area'>
        <ContactForm />
        <NewsLetters />
      </div>
      <ContactCards />
      <SocialLinks />
      <EmbededMap />
      <FAQs />
    </div>
  )
}

export default ContactUs
