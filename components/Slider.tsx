"use client";

import React from "react";
import Customer from "./home/Customer";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "@/constants/home";

// Swiper modules
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <>
      <div className="wrapper mt-10">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          className="slider"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Customer
                person={review.person}
                thumbnail={review.thumbnail}
                company={review.company}
                text={review.text}
                stars={review.stars}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
