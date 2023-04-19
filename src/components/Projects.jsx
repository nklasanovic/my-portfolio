import React from "react";
import Carousel from "../assets/images/projects/carousel.png";
import Fastfood from "../assets/images/projects/fastfood.png";
import Todo from "../assets/images/projects/todo.png";
import Weather from "../assets/images/projects/weather.png";

const Projects = () => {
  return (
    <>
      {/* Projects */}
      <section className="py-24 text-gray-800">
        <h2 className="py-8 text-3xl font-bold text-center mb-10 border-b-[8px]">
          Projects:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg shadow-xl shadow-gray overflow-hidden hover:scale-105 duration-500">
            <img src={Weather} alt="/" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Weather Forecast</h3>
              <p className="hidden md:block text-gray-800 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec quam urna. Donec malesuada est id quam sagittis, vitae
                efficitur neque eleifend.
              </p>
              <a
                href="https://weather-forecast-all.netlify.app/"
                target="_blank"
                className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white py-2 px-4 rounded-xl"
              >
                Show project
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-xl shadow-gray overflow-hidden hover:scale-105 duration-500">
            <img src={Fastfood} alt="/" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Dash n' Dine</h3>
              <p className="hidden md:block text-gray-800 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec quam urna. Donec malesuada est id quam sagittis, vitae
                efficitur neque eleifend.
              </p>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white py-2 px-4 rounded-xl"
              >
                Show project
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-xl shadow-gray overflow-hidden hover:scale-105 duration-500">
            <img src={Todo} alt="/" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Todo App</h3>
              <p className="hidden md:block text-gray-800 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec quam urna. Donec malesuada est id quam sagittis, vitae
                efficitur neque eleifend.
              </p>
              <a
                href="https://todolistprojecttasks.netlify.app"
                target="_blank"
                className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white py-2 px-4 rounded-xl"
              >
                Show project
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-xl shadow-gray overflow-hidden hover:scale-105 duration-500">
            <img src={Carousel} alt="/" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Image Carousel</h3>
              <p className="hidden md:block text-gray-800 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec quam urna. Donec malesuada est id quam sagittis, vitae
                efficitur neque eleifend.
              </p>
              <a
                href="https://imagecarouseproject.netlify.app"
                target="_blank"
                className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white py-2 px-4 rounded-xl"
              >
                Show project
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
