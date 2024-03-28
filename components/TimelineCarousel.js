import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/TimelineCarousel.module.css'; // Estilos CSS personalizados

const TimelineCarousel = ({ images }) => {
  const sliderRef = useRef(null);
  const [currentYear, setCurrentYear] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Activa el modo centrado
    centerPadding: '0px', // Espaciado entre las imágenes
  };

  const goToYear = (yearIndex) => {
    sliderRef.current.slickGoTo(yearIndex);
    setCurrentYear(yearIndex);
  };

  return (
    <div className={styles.timelineCarousel}> {/* Agrega la clase timeline-carousel */}
      <div className={styles.timelineButtons}>
        {images.map((image, index) => (
          <button
            key={index}
            className={classNames(styles.timelineButton, { active: currentYear === index })}
            onClick={() => goToYear(index)}
          >
            {image.year}
          </button>
        ))}
      </div>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TimelineCarousel;