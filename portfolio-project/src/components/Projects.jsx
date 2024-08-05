import FlexiLogo from "../assets/flexifund-logo.jpg";
import RentalLogo from "../assets/rental-logo.jpg";
import CartLogo from "../assets/cart-logo.jpg";
import React from "react";

const projects = [
  {
    id: 1,
    name: "FlexyFund Loan App",
    image: FlexiLogo,
    detail:
      "FlexiFunds is a comprehensive loan app built with Java Spring Boot, and OOP principles.",
    github: "https://github.com/andrechrstian?tab=repositories",
  },
  {
    id: 2,
    name: "QuickCart Shop App",
    image: CartLogo,
    detail:
      "This project is a simple online shop built with Java Spring Boot, applying OOP principles.",
    github: "https://github.com/andrechrstian?tab=repositories",
  },
  {
    id: 3,
    name: "Binar Car Rental",
    image: RentalLogo,
    detail:
      "This project is developed using React JS, HTML/CSS, and JavaScript.",
    github: "https://github.com/andrechrstian?tab=repositories",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
              transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="mx-auto mb-8 w-56 h-56 rounded-lg object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.detail}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
