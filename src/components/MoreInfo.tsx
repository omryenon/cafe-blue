import React, {useContext} from 'react';
import './MoreInfo.scss'; // Create a CSS file for custom styling.
import { DeviceContext } from "../App";

const MoreInfo: React.FC = () => {
  const { isMobile } = useContext(DeviceContext);
  return (
    <div className={isMobile ? "mobile-more-info" : "more-info"}>
      <div className="hours">
        {!isMobile && (<h1>Opening Hours</h1>) }
        {isMobile && (<h2>Opening Hours</h2>) }
        <div>Sunday - Wednesday: 08:00 - 18:00</div>
        <div>Thursday: 08:00 - 22:00</div>
        <div>Friday: 08:00 - 16:00</div>
        <div>Saturday: 08:00 - 18:00</div>
      </div>
    </div>
  );
};

export default MoreInfo;
