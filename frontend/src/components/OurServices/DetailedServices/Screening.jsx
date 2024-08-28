/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'
import { Link } from 'react-router-dom'

const Screening = () => {

  return (
    <>
    <ServicesHeader />

    <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>Screening Services</h2>
                </div>

                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>

                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Cancer Screening:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Cervical Cancer:</strong> Screening tests like Pap smears to detect precancerous or cancerous cells in the cervix.
                            </li>
                            <li><strong>Breast Cancer:</strong> Screening methods such as mammograms to detect breast cancer.</li>
                            <li><strong>Prostate Cancer:</strong> Tests such as PSA (Prostate-Specific Antigen) to screen for prostate cancer.</li>
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

export default Screening
