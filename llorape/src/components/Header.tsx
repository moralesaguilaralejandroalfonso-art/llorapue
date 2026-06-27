import { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: "INICIO" },
    { id: "sobre-mi", label: "SOBRE MÍ" },
    { id: "portafolio", label: "PORTAFOLIO" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    // Scroll smoothly to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-black/90 backdrop-blur-md transition-colors" id="app-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div 
          onClick={() => handleNavClick("inicio")} 
          className="flex cursor-pointer items-center text-white focus:outline-none"
          id="logo-container"
        >
          <span className="font-display text-base font-bold tracking-[0.2em] text-white">
            GHOSTCODE
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 font-mono text-xs tracking-widest transition-colors duration-150 focus:outline-none cursor-pointer ${
                  isActive 
                    ? "text-white font-medium" 
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Utility */}
        <div className="hidden md:flex items-center" id="header-right-util">
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center" id="mobile-menu-trigger">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-900 bg-black/95 px-4 pt-2 pb-6 space-y-2" id="mobile-nav-panel">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full py-2.5 text-left font-mono text-xs tracking-widest transition-colors ${
                  isActive ? "text-white border-l-2 border-white pl-2" : "text-neutral-500 hover:text-neutral-300 pl-2"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
