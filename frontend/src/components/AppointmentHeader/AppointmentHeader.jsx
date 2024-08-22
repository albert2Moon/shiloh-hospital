// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './AppointmentHeader.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Header = () => {


  return (
    <div className='appointment-header'>
      <div className="header-img">
        <img src={assets.img1} alt="" />
      </div>

      <div className="header-overlay"></div>
      <div className="header-contents">

        <div className="hero-subheading">
          <div className="hero-dot"></div>
          <h3>Easy & Convenient</h3>
        </div>

        <div className="hero-heading">
          <div className="hero-dot2"></div>
          <h2>Schedule Your <span>Appointment</span> Online.</h2>
        </div>
        <p> Book your appointment with our specialists at your convenience. Our online scheduling system makes it easy to find a time that works best for you.</p>

        <div className="header-btns">
          <button><Link to='/about-us' className='appointment-btn'>Book an Appoinment</Link></button>
          <button><Link to='/fundraising' className='donate-btn'>View Slots</Link></button>
        </div>

      </div>

    </div>
  )
}

export default Header
