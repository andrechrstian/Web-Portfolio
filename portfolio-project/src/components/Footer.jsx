import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="">
          <div className="border-t py-4 border-gray-600 flex justify-center items-center">
            <div className="flex space-x-4 my-4 md:my-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
              <a href="" className="text-gray-400 hover:text-white">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
