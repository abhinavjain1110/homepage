import React from 'react';
import FeatureCard from './FeatureCard';
import feature1 from '../../assets/images/feature1.png'; 
import feature2 from '../../assets/images/feature2.png';
import feature3 from '../../assets/images/feature3.png';

const features = [
  {
    image: feature1,
    title: "Responsive Design",
    description: "Ensure your website looks great on all devices, from desktops to smartphones."
  },
  {
    image: feature2,
    title: "SEO Optimized",
    description: "Improve your website's visibility on search engines with our SEO best practices."
  },
  {
    image: feature3,
    title: "Custom Solutions",
    description: "Tailored web development solutions to meet your unique business requirements."
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose Us</h2>
        <p className="mt-4 text-center text-gray-600">
          Discover the features that set us apart in the web development industry.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
