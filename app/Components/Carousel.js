
'use client';
import React, { useState } from 'react';
import styles from '../Carousel.module.css'; // Import your module CSS for styling
import fb from '../../public/Images/fb (1) (1) 1.png';
import Image from 'next/image';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (direction) => {
        // Add logic to change slides based on your requirements
        // For simplicity, I'll just increment or decrement the current slide index
        const newSlide = (currentSlide + direction + 3) % 3; // Assuming you have 3 slides
        setCurrentSlide(newSlide);
    };

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carousel} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {/* Your carousel content goes here */}
                <div className={styles.carouselItem} >
                    <div className='flex flex-row justify-between items-center'>
                        <Image src={fb} alt="Logo" className="logo" />
                        <h1>Your Company Name</h1>
          
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem voluptas eveniet harum soluta, distinctio ad repellendus molestias minima temporibus, quibusdam vitae quos ratione, expedita dignissimos tempore. Delectus, corporis animi!.</p>
                </div>
                <div className={styles.carouselItem}>Slide 2 Content</div>
                <div className={styles.carouselItem}>Slide 3 Content</div>
            </div>

            <button className={styles.prevButton} onClick={() => changeSlide(-1)}>Previous</button>
            <button className={styles.nextButton} onClick={() => changeSlide(1)}>Next</button>
        </div>
    );
};

export default Carousel;
