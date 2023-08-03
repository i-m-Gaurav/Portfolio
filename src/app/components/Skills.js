// import React from "react";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaNodeJs, FaPhp, FaSwift } from "react-icons/fa";

// const Skills = () => {
//   const programmingLanguages = [
//     { name: "HTML", icon: FaHtml5 },
//     { name: "CSS", icon: FaCss3Alt },
//     { name: "JavaScript", icon: FaJs },
//     { name: "React", icon: FaReact },
//     { name: "Python", icon: FaPython },
//     { name: "Java", icon: FaJava },
//     { name: "Node.js", icon: FaNodeJs },
//     { name: "PHP", icon: FaPhp },
//     { name: "Swift", icon: FaSwift },
//   ];

//   return (
//     <div className="flex flex-wrap w-full bg-[#000300] py-16 px-4 max-w-[1240px] mx-auto">
//       {/* Text */}
//       <div className="w-full mb-8 bg-blue-600">
//         <h1 className="text-[#00df9a] font-bold text-5xl">Skills</h1>
//       </div>

//       {/* Cards */}
      
//       <div>

//       <div className="bg-white flex justify-center items-center p-5 rounded mr-5 mb-5">
//         <FaHtml5 className="bg-white "/>
//         <h1 className="text-black font-bold">HTML</h1>
//       </div>


//       </div>

//       <div>

// <div className="bg-white flex justify-center items-center p-5 rounded mr-5 mb-5">
//   <FaHtml5 className="bg-white "/>
//   <h1 className="text-black font-bold">HTML</h1>
// </div>


// </div>

// <div>

// <div className="bg-white flex justify-center items-center p-5 rounded mr-5 mb-5">
//   <FaHtml5 className="bg-white "/>
//   <h1 className="text-black font-bold">HTML</h1>
// </div>


// </div>

// <div>

// <div className="bg-white flex justify-center items-center p-5 rounded mr-5 mb-5">
//   <FaHtml5 className="bg-white "/>
//   <h1 className="text-black font-bold">HTML</h1>
// </div>


// </div>

// <div>

// <div className="bg-white flex justify-center items-center p-5 rounded mr-5 mb-5">
//   <FaHtml5 className="bg-white "/>
//   <h1 className="text-black font-bold">HTML</h1>
// </div>


// </div>

// <div>

// <div className="bg-white flex justify-center items-center p-5 rounded mr-5 mb-5">
//   <FaHtml5 className="bg-white "/>
//   <h1 className="text-black font-bold">HTML</h1>
// </div>


// </div>

// <div>

// <div className="bg-white flex justify-center items-center p-5 rounded mr-5 mb-5">
//   <FaHtml5 className="bg-white "/>
//   <h1 className="text-black font-bold">HTML</h1>
// </div>


// </div>


// <div>

// <div className="bg-white flex justify-center items-center p-5 rounded mr-5 mb-5">
//   <FaHtml5 className="bg-white "/>
//   <h1 className="text-black font-bold">HTML</h1>
// </div>


// </div>

//     </div>
//   );
// };

// export default Skills;

import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaNodeJs, FaPhp, FaSwift } from "react-icons/fa";

const Skills = () => {
  const programmingLanguages = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Python", icon: FaPython },
    { name: "Java", icon: FaJava },
    { name: "Node.js", icon: FaNodeJs },
    { name: "PHP", icon: FaPhp },
    { name: "Swift", icon: FaSwift },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center w-full bg-[#000300] py-16 px-4 max-w-[1240px] mx-auto">
      {/* Text */}
      <div className="w-full mb-8">
        <h1 className="text-[#00df9a] text-center font-bold text-5xl mb-10">My Skills</h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {programmingLanguages.slice(0, 8).map((language, index) => (
          <div
            key={index}
            className="bg-white  m-5 flex flex-row justify-center items-center p-5 rounded"
          >
            <language.icon className="text-black text-4xl mr-2" />
            <h1 className="text-black font-bold">{language.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

