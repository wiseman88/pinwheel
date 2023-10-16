"use client";

import React from "react";
import Review from "./home/Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "@/constants/home";
import { breakpoints, pagination } from "@/constants/slider";

// Swiper modules
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/swiper-bundle.css";

const Slider = () => {
  return (
    <>
      <div className="wrapper mt-10 px-4 lg:px-0">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          className="slider"
          breakpoints={breakpoints}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Review
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
