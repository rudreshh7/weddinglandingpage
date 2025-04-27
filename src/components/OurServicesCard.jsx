import React from "react";
import "./OurServicesCard.css";
import venueImage from "/images/services.png"; // adjust path as needed

const OurServicesCard = () => {
  return (
    <div className="venue-section">
      <div className="venue-image-container">
        <img src={venueImage} alt="Wedding Venue" className="venue-image" />
      </div>
      <div className="venue-text-box">
        <h2>VENUE SELECTION</h2>
        <p>
          We believe that the right venue sets the tone for your entire wedding.
          Should you envision a grand palace, a serene beach, a lush garden, or
          a chic banquet hall, our Venue Selection Service ensures that your
          special day takes place in the perfect setting that reflects your love
          story.
        </p>
        <a href="#">Read More...</a>
      </div>
    </div>
  );
};

export default OurServicesCard;
