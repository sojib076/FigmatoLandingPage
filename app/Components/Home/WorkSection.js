import React from 'react';
import Image from 'next/image';
import humanimg from "../../../public/Images/Image.png"
import humanimg3 from "../../../public/Images/huumanmiddle.png";
import humanimg2 from "../../../public/Images/humanleft.png";
import humanbg3 from "../../../public/Images/humanbg 3.png";

const WorkSection = () => {
    return (
        <div className='my-[64px]'>
            <div >
                <div className="lg:flex lg:w-[90%] lg:mx-auto  my-[64px] p-5  ">
                    <div className="lg:w-1/2 ">
                        <h1 className="lg:text-[40px] lg:leading-10 font-bold lg:mb-4 text-center text-[20px]  " >
                            1# Research & Analysis
                        </h1>
                        <p className='lg:w-[80%] lg:mx-auto lg:text-left  text-wrap p-5  '>

                            {` Our agency's research-driven approach involves gathering insights into our clients' industries, competitors, and target audiences to develop tailored strategies that deliver exceptional results. This deep understanding allows us to create innovative and effective campaigns that resonate with our clients' audiences `}

                        </p>
                    </div>
                    <div className="lg:w-1/2 ">
                        <Image src={humanimg} alt="Image" className="lg:w-full lg:h-auto mt-[-15%] " />
                    </div>
                </div>
                <div className="flex  lg:w-[90%] lg:mx-auto my-[64px] lg:flex-row flex-col-reverse   ">

                    <div className="lg:w-1/2 relative  lg:top-[100px] ">
                        <Image src={humanimg2} alt="Image" className="lg:w-full lg:h-auto mt-[-10%]  z-20" />
                        <Image src={humanbg3} alt="Image" className=" absolute  left-0 top-0 " />
                        
                    </div>
                  <div className='z-0'> 
                  </div>
                  
                    <div className="lg:w-1/2 ">
                        <h1 className="lg:text-[40px] lg:leading-10 font-bold lg:mb-4 text-center text-[20px]  " >
                            2# Concept development:
                        </h1>
                        <p className='lg:w-[90%] lg:mx-auto lg:text-left  text-wrap p-5  '>

                            {` Based on the brief and research, the agency's creative team generates ideas for the campaign. These concepts are presented to the client for feedback and refinement. `}

                        </p>
                    </div>
                </div>
                <div className="lg:flex  lg:w-[90%] lg:mx-auto   my-[64px] p-5 ">

                    <div className="lg:w-1/2 ">
                        <h1 className="lg:text-[40px] lg:my-[64px] lg:leading-10 font-bold lg:mb-4 text-center text-[20px]  " >
                            3# Design and execution:
                        </h1>
                        <p className='lg:w-[90%] lg:mx-auto lg:text-left  text-wrap p-5  '>

                            {`
                       Once the concept is approved,
                                      the agency's designers and developers
                                 bring it to life. This includes creating
                            visual assets, writing copy,
                                        and developing multimedia content. `}

                        </p>
                    </div>
                    <div className="lg:w-1/2  relative lg:top-[150px] ">
                        <Image src={humanimg3} alt="Image" className="lg:w-full lg:h-auto lg:mt-[-10%] " />
                        <Image src={humanbg3} alt="Image" className=" absolute  lg:left-0 lg:top-0 left-[-10%] top-1 "  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;