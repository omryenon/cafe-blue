import React, { useContext, useEffect, useRef } from "react";
import "./Phone.scss";
import { gsap } from "gsap";
import { DeviceContext } from "../App";

const Phone: React.FC = () => {

  const { isMobile, lan } = useContext(DeviceContext);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phoneRef.current) {
      gsap.fromTo(
        phoneRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div className="phone-container" ref={phoneRef} style={{padding: isMobile ? '12px' : '20px'}}>
        <a href="tel:+972545742762" className="phone-number" style={{fontSize: isMobile ? '16px' : '24px'}} aria-label={lan ? "חייג אלינו" : "call us"}>
          📞 +972 54-574-2762
        </a>
      </div>
    </div>
  );
};

export default Phone;
