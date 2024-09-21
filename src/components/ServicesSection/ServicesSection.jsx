import React from 'react';
import ServiceCard from './ServiceCard';
import service1 from '../../assets/images/service1.jpg'; 
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.jpg';
import service4 from '../../assets/images/service4.jpg';

const services = [
  {
    image: service1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using modern technologies."
  },
  {
    image: service2,
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications to power your website."
  },
  {
    image: service3,
    title: "E-commerce Solutions",
    description: "Developing comprehensive e-commerce platforms to boost your online sales."
  },
  {
    image: service4,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences for your digital products."
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
        <p className="mt-4 text-center text-gray-600">
          Comprehensive web development services to bring your vision to life.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
