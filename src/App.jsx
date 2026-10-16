import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useSpring, useScroll } from "framer-motion";

import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Aboutus from "./Components/Aboutus";
import HeroSection from "./Components/HeroSection";
import Navbar1 from "./Components/Navbar1";
import "./App.css";

// ✅ Scroll progress indicator
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
        zIndex: 50,
      }}
    />
  );
}

// ✅ Route change effects: upar scroll + AOS refresh
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Page change par upar scroll
    window.scrollTo(0, 0);

    // ✅ MAIN FIX — naye page ke data-aos elements ko AOS se dobara scan karwao
    // (chhota delay: React ke render complete hone ke baad scan ho)
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

// ✅ Home page
function Home() {
  return (
    <>
      <HeroSection />
      <Aboutus />
      <Services />
    </>
  );
}

function App() {
  // ✅ AOS sirf ek baar initialize
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollLinked />

      {/* ✅ Sticky Footer Layout — content kam ho to bhi footer bottom par rahega */}
      <div className="min-h-screen flex flex-col">
        <Navbar1 />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;