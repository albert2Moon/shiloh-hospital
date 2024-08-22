/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import { Link } from 'react-router-dom'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'

const Fertility = () => {
    return (
        <>

            <ServicesHeader />

            <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>Fertility Services</h2>
                </div>
                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>
                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Fertility Consultations:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Initial Assessment and Consultation:</strong> Comprehensive evaluations with fertility specialists to determine the best course of action for your fertility journey.</li>
                            <li><strong>Fertility Counseling and Support:</strong>Emotional and psychological support for individuals and couples navigating fertility challenges.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Fertility Testing:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Semen Analysis:</strong>Detailed assessment of male fertility through semen quality analysis.</li>
                            <li><strong>Ovulation Testing:</strong>Monitoring and testing to determine the timing of ovulation for optimal fertility planning.</li>
                            <li><strong>Hormonal Assessments:</strong>Comprehensive hormone level testing to diagnose and address fertility issues.</li>
                            <li><strong>Pelvic Ultrasound:</strong>Imaging to evaluate the reproductive organs and identify any underlying issues.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Fertility Treatments:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>In Vitro Fertilization (IVF):</strong>Advanced reproductive technology to assist with conception, involving the fertilization of eggs outside the body.</li>
                            <li><strong>Intrauterine Insemination (IUI):</strong>A fertility treatment that involves placing sperm directly into the uterus to facilitate fertilization.</li>
                            <li><strong>Ovulation Induction Therapy:</strong>Medication-based treatment to stimulate ovulation and increase the chances of conception.</li>
                            <li><strong>Egg and Sperm Donation:</strong>Access to donor eggs and sperm to support fertility treatments when needed.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Support Services:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Fertility Support Groups:</strong>Community-based support groups for individuals and couples experiencing fertility challenges.</li>
                            <li><strong>Psychological Counseling for Fertility Patients:</strong>Specialized counseling to help manage the emotional aspects of fertility treatments.</li>
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

export default Fertility
