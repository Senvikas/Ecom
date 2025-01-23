import React from 'react';
import HeroSection from './HeroSection.jsx';
import CardGrid from './CardGridShopByType.jsx';
import BrandGrid from './BrandGrid.jsx';
import BestSellers from './BestSellers.jsx';
import GoToTop from './GoToTop.jsx';
import CustomerReviews from './CustomerReviews.jsx';
import NewArrivals from './NewArrivals.jsx'
import MembershipBenefits from './MemberShipBenefits.jsx';
import TopPicksForYou from './TopPicksForYou.jsx';
import XFactorSection from './XFactorSection.jsx';
import Footer from './Footer.jsx';
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

      <BestSellers /> {/* Add BestSellers below the "Top Brands" section */}

      {/* Customer reviews + HardTofindPerfumes + CelebPerfumes */}
      <CustomerReviews />

      <NewArrivals /> {/* Add NewArrivals below the "Carousal" section */} 

      <TopPicksForYou /> {/* Add NewArrivals below the "New Arrivals" section */} 

      <MembershipBenefits />

      <XFactorSection />

      <Footer />

      {/* GoToTop icon */}
      <GoToTop />
    </div>
  );
};

export default Home;
