import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AutoplaySlider = () => {
  const slides = [
    { id: 1, image: "/images/car1.jpg" },
    { id: 2, image: "/images/car2.jpg" },
    { id: 3, image: "/images/car3.jpg" },
    { id: 4, image: "/images/car4.jpg" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="autoplay-swiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-content">
            <img
              src={slide.image}
              alt={`Autoplay Slide ${slide.id}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoplaySlider;
