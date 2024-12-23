import React, { useEffect } from "react";
import gsap from "gsap";
import "./Header.scss"

const Header: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".header-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <header className="header">
      <h1 className="header-title">Welcome to Cafe Blue</h1>
    </header>
  );
};

export default Header;
