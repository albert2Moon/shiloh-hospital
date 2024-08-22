// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './AboutUsHeader.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Header = () => {


  return (
    <div className='aboutus-header'>

      <div className="header-img">
        <img src={assets.img1} alt="" />
      </div>

      <div className="header-overlay"></div>

      <div className="header-contents">

        <div className="hero-subheading">
          <div className="hero-dot"></div>
          <h3>Compassionate Care, Trusted Expertise</h3>
        </div>

        <div className="hero-heading">
          <div className="hero-dot2"></div>
          <h2> Our Story <span>&</span> Commitment.</h2>
        </div>
        <p>Discover the values, mission, and team behind Shiloh Medical & Fertility Center. We are dedicated to providing compassionate care and innovative solutions to ensure your health and future.</p>

        <div className="header-btns">
          <button><Link to='/about-us' className='appointment-btn'>Meet Our Team</Link></button>
          <button><Link to='/fundraising' className='donate-btn'>Learn More</Link></button>
        </div>

      </div>

    </div>
  )
}

export default Header
