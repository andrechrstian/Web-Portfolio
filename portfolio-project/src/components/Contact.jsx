import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import ContactImage from "../assets/Contact.png";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row md:justify-center items-center md:space-x-12 ">
          <div className="w-96">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
              from-green-400 to-blue-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>
              I'm open to collaborating web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="andrechristian0997@gmail.com"
                className="hover:underline"
              >
                andrechristian0997@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
              <span>0821-5771-5733</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span>Indonesia</span>
            </div>
          </div>

          <div className="w-96">
            <img
              className=" hover:scale-105 transform
              transisiton-transform duration-300 hidden md:inline h-80"
              src={ContactImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
