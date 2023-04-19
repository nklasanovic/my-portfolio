import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-white/90 px-10">
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
