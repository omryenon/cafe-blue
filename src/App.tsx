import React, { useEffect, useState, createContext, useContext } from 'react';
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

export const DeviceContext = createContext({ isMobile: false });
const detectMobile = () => {
  return window.innerWidth <= 768;
};

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(detectMobile());
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(detectMobile());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <DeviceContext.Provider value={ {isMobile}}>
      <AboutUs />
      <Header />
      <ImageCarousel />
      <MoreInfo />
      <Menu />
      <Phone />
      <Map />
      {/* <Renovation /> */}
      {/* <CoffeeInfo /> */}
      {/* <Footer /> */}
    </DeviceContext.Provider>
  );
};

export default App;
