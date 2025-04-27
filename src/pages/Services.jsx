import React from "react";
import "../styles/Services.css";
import OurServicesCard from "../components/OurServicesCard";
import Footer from "../components/Footer";
const Services = () => {
  return (
    <div>
      <div className="ourservices-banner">
        <div className="overlay">
          <h1>Our Services</h1>
        </div>
      </div>
      {/* Our Services Card */}
      <div className="services-list">
        <OurServicesCard />
        <OurServicesCard />
        <OurServicesCard />
        <OurServicesCard />
        <OurServicesCard />
        <OurServicesCard />
        <OurServicesCard />
        <OurServicesCard />
        <OurServicesCard />
        <OurServicesCard />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
