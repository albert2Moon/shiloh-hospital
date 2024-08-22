/* eslint-disable no-unused-vars */
import React from 'react'
import './Donate.css'
import { Link } from 'react-router-dom'

const Donate = () => {
    return (
        <>
        <div className="container-title">
                <div className="title-dot"></div>
                <h3>Donate Now</h3>
            </div>
                
        <div className='donate-cta'>
            <p>Every dollar you donate brings hope and healing to someone in need.
                Your generosity can save lives and improve the health of our community.
                Click the button above to make a secure donation through our online form.
                Your support is deeply appreciated and will make a lasting impact.</p>
                <button className='Donate-btn'><Link to=''>Donate Now</Link></button>
        </div>
        </>
    )
}

export default Donate
