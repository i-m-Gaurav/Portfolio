import React from "react";

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full bg-[#000300] py-16 px-4 max-w-[1240px] mx-auto">
      {/* Text */}
      <div className="w-full mb-10">
        <h1 className="text-[#00df9a] font-bold text-5xl text-center">Services I offer</h1>
      </div>

      {/* Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-[#1F1F1F] px-10 py-10">
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
        <div className="bg-[#1F1F1F] px-10 py-10">
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
        <div className="bg-[#1F1F1F] px-10 py-10">
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
    </div>
  );
};

export default Services;
