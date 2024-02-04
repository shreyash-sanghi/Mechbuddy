import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonialimg from './test.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './test.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Testimonial() {
  return (
        <>


      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slideActiveClass={'swiper-slide-active'}
        slideClass={'swiper-slide'}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        slideToClickedSlide={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='abc h-full flex flex-col justify-between p-4 '>
            <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
            <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id </div>
            <div class="flex  mt-2    ">
              <img className="w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
              <div className='flex mt-2 flex-col text-center w-full'>
                <div>Sujal Chandrakar</div>
                <div>Jabalpur</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='abc h-full flex flex-col justify-center p-4 '>
            <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
            <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id laboriosam, nemo consequatur, cumque itaque fuga distinctio, voluptas asperiores iste. Ipsam, optio. Atque illo illum corrupti laboriosam!</div>
            <div class="flex  mt-2    ">
              <img className="w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
              <div className='flex mt-2 flex-col text-center w-full'>
                <div>Sujal Chandrakar</div>
                <div>Jabalpur</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='abc h-full flex flex-col justify-center p-4 '>
            <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
            <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id laboriosam, nemo consequatur, cumque itaque fuga distinctio, voluptas asperiores iste. Ipsam, optio. Atque illo illum corrupti laboriosam!</div>
            <div class="flex  mt-2    ">
              <img className="w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
              <div className='flex mt-2 flex-col text-center w-full'>
                <div>Sujal Chandrakar</div>
                <div>Jabalpur</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='abc h-full flex flex-col justify-center p-4 '>
            <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
            <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id laboriosam, nemo consequatur, cumque itaque fuga distinctio, voluptas asperiores iste. Ipsam, optio. Atque illo illum corrupti laboriosam!</div>
            <div class="flex  mt-2    ">
              <img className="w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
              <div className='flex mt-2 flex-col text-center w-full'>
                <div>Sujal Chandrakar</div>
                <div>Jabalpur</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='abc h-full flex flex-col justify-center p-4 '>
            <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
            <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id laboriosam, nemo consequatur, cumque itaque fuga distinctio, voluptas asperiores iste. Ipsam, optio. Atque illo illum corrupti laboriosam!</div>
            <div class="flex  mt-2    ">
              <img className="w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
              <div className='flex mt-2 flex-col text-center w-full'>
                <div>Sujal Chandrakar</div>
                <div>Jabalpur</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='abc h-full flex flex-col justify-center p-4 '>
            <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
            <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id laboriosam, nemo consequatur, cumque itaque fuga distinctio, voluptas asperiores iste. Ipsam, optio. Atque illo illum corrupti laboriosam!</div>
            <div class="flex  mt-2    ">
              <img className="w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
              <div className='flex mt-2 flex-col text-center w-full'>
                <div>Sujal Chandrakar</div>
                <div>Jabalpur</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='abc h-full flex flex-col justify-center p-4 '>
            <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
            <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id laboriosam, nemo consequatur, cumque itaque fuga distinctio, voluptas asperiores iste. Ipsam, optio. Atque illo illum corrupti laboriosam!</div>
            <div class="flex  mt-2    ">
              <img className="w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
              <div className='flex mt-2 flex-col text-center w-full'>
                <div>Sujal Chandrakar</div>
                <div>Jabalpur</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
        </>
        );
}
