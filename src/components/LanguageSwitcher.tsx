import React, {useEffect, useContext} from "react";
import gsap from "gsap";
import israelFlag from "../assets/ISRFlag.svg";
import usFlag from "../assets/USAFlag.svg";
import "./LanguageSwitcher.scss";
import { DeviceContext } from "../App";

interface LanguageSwitcherProps {
  setLan: (lan: boolean) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ setLan }) => {

  const { isMobile, lan } = useContext(DeviceContext);
    
  const toggleLanguage = () => {
    setLan(!lan);
  };

  return (
    <button className={isMobile ? "mobile-language-switcher" : "language-switcher"} onClick={toggleLanguage}>
      <img src={lan ? israelFlag : usFlag} alt="Language" />
    </button>
  );
};

export default LanguageSwitcher;
