// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './BlogHeader.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Header = () => {


  return (
    <div className='blog-header'>
      <div className="header-img">
        <img src={assets.img1} alt="" />
      </div>

      <div className="header-overlay"></div>
      <div className="header-contents">

        <div className="hero-subheading">
          <div className="hero-dot"></div>
          <h3>Insights & Information</h3>
        </div>

        <div className="hero-heading">
          <div className="hero-dot2"></div>
          <h2>Stay Informed with <span>Our Latest</span> Articles.</h2>
        </div>
        <p>Dive into expert insights, health tips, and the latest updates in medical care and fertility. Our blog is your go-to resource for staying informed and empowered.</p>

        <div className="header-btns">
          <button><Link to='/about-us' className='appointment-btn'>Subscribe for Updates</Link></button>
          <button><Link to='/fundraising' className='donate-btn'>Our Blog</Link></button>
        </div>

      </div>

    </div>
  )
}

export default Header
