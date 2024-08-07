"use client";

import React, { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImages } from "@/utils/images";
import { ImageSliderWrapper } from "./style";

const ImageSlider: FC = () => {
  const settings = {
    className: "center",
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <ImageSliderWrapper className="section">
      <Slider {...settings} className="game-slider">
        {sliderImages.map((image, idx) => (
          <div className="slider-item img-fit-cover" key={idx}>
            <Image
              src={image}
              className="slider-item-img"
              alt="slider-img"
              quality={100}
              width={100}
              height={100}
              rel="preload"
            />
          </div>
        ))}
      </Slider>
    </ImageSliderWrapper>
  );
};

export default ImageSlider;
