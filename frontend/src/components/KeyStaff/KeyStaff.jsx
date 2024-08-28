/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './KeyStaff.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import required modules
import { assets } from '../../assets/assets';

const KeyStaff = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    return (
        <>
            <div className="container-title">
                <div className="title-dot"></div>
                <h3>Our Team</h3>
            </div>

            <div className="keystaff-cards">

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="card-container">
                            <div className="card-body">
                                <div className="card-img">
                                    <img src={assets.placeholder} alt="" />
                                </div>
                                <div className="card-info">
                                <div className="card-rating"></div>
                                    <h2>Dr.Dale Mugisha</h2>
                                    <h3>Gynecologist & Fertility Specialist</h3>
                                    <p className={`card-text-content ${isClicked ? 'expanded' : ''}`}>MBCh.B, MMED, MSc. Sexual & Reproductive Medicine<br />
                                        Dr.Dale Mugisha graduated from Mbarara University of Science and Technology (MUST) where he did his residency in obstetrics and gynaecology too.
                                        Dr. Dale later pursued a Master of Science degree in Sexual and Reproductive Medicine at University of South Wales.
                                        He is charismatic, empathetic and committed to his patients. He has 6+ years of experience in Obstetrics & Gynaecology and Reproductive Medicine.
                                    </p>

                                    <button className="card-btn" onClick={handleClick}>{isClicked ? 'Read Less' : 'Read More'}</button>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </>
    )
}

export default KeyStaff
