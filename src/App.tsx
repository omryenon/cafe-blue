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
import LanguageSwitcher from './components/LanguageSwitcher';

import "./App.scss";

export const DeviceContext = createContext({
  isMobile: false,
  lan: false 
});
const detectMobile = () => {
  return window.innerWidth <= 768;
};

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(detectMobile());
  const [lan, setLan] = useState<boolean>(false);
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
    <DeviceContext.Provider value={ {isMobile, lan}}>
      <div className='app'>
        <LanguageSwitcher setLan= {setLan}/>
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
      </div>
    </DeviceContext.Provider>
  );
};

export default App;
