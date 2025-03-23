import React from "react";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./App.css";
import { motion, useSpring, useScroll } from "framer-motion"; // ✅ Fixed Import
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Aboutus from "./Components/Aboutus";
// import Navbar from "./Components/Navbar";

function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        originX: 0,
        backgroundColor: "#8cb346",
        zIndex: 50, // Ensures it stays on top
      }}
    />
  );
}
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ScrollLinked /> 
      {/* <About/> */}
      <Aboutus/>
      <Services/>
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
}
export default App;
