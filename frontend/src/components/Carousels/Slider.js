import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider1 from './assets/slider1.jpg';

export default function Slider() {
  return (
    <Carousel
      className='w-full'
      autoPlay={true}
      infiniteLoop={true}
      interval={4000}
      showThumbs={false}
      showStatus={false}
      dynamicHeight={false}
    >
      <div className='relative overflow-hidden h-[200px] sm:h-[500px] md:h-[80vh]'>
        <img className='w-full h-full object-cover' src={Slider1} alt='1' />
        <button className='text-white text-xs sm:text-sm md:text-base lg:text-xl font-bold absolute right-2 sm:right-16 bottom-2 sm:bottom-16 rounded-full p-2 sm:p-8 bg-[#FF0000]'>
          Book <br /> Service
        </button>
      </div>
    </Carousel>
  );
}
