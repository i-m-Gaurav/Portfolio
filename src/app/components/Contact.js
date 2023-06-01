import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-wrap justify-around items-center w-full bg-[#000300] py-16 px-4 max-w-[1240px] mx-auto">
      {/* Text */}
      <div className="w-full mb-10">
        <h1 className="text-[#00df9a] font-bold text-5xl text-center">
          Contact me
        </h1>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center mb-8 w-[60%] md:w-[30%] sm:w-[60%] ">

        {/* Card 1 */}
        <div className="bg-[#1F1F1F] rounded">
          {/* image */}
          <div className=" h-40">
            <Image
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
              alt="/"
              className="object-cover w-full h-full rounded"
            />
          </div>
          <h1 className="font-bold text-2xl mt-4 text-[#00df9a] px-4">
            Gaurav Kumar
          </h1>
          <p className="text-[#A7A6A6] px-4">Front-End Developer</p>
          <p className="text-[#A7A6A6] px-4 mt-5">
            I am available for Freelance and full time positions, contact me and{" "}
            <span className="text-[#00df9a] ">Lets Talk</span>
          </p>

          <div>
            <p className="text-[#A7A6A6] px-4 mt-28">Connect with me</p>
            {/* socials */}
            <div className="px-4 mt-2 flex mb-6 ">
              <FaInstagram className="text-gray-200 text-3xl mr-4" />
              <FaLinkedin className="text-gray-200 text-3xl mr-4" />
              <FaGithub className="text-gray-200 text-3xl mr-4" />
              <FaTwitter className="text-gray-200 text-3xl mr-4" />
            </div>
          </div>
        </div>


     

        {/* contact form */}
        
      


      


      </div>

      {/* form */}

      <div className="flex justify-center">
      <div className="max-w-md w-full text-[#00df9a] p-8 rounded">
        <form>
          <div className="mb-6 flex">
            <div className="mr-2">
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded p-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border-gray-300 rounded p-2"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded p-2"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border-gray-300 rounded p-2"
              placeholder="Enter the subject"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border-gray-300 rounded p-2"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#00df9a] text-black font-bold py-2 px-4 rounded  hover:bg-[#00fd9a]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
      
    </div>
  );
};

export default Contact;
