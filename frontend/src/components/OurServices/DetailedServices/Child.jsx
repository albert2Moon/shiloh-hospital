/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'
import { Link } from 'react-router-dom'

const Child = () => {
  return (
    <>

    <ServicesHeader />

    <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>Child Health Services</h2>
                </div>
                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>
                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Pediatric Care:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Newborn and Infant Check-ups:</strong>Regular health assessments to monitor the growth and development of newborns and infants.</li>
                            <li><strong>Vaccination Programs:</strong>Immunization schedules tailored to protect children against various diseases.</li>
                            <li><strong>Developmental Assessments:</strong>Evaluations to ensure that children are meeting their developmental milestones.</li>
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

export default Child
