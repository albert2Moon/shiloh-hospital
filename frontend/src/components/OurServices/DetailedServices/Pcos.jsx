/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'
import { Link } from 'react-router-dom'

const Pcos = () => {

  return (
    <>
    <ServicesHeader />

    <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>PCOS Clinic</h2>
                </div>

                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>

                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>PCOS Management and Support:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Dietician:</strong> A healthcare professional specializing in diet and nutrition to manage PCOS.</li>
                            <li><strong>Psychologist:</strong> A mental health professional providing support for the emotional aspects of PCOS.
                            </li>
                            <li><strong>Customized Meal Plan:</strong> A personalized diet plan designed to manage PCOS symptoms.</li>
                            <li><strong>Customized Workout Plan:</strong> A personalized exercise regimen to help manage PCOS.
                            </li>
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

export default Pcos
