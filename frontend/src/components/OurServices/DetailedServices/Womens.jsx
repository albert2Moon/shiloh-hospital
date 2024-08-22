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
                            <li><strong>Routine Gynecological Exams:</strong>Regular check-ups to monitor and maintain women’s reproductive health.</li>
                            <li><strong>Pap Smears and Cervical Cancer Screenings:</strong>Early detection and prevention of cervical cancer through routine screenings.</li>
                            <li><strong>Menstrual Disorder Management:</strong>Diagnosis and treatment of conditions related to menstruation, such as irregular periods, PMS, and more.</li>
                            <li><strong>Menopause Management:</strong>Comprehensive care and support for women experiencing menopause, including hormone therapy and lifestyle advice.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Women's Wellness:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Hormonal Assessments:</strong>Detailed evaluations of hormone levels to address issues related to menstruation, fertility, and menopause.</li>
                            <li><strong>Osteoporosis Screening:</strong>Bone density testing to assess the risk of osteoporosis and guide preventive care.</li>
                            <li><strong>Nutritional Guidance:</strong>Personalized diet plans to support women’s health at all stages of life.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Family Planning:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Contraceptive Counseling and Prescriptions:</strong>Expert advice on birth control options and prescriptions tailored to individual needs.</li>
                            <li><strong>Preconception Counseling:</strong>Guidance for women planning to conceive, focusing on optimizing health and fertility.</li>
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
