import React, { useEffect } from "react";
import gsap from "gsap";
import "./AboutUs.scss";
import fb from "../assets/facebook.svg";
import ins from "../assets/instgram.svg";

const AboutUs: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-us",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: ".about-us" }
    );
  }, []);

  return (
    <section className="about-us">
    <a href="https://www.instagram.com/cafeblue.jaffa/" target="_blank" rel="noopener noreferrer">
      <img src={ins} alt="Instagram" />
    </a>
    <a href="https://www.facebook.com/p/Caf%C3%A9-Blue-61559556535364/?_rdr" target="_blank" rel="noopener noreferrer">
      <img src={fb} alt="Facebook" />
    </a>
    </section>
  );
};

export default AboutUs;
