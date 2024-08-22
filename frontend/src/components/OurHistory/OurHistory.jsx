/* eslint-disable no-unused-vars */
import React from 'react'
import './OurHistory.css'
import { Link } from 'react-router-dom'

const OurHistory = () => {
    return (
        <>
        <div className="container-title">
                <div className="title-dot"></div>
                <h3>Our Brief History   </h3>
            </div>

        <div className="history-container">
                <div className="history-card"></div>
                <div className="history-card">
                    <div className="history-subheading">
                        <div className="history-dot"></div>
                        <h3>From Humble Beginnings to a Leading Healthcare Provider</h3>
                    </div>

                    <div className="history-heading">
                        <div className="history-dot2"></div>
                        <h2>Our <span>Journey</span></h2>
                    </div>
                    <p>Shiloh Hospital was established in 1998 with a mission to provide top-tier healthcare services to the local community. Starting as a small clinic, the hospital has grown into a
                full-service medical facility, offering a wide range of services from general care to specialized treatments.
                Over the years, Shiloh Hospital has expanded its facilities and services to meet the growing needs of the community, while maintaining a strong focus on patient-centered care.</p>

                    
                </div>
            </div>
        </>
    )
}

export default OurHistory
