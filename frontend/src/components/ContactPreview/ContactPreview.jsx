/* eslint-disable no-unused-vars */
import React from 'react'
import './ContactPreview.css'
import { Link } from 'react-router-dom'

const ContactPreview = () => {
  return (
    <>
        <div className="container-title">
            <div className="title-dot"></div>
            <h3>Get in Touch</h3>
        </div>

        <div className='links-container'>

        <div className="whatsapp">
            <a href=""><i className='fa-brands fa-whatsapp'></i></a>
        </div>
        <div className="instagram">
            <a href=""><i className='fa-brands fa-instagram'></i></a>
        </div>
        <div className="twitter">
            <a href=""><i className='fa-brands fa-twitter'></i></a>
        </div>
        <div className="linkedin">
            <a href=""><i className='fa-brands fa-linkedin-in'></i></a>
        </div>
        <div className="more">
            <Link to='/contact-us'><i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      
    </div>
    </>
  )
}

export default ContactPreview
