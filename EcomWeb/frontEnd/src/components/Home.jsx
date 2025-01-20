import React from 'react';
import HeroSection from './HeroSection.jsx';
import CardGrid from './CardGridShopByType.jsx';
const Home = () => {
  return (
    <div className="text-center">
      {/* <h1 className="text-4xl font-bold">Welcome to the Home Page</h1> */}
      <HeroSection />

      {/* Card grid: Shop by Type */}
      <div className="mt-40"> {/* Add margin between sections */}
        <CardGrid />
      </div>
    </div>
  );
};

export default Home;
