/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import { Link } from 'react-router-dom'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'

const Hope = () => {
    return (
        <>

            <ServicesHeader />

            <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>Health and Hope Fund Services</h2>
                </div>
                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>
                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Membership Plans:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Individual and Family Coverage Options:</strong>Flexible membership plans that provide coverage for essential healthcare services for individuals and families.</li>
                            <li><strong>Prepaid Healthcare Services:</strong>Convenient prepayment options for select healthcare services, offering peace of mind and financial security.</li>
                            <li><strong>Priority Booking and Access to Services:</strong>Exclusive benefits, including faster access to appointments and services for members.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Additional Benefits:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Discounts on Non-covered Services:</strong>Savings on a variety of healthcare services that may not be covered by your plan.</li>
                            <li><strong>Health Assessments and Wellness Programs:</strong>Access to regular health assessments and specialized wellness programs designed to promote overall well-being.</li>
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

export default Hope
