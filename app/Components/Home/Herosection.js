
import Image from "next/image";
import righthandiamge from "../../../public/Images/hands_2.png"
import rightLineiamge from "../../../public/Images/Line rightpng.png"
import leftLineiamge from "../../../public/Images/Line left.png"
import leftHandiamge from "../../../public/Images/hands_left.png"
import lights from "../../../public/Images/lights.png"
import fb from "../../../public/Images/fb (1) (1) 1.png"

const Herosection = () => {
    
    return (
        <div className=" relative overflow-hidden ">
            {/* left iamge for hero section */}
            <div className="lg:block ">
                <div className=" absolute lg:left-[-15%]  lg:top-[-5%] w-[30%] top-[10%] left-[-15%] z-20 lg:w-[414px]">
                    <Image src={leftHandiamge} alt="Picture of the author" />
                </div>

                <div className=" absolute lg:left-[-15%] z-10 w-[50%] left-[-30%]  top-[13%] lg:w-[440.49px] ">
                    <Image src={leftLineiamge} alt="Picture of the author" />
                </div>

                <div className=" absolute lg:top-[45%]  lg:left-[10%] top-[35%]">
                    <Image src={lights} alt="Picture of the author" width={44.12} height={69.77} />
                </div>
                <div className=" absolute bottom-[0%] lg:left-[5%] ">
                    <Image src={fb} alt="Picture of the author" width={44.12} height={69.77} />
                </div>

            </div>
            {/* Main div  for hero section  */}
            <div className=" lg:py-[160px] lg:px-[140px] py-20  ">
                <h1 className=" lg:text-[112px] lg:leading-[112px] text-center font-bold  text-[40px] leading-[50px] ">
                    Spark your brand <br />imaginative flair <br /> with us
                </h1>
                <p className=" lg:text-[20px] lg:leading-[32px] lg:w-[80%] mx-auto mb-5 w-[90%]">Our team combines strategy, design, and technology to breathe life into your brand. Collaborate with us to leave a lasting impression on your audience. </p>
                <div className="w-[60%] h-16 flex items-center justify-between  mx-auto  text-center ">
                    <input
                        type="text"
                        placeholder="Your input"
                        className="w-full h-full px-4 rounded-full focus:outline-none"
                    />
                    <button
                        type="submit"
                        className=" w-[102px] ml-[-100%] h-[48px] rounded-full bg-pink-500 hover:bg-pink-600 text-white"
                    >
                        Join 
                    </button>
                </div>
            </div>

            {/* Image div  for hero section right */}
            <div className="lg:block ">
                <div className=" absolute lg:top-[60%]   lg:right-[-12%] lg:w-[403px] w-[50%] right-[-30%] top-[60%] ">
                    <Image src={righthandiamge} alt="Picture of the author" />
                </div>

                <div className=" absolute  lg:right-[-12%] lg:top-[28%] w-[30%] top-[45%] right-[-18%] lg:w-[376.39px] ">
                    <Image src={rightLineiamge} alt="Picture of the author" />
                </div>
            </div>
        </div>
    );
};

export default Herosection;