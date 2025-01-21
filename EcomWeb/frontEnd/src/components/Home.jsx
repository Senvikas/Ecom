import React from 'react';
import HeroSection from './HeroSection.jsx';
import CardGrid from './CardGridShopByType.jsx';
import BrandGrid from './BrandGrid.jsx';
const Home = () => {
  return (
    <div className="text-center">
      {/* <h1 className="text-4xl font-bold">Welcome to the Home Page</h1> */}
      <HeroSection />

      {/* Card grid: Shop by Type */}
      <div className="mt-40"> {/* Add margin between sections */}
        <CardGrid />
      </div>

      <BrandGrid /> {/* Add BrandGrid below the "Shop By Type" section */}
    </div>
  );
};

export default Home;
