import React, {useContext} from 'react';
import './MoreInfo.scss'; // Create a CSS file for custom styling.
import { DeviceContext } from "../App";

const MoreInfo: React.FC = () => {
  const { isMobile, lan } = useContext(DeviceContext);
  return (
    <div className={isMobile ? lan ? "heb-mobile-more-info" : "mobile-more-info" : "more-info"}>
      <div className="hours">
        {!isMobile && (lan ? <h1>שעות פתיחה</h1> : <h1>Opening Hours</h1>) }
        {isMobile && (lan ? <h2>שעות פתיחה</h2> : <h2>Opening Hours</h2>) }
        {!lan && (
          <>
            <div>Sunday - Wednesday: 08:00 - 18:00</div>
            <div>Thursday: 08:00 - 22:00</div>
            <div>Friday: 08:00 - 16:00</div>
            <div>Saturday: 08:00 - 18:00</div>
          </>
        )}
        {lan && (
          <>
            <div>08:00 - 18:00 : ראשון - רביעי</div>
            <div>08:00 - 22:00 : חמישי</div>
            <div>08:00 - 16:00 : שישי</div>
            <div>08:00 - 18:00 : שבת</div>
          </>
        )}
      </div>
    </div>
  );
};

export default MoreInfo;
