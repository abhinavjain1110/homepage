// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import heroImage from '../../assets/images/hero-image.jpg'; // Replace with your actual image

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gray-50 pt-24">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-5xl font-bold text-gray-800">Build Stunning Websites with Ease</h1>
          <p className="mt-6 text-gray-600 text-lg">
            At PrintifyClone, we specialize in crafting responsive, modern, and user-friendly websites tailored to your business needs.
          </p>
          <div className="mt-8 flex space-x-4">
            <a href="#services" className="text-primary px-6 py-3 rounded-md border border-primary hover:bg-primary hover:text-white transition">
              Our Services
            </a>
            <a href="#portfolio" className="text-primary px-6 py-3 rounded-md border border-primary hover:bg-primary hover:text-white transition">
              View Portfolio
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={heroImage} alt="Web Development" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
