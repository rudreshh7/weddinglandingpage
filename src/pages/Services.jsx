import React from "react";
import s1icon from "/images/s1.png";
import s2icon from "/images/s2.png";
import s3icon from "/images/s3.png";
import s4icon from "/images/s4.png";
import s5icon from "/images/s5.png";
import s6icon from "/images/s6.png";
import s7icon from "/images/s7icon.png";
import s8icon from "/images/s8icon.png";
import s9icon from "/images/s9icon.png";
import ServiceCard from "../components/ui/ServiceCard";
import Footer from "../components/Footer";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      icon: s1icon,
      title: "Wedding Planning",
      description:
        "We specialize in weaving your love story into a breathtaking visual experience — from themed backdrops to tailor-made decor settings.",
    },
    {
      icon: s2icon,
      title: "Custom Wedding Decor",

      description:
        "From the very first invitation to the last dance, our team meticulously handles every detail so you can truly live your dream day stress-free.",
    },
    {
      icon: s3icon,
      title: "Event Styling & Design",
      description:
        "From elegant floral arrangements to breathtaking tablescapes, our creative stylists transform your vision into a captivating setting that reflects your personal style and story.",
    },
    {
      icon: s4icon,
      title: "Vendor Coordination",
      description:
        "We seamlessly manage communications and logistics with trusted vendors — ensuring that every caterer, photographer, and entertainer aligns perfectly with your event timeline and expectations.",
    },
    {
      icon: s5icon,
      title: "On-Site Event Management",
      description:
        "Our expert coordinators are on the ground from start to finish, ensuring every detail runs smoothly — so you can relax and fully immerse yourself in every special moment.",
    },
    {
      icon: s6icon,
      title: "Destination Wedding Services",
      description:
        "Whether it’s a beachside vow exchange or a majestic palace celebration, we handle travel, logistics, and local arrangements to curate unforgettable weddings anywhere in the world.",
    },

    {
      icon: s7icon,
      title: "Collateral Design",
      description:
        "Crafting captivating visuals and branded assets that tell your story with style and sophistication — because first impressions matter.",
    },
    {
      icon: s8icon,
      title: "Food and Beverages",
      description:
        "From gourmet delights to signature drinks, we curate culinary experiences that are as unforgettable as the occasion itself.",
    },
    {
      icon: s9icon,
      title: "Styling and Makeup",
      description:
        "Transforming looks into statements — our expert stylists and makeup artists bring out the best version of you, flawless and radiant.",
    },
  ];

  return (
    <div>
      <div className="ourservices-banner">
        <div className="overlay">
          <h1>Our Services</h1>
        </div>
      </div>
      {/* Our Services */}

      <div className="home-services">
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
