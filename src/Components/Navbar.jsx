import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the menu when clicking a section
  };

  return (
    <div className="fixed z-[999] w-full px-5 md:px-20 py-4 flex justify-between items-center bg-white/10 backdrop-blur-md shadow-md">
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
        <a><img src={logo} alt="Logo" className="w-12 md:w-16" /></a>
      </motion.div>

      {/* Desktop Links */}
      <div className="hidden md:flex text-[1vw] font-bold gap-10">
        {["home", "about", "projects", "socials", "contact"].map((section, index) => (
          <motion.button
            key={index}
            onClick={() => scrollToSection(section)}
            whileHover={{ scale: 1.2, opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer transition-all"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/90 text-white flex flex-col items-center justify-center gap-6 text-lg font-bold md:hidden">
          {["home", "about", "projects", "socials", "contact"].map((section, index) => (
            <button 
              key={index} 
              onClick={() => scrollToSection(section)} 
              className="cursor-pointer text-2xl"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
