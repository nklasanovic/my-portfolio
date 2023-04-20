import React from "react";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import MyPic from "../assets/images/image.jpg";

const Hero = () => {
  const fileUrl =
    "https://drive.google.com/file/d/1_5MwvX6mqpPQVBt0rP9yADHkYAqQpjsJ/view?usp=share_link";

  return (
    <>
      {/* Hero Section */}
      <section className="md:min-h-screen">
        <nav className="py-10 mb-12 flex justify-between shadow-md">
          <div className="flex text-2xl text-cyan-500 ml-2 md:text-3xl gap-8">
            <a href="https://github.com/nklasanovic" target="_blank">
              <AiFillGithub className="cursor-pointer hover:text-amber-400 duration-300 hover:scale-110" />
            </a>
            <a href="mailto:nebojsakl.dev@gmail.com" target="_blank">
              <AiFillMail className="cursor-pointer hover:text-amber-400 duration-300 hover:scale-110" />
            </a>
          </div>

          <ul className="flex items-center mr-2">
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white text-[18px] font-semibold px-8 py-3 border-none rounded-xl ml-8"
                href={fileUrl}
                download
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 shadow-md rounded-lg">
          <div className="relative rounded-full w-40 h-40 mx-auto overflow-hidden">
            <img
              className="rounded-full hover:scale-105 duration-500 transition"
              src={MyPic}
              alt="My Picture"
              layout="fill"
            />
          </div>
          <h2 className="text-5xl mt-2 py-2 text-cyan-600 font-medium">
            Nebojsa Klasanovic
          </h2>
          <h3 className="text-2xl py-2">
            I'm a
            <TypeAnimation
              sequence={["Frontend Developer", 1500, "Tech Enthusiast", 1500]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{
                margin: "6px",
                fontSize: "1em",
                display: "inline-block",
                fontWeight: "500",
                color: "teal",
              }}
            />
          </h3>
          <p className="hidden md:block text-md py-5 text-center leading-10 text-gray-800">
            As a front-end developer, I specialize in creating responsive and
            visually appealing web applications using cutting-edge technologies
            such as <strong>React</strong>, <strong>Angular</strong>,{" "}
            <strong>Tailwind</strong>, and <strong>Bootstrap</strong>. With a
            passion for user-centered design, I strive to create interfaces that
            are intuitive and easy to use, while also incorporating the latest
            industry trends and best practices. Whether it's developing custom
            components in React or leveraging the powerful features of Angular,
            I take pride in my ability to craft dynamic user experiences that
            engage and delight users. I am also skilled in creating mobile-first
            designs and utilizing responsive frameworks like Bootstrap and
            Tailwind to ensure that applications look great on any device.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
