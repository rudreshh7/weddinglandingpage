import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";
import {
  ArrowRight,
  ArrowLeft,
  Circle,
  CircleHalf,
} from "@phosphor-icons/react";

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const slideInterval = useRef(null);
  const resumeTimeout = useRef(null);

  // Auto Slide Function
  useEffect(() => {
    if (isAutoSliding) {
      slideInterval.current = setInterval(() => {
        setImageIndex((prevIndex) =>
          prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // change every 3 seconds
    }

    return () => clearInterval(slideInterval.current);
  }, [isAutoSliding, imageUrls.length]);

  const resetAutoSlide = () => {
    setIsAutoSliding(false);
    clearTimeout(resumeTimeout.current);

    resumeTimeout.current = setTimeout(() => {
      setIsAutoSliding(true);
    }, 5000); // resume after 5 seconds
  };

  function showNextImage() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
    resetAutoSlide();
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
    resetAutoSlide();
  }

  function goToImage(index) {
    setImageIndex(index);
    resetAutoSlide();
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={url}
            src={url}
            alt="slider"
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowLeft size={10} color="#8C916C" weight="fill" />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowRight size={10} color="#8C916C" weight="fill" />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {imageUrls.map((_, index) => (
          <button
            className="img-slider-dot-btn"
            key={index}
            onClick={() => goToImage(index)}
          >
            {index === imageIndex ? (
              <CircleHalf size={10} color="#ffffff" />
            ) : (
              <Circle size={10} color="#ffffff" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
