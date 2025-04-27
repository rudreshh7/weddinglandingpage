// ImageGallery.jsx
import React, { useState } from "react";
import "./ImageGallery.css";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const images = [
  ["/images/wedding1.png", "/images/wedding2.png"],
  ["/images/wedding3.png", "/images/wedding4.png"],
  ["/images/wedding5.png", "/images/wedding6.png"],
];

const ImageGallery = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div key={index} className="image-row fade-animation">
        {images[index].map((imgSrc, i) => (
          <img
            key={i}
            src={imgSrc}
            alt={`Wedding ${i}`}
            className="gallery-img"
          />
        ))}
      </div>
      <div className="nav-buttons">
        <button onClick={handlePrev}>
          <ArrowLeft size={10} color="#8C916C" weight="fill" />
        </button>
        <button onClick={handleNext}>
          <ArrowRight size={10} color="#8C916C" weight="fill" />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
