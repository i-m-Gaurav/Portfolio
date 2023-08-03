import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (

<div className='text-white pt '>
<div className='max-w-[800px] mt-[-100px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
  
  <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-4 '>
      Crafting the <span className='text-[#00df9a]'>Future</span> with <span className='text-[#00df9a]'>Imagination</span>
  </h1>
 
  <button className='bg-[#00df9a] w-[200px] rounded rounded-md font-medium my-6 mx-auto py-3 text-black'>
  <ScrollLink className="cursor-pointer" to="projects" smooth={true} duration = {500} offset={-70}>
            See My Works
            </ScrollLink>
  </button>
</div>
</div>
  )
}

export default Hero;
