/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'
import { Link } from 'react-router-dom'

const Obstetrics = () => {

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
                            <h3>Comprehensive Obstetric Care."</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Painless Labor:</strong>Techniques and medications used to reduce pain during childbirth.
                            </li>
                            <li><strong>Chorionic Villous Sampling:</strong>A prenatal test that involves taking a sample of tissue from the placenta to test for genetic conditions.
                            </li>
                            <li><strong>Amniocentesis:</strong>A prenatal test in which a small amount of amniotic fluid is removed to test for genetic conditions.</li>
                            <li><strong>Fetal Doppler Velocimetry:</strong>A test that measures the blood flow in the fetus's blood vessels to assess the fetus's health.</li>
                            <li><strong>NT Scan (Nuchal Translucency Scan):</strong>An ultrasound test done in the first trimester to screen for chromosomal abnormalities.
                            </li>
                            <li><strong>Antenatal Care:</strong>Routine care provided during pregnancy to monitor the health of the mother and fetus.</li>
                            <li><strong>Delivery (Vaginal and Cesarean):</strong>The process of giving birth, either through the vaginal canal or by surgical incision (Cesarean section).</li>
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

export default Obstetrics
