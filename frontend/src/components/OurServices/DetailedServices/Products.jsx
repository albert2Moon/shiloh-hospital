/* eslint-disable no-unused-vars */
import React from 'react'
import '../OurServices'
import { Link } from 'react-router-dom'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'

const Products = () => {
    return (
        <>

            <ServicesHeader />

            <div className="detailed-card">
                <div className="container-title">
                    <div className="title-dot"></div>
                    <h2>Products</h2>
                </div>
                <div className="detailed-btn">
                    <button className="back-btn"><Link to="/services" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services </Link></button>
                </div>
                <div className='list-contents'>
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Healthcare Products:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Prenatal Vitamins and Supplements:</strong>Essential vitamins and minerals to support the health of both mother and baby during pregnancy.</li>
                            <li><strong>Over-the-counter Medications:</strong>A range of non-prescription medications for common ailments, available for your convenience.</li>
                            <li><strong>Fertility Supplements:</strong>Specialized supplements designed to support fertility and reproductive health.</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Wellness Products:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Nutritional Supplements:</strong>High-quality supplements to support overall health, including vitamins, minerals, and herbal products.</li>
                            <li><strong>Stress Relief Aids:</strong>Products designed to help manage stress, including aromatherapy oils, relaxation teas, and more.</li>
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

export default Products
