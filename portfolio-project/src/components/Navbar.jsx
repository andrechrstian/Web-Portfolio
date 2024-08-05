import React, { useState } from "react";
import Modal from "../components/Modal.jsx";

const Navbar = () => {
  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50">
        <div className="container py-2 flex justify-center md:justify-between items-center">
          <div className="text-2xl font-bold hidden  md:inline">Christian</div>
          <div className="space-x-6 ">
            <a
              href="#home"
              className="hover:text-gray-400"
              onClick={handleScroll}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-400"
              onClick={handleScroll}
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-gray-400"
              onClick={handleScroll}
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-gray-400"
              onClick={handleScroll}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-400"
              onClick={handleScroll}
            >
              Contact
            </a>
          </div>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden text-sm
          md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            {"Portfolio Page"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
