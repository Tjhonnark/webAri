import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/TimelineCarousel.module.css'; // Estilos CSS personalizados

const TimelineCarousel = ({ images }) => {
  const sliderRef = useRef(null);
  const [yearIndices, setYearIndices] = useState({}); // Estado para almacenar el índice de la primera imagen de cada año

  useEffect(() => {
    // Agrupar imágenes por año y obtener el índice de la primera imagen de cada año
    const indices = {};
    images.forEach((image, index) => {
      if (!indices[image.year]) {
        indices[image.year] = index;
      }
    });
    setYearIndices(indices);
  }, [images]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  // Función para cambiar el año y desplazarse al primer slide de ese año
  const changeYear = (year) => {
    const yearIndex = yearIndices[year];
    sliderRef.current.slickGoTo(yearIndex);
  };

  return (
    <div className={styles.timelineCarousel}>
      {/* Botones para cambiar el año */}
      <div className={styles.timelineButtons}>
        {Object.keys(yearIndices).map((year) => (
          <button
            key={year}
            className={styles.timelineButton}
            onClick={() => changeYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      {/* Carrusel de imágenes */}
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
