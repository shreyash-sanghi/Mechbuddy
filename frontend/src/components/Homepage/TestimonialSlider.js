import React from 'react';
import Slider from 'react-slick';
import './SwiperCard.css';
import bgcarsjpg from './assets/wallpaperflare.com_wallpaper.jpg'
import bgcars from "./assets/harley-davidson-52UeZUkp3Hs-unsplash.jpg"
import bglogo from "./assets/MECH BUDDY (1).png"


const SwiperCard = () => {
  const cards = [
    {
      id: 1,
      image: bglogo, // Add the URL or path to your image
    },
    {
      id: 2,
     
      image: bgcars, // Add the URL or path to your image
    },
    {
      id: 3,
     
      image: bgcarsjpg,
   
    },
    // ... (other cards)
  ];

  const renderCard = (card) => (
    <div key={card.id} className="swiper-card">
      <img src={card.image} alt={Image } className="card-image" />
   
    </div>
  );

  const settings = {
  
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    loops : true,
    autoplay:true,
    autoplaySpeed : 2000,
    focusonSelect:false,
   pauseOnFocus: true,
  arrows:false,
  };

  const cardElements = cards.map(renderCard);

  return (
    <div className="swiper-container">
      <Slider {...settings}>{cardElements}</Slider>
    </div>
  );
};

export default SwiperCard;
