"use client"
import React,{useState,useEffect} from 'react'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion'

const Hero = () => {

  const [animate, setAnimate] = useState(false); 

// Add useEffect to trigger animation
useEffect(() => {
  setTimeout(() => {
    setAnimate(true); 
  }, 500);
}, [])

  return (
    <div className='text-white '>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

      <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={animate ? { y: 0, opacity: 1 } : ''}
    transition={{ duration: 0.7 }}>

<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-4'>
          Hi there,
          <br/>I am <span className='text-[#00df9a]'>Gaurav</span>
        </h1>

        <p className='md:text-2xl sm:text-xl text-lg font-semibold py-2 mt-10'>
          Bridging UI/UX Design and Front-End Development <br/> to Craft Seamless Digital Experiences
        </p>
       
  
  </motion.div>
  <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={animate ? { y: 0, opacity: 1 } : ''}
    transition={{ duration: 0.8,delay:0.5 }}>

<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mt-52 mb-0 mx-auto py-3 text-black'>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            See My Work
          </ScrollLink>  
        </button>

       
  
  </motion.div>

 

       

        

      </div>
    </div>
  )

}

export default Hero