
/* eslint-disable no-unused-vars */
import React from 'react'
import './NewsLetters.css'

const NewsLetters = () => {
  return (
    <div className='newsletter-container'>

        <h2>Our <span>Newsletters</span></h2>
        <p>Subscribe and stay informed with the latest health tips, hospital news, and wellness programs from Shiloh Hospital or Follow us on social media and be a part of our health-conscious community!</p>

        <input type="email" name="newletter-email" id="newsletter-email" placeholder=' Enter Your Email' />

        <button className='newsletter-btn'>Subscribe</button>
      
    </div>
  )
}

export default NewsLetters
