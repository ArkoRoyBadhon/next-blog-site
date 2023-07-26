import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from '../../styles/banner.module.css'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={`${styles['swiper-slide']}`}>Slide 1</SwiperSlide>
        <SwiperSlide className={`${styles['swiper-slide']}`}>Slide 2</SwiperSlide>
        <SwiperSlide className={`${styles['swiper-slide']}`}>Slide 3</SwiperSlide>
        
      </Swiper>
    </>
  );
}
