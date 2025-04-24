import React from "react";
import "./Hero.css";
import ImageSlider from "./ui/ImageSlider";
// Importing Images here
import herobg1 from "../assets/images/herobg1.jpg";
import herobg2 from "../assets/images/herobg2.jpg";
import herobg3 from "../assets/images/herobg3.jpg";
import herobg4 from "../assets/images/herobg4.jpg";
import herobg5 from "../assets/images/herobg5.jpg";

const IMAGES = [herobg1, herobg2, herobg3, herobg4, herobg5];
const Hero = () => {
  return (
    <div className="hero-container">
      {/* Empty Area */}
      <div
        style={{
          width: "100%",
          maxHeight: "100vh",
          aspectRatio: "16/9",
          // margin: "0 auto",
        }}
      >
        <ImageSlider imageUrls={IMAGES} />
      </div>
      {/* Heading Area */}
      {/* Inki postion absolute kar dena and then top bottom control */}
      <div className="title">
        Turning Your Dream Wedding Into Ultimate Reality
      </div>
      {/* Third Area */}
      <div className="hero-text-area">
        <div>
          <p>
            At Double S Enterprises expert wedding planning and decor for
            unforgettable celebrations
          </p>
          <button>Book a Free Consultation</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
