/* eslint-disable no-unused-vars */
import React from 'react'
import './FundraisingPreview.css'
import { Link } from 'react-router-dom'

const FundraisingPreview = () => {
    return (
        <>
            {/* <div className="container-title">
                <div className="title-dot"></div>
                <h3>Hope Fund</h3>
            </div> */}

            <div className="hope-container">
                <div className="hope-card">
                    <div className="hope-subheading">
                        <div className="hope-dot"></div>
                        <h3>Empowering Wellness, Inspiring Hope</h3>
                    </div>

                    <div className="hope-heading">
                        <div className="hope-dot2"></div>
                        <h2>Health <span>&</span> Hope Fund</h2>
                    </div>
                    <p>Our Health & Hope Fund is dedicated to providing financial assistance to those in need, ensuring that everyone has access to essential healthcare services. Your contributions help us bring healing and hope to our community, supporting patients and families during their most challenging times.</p>
                    <div className="hope-btns">
                        <button><Link to='/fundraising' className='appointment-btn'>Donate Now</Link></button>
                        <button><Link to='/fundraising' className='donate-btn'>Learn More</Link></button>
                    </div>
                </div>
                <div className="hope-card"></div>
            </div>
        </>
    )
}

export default FundraisingPreview
