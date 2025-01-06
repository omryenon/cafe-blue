import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Renovation from "./components/Renovation";
import CoffeeInfo from "./components/CoffeeInfo";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import MoreInfo from "./components/MoreInfo";
import Menu from "./components/Menu";
import Phone from "./components/Phone";
import Map from "./components/Map";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div >
      <Header />
      <ImageCarousel />
      <AboutUs />
      <MoreInfo />
      <Menu />
      <Phone />
      <Map />
      {/* <Renovation /> */}
      {/* <CoffeeInfo /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
