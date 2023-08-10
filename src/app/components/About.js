import { motion } from 'framer-motion'

export default function About() {

  return (
    <motion.div 
      className="h-screen flex flex-col items-center justify-between p-10 text-center md:text-left md:flex-row max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >

      <div>
        <h1 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
          About
        </h1>

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h2 className="text-5xl mb-4 font-semibold">
            Hey There, I'm <span className="text-[#00df9a]">John Doe</span>  
          </h2>
          <h3 className="text-2xl mb-4">
            I live for beautiful designs and enjoy bringing ideas to life with code.
          </h3>
        </motion.div>

        <motion.p
          initial={{ x: 200, opacity: 0 }} 
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          I have a passion for front-end development and creating intuitive, dynamic user experiences. When I'm not coding, you can find me playing guitar, reading, or exploring the outdoors. Ready to build something great? Let's connect!
        </motion.p>
      </div>
      
      <div className="relative mt-16 md:mt-0">
        {/* e.g. social icons */}
      </div>

    </motion.div>
  )

}