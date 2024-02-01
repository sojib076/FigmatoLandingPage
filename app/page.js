import Image from "next/image";
import Herosection from "./Components/Home/Herosection";
import PatnersSection from "./Components/Home/PatnersSection";
import HowWework from "./Components/Home/HowWeWork";

export default function Home() {
  return (
    <div>
      <h1> 
        Home
      </h1>
      <Herosection />
      <PatnersSection />
     <HowWework></HowWework>
      </div>
  );
}
