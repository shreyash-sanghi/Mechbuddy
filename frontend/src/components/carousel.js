import React from 'react'
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CarouselItem from './carouselitem';

import image1 from '../assets/img_1.jpg'
import image2 from '../assets/img_2.jpg'
import image3 from '../assets/img_3.jpg'
import image4 from '../assets/img_4.jpg'

const images = [image1, image2, image3, image4];

export default function carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px'
    }
    const renderImages = () => images.map((image, index) => <CarouselItem key={index} image={image}></CarouselItem>)
    return (
        <div className='flex items-center justify-center'>
            <div className="w-full">
                <Slider {...settings}>
                    {renderImages()}
                </Slider>
            </div>
        </div>
    )
}
