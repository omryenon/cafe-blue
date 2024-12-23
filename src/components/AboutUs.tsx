import React, { useEffect } from "react";
import gsap from "gsap";
import "./AboutUs.scss";

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
      <h2>About Us</h2>
      <p>Yonatan Gabay and Matan Rachman</p>
    </section>
  );
};

export default AboutUs;
