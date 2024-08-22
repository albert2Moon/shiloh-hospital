/* eslint-disable no-unused-vars */
import React from 'react'
import './SocialLinks.css'

const SocialLinks = () => {
  return (
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
      
    </div>
  )
}

export default SocialLinks
