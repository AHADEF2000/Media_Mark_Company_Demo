"use client";
// Import Swiper React components
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import OurMission from "./OurMission";
import Welcome from "./Welcome";
import OurStrength from "./OurStrength";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [Welcome, OurMission, OurStrength];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Add an event listener to handle window size changes
    window.addEventListener("resize", checkWindowSize);

    // Call the checkWindowSize function immediately to set the initial value
    checkWindowSize();

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const navigationOptions = isSmallScreen
    ? {}
    : {
        navigation: true,
      };
  return (
    <Swiper
      id="home"
      style={
        {
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        } as any
      }
      speed={1000}
      parallax={true}
      modules={[Navigation, Pagination, Autoplay, Parallax]}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      {...navigationOptions}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
