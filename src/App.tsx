import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Renovation from "./components/Renovation";
import CoffeeInfo from "./components/CoffeeInfo";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Renovation />
      <ImageCarousel />
      <CoffeeInfo />
      <Footer />
    </div>
  );
};

export default App;
