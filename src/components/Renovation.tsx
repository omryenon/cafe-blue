import React, { useEffect } from "react";
import gsap from "gsap";
import "./Renovation.scss";

const Renovation: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".renovation",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, scrollTrigger: ".renovation" }
    );
  }, []);

  return (
    <>
      <section className="renovation">
        <h2>Renovation</h2>
        <p>We received an empty container and thought about the optimal way to utilize the space and create </p>
        <p>movement and the atmosphere of a café that is both part of a complex and has a homely vibe.</p>
      </section>
      <section className="renovation">
      <h2>The Container House</h2>
      <p>The Container House is built from 89 containers that had completed their lifecycle and were on their way to being scrapped. </p>
      <p>They were repurposed in a unique project by the Tel Aviv-Yafo Municipality and the Etarim company.</p>
      <p>The entire place is powered by renewable energy, with electricity generated using solar panels located on the hangar's roof.</p>
      <p>Additionally, an ecological float system connected to the harbor waters generates electricity using wave power.</p>
    </section>
  </>
  );
};

export default Renovation;
