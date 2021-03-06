import React from "react";
import Footer from "../../sharedComponents/Footer/Footer";
import Navigation from "../../sharedComponents/Navigation/Navigation";
import BackToTop from "../../utilityComponents/BackToTop/BackToTop";
import About from "./About/About";
import HomeHeader from "./HomeHeader/HomeHeader";
const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeHeader />
      <About />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;
