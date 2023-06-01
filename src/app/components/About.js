import React from "react";
// import Image from '../assets/run.png'

const About = () => {
  return (
    <div className="flex w-full bg-[#000300] py-16 px-4 max-w-[1240px] mx-auto grid md:grid-cols-2">
      {/* Image */}
      <div className="bg-white w-80 h-80 rounded-full flex items-center justify-center mx-auto">
      <img
        className="rounded-full"
        src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg"
        alt="Profile"
        style={{ width: '80%', height: '80%', objectFit: 'cover' }}
      />
    </div>
      {/* Text */}
      <div className="px-10">
        <h1 className="text-[#00df9a] font-bold mt-8 text-5xl">About me</h1>
        <p className="text-white mt-5">
          Gaurav, a self-taught front-end developer, embraces continuous
          learning and exploration. With a passion for web development, he has
          honed his skills through self-guided projects and experimentation.
          Gaurav's adaptability and commitment to excellence drive his journey
          towards becoming a proficient and sought-after developer. Gaurav, a
          self-taught front-end developer, embraces continuous learning and
          exploration. With a passion for web development, he has honed his
          skills through self-guided projects and experimentation. 
        </p>
      </div>
    </div>
  );
};

export default About;
