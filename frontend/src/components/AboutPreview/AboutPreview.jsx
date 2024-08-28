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
                    <p>Shiloh Medical & Fertility Center, a private medical establishment in Kampala, Uganda, is among the few centers offering fertility treatments alongside other specialized medical services.
                        Founded in 2022 by a team of experienced healthcare professionals, the center was established to provide high-quality, affordable care to underserved communities. Shiloh Medical & Fertility Center is proud of its multidisciplinary team and is committed to delivering exceptional healthcare services. </p>

                    <div className="about-oneliners">
                        <div>
                            <div className="dot"></div>
                            <h3>Empathy</h3></div>
                            <div>
                            <div className="dot"></div>
                            <h3>Social Responsibility</h3></div>
                        <div>
                            <div className="dot"></div>
                            <h3>Respect</h3></div>
                        <div>
                            <div className="dot"></div>
                            <h3>Integrity</h3></div>
                        <div>
                            <div className="dot"></div>
                            <h3>Excellence</h3></div>
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
