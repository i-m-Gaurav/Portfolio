import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Popup from "../components/Popup"; // Update the path if needed


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // New state variable for the popup

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    fetch("https://formspree.io/f/xknljjbg", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setShowPopup(true); // Show the popup on successful submission
          setName("");
          setEmail("");
          setMessage("");
        } else {
          console.error("Failed to send email");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className="bg-[#1e1e1e] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#00df9a]">Contact Me</h1>
        </div>
        <div className="flex flex-wrap justify-center md:space-x-auto">
          {/* Avatar Card */}
          <div className="bg-[#2a2a2a] shadow m-10 p-4 rounded-lg flex flex-col h-full">

    <img
      src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"  
      alt="Gaurav Kumar"
      className="w-32 h-32 rounded-full mx-auto"
    />

    <div className="flex-grow h-52">

      <h2 className="text-[#00df9a] font-bold text-2xl mt-4 mb-1"> 
        Gaurav Kumar  
      </h2>

      <p className="text-[#A7A6A6]">Front-End Developer</p>

      <p className="text-[#ceced0] mt-3 ">
         I am available for full time opportunities and 
         <br/>freelance work. Let's talk!
      </p>

    </div>

    <div className="flex justify-start  mt-4 flex-col">

    <h1 className="text-[#A7A6A6] mb-2 mx-2">Social profiles</h1>

      <div className="flex">
      <Link href="https://github.com/i-m-Gaurav">
        <FaGithub className="text-gray-400 text-2xl mx-2" />
      </Link>

      <Link href="https://www.linkedin.com/in/i-am-gaurav/">
        <FaLinkedin className="text-gray-400 text-2xl mx-2" />
      </Link>

      <Link href="https://www.instagram.com/i.m.gauravkr/">
        <FaInstagram className="text-gray-400 text-2xl mx-2" />
      </Link>

      <Link href="https://twitter.com/__kumargaurav">
        <FaTwitter className="text-gray-400 text-2xl mx-2" />
      </Link>
      </div>

    </div>

  </div>

          {/* Contact Form */}
          <div className=" m-10 max-w-lg">
            <form onSubmit={handleSubmit}>
              <label className="text-[#00df9a] font-bold">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mb-4 mt-2 border rounded"
              />
              <label className="text-[#00df9a] font-bold">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 mt-2 border rounded"
              />
              <label className="text-[#00df9a] font-bold">Message</label>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 mb-4 mt-2 border rounded"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="bg-[#00df9a] py-2 px-6 rounded hover:bg-[#00fd9a] text-black"
              >
                Send Message
              </button>

              {submitted && showPopup && <Popup onClose={closePopup} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
