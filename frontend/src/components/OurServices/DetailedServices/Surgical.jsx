/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'
import { Link } from 'react-router-dom'

const Surgical = () => {

  return (
    <>
    <ServicesHeader />

    <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>Women's Health Services</h2>
                </div>

                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>

                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Surgical Services:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Surgery: </strong>Medical procedures involving an incision with instruments; performed to repair damage or remove diseased tissue.
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

export default Surgical
