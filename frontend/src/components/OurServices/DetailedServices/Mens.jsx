/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import { Link } from 'react-router-dom'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'

const Mens = () => {
    return (
        <>

            <ServicesHeader />

            <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>Men's Health Services</h2>
                </div>
                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>
                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Men's Health Check-ups:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Annual Physical Exams:</strong>Comprehensive health assessments to monitor and maintain men’s overall well-being.</li>
                            <li><strong>Prostate Cancer Screening:</strong>Early detection of prostate cancer through routine screenings and PSA tests.</li>
                            <li><strong>Testosterone Level Assessment:</strong>Testing and evaluation of testosterone levels to address concerns related to male health.
                            </li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Men’s Wellness:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Stress Management Programs:</strong>Techniques and strategies to help men manage stress and maintain mental well-being.
                            </li>
                            <li><strong>Nutritional Counseling and Weight Management:</strong>Personalized plans to support healthy eating and weight management.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Sexual Health:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Erectile Dysfunction Assessment and Treatment:</strong>Comprehensive evaluation and treatment options for erectile dysfunction, tailored to individual needs.</li>
                            <li><strong>STD/STI Screening and Treatment:</strong>Confidential testing and treatment for sexually transmitted infections, ensuring timely and appropriate care.</li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="detailed-btn">
                <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
            </div>

        </>
    )
}

export default Mens
