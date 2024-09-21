import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <div className="flex items-center">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
        </div>
      </div>
      <p className="mt-4 text-gray-600">"{testimonial.feedback}"</p>
    </div>
  );
};

export default TestimonialCard;
