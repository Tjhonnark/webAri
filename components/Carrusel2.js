import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* STYLES */
import styles from "../styles/Carrusel2.module.css";

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
          <Image
            className={styles.img}
            src="/NeaGroup1.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image
            className={styles.img}
            src="/NeaGroup2.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image
            className={styles.img}
            src="/NeaGroup3.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image
            className={styles.img}
            src="/NeaGroup4.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image
            className={styles.img}
            src="/NeaGroup5.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image
            className={styles.img}
            src="/NeaGroup6.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image
            className={styles.img}
            src="/NeaGroup7.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image
            className={styles.img}
            src="/NeaGroup8.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image
            className={styles.img}
            src="/NeaGroup9.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image
            className={styles.img}
            src="/NeaGroup10.jpg"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
