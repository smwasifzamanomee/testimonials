import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import app from '../../../styles/App.module.css';
// import { dataDigitalBestSeller } from '../../../data/data'
import { TestimonialData } from '../../../data/data';
// import imgGirl from './assets/images/defaultImage.jpg';

const Testimonial = () => {
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

    return (
        <div className={app.App} >
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                    Testimonials
                </h1>
                <p className="max-w-md mx-auto mt-4 text-gray-500 mb-8">
                    testimonials are evidence of customers talking about your product or service in their own words.
                </p>
            </div>
            <Slider {...settings}>
                {TestimonialData.map((item) => (
                    <div className="p-8 border rounded-lg">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            {item.description}
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img
                                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                                src={item.image}
                                alt=""
                            />

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">
                                    {item.name}
                                </h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    CTO, Robert Consultency
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Testimonial;