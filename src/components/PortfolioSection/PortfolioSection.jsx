// src/components/PortfolioSection/PortfolioSection.jsx
import React from 'react';
import PortfolioCard from './PortfolioCard';
import portfolio1 from '../../assets/images/portfolio1.jpg'; // Replace with your actual images
import portfolio2 from '../../assets/images/portfolio2.jpg';
import portfolio3 from '../../assets/images/portfolio3.jpg';
import portfolio4 from '../../assets/images/portfolio4.jpg';

const portfolios = [
  {
    image: portfolio1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform with seamless payment integration."
  },
  {
    image: portfolio2,
    title: "Corporate Website",
    description: "A professional corporate website showcasing services and client testimonials."
  },
  {
    image: portfolio3,
    title: "Portfolio Site",
    description: "A personal portfolio website to highlight projects and skills."
  },
  {
    image: portfolio4,
    title: "Blog Platform",
    description: "A dynamic blog platform with user authentication and content management."
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Portfolio</h2>
        <p className="mt-4 text-center text-gray-600">
          Take a look at some of our recent projects.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolios.map((portfolio, index) => (
            <PortfolioCard key={index} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
