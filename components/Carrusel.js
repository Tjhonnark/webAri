import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* STYLES */
import styles from "../styles/Carrusel.module.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.SwiperSlide}>
          <img className={styles.img} src="/Foto1b.jpg" alt="" />
          Horizontal Slide 1
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img
            className={styles.img}
            src="/Foto2b.jpg"
            alt=""
            objectFit="contain"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img
            className={styles.img}
            src="/Foto3b.jpg"
            alt=""
            objectFit="contain"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img className={styles.img} src="/Foto4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img className={styles.img} src="/Foto5b.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img className={styles.img} src="/Foto6b.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
