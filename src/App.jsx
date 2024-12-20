import React from "react";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import MatrixCanvasBackground from "./components/MatrixCanvasBackground/MatrixCanvasBackground";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./app.scss";

function App() {
  return (
    <div>
      <CustomCursor />
      <AnimatedBackground />
      <MatrixCanvasBackground />
      <div className="content">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
