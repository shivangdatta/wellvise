import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Wcard1 from './Wcard1'; 
import Wcard2 from './Wcard2'; 
import Wcard3 from './Wcard3'; 
import Wcard4 from './Wcard4'; 

function Workshop() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards displayed at a time
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768, // Switch to slider on screens with a width less than 768px
        settings: {
          slidesToShow: 1, // Display one card at a time on smaller screens
        },
      },
    ],
  };



  return (
    <Slider {...settings}>
      <Wcard1 />
      <Wcard2 /> 
      <Wcard3 />
      <Wcard4 />
    </Slider>
  );
}

export default Workshop;
