import Image from "next/image";
import Herosection from "./Components/Home/Herosection";
import PatnersSection from "./Components/Home/PatnersSection";

export default function Home() {
  return (
    <div>
      <h1> 
        Home
      </h1>
      <Herosection />
      <PatnersSection />
      </div>
  );
}
