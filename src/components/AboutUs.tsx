import React, { useEffect, useContext } from "react";
import gsap from "gsap";
import "./AboutUs.scss";
import fb from "../assets/facebook.svg";
import ins from "../assets/instgram.svg";
import { DeviceContext } from "../App";

const AboutUs: React.FC = () => {

  const { isMobile } = useContext(DeviceContext);
  useEffect(() => {
    gsap.fromTo(
      [".about-us", ".mobile-about-us"],
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: ".about-us" }
    );
  }, []);

  return (
    <section className={isMobile ? "mobile-about-us" : "about-us"}>
    <a href="https://www.instagram.com/cafeblue.jaffa/" target="_blank" rel="noopener noreferrer">
      <img src={ins} alt="Instagram" className={isMobile ? "mobile-svg-style" : "svg-style"} />
    </a>
    <a href="https://www.facebook.com/p/Caf%C3%A9-Blue-61559556535364/?_rdr" target="_blank" rel="noopener noreferrer">
      <img src={fb} alt="Facebook" className={isMobile ? "mobile-svg-style" : "svg-style"} />
    </a>
    </section>
  );
};

export default AboutUs;
