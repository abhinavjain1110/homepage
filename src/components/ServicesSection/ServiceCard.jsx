import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="text-center p-6 border rounded-lg hover:shadow-xl transition duration-300">
      <img src={service.image} alt={service.title} className="w-50 h-50 mx-auto" />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>
      <p className="mt-2 text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
