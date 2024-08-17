import React from 'react';
import { Hero } from '../components/sections/Hero';
import ServiceSection from '../components/sections/ServiceSection';
import PortfolioSection from '../components/sections/PortfolioSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServiceSection />
      <PortfolioSection />
    </>
  );
};

export default HomePage;
