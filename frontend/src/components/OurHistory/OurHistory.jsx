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
                    <p>Founded in 2022 as Shiloh Medical & Fertility Center in Kampala, Uganda, Shiloh Hospital was established by a team of experienced healthcare professionals to provide affordable, high-quality, super-specialized care to financially less privileged communities.
                         The hospital has since grown into a multi-specialty center, offering a wide range of medical services with a commitment to empathy, social responsibility, respect, integrity, and excellence. 
                         Shiloh Hospital is dedicated to enhancing the health and well-being of its community and aims to become the leading healthcare provider in Uganda and sub-Saharan Africa.</p>

                    
                </div>
            </div>
        </>
    )
}

export default OurHistory
