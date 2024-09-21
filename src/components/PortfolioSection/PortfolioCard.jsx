// src/components/PortfolioSection/PortfolioCard.jsx
import React from 'react';

const PortfolioCard = ({ portfolio }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <img src={portfolio.image} alt={portfolio.title} className=" mt-6 w-60 h-40 mx-auto " />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{portfolio.title}</h3>
        <p className="mt-2 text-gray-600">{portfolio.description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
