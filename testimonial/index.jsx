import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import app from '../../styles/App.module.css';
import { dataDigitalBestSeller } from '../../data/data'
// import imgGirl from './assets/images/defaultImage.jpg';

function index() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <div className={app.App} >
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className={app.card}>
            <div className={app.cardtop}>
              <h1>{item.title}</h1>
            </div>
            <div className={app.cardbottom}>
              <h3>{item.price}</h3>
              <span className={app.category }>{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default index;