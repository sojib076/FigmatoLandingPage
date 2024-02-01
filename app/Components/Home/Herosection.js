
import Image from "next/image";
import righthandiamge from "../../../public/Images/hands_2.png"
import rightLineiamge from "../../../public/Images/Line rightpng.png"
import leftLineiamge from "../../../public/Images/Line left.png"
import leftHandiamge from "../../../public/Images/hands_left.png"

const Herosection = () => {
    return (
        <div className=" relative overflow-hidden ">
        {/* left iamge for hero section */}
        <div>
            <div className=" absolute left-[-15%]  top-[-5%] ">
                <Image src={leftHandiamge} alt="Picture of the author" />
            </div>

            <div className=" absolute left-[-15%]   ">
                <Image src={leftLineiamge} alt="Picture of the author" />
            </div>
        </div>
        {/* Main div  for hero section  */}
        <div className=" py-[160px] px-[140px] ">
            <h1 className=" text-[112px] leading-[112px] text-center font-bold ">
                Spark your brand <br />imaginative flair <br /> with us
            </h1>
            <p className=" text-[20px] leading-[32px] w-[60%] mx-auto">Our team combines strategy, design, and technology to breathe life into your brand. Collaborate with us to leave a lasting impression on your audience. </p>
        </div>

        {/* Image div  for hero section right */}
        <div>
            <div className=" absolute top-[60%]   right-[-10%] ">
                <Image src={righthandiamge} alt="Picture of the author" />
            </div>

            <div className=" absolute  right-[-12%] top-[28%] ">
                <Image src={rightLineiamge} alt="Picture of the author" />
            </div>
        </div>
    </div>
    );
};

export default Herosection;