import React from 'react';
import Carousel from '../Carousel';
import fbimage from '../../../public/Images/fb (1) (1) 1.png';
import bgvictor from '../../../public/Images/Vector.png';
import Image from 'next/image';

const PatnersSection = () => {
    return (
        <div className='lg:my-[64px] my-[32px]'>
            <div className=''>
                <div className='absolute lg:top-[160%] lg:w-[40%] lg:left-0 z-10 lg:block w-[60%] top-[70%] '>
                    <Image src={bgvictor} alt="Logo" className='z-10' />
                </div>
                <h1 className='lg:text-[56px] text-center font-bold lg:leading-[60px] text-[30px] leading-[40px]  '>Contact us today to explore <br />partnership opportunities!</h1>
            </div>
            <div className='bg-white w-[90%] lg:h-[340px] mx-auto lg:my-[64px] my-[32px] grid lg:grid-cols-2 grid-cols-1 rounded-3xl z-20 lg:gap-20 gap-10 '>

                <div className='w-[90%] lg:mx-auto relative top-[20%] left-[10%] z-20' >
                    <h1 className='text-[50px] leading-[50px] font-bold '>Partners:</h1>
                    <p className='lg:text-[20px] lg:leading-[32px] mt-2 font-sans lg:w-full text-pretty  '   >Our creative agency forms strong partnerships with diverse businesses, from startups to global brands, based on trust, respect, and a shared vision for success.</p>
                </div>
                <Carousel  >
                <div className="w-[404px] h-[196px] ">
                        <div className="flex items-center flex-row lg:justify-between  ">
                            <Image src={fbimage} alt="Logo" className=" border  rounded-full w-16 h-16" />
                            <h1 className="ml-4 text-xl font-bold p-2 ">Your Company Name</h1>
                        </div>
                        <p className='lg:p-8 lg:w-full w-[60%]'>Provides communication between the agency and brands. Collects customer feedback and encourages discussion about the product, which helps improve it.</p>
                    </div>
                    <div className="w-[404px] h-[196px] ">
                        <div className="flex items-center flex-row lg:justify-between  ">
                            <Image src={fbimage} alt="Logo" className=" border  rounded-full w-16 h-16" />
                            <h1 className="ml-4 text-xl font-bold lg:p-2 ">Your Company Name</h1>
                        </div>
                        <p className='lg:p-8 lg:w-full w-[60%]'>Provides communication between the agency and brands. Collects customer feedback and encourages discussion about the product, which helps improve it.</p>
                    </div>

                    {/* Add more slides as needed */}
                </Carousel>
            </div>
        </div>
    );
};

export default PatnersSection;