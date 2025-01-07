import React, { useState, useEffect } from "react";
import { ChevronRight, Github, Menu, X } from "lucide-react";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-white text-xl font-bold">PostPulse</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 py-4">
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  );
};

const isAnalysisPage = window.location.pathname === "/analysis";
const NavLinks = ({ mobile }) => (
  <div className={`flex ${mobile ? "flex-col gap-4" : "items-center gap-8"}`}>
    <a
      href="/"
      className="text-gray-300 hover:text-white flex items-center gap-2"
    >
      <Github size={20} />
      GitHub
    </a>
    {!isAnalysisPage ? (
      <button
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
        onClick={() => (window.location.href = "/analysis")}
      >
        Get Started
        <ChevronRight size={16} />
      </button>
    ) : null}
  </div>
);

export default Navbar;
