/* eslint-disable no-unused-vars */
import React from 'react'
import './AboutPreview.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AboutPreview = () => {
    return (
        <>
            <div className="container-title">
                <div className="title-dot"></div>
                <h3>About Us</h3>
            </div>

            <div className="about-container">
                <div className="about-card">
                    <img src={assets.img2} alt="" />
                </div>
                <div className="about-card">
                    <div className="about-subheading">
                        <div className="about-dot"></div>
                        <h3>Compassionate Care, Exceptional Service</h3>
                    </div>

                    <div className="about-heading">
                        <div className="about-dot2"></div>
                        <h2>About Shiloh <span>Hospital</span></h2>
                    </div>
                    <p>At Shiloh Hospital, we are committed to delivering outstanding healthcare with a focus on compassion, innovation, and excellence. Our dedicated team of professionals works tirelessly to provide personalized care, ensuring the well-being of every patient. Discover our story and how we are transforming healthcare in our community.</p>

                    <div className="about-oneliners">
                        <div>
                            <div className="dot"></div>
                            <h3>Compasionate</h3></div>
                        <div>
                            <div className="dot"></div>
                            <h3>Innovative</h3></div>
                        <div>
                            <div className="dot"></div>
                            <h3>Trusted</h3></div>
                        <div>
                            <div className="dot"></div>
                            <h3>Resilient</h3></div>
                    </div>

                    <div className="about-btns">
                        <button><Link to='/about-us'>Learn More <i className="fa-solid fa-arrow-right"></i></Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPreview
