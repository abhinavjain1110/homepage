// src/components/Navbar/Navbar.jsx
import React from 'react';
import useToggle from '../../hooks/useToggle';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const Navbar = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <a href="/">PrintifyClone</a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-700 hover:text-primary transition">Home</a>
          <a href="#features" className="text-gray-700 hover:text-primary transition">Features</a>
          <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
          <a href="#portfolio" className="text-gray-700 hover:text-primary transition">Portfolio</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleIsOpen} className="text-gray-700 focus:outline-none">
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#hero" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Features</a>
          <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
          <a href="#portfolio" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Portfolio</a>
          <a href="#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonials</a>
          <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
