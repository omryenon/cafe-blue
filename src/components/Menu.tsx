import React, { useState, useRef, useEffect } from "react";
import "./Menu.scss";
import menu from "../assets/menu.jpg"


const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0.35);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Open or close the menu on button click
  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
    setImageLoaded(false);
  };

  // Zoom in
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.05, 0.5)); // Limit zoom to 2x
  };

  // Zoom out
  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.05, 0.25)); // Limit zoom to 0.5x
  };

  // Close the menu
  const handleClose = () => {
    setIsMenuOpen(false);
    setZoomLevel(0.35);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!["IMG", "BUTTON"].includes((e.target as HTMLElement).tagName)) {
      handleClose();
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <button className="menu-button" onClick={handleMenuClick}>
        Menu
      </button>

      {isMenuOpen && (
        <div className="menu-overlay" ref={overlayRef}>
          <div className="menu-content">
            <img
              src={menu}
              alt="Menu"
              className="menu-image"
              onLoad={() => setImageLoaded(true)}
              style={{ transform: `scale(${zoomLevel})` }}
            />
            {imageLoaded && (
              <div className="zoom-controls">
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
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
