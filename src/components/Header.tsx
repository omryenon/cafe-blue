import React, { useContext, useEffect } from "react";
import gsap from "gsap";
import "./Header.scss";
import logo from "../assets/logo-elipse.png";
import { DeviceContext } from "../App";

const Header: React.FC = () => {

  const { isMobile } = useContext(DeviceContext);
  useEffect(() => {
    gsap.fromTo(
      [".header-title", ".mobile-header-title"],
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <header className="header">
      <img src={logo}></img>
      {!isMobile && (
        <div className="header-title">
          <p>Nestled within the vibrant Jaffa Port, </p> 
          <p>Café Blue is a cozy spot for locals and visitors. With specialty</p>
          <p>and delicious pastries, every detail is crafted to perfection.</p>
          <p>Oh... and the coffee? Simply exceptional!</p>
        </div>
      )}
      {isMobile && (
        <div className="mobile-header-title">
          <p>Nestled within the vibrant Jaffa Port, </p> 
          <p>Café Blue is a cozy spot for locals and visitors.</p>
          <p>With specialty and delicious pastries, every detail is</p>
          <p>crafted to perfection.Oh... and the coffee?</p>
          <p>Simply exceptional!</p>
        </div>
      )}
    </header>
  );
};

export default Header;
