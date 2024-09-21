// src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white py-8 shadow-inner">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">PrintifyClone</h2>
            <p className="mt-2 text-gray-600">
              Delivering high-quality web development services to help your business thrive online.
            </p>
          </div>
          {/* Links */}
          <div className="flex space-x-6">
            <a href="#privacy" className="text-gray-700 hover:text-primary transition">Privacy Policy</a>
            <a href="#terms" className="text-gray-700 hover:text-primary transition">Terms of Service</a>
            <a href="#support" className="text-gray-700 hover:text-primary transition">Support</a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} PrintifyClone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
