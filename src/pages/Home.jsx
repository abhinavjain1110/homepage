import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;
