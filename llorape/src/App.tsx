import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Sections/Hero";
import Projects from "./components/Sections/Projects";
import About from "./components/Sections/About";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  // Automatically update active section on scroll using IntersectionObserver
  useEffect(() => {
    const sections = ["inicio", "sobre-mi", "portafolio"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Trigger when 30% of the section is visible on screen
          threshold: 0.3,
          rootMargin: "-10% 0px -40% 0px"
        }
      );

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const handleNavToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 antialiased selection:bg-neutral-800 selection:text-white" id="app-root-container">
      {/* Navigation Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main id="main-content-layout">
        <Hero onNavToSection={handleNavToSection} />
        <About />
        <Projects />
      </main>

      {/* Global Terminal Footer */}
      <Footer />
    </div>
  );
}
