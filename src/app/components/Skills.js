/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      rating: 4 
    },
    {
      name: "CSS",
      rating: 3
    },
    {
      name: "Javascript",
      rating: 3
    },
    {
      name: "NextJs",
      rating: 3
    },
    {
      name: "MongoDB",
      rating: 3
    },
    {
      name: "C++",
      rating: 3
    },
    {
      name: "DSA",
      rating: 3
    }
   
    
    // Add more skills here
  ];

  const skillSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, {
      rootMargin: '0px',
      threshold: 0.5, // Adjust as needed
    });

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    return () => {
      if (skillSectionRef.current) {
        observer.unobserve(skillSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="text-white py-16 px-4" ref={skillSectionRef}>
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#00df9a]">My Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-24">
          {skills.map((skill, index) => (
            <div key={skill.name} className="text-center">
              <div className="relative w-12 h-12 mx-auto">
                <svg className="absolute" width="100%" height="100%">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    fill="none"
                    strokeWidth="8"
                    stroke="#444"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    fill="none"
                    strokeWidth="8"
                    stroke="#00df9a"
                    strokeDasharray={
                      isVisible ? `${skill.rating * 25.13}, 100` : '0, 100'
                    }
                    strokeDashoffset={isVisible ? '0' : '100'}
                    style={{ transition: 'stroke-dasharray 1s, stroke-dashoffset 1s' }}
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
