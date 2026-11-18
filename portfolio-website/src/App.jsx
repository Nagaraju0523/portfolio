import { useState } from "react";
import "./App.css";

import WaterBackground from "./components/WaterBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="portfolio-app hydro-glass-theme">
      {/* Animated Water Background & Interactive Cursor Light Follower */}
      <WaterBackground />

      {/* Floating Glass Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section (Includes the single dedicated View Resume button) */}
        <Hero onOpenResume={handleOpenResume} />

        {/* 2. About Me Section (Compact Glassmorphism) */}
        <About />

        {/* 3. Skills Section (Compact Interactive Glass Cards) */}
        <Skills />

        {/* 4. Projects Section (Interactive 3D Tilt Cards & Details Modal) */}
        <Projects />

        {/* 5. Experience & Education Timeline (Current Employed Status + Tech Tammina Projects) */}
        <Experience />

        {/* 6. Contact Section (Floating Glass Form, Direct Channels & Water Backdrop) */}
        <Contact />
      </main>

      {/* Glass Footer */}
      <Footer />

      {/* Interactive Glassmorphism Resume Modal (View, Print & Download) */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}

export default App;
