import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonialimg from './testimonial.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './testimonial.css';
import Ashish from './assets/Ashish.jpeg';
import Keshav from './assets/keshav.jpg';
import Lalit from './assets/lalit.jpg';
import { Autoplay } from 'swiper/modules';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Testimonial() {
    return (
        <div className='bg-[#000000] ' id='testimonial'>
        <h1 className="flex justify-center text-[#F31D32] items-center w-full h-12 text-center mb-8 bg-[#000000] text-3xl font-bold border-y-2">
            TESTIMONIAL
        </h1>

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
            loopAdditionalSlides={1}
            loopedSlides={3} // Number of slides to duplicate in loop
            slideToClickedSlide={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            className="mySwiper h-[500px] "
        >
            
                <SwiperSlide>
                    <div className='abc h-[397px]  flex flex-col justify-between p-4 '>
                        <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
                        <div className='p-4'> Amazing customization work done by mech-buddy at best price . Best quality parts used by the vendor . Completely satisfied by the work. </div>
                        <div class="flex  mt-2    ">
                            <img className="object-cover aspect-square w-20 h-20 border-2 rounded-full  border-blue-400" src={Keshav} alt="" srcset="" />
                            <div className='flex mt-2 flex-col text-center w-full'>
                                <div>Keshav Sundaram</div>
                                <div>Jabalpur</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='abc h-[397px]  flex flex-col justify-center p-4 '>
                        <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
                        <div className='p-4'>Found a wide range of two-wheeler services on the same platform with the best deals.</div>
                        <div class="flex  mt-2    ">
                            <img className="object-cover aspect-square w-20 h-20 border-2 rounded-full  border-blue-400" src={Lalit} alt="" srcset="" />
                            <div className='flex mt-2 flex-col text-center w-full'>
                                <div>Lalit Mali</div>
                                <div>Indore</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='abc h-[397px]  flex flex-col justify-center p-4 '>
                        <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
                        <div className='p-4'>I have been really amazed at the work done by Mech-buddy. They converted my Activa 3g into an electrical vehicle. They take a very reasonable amount to make this change in my vehicle. I really appreciate the work.</div>
                        <div class="flex  mt-2    ">
                            <img className="object-cover aspect-square w-20 h-20 border-2 rounded-full  border-blue-400" src={Ashish} alt="" srcset="" />
                            <div className='flex mt-2 flex-col text-center w-full'>
                                <div>Ashish Gehlot</div>
                                <div>Indore</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='abc h-[397px]  flex flex-col justify-center p-4 '>
                        <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
                        <div className='p-4'>I recently had the pleasure of using MechBuddy's online automobile service to modify my vehicle, and I couldn't be happier with the results. MechBuddy's team of skilled technicians went above and beyond to transform my car into a true masterpiece</div>
                        <div class="flex  mt-2    ">
                            <img className="object-cover aspect-square w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
                            <div className='flex mt-2 flex-col text-center w-full'>
                                <div>Shubham Mahajan</div>
                                <div>Ujjain</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className='abc h-[397px]  flex flex-col justify-center p-4 '>
                        <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
                        <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id laboriosam, nemo consequatur, cumque itaque fuga distinctio, voluptas asperiores iste. Ipsam, optio. Atque illo illum corrupti laboriosam!</div>
                        <div class="flex  mt-2    ">
                            <img className="object-cover aspect-square w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
                            <div className='flex mt-2 flex-col text-center w-full'>
                                <div>Sujal Chandrakar</div>
                                <div>Jabalpur</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='abc h-[397px]  flex flex-col justify-center p-4 '>
                        <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
                        <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id laboriosam, nemo consequatur, cumque itaque fuga distinctio, voluptas asperiores iste. Ipsam, optio. Atque illo illum corrupti laboriosam!</div>
                        <div class="flex  mt-2    ">
                            <img className="object-cover aspect-square w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
                            <div className='flex mt-2 flex-col text-center w-full'>
                                <div>Sujal Chandrakar</div>
                                <div>Jabalpur</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='abc h-[397px]  flex flex-col justify-center p-4 '>
                        <div className='font-bold text-5xl text-center' style={{ fontFamily: "Lato" }}>‘’</div>
                        <div className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem sunt id laboriosam, nemo consequatur, cumque itaque fuga distinctio, voluptas asperiores iste. Ipsam, optio. Atque illo illum corrupti laboriosam!</div>
                        <div class="flex  mt-2    ">
                            <img className="object-cover aspect-square w-20 h-20 border-2 rounded-full  border-blue-400" src={Testimonialimg} alt="" srcset="" />
                            <div className='flex mt-2 flex-col text-center w-full'>
                                <div>Sujal Chandrakar</div>
                                <div>Jabalpur</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </div>
    );
}
