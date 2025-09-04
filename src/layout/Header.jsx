// src/layout/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import GradientButton from "../components/ui/GradientButton";
import MobileMenu from "../components/ui/MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[var(--color-dark)] shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          to="/"
          className="text-2xl font-bold"
          style={{ color: "var(--color-blue)" }}
        >
          Sabbir Ahmad
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-[var(--color-text-secondary)] font-medium">
          <Link to="/" className="hover:text-[var(--color-blue)] transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-[var(--color-blue)] transition">
            Services
          </Link>
          <Link to="/projects" className="hover:text-[var(--color-blue)] transition">
            Projects
          </Link>
          <Link to="/resume" className="hover:text-[var(--color-blue)] transition">
            Resume
          </Link>
          <Link to="/contact" className="hover:text-[var(--color-blue)] transition">
            Contact
          </Link>
        </nav>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <GradientButton to="/contact">Hire Me</GradientButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
