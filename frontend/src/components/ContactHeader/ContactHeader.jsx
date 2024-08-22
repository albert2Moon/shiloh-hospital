/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './ContactHeader.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Header = () => {


  return (
    <div className='contact-header'>
      <div className="header-img">
        <img src={assets.img1} alt="" />
      </div>

      <div className="header-overlay"></div>
      <div className="header-contents">

        <div className="hero-subheading">
          <div className="hero-dot"></div>
          <h3>We're Here for You</h3>
        </div>

        <div className="hero-heading">
          <div className="hero-dot2"></div>
          <h2>Get in <span>Touch</span> with us at Shiloh Medical.</h2>
        </div>
        <p> Have questions or need assistance? Reach out to our team, and we’ll be happy to help with any inquiries or concerns you may have.</p>

        <div className="header-btns">
          <button><Link to='/about-us' className='appointment-btn'>Book an Appoinment</Link></button>
          <button><Link to='/fundraising' className='donate-btn'>Donate Now</Link></button>
        </div>

      </div>

    </div>
  )
}

export default Header
