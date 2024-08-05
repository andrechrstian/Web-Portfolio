import React, { useState } from "react";
import Logo from "../assets/web-logo.png";
import Modal from "../components/Modal";

function Hero() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="bg-black text-white text-center py-24" id="home">
        <img
          src={Logo}
          alt=""
          className="mx-auto mb-8 w-60 h-60 object-cover transform
          transisiton-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Andre Christian
          </span>
          , Full-Stack Developer
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          I specialize in building modern and responsive web application
        </p>
        <div className="mt-8  space-x-4">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden 
            md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            onClick={() => setVisible(true)}
          >
            Contact with Me
          </button>
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden 
            md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Resume
          </button>
        </div>
        <Modal open={visible} onClose={() => setVisible(false)} />
      </div>
    </>
  );
}

export default Hero;
