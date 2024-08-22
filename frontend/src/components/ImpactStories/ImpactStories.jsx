/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './ImpactStories.css'
import { StoreContext } from '../../context/StoreContext'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


const ImpactStories = () => {

    const { impact_stories } = useContext(StoreContext);

    return (
        <>
            <div className="container-title">
                <div className="title-dot"></div>
                <h3>Impact Stories</h3>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
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
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                {impact_stories.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="impact-container">
                            <div className="impact-body">
                                <div className="impact-img">
                                    <img src={item.image} alt={item.title} />
                                </div>

                                <div className="impact-content">
                                    <div className="mission-subheading">
                                        <div className="impact-dot"></div>
                                        <h3>{item.subtitle}</h3>
                                    </div>
                                    <div className="mission-heading">
                                        <div className="impact-dot2"></div>
                                        <h2>{item.title}</h2>
                                    </div>
                                    <p>{item.story}</p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>


        </>
    )
}

export default ImpactStories
