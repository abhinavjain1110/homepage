import React from 'react';
import TestimonialCard from './TestimonialCard';
import testimonial1 from '../../assets/images/testimonial1.png'; 
//import testimonial2 from '../../assets/images/testimonial2.png';
//import testimonial3 from '../../assets/images/testimonial3.jpg';

const testimonials = [
  {
    name: "Emily Clark",
    feedback: "PrintifyClone delivered a fantastic website that perfectly aligns with our brand. Highly recommended!",
    avatar: testimonial1
  },
  {
    name: "Michael Brown",
    feedback: "Their attention to detail and commitment to quality is unparalleled. Our website traffic has increased significantly.",
    avatar: testimonial1
  },
  {
    name: "Sophia Martinez",
    feedback: "The team was professional, responsive, and delivered a website that exceeded our expectations.",
    avatar: testimonial1
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">What Our Clients Say</h2>
        <p className="mt-4 text-center text-gray-600">
          Read testimonials from our satisfied clients.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
