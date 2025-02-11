import React, { useContext, useState } from 'react';
import './Map.scss';
import img from "../assets/map.jpg";
import { DeviceContext } from "../App";

const Map: React.FC = () => {

  const { isMobile, lan } = useContext(DeviceContext);

  const [mapFailed, setMapFailed] = useState(false);

  const cafeBlueLocation =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4561.0102674258005!2d34.74940191873115!3d32.048513224250925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4d606016213f%3A0x7f295361191deecf!2z16fXpNeUINeR15zXlSBjYWbDqSBibHVl!5e0!3m2!1sen!2sil!4v1736196065118!5m2!1sen!2sil"
    // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13420.609412251905!2d34.74494672720787!3d32.050190560472106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bb1a1bc09b1%3A0x59b1175ff5c08cd7!2sJaffa%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1693565410419!5m2!1sen!2sil";

  return (
    <>
      <div className={isMobile ? "mobile-address" : "address"} tabIndex={0}>{lan ? 'רחוב נמל יפו 3, תל אביב-יפו' : 'Jaffa port 3, Tel Aviv-Yafo'}</div>
      <div className={isMobile ? "mobile-map-container" : "map-container"} style={{height: mapFailed ? 'unset' : isMobile ? '350px' : '500px'}}>
        {mapFailed ? (
          <img
            src={img}
            alt="Cafe Blue Location"
            className="map-fallback"
          />
        ) : (
        <iframe
          src={cafeBlueLocation}
          width={isMobile ? "350px" : "500px"}
          height={isMobile ? "350px" : "500px"}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Cafe Blue location map"
          onError={() => setMapFailed(true)}
        ></iframe>
        )}
      </div>
    </>
  );
};

export default Map;