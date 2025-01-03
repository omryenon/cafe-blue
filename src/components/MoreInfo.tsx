import React from 'react';
import './MoreInfo.scss'; // Create a CSS file for custom styling.

const MoreInfo: React.FC = () => {
  return (
    <div className="more-info">
      <div className="hours">
        <h1>Opening Hours</h1>
        <div>Sunday - Wednesday: 08:00 - 18:00</div>
        <div>Thursday: 08:00 - 22:00</div>
        <div>Friday: 08:00 - 16:00</div>
        <div>Saturday: 08:00 - 18:00</div>
      </div>
    </div>
  );
};

export default MoreInfo;
