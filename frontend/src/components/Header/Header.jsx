// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Header = () => {


  return (
    <div className='header'>

      <div className="header-img">
        <img src={assets.img1} alt="" />
      </div>

      <div className="header-overlay"></div>

      <div className="header-contents">

        <div className="hero-subheading">
          <div className="hero-dot"></div>
          <h3>Compassionate Care for Your Health and Future</h3>
        </div>

        <div className="hero-heading">
          <div className="hero-dot2"></div>
          <h2>Shiloh Medical <span>&</span> Fertility Center</h2>
        </div>
        <p>Shiloh Medical & Fertility Center offers expert healthcare and personalized fertility solutions. Our dedicated team is here to support your journey to better health and a brighter future with care and compassion.</p>

        <div className="header-btns">
          <button><Link to='/about-us' className='appointment-btn'>Book an Appoinment</Link></button>
          <button><Link to='/fundraising' className='donate-btn'>Donate Now</Link></button>
        </div>

      </div>

    </div>
  )
}

export default Header
