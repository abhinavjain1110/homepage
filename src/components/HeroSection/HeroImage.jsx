import React from 'react';
import heroImage from '../../assets/images/hero-image.jpg';

/**
 * Hero image component.
 * @returns {JSX.Element}
 */
const HeroImage = () => {
  return (
    <img src={heroImage} alt="Hero" className="rounded-md shadow-md w-full h-auto" />
  );
};

export default HeroImage;
