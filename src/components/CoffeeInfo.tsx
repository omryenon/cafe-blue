import React, { useEffect } from "react";
import gsap from "gsap";
import "./CoffeeInfo.scss";

const CoffeeInfo: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      "coffeeInfo",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: "coffeeInfo" }
    );
  }, []);

  return (
    <section className={"coffeeInfo"}>
      <h2>Coffee for Home</h2>
      <ul>
        <li>House Blend - 200g/400g: 40/75 ILS</li>
        <li>800g/1200g: 135/200 ILS</li>
      </ul>
      <h3>Collaborations</h3>
      <p>We partner with local roasteries like Tzofzik and Bloom's Coffee...</p>
    </section>
  );
};

export default CoffeeInfo;
