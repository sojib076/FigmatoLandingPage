import React from 'react';
import Carousel from '../Carousel';

const PatnersSection = () => {
    return (
        <div className='my-[64px]'>
            <div className=''>
                <h1 className='lg:text-[56px] text-center font-bold lg:leading-[60px] text-[30px] leading-[30px] '>Contact us today to explore <br />partnership opportunities!</h1>
            </div>
            <div className='bg-white w-[90%] h-[340px] mx-auto my-[64px] grid grid-cols-2'> 
                <div> 
                    this is some random rescv
                </div>
                 <Carousel />
            </div>
        </div>
    );
};

export default PatnersSection;