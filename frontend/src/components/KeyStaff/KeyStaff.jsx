/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './KeyStaff.css'
import { StoreContext } from '../../context/StoreContext';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const KeyStaff = () => {

    const { key_staff } = useContext(StoreContext)

    return (
        <>
            <div className="container-title">
                <div className="title-dot"></div>
                <h3>Our Team</h3>
            </div>

            <div className="keystaff-cards">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
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
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {key_staff.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="card-container">
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="card-rating"></div>
                                    <div className="card-info">
                                        <h2>{item.name}</h2>
                                        <h3>{item.position}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </>
    )
}

export default KeyStaff
