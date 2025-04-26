"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
import "video.js/dist/video-js.css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type SwiperButtonProps = {
  children: React.ReactNode
}

const SwiperButtonNext = ({ children }: SwiperButtonProps) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

const SwiperButtonPrev = ({ children }: SwiperButtonProps) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};


const Carousel = () => {

  
  return (
    <>
      <Swiper
         
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          
          640: {
            slidesPerView: 1, 
            centeredSlides: true, 
            spaceBetween: 10, 
          },
          
          768: {
            slidesPerView: 1, 
            centeredSlides: true, 
            spaceBetween: 10, 
          },
          
          1024: {
            slidesPerView: 3, 
            centeredSlides: false, 
            spaceBetween:30 
          },
        }}
        modules={[Pagination]}
        className="mySwiper !pb-7"
      >
        <SwiperSlide>
          <picture>
            <img className="swiper-slide max-h-[644px]" src="/img/home/proyects-img-01.png" alt="proyects-img-01"/>
          </picture>
        </SwiperSlide>
        <SwiperSlide> 
        <picture>
            <img className="max-h-[644px]" src="/img/home/proyects-img-02.png" alt="proyects-img-02"/>
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img className="max-h-[644px]" src="/img/home/proyects-img-03.png" alt="proyects-img-03"/>
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img  className="max-h-[644px]"src="/img/home/proyects-img-01.png" alt="proyects-img-01"/>
          </picture>
          </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img  className="max-h-[644px]"src="/img/home/proyects-img-02.png" alt="proyects-img-02"/>
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img  className="max-h-[644px]"src="/img/home/proyects-img-03.png" alt="proyects-img-03"/>
          </picture>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;








