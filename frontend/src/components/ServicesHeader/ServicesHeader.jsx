// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './ServicesHeader.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Header = () => {


  return (
    <div className='services-header'>
      <div className="header-img">
        <img src={assets.img1} alt="" />
      </div>

      <div className="header-overlay"></div>
      <div className="header-contents">

        <div className="hero-subheading">
          <div className="hero-dot"></div>
          <h3>Your Health, Our Priority</h3>
        </div>

        <div className="hero-heading">
          <div className="hero-dot2"></div>
          <h2>Our Medical <span>&</span> Fertility Services</h2>
        </div>
        <p>Explore a wide range of specialized services tailored to meet your unique healthcare needs. From general medical care to advanced fertility treatments, our team is here to support your well-being.</p>

        <div className="header-btns">
          <button><Link to='/about-us' className='appointment-btn'>Schedule a Consultation</Link></button>
          <button><Link to='/fundraising' className='donate-btn'>Learn More</Link></button>
        </div>

      </div>

    </div>
  )
}

export default Header
