import React, { useContext, useEffect } from "react";
import gsap from "gsap";
import "./Header.scss";
import logo from "../assets/logo-elipse.png";
import { DeviceContext } from "../App";

const Header: React.FC = () => {

  const { isMobile, lan } = useContext(DeviceContext);
  useEffect(() => {
    gsap.fromTo(
      [".header-title", ".mobile-header-title"],
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <header className="header" style={{paddingBottom: isMobile ? '15px' : '30px'}}>
      <img src={logo}></img>
      {!isMobile && (
        <div className="header-title">
          {!lan && (
            <>
              <p>Nestled within the vibrant Jaffa Port, </p> 
              <p>Café Blue is a cozy spot for locals and visitors. With specialty</p>
              <p>and delicious pastries, every detail is crafted to perfection.</p>
              <p>Oh... and the coffee? Simply exceptional!</p>
            </>
          )}
          {lan && (
            <>
              <p>,ליד הסמטאות הציוריות של נמל יפו</p> 
              <p>.קפה בלו מביא איתו אווירה מיוחדת לתושבי יפו ולמבקרים</p>
              <p>.עם קפה מיוחד ומאפים טעימים במיוחד, כל פרט קטן חשוב לנו</p>
              <p>!אם אתם מחפשים מקום להירגע על קפה מצוין - אתם במקום הנכון</p>
            </>
          )}
        </div>
      )}
      {isMobile && (
        <div className="mobile-header-title">
          {!lan && (
            <>
              <p>Nestled within the vibrant Jaffa Port, </p> 
              <p>Café Blue is a cozy spot for locals and visitors.</p>
              <p>With specialty and delicious pastries, every detail</p>
              <p>is crafted to perfection. Oh... and the coffee?</p>
              <p>Simply exceptional!</p>
            </>
          )}
          {lan && (
            <>
              <p>,ליד הסמטאות הציוריות של נמל יפו</p> 
              <p>קפה בלו מביא איתו אווירה מיוחדת לתושבי יפו </p>
              <p>,ולמבקרים. עם קפה מיוחד ומאפים טעימים במיוחד</p>
              <p>כל פרט קטן חשוב לנו. אם אתם מחפשים מקום להירגע</p>
              <p>!על קפה מצוין - אתם במקום הנכון</p>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
