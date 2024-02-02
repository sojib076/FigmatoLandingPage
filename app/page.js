import Image from "next/image";
import Herosection from "./Components/Home/Herosection";
import PatnersSection from "./Components/Home/PatnersSection";
import HowWework from "./Components/Home/HowWeWork";
import WorkSection from "./Components/Home/WorkSection";

export default function Home() {
  return (
    <div>
      <h1> 
        Home
      </h1>
      <Herosection />
      <PatnersSection />
     <HowWework></HowWework>
     <WorkSection></WorkSection>
      </div>
  );
}
