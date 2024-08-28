/* eslint-disable no-unused-vars */
import React from 'react'
import './ContactCards.css'
import { StoreContext } from '../../context/StoreContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const ContactCards = () => {
    return (
        <>
            <div className='card-container'>

                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    speed={1000}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            loop: true,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="contact-card phone">
                            <div className="card-heading">
                                <div className="card-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <h3>Phone</h3>
                            </div>
                            <a href="tel:+256776711407">+256 776 711407</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="contact-card mail">
                            <div className="card-heading">
                                <div className="card-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <h3>Email</h3>
                            </div>
                            <a href="mailto:info@shilohhospital.com">info@shilohhospital.com</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="contact-card location">
                            <div className="card-heading">
                                <div className="card-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <h3>Location</h3>
                            </div>
                            <p>First Floor PJK House, Bulabira Road, Najjera A</p>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </>
    )
}

export default ContactCards
