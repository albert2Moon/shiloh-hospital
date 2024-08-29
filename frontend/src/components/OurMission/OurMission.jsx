/* eslint-disable no-unused-vars */
import React from 'react'
import './OurMission.css'

const OurMission = () => {
    return (
        <>
            <div className="container-title">
                <div className="title-dot"></div>
                <h3>Our Mission <span>&</span> Vision</h3>
            </div>

            <div className="mission-container">
                <div className="mission-card"></div>
                <div className="mission-card">
                    <div className="mission-subheading">
                        <div className="history-dot"></div>
                        <h3>Committed to Excellence in Healthcare and Community Well-being</h3>
                    </div>

                    <div className="mission-sub-container">
                        <div className="mission-sub-card">
                            <div className="mission-heading">
                                <div className="mission-dot2"></div>
                                <h2>Our <span>Mission</span></h2>
                            </div>
                            <p>At Shiloh Health Services, our mission is to deliver affordable, excellent, and compassionate multi-specialty care, with a strong emphasis on wellness, research, and medical training. We are dedicated to enhancing the quality of life in our community by providing comprehensive healthcare services that are both accessible and patient-focused.</p>
                        </div>

                        <div className="vision-sub-card">
                            <div className="mission-heading">
                                <div className="mission-dot2"></div>
                                <h2>Our <span>Vision</span></h2>
                            </div>
                            <p>Our vision is to grow as the regional medical center of choice in Uganda and sub-Saharan Africa, continually advancing the quality and accessibility of our services. We strive to be the leader in affordable, super-specialized healthcare, recognized for our commitment to excellence and innovation in patient care.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurMission
