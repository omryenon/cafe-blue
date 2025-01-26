import React, { useContext, useState, useRef, useEffect } from "react";
import "./Menu.scss";
// import menu from "../assets/menu.jpg";
import menu from "../assets/menu.png";
import { DeviceContext } from "../App";



const Menu: React.FC = () => {
  const { isMobile, lan } = useContext(DeviceContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(isMobile ? 0.95 : 1.20);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Open or close the menu on button click
  const handleMenuClick = () => {
    setIsMenuOpen(true);
    setIsLoading(true);
  };

  // Zoom in
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.05, isMobile ? 1.1 : 1.35)); // Limit zoom to 2x
  };

  // Zoom out
  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.05, isMobile ? 0.8 : 1.05)); // Limit zoom to 0.5x
  };

  // Close the menu
  const handleClose = () => {
    setIsMenuOpen(false);
    setZoomLevel(isMobile ? 0.95 : 1.20);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!["IMG", "BUTTON"].includes((e.target as HTMLElement).tagName)) {
      handleClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <button className="menu-button" onClick={handleMenuClick}>
        {lan ? 'תפריט' : 'Menu'}
      </button>

      {isMenuOpen && (
        <div className="menu-overlay" ref={overlayRef}>
          {isLoading && <div className="spinner"></div>}
          <div className="menu-content">
            <img
              src={menu}
              alt="Menu"
              className="menu-image"
              onLoad={() =>  {
                setIsLoading(false);
              }}
              style={{ transform: `scale(${zoomLevel})` }}
            />
            <div className="zoom-controls"
              style={{right: isMobile ? '20px' : '50px', top: isMobile ? '20px' : '50px'}}
            >
            <button className="close-button" onClick={handleClose}>
                X
              </button>
              <button className="zoom-button" onClick={handleZoomOut}>
                -
              </button>
              <button className="zoom-button" onClick={handleZoomIn}>
                +
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
