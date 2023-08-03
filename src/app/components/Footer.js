import React from "react";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent py-4 text-center">
      <p className="text-gray-600">
        <span>&copy;</span> {currentYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
