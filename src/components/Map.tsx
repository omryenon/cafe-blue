import React from 'react';
import './Map.scss';
import img from "../assets/bottom.jpg";

const Map: React.FC = () => {
  const cafeBlueLocation =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4561.0102674258005!2d34.74940191873115!3d32.048513224250925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4d606016213f%3A0x7f295361191deecf!2z16fXpNeUINeR15zXlSBjYWbDqSBibHVl!5e0!3m2!1sen!2sil!4v1736196065118!5m2!1sen!2sil"
    // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13420.609412251905!2d34.74494672720787!3d32.050190560472106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bb1a1bc09b1%3A0x59b1175ff5c08cd7!2sJaffa%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1693565410419!5m2!1sen!2sil";

  return (
    <div className="map-container">
      <iframe
        src={cafeBlueLocation}
        width="500"
        height="500"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        title="נמל יפו"
      ></iframe>
    </div>
  );
};

export default Map;