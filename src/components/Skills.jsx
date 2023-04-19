import React from "react";
import Angular from "../assets/images/technologies/angular.svg";
import Bootstrap from "../assets/images/technologies/bootstrap.svg";
import CSS from "../assets/images/technologies/css.svg";
import Github from "../assets/images/technologies/github.svg";
import HtmlImg from "../assets/images/technologies/html.svg";
import Javascript from "../assets/images/technologies/javascript.svg";
import ReactImg from "../assets/images/technologies/react.svg";
import Tailwind from "../assets/images/technologies/tailwind.png";

const Skills = () => {
  return (
    <>
      {/* Skills */}
      <section className="text-gray-800">
        <div className="py-2 md:py-12">
          <h3 className="text-3xl py-12 font-semibold text-center border-b-[8px]">
            Technologies I've worked with:
          </h3>
          <p className="hidden md:block text-md mb-8 text-center leading-10 text-gray-800">
            With a focus on clean, maintainable code and a commitment to staying
            up-to-date with the latest industry developments, I am dedicated to
            delivering high-quality projects that exceed client expectations.
            Whether you need a new website, web application, or redesign of an
            existing project, I am confident in my ability to bring your vision
            to life. When it comes to styling and layout, I am equally
            comfortable working with both Bootstrap and Tailwind. Whether you
            need a website that looks great out of the box with Bootstrap's
            pre-built components, or a more customized design with Tailwind's
            powerful utility classes, I have the expertise to deliver a polished
            and professional result.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
          <div className="flex flex-col items-center justify-center bg-transparent rounded-xl shadow-xl shadow-black/50 hover:scale-105 duration-500">
            <img
              className="w-28 h-28 object-cover"
              src={HtmlImg}
              alt="HTML"
            />
            <h4 className="hidden md:block text-xl font-bold">HTML</h4>
          </div>
          <div className="flex flex-col items-center justify-center bg-transparent rounded-xl shadow-xl shadow-black/50 hover:scale-105 duration-500">
            <img className="w-28 h-28 object-cover mt-4" src={CSS} alt="CSS" />
            <h4 className="hidden md:block text-xl font-bold">CSS</h4>
          </div>
          <div className="flex flex-col items-center justify-center bg-transparent rounded-xl shadow-xl shadow-black/50 hover:scale-105 duration-500">
            <img
              className="w-28 h-28 object-cover"
              src={Javascript}
              alt="Javascript"
            />
            <h4 className="hidden md:block text-xl font-bold">Javascript</h4>
          </div>
          <div className="flex flex-col items-center justify-center bg-transparent rounded-xl shadow-xl shadow-black/50 hover:scale-105 duration-500">
            <img
              className="w-28 h-28 object-cover"
              src={ReactImg}
              alt="React"
            />
            <h4 className="hidden md:block text-xl font-bold">React</h4>
          </div>
          <div className="flex flex-col items-center justify-center bg-transparent rounded-xl shadow-xl shadow-black/50 hover:scale-105 duration-500">
            <img
              className="w-28 h-28 object-cover"
              src={Angular}
              alt="Angular"
            />
            <h4 className="hidden md:block text-xl font-bold">Angular</h4>
          </div>
          <div className="flex flex-col items-center justify-center bg-transparent rounded-xl shadow-xl shadow-black/50 hover:scale-105 duration-500">
            <img
              className="w-28 h-28 object-cover"
              src={Tailwind}
              alt="Tailwind"
            />
            <h4 className="hidden md:block text-xl font-bold">Tailwind</h4>
          </div>
          <div className="flex flex-col items-center justify-center bg-transparent rounded-xl shadow-xl shadow-black/50 hover:scale-105 duration-500">
            <img
              className="w-28 h-28 object-cover"
              src={Bootstrap}
              alt="Bootstrap"
            />
            <h4 className="hidden md:block text-xl font-bold">Bootstrap</h4>
          </div>
          <div className="flex flex-col items-center justify-center bg-transparent rounded-xl shadow-xl shadow-black/50 hover:scale-105 duration-500">
            <img
              className="w-28 h-28 object-cover"
              src={Github}
              alt="Github"
            />
            <h4 className="hidden md:block text-xl font-bold">Github</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
