/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import { Link } from 'react-router-dom'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'

const Maternal = () => {
    return (
        <>

            <ServicesHeader />

            <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>Maternal Health Services</h2>
                </div>
                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>
                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Prenatal Care:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Regular Prenatal Check-ups:</strong>Ongoing monitoring of mother and baby’s health throughout pregnancy to ensure a safe and healthy pregnancy.</li>
                            <li><strong>Prenatal Vitamins and Supplements:</strong>Essential nutrients to support the health and development of the baby during pregnancy.</li>
                            <li><strong>Ultrasound Monitoring:</strong>Regular ultrasound scans to monitor the baby’s growth and development.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Postnatal Care:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Postnatal Check-ups for Mother and Baby:</strong>Comprehensive care for both mother and baby after birth, ensuring a healthy recovery and early development.</li>
                            <li><strong>Breastfeeding Support and Counseling:</strong>Guidance and support for new mothers to successfully breastfeed their babies.</li>
                            <li><strong>Parenting Classes and Workshops</strong>Educational programs to help new parents navigate the early stages of parenthood with confidence.</li>
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

export default Maternal
