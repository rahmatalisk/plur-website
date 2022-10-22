import React from 'react';
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";

import slideImg from '../../Images/Rectangle 5.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <div className='container my-5 px-5'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                rewind={true}
                
                className="mySwiper"
            >
                <SwiperSlide><img className='slide-img' src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={slideImg} alt="" /></SwiperSlide>
                
                
            </Swiper>
        </div>
    );
};

export default Slider;