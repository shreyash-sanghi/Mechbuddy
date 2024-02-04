import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './detailing.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Detailing() {
  return (
    <div className='bg-[#F31D32]'>
      <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center mb-8 bg-[#FFFFFF] text-2xl font-bold	 " >
        DETAILING
      </h1>

      <Swiper
        effect={''}
        grservice_nameursor={true}
        centeredSlides={true}
        slideActiveClass={'swiper-slide-active'}
        slideClass={'swiper-slide'}
        slidesPerView={'auto'}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
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
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='pt'>
          <div className='pqr flex flex-col justify-around p-4 h-full '>
            <h2 className='service_name text-center text-2xl font-semibold'>Denting</h2>
            <p className='text-sm service_description px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste asperiores odio provident mollitia </p>
            <Link to='/carmodification' type="button" class="btn text-center mx-12 sm:mx-12 md:mx-16 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5  mb-2">Get Now</Link>

          </div>
        </SwiperSlide>
        <SwiperSlide className='pt'>
          <div className='pqr flex flex-col justify-around p-4 h-full '>
            <h2 className='service_name text-center text-2xl font-semibold'>Painting</h2>
            <p className='text-sm service_description px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste asperiores odio provident mollitia </p>
            <Link to='/carmodification' type="button" class="btn text-center mx-12 sm:mx-12 md:mx-16 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5  mb-2">Get Now</Link>

          </div>
        </SwiperSlide>
        <SwiperSlide className='pt'>
          <div className='pqr flex flex-col justify-around p-4 h-full '>
            <h2 className='service_name text-center text-2xl font-semibold'>Wraping</h2>
            <p className='text-sm service_description px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste asperiores odio provident mollitia </p>
            <Link to='/carmodification' type="button" class="btn text-center mx-12 sm:mx-12 md:mx-16 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5  mb-2">Get Now</Link>

          </div>
        </SwiperSlide>
        
        
        
      </Swiper>
    </div >
  );
}
