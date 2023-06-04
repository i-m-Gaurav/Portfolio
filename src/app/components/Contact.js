import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import emailjs from "emailjs-com";

// const MY_API_KEY = process.env.MY_API_KEY;



const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const clearInput = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      to_email: "indiagauravkumar@gmail.com", // Replace with your email address
      from_name: name,
      from_email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
      "service_x5peesd",
        "template_459vgbx",
        emailParams,
        "xsiXRDpAjzE5wt95a"
      )
      .then((response) => {
        console.log("Email sent", response);
        setShowDialog(true); // Show the dialog
      })
      .catch((error) => {
        console.error("Failed to send email", error);
      });
  };
  return (
    <div className="flex flex-wrap justify-around items-center w-full bg-[#000300] py-16 px-4 max-w-[1240px] mx-auto">
      {/* Text */}
      <div className="w-full mb-10">
        <h1 className="text-[#00df9a] font-bold text-5xl text-center">
          Contact me
        </h1>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center mb-8 w-[80%] md:w-[30%] sm:w-[60%] ">
        {/* Card 1 */}
        <div className="bg-[#1F1F1F] rounded">
          {/* image */}
          <div className=" h-40">
            <img
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
              <Link href="https://www.instagram.com/i.m.gauravkr/">
                <FaInstagram className="text-gray-200 text-3xl mr-4" />
              </Link>
              <Link href="https://www.linkedin.com/in/i-am-gaurav/">
                <FaLinkedin className="text-gray-200 text-3xl mr-4" />
              </Link>
              <Link href="https://github.com/i-m-Gaurav">
                <FaGithub className="text-gray-200 text-3xl mr-4" />
              </Link>
              <Link href="https://twitter.com/__kumargaurav">
                <FaTwitter className="text-gray-200 text-3xl mr-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* contact form */}
      </div>

      {/* form */}

      <div className="flex justify-center">
        <div className="max-w-md w-full text-[#00df9a] p-8 rounded">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex">
              <div className="mr-2">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
required


                 value={name}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full text-gray-900 font-semibold border-gray-300 rounded p-2"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-medium mb-2">
                  Phone
                </label>
                <input
required
                  value={phone}
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full text-gray-900 font-semibold border-gray-300 rounded p-2"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
required
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full text-gray-900 font-semibold border-gray-300 rounded p-2"
                placeholder="Enter your email address"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block font-medium mb-2">
                Subject
              </label>
              <input
                value={subject}
                type="text"
                id="subject"
                name="subject"
                className="w-full text-gray-900 font-semibold border-gray-300 rounded p-2"
                placeholder="Enter the subject"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
required
                value={message}
                id="message"
                name="message"
                className="w-full text-gray-900 font-semibold border-gray-300 rounded p-2"
                rows="4"
                placeholder="Enter your message"
                onChange={handleChange}
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

            {/* dialog box */}

            {showDialog && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-[#00df9a] text-gray-800 drop-shadow rounded-lg p-8 max-w-md">
                  <h2 className="text-2xl font-bold mb-4">Message Sent! 🎉🎉</h2>
                  <p className="text-gray-800 mb-4">
                    Your message has been successfully sent.
                  </p>
                  <button
                    className="bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded hover:bg-gray-300"
                    onClick={() => {
                      setShowDialog(false);
                      clearInput();
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
