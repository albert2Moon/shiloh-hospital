/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'
import { Link } from 'react-router-dom'

const Men = () => {

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
                            <h3>Male Infertility Treatments:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Low Sperm:</strong>Treatments aimed at improving sperm count and quality.</li>
                            <li><strong>No Sperm:</strong>Treatments or procedures to address azoospermia (absence of sperm in the semen).
                            </li>
                            <li><strong>TESA/TESE (Testicular Sperm Aspiration/Extraction):</strong>Procedures to retrieve sperm directly from the testicles.</li>
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

export default Men
