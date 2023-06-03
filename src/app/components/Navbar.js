import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [scrollBg, setScrollBg] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const isTop = window.scrollY < 100;
      if (isTop !== scrollBg) {
        setScrollBg(isTop);
      }
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollBg]);

  return (
    <div
      ref={navRef}
      className={`text-white sticky top-0 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ${
        nav ? (scrollBg ? "fixed w-full top-0 z-50 bg-[#000300] ease-in-out duration-500" : "bg-[#0e0e0e] drop-shadow h-16 top-2 ease-in-out duration-300 ") : "fixed w-full top-0 z-50 bg-[#000300]"
      }`}
    >
      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
        GAURAV.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 inline-block border-b-2 border-transparent hover:border-[#00df9a] transition duration-300 ease-in-out">
          Home
        </li>
        <li className="p-4 inline-block border-b-2 border-transparent hover:border-[#00df9a] transition duration-300 ease-in-out">
          <Link href="/static/resume.pdf" download>
            Resume
          </Link>
        </li>
        <li className="p-4 inline-block border-b-2 border-transparent hover:border-[#00df9a] transition duration-300 ease-in-out">
          <ScrollLink
            className="cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
          >
            About
          </ScrollLink>{" "}
        </li>
        <li className="p-4 inline-block border-b-2 border-transparent hover:border-[#00df9a] transition duration-300 ease-in-out">
          <ScrollLink
            className="cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "left-0 top-0 fixed w-[60%] h-[1000px] border-r border-r-gray-900 bg-[#0003009e] backdrop-blur ease-in-out duration-500"
            : "left-[-100%] top-0 fixed w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold m-7 text-[#00df9a]">
          GAURAV.
        </h1>
        <ul className="uppercase m-4">
          <li className="p-4 border-b border-b-gray-700">Home</li>
          <li className="p-4 border-b border-b-gray-700">
            <Link href="/static/resume.pdf" download>
              Resume
            </Link>
          </li>
          <li className="p-4 border-b border-b-gray-700">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
            >
              About
            </ScrollLink>{" "}
          </li>
          <li className="p-4">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
