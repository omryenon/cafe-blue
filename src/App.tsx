import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Renovation from "./components/Renovation";
import CoffeeInfo from "./components/CoffeeInfo";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Renovation />
      <CoffeeInfo />
      <Footer />
    </div>
  );
};

export default App;
