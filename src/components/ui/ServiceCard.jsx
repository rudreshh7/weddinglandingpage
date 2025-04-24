import React from "react";
import "./ServiceCard.css";
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="servicecard-img">
        <img src={icon} alt="" />
      </div>
      <div className="servicecard-title">
        <p>{title}</p>
      </div>
      <div className="servicecard-desc">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
