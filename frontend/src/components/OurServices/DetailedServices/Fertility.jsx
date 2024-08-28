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
                            <h3>Advanced Fertility Treatments:</h3>
                        </div>
                        <ul className='content-list'>
                            <li><strong>Fertility Evaluation:</strong> Comprehensive assessment of a couple's ability to conceive.</li>
                            <li><strong>Ovulation Induction:</strong> Treatment to stimulate ovulation for women who have irregular ovulation</li>
                            <li><strong>Frozen Embryo Transfer:</strong> Process of thawing and transferring a previously frozen embryo to a woman's uterus.</li>
                            <li><strong>Egg Freezing:</strong> Preservation of a woman's eggs for future use.</li>
                            <li><strong>IVF (In Vitro Fertilization):</strong> A procedure where eggs are fertilized by sperm outside the body and the resulting embryos are implanted in the uterus.</li>
                            <li><strong>IUI (Intrauterine Insemination):</strong> A fertility treatment that involves placing sperm directly into a woman’s uterus around the time of ovulation.</li>
                            <li><strong>ICSI (Intracytoplasmic Sperm Injection):</strong> A specialized form of IVF where a single sperm is injected directly into an egg.</li>
                            <li><strong>Surrogacy:</strong> Arrangement where another woman carries and delivers a child on behalf of a couple.</li>
                            <li><strong>Pre-implantation Genetic Testing (PGT):</strong> Genetic testing of embryos before implantation to identify genetic conditions.</li>
                            <li><strong>Pre-implantation Genetic Diagnosis (PGD):</strong> A type of PGT used specifically to detect genetic diseases in embryos created through IVF.</li>
                
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
