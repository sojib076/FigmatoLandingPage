
'use client';

import React, { useState } from 'react';
import styles from '../Carousel.module.css'; // Import your module CSS for styling

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    const newSlide = (currentSlide + direction + React.Children.count(children)) % React.Children.count(children);
    setCurrentSlide(newSlide);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className={styles.carouselItem}>
            {child}
          </div>
        ))}
      </div>

      <button className={styles.prevButton} onClick={() => changeSlide(-1)}>Previous</button>
      <button className={styles.nextButton} onClick={() => changeSlide(1)}>Next</button>
    </div>
  );
};

export default Carousel;
