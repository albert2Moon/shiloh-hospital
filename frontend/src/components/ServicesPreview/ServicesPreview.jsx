/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ServicesPreview.css'
import { Link } from 'react-router-dom'

const ServicesPreview = () => {
    return (
        <>
        <div className="container-title">
            <div className="title-dot"></div>
            <h3>Our Services</h3>
        </div>

        <div className='services-container'>
        <div className="services-card">
                <div className="services-heading">
                    <div className="services-icon">
                    <i className="fa-solid fa-stethoscope"></i>
                    </div>
                    <h3>General Services</h3>
                </div>
                <p>General Medical Services</p>
                <Link to='/services/general-services'> Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>

            <div className="services-card">
                <div className="services-heading">
                    <div className="services-icon">
                    <i className="fa-solid fa-venus"></i>
                    </div>
                    <h3>Fertility Services</h3>
                </div>
                <p>For Females</p>
                <Link to='/services/fertility-services'> Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>

            <div className="services-card">
                <div className="services-heading">
                    <div className="services-icon">
                    <i className="fa-solid fa-venus"></i>
                    </div>
                    <h3>Gynecology Services</h3>
                </div>
                <p>Women's Health Services</p>
                <Link to='/services/women-health-services'> Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>

            <div className="services-card">
                <div className="services-heading">
                    <div className="services-icon">
                    <i className="fa-solid fa-person-breastfeeding"></i>
                    </div>
                    <h3>Obstetrics Services</h3>
                </div>
                <p>Maternal Medical Services</p>
                <Link to='/services/maternal-health-services'> Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>

            <div className="services-card">
                <div className="services-heading">
                    <div className="services-icon">
                    <i className="fa-solid fa-baby"></i>
                    </div>
                    <h3>Pediatric Services</h3>
                </div>
                <p>Child Health Services</p>
                <Link to='/services/child-health-services'> Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>

            <div className="services-card">
                <div className="services-heading">
                    <div className="services-icon">
                    <i className="fa-solid fa-mars"></i>
                    </div>
                    <h3>Men's Services</h3>
                </div>
                <p>Male Infertility Treatments</p>
                <Link to='/services/mens-health-services'> Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>

            <div className="services-card">
                <div className="services-heading">
                    <div className="services-icon">
                    <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h3>PCOS Clinic</h3>
                </div>
                <p>PCOS Services</p>
                <Link to='/services/hope-fund-services'> Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>

            <div className="services-card">
                <div className="services-heading">
                    <div className="services-icon">
                    <i className="fa-solid fa-venus-mars"></i>
                    </div>
                    <h3>Diagnostic Services</h3>
                </div>
                <p>Both Male and Female</p>
                <Link to='/services/products'> Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>

        <div className="services-link-btn">
            <button><Link to='/services'>View All Services</Link></button>
        </div>

        
        </>
    )
}

export default ServicesPreview
