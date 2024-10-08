/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'
import { Link } from 'react-router-dom'

const Womens = () => {

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
                            <h3>Gynecological Services:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Fibroid Removal:</strong> Surgical procedure to remove uterine fibroids.</li>
                            <li><strong>Ovarian Cyst Removal:</strong> Surgical procedure to remove cysts from the ovaries.</li>
                            <li><strong>Hysterectomy (Uterus Removal):</strong> Surgical removal of the uterus.</li>
                            <li><strong>Laparoscopy:</strong> Minimally invasive surgery using a laparoscope to diagnose and treat conditions within the abdomen.</li>
                            <li><strong>Genital Plastic Surgery:</strong> Surgical procedures to alter the appearance or function of the genital area.</li>
                            <li><strong>Endometriosis Treatment:</strong> Treatment for endometriosis, a condition where tissue similar to the lining of the uterus grows outside the uterus.
                            </li>
                            <li><strong>Adenomyosis Treatment:</strong> Treatment for adenomyosis, a condition where the inner lining of the uterus breaks through the muscle wall of the uterus.</li>
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

export default Womens
