import React from 'react';

const FeatureCard = ({ feature }) => {
  return (
    <div className="text-center p-6 border rounded-lg hover:shadow-xl transition duration-300">
      <img src={feature.image} alt={feature.title} className="w-50 h-50 mx-auto" />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
      <p className="mt-2 text-gray-600">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
