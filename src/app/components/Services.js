import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";

const Services = () => {

  const [animate, setAnimate] = useState(false); 

  // Add useEffect to trigger animation
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true); 
    }, 500);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center w-full bg-[#1E1E1E] py-16 px-4 max-w-[1240px] mx-auto">
      {/* Text */}
      <div className="w-full mb-10 flex justify-center">
        <h3 className="text-center sm:text-left text-[#00df9a] text-5xl font-bold">
          Services I Offer
        </h3>
      </div>

      <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={animate ? { y: 0, opacity: 1 } : ''}
    transition={{ duration: 0.7 }}>

<div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-3  flex-wrap">
        
        {/* Card 1 */}

        <div className="bg-[#2a2a2a] shadow rounded px-10 py-10 ">
          <h1 className="font-bold text-[#00df9a] py-5 text-2xl text-center">Web development</h1>
          <ul className="list-disc text-gray-400 ">
            <li className="pb-3">Custom website design and development</li>
            <li className="pb-3">Responsive web design</li>
            <li className="pb-3">E-commerce website development</li>
            <li className="pb-3">WordPress theme customization</li>
            <li className="pb-3">Website maintenance and updates</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2a2a2a] shadow rounded px-10 py-10">
  <h1 className="font-bold text-[#00df9a] py-5 text-2xl text-center">Graphic Design</h1>
  <ul className="list-disc text-gray-400">
    <li className="pb-3">Logo design</li>
    <li className="pb-3">Print design (brochures, flyers, posters, etc.)</li>
    <li className="pb-3">Brand identity design</li>
    <li className="pb-3">Illustration</li>
    <li className="pb-3">Packaging design</li>
  </ul>
</div>


        {/* Card 3 */}
        <div className="bg-[#2a2a2a] shadow rounded px-10 py-10">
  <h1 className="font-bold text-[#00df9a] py-5 text-2xl text-center">Content Writing</h1>
  <ul className="list-disc text-gray-400">
    <li className="pb-3">Blog article writing</li>
    <li className="pb-3">Website content creation</li>
    <li className="pb-3">SEO copywriting</li>
    <li className="pb-3">Product descriptions</li>
    <li className="pb-3">Social media content development</li>
  </ul>
</div>

      </div>
       
  
  </motion.div>

      {/* Cards */}
     
    </div>
  );
};

export default Services;
