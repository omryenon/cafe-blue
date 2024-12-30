import React, { useEffect, useRef } from "react";
import "./ImageCarousel.scss";
import { gsap } from "gsap";

// Import your images
import image1 from "../assets/open-cafe-blue-1.jpg";
import image2 from "../assets/open-cafe-blue-2.jpg";
import image3 from "../assets/open-cafe-blue-3.jpg";
import image4 from "../assets/open-cafe-blue-4.jpg";
import image5 from "../assets/open-cafe-blue-5.jpg";
import image6 from "../assets/open-cafe-blue-6.jpg";
import image7 from "../assets/open-cafe-blue-7.jpg";
import image8 from "../assets/open-cafe-blue-8.jpg";
import image9 from "../assets/open-cafe-blue-9.jpg";
import image10 from "../assets/open-cafe-blue-10.jpg";
import image11 from "../assets/open-cafe-blue-11.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const ImageCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const singleImageWidth = 200; // Image width in pixels
      const gap = 50; // Gap between images
      const numImages = images.length;
      const totalWidth = (singleImageWidth + gap) * numImages;

      // GSAP infinite scrolling
      gsap.to(container, {
        x: `-=${totalWidth}px`, // Move left by total width
        duration: 60, // Adjust speed as needed
        ease: "linear",
        repeat: -1, // Infinite loop
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`, // Reset x position seamlessly
        },
      });
    }
  }, []);

  return (
    <div className="image-carousel">
      <div className="image-container" ref={containerRef}>
        {images.concat(images).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;