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
                            <li><strong>General Practitioner (GP) Consultations:</strong> Comprehensive evaluations and personalized care plans for a variety of common health issues, ensuring your overall well-being.</li>
                            <li><strong>Specialist Consultations:</strong> Access to experts in fields such as cardiology and endocrinology for advanced diagnostic and treatment options tailored to your specific needs.</li>
                            <li><strong>Telemedicine Consultations:</strong> Convenient and secure online consultations with our healthcare providers, allowing you to receive medical advice and treatment plans from the comfort of your home.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Preventive Care:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Annual Health Check-ups:</strong> Thorough yearly examinations to monitor and maintain your health, identifying potential issues early on.</li>
                            <li><strong>Vaccinations and Immunizations:</strong> Comprehensive immunization programs to protect you against various infectious diseases.</li>
                            <li><strong>Blood Pressure and Cholesterol Screenings:</strong> Regular monitoring of key health indicators to prevent and manage cardiovascular diseases.</li>
                            <li><strong>Diabetes Screenings:</strong> Early detection of diabetes through specialized blood tests and assessments.</li>
                            <li><strong>Cancer Screenings:</strong> Targeted screenings for breast, cervical, and prostate cancers, utilizing the latest techniques to ensure early detection and effective treatment.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Laboratory Services:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Blood Tests:</strong> Comprehensive blood analyses, including CBC, lipid profiles, glucose levels, and more, to assess your overall health.</li>
                            <li><strong>Urinalysis:</strong> Detailed urine tests to detect potential issues with kidney function, infections, and more.</li>
                            <li><strong>Hormone Level Testing:</strong> Assessment of various hormone levels to diagnose and manage endocrine disorders.</li>
                            <li><strong>STD/STI Testing:</strong> Confidential testing for sexually transmitted infections, ensuring prompt and appropriate treatment.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Diagnostic Imaging:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Ultrasound Scans:</strong> Non-invasive imaging to assess and diagnose various conditions, including abdominal, pelvic, and vascular issues.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Chronic Disease Management:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Diabetes Management:</strong> Comprehensive care plans to help you manage diabetes, including lifestyle advice, medication management, and regular monitoring.</li>
                            <li><strong>Hypertension Management:</strong> Personalized treatment strategies to control high blood pressure and reduce the risk of complications.</li>
                            <li><strong>Asthma and COPD Management:</strong> Tailored care for respiratory conditions, including medication, lifestyle changes, and monitoring.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Nutritional Counseling:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Weight Management Programs:</strong> Expert guidance on achieving and maintaining a healthy weight through personalized diet and exercise plans.</li>
                            <li><strong>Diet Planning for Specific Health Conditions:</strong> Customized nutritional plans to support the management of conditions like diabetes, hypertension, and more.</li>
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
