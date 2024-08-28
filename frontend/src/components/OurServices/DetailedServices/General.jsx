/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'
import { Link } from 'react-router-dom'


const General = () => {
    return (
        <>

        <ServicesHeader />

            <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>General Medical Services</h2>
                </div>

                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>

                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Consultations:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>General Consultation:</strong> A standard medical evaluation where a healthcare provider assesses a patient’s overall health, addresses specific concerns, and provides recommendations or referrals.</li>
                        </ul>
                    </div>  

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Homecare Services:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Nursing Care:</strong> Professional nursing support for managing health conditions at home.</li>
                            <li><strong>ANC Visit Checks:</strong> Antenatal care visits to monitor the health of the mother and fetus during pregnancy.
                            </li>
                            <li><strong>Labs:</strong> Home collection of samples for laboratory tests.
                            </li>
                            <li><strong>Drug Administration:</strong> Administering prescribed medications at home.</li>
                            <li><strong>Drug Delivery:</strong> Delivery of prescribed medications to a patient’s home.</li>
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

export default General
