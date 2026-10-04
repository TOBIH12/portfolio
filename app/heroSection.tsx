
import { assets } from "./assests"
import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between container mx-auto pt-25 md:pt-15 md:px-20 md:mt-28 lg:px-28 w-full overflow-hidden">
      <div className="hero-text">
        <h5 className="text-[1.2rem] text-[#03045E]">Hello, I'm Tobi,</h5>
        <h1 className="text-7xl md:text-8xl text-[#03045E] font-bold py-2">Software <br /> Engineer</h1>
        <h5 className="text-[1.2rem] text-[#03045E]">Based in Nigeria.</h5>

    <a href="path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer">
        <button className="btn-secondary bg-[rgb(235,224,74)] hover:bg-yellow-100 border border-black-200 py-1 px-4 text-[1.2rem] my-5 cursor-pointer rounded">Resume</button>
    </a>
      </div>
      <div className="hero-image mt-6 md:mt-1 cursor-pointer">
       <Image src={assets.profile} alt="Tobi's image" className="border border-black-200 size-88 rounded-full object-cover "></Image>
      </div>
    </div>
  )
}

export default HeroSection;
