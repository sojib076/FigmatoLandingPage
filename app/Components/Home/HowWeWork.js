import React from 'react';
import humanimg from "@/public/Images/human.png";
import leftvictor from "@/public/Images/VectorLeft-2.png";
import rightvicotr from "@/public/Images/Vector2Right.png";
import lefthand from "../../../public/Images/hands_3.png"
import righthand from "../../../public/Images/hands_3 right.png"
import lovee from "../../../public/Images/love.png"
import Image from 'next/image';

const HowWework = () => {
    return (
        <div className='relative overflow-hidden  my-[64px]'>
            <div>
                <h1 className=' lg:text-[50px] lg:leading-[60px] lg:w-[922px] text-center mx-auto lg:font-bold text-[25px] leading-[30px] p-2 '> Making it big on any Platform is <br /> tougher than you think </h1>
            </div>
            <Image src={humanimg} alt="Logo" className='mx-auto' />
            {/* this is a nre section  */}

            <div className=' relative lg:my-16  my-[32px] lg:w-[60%] lg:mx-auto  '>

                <div className=''>
                    <div className='lg:block hidden' >
                        <Image src={lefthand} alt="lefthand " className='absolute  left-[-38%]  top-[-4%] 
                        w-[300.01px]
                        rotate-[27 deg] h-[412.5px] z-20'/>
                        <Image src={leftvictor} alt="lefthand " className='absolute  left-[-38%]  top-[-5%] z-10 
                     w-[593.66px]
                        h-[701.95px]'/>
                        <Image src={lovee} alt="lefthand " className='absolute  left-[-20%] top-[50%] 
                     '/>

                    </div>
                    <h1 className='lg:text-[56px] text-[30px] lg:leading-[60px] leading-9 lg:font-extrabold font-semibold text-center '>
                        We do it for you. No more<br />
                        struggling to grow on <br />
                        any Platform
                    </h1>
                    <p className='lg:text-[32px] text-[20px]  lg:leading-10 leading-5  mx-auto font-serif lg:mt-[64px] lg:mb-2 lg:font-semibold lg:p-10 text-center p-5'>
                        Work with our expert strategists
                        writers, editors, and producers to create content
                        that transforms your content</p>

                    <p className='lg:text-[20px] lg:leading-8 font-sans  lg:mb-16 mb-8 mx-auto p-5 mt-[-2%]'>We do it for you. No more
                        No managing a team of freelancers or spending countless hours trying to master all the skillsets Platform requires - all you need is The Creator</p>
                </div>
                <div className='lg:block hidden ' >
                        <Image src={righthand} alt="lefthand " className='absolute  lg:right-[-38%] lg:w-[317px] lg:top-[60%]
                        h-[433px]
                         z-20'/>
                        <Image src={rightvicotr} alt="lefthand " className='absolute  right-[-40%]  top-[35%] z-40 
                  
                        h-[464.84px]'/>
                                <Image src={lovee} alt="lefthand " className='absolute  right-[-20%] top-[50%] 
                     '/>

                    </div>

         
            </div>
        </div>

    );
};

export default HowWework;