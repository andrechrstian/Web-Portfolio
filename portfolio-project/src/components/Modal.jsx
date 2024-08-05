import React, { useEffect } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Modal = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div
      onClick={onClose}
      className={`
      fixed inset-0 flex justify-center items-center
      transition-all
    ${open ? "visible bg-gray-700/25 backdrop-blur-sm" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        bg-black rounded-xl p-6 transition-all w-96 h-72 
        ${open ? "scale-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-lg
          text-green-400 hover:text-blue-500 "
        >
          X
        </button>

        <div className="mt-8 ">
          <h3
            className="text-transparent bg-clip-text bg-gradient-to-r 
          from-green-400 to-blue-500 text-xl font-bold"
          >
            Andre Christian
          </h3>
          <p className="mt-1 text-sm">you can reach me below</p>
          <div className="text-sm">
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
