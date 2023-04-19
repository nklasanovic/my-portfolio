import React from "react";
import { SiAngular, SiBootstrap, SiReact, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <section>
        <footer>
          <div className="hidden md:flex justify-center gap-2 items-center text-center text-gray-800">
            <p className="py-2 font-semibold">&copy; Nebojsa Klasanovic</p>
            <div className="flex gap-2">
              <SiReact />
              <SiAngular />
              <SiTailwindcss />
              <SiBootstrap />
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
