import React, { useState } from "react";
import Hero from "../components/Hero";
import HomeArt from "../components/ui/HomeArt";
import "../styles/Home.css";
import ServiceCard from "../components/ui/ServiceCard";
import creative from "../assets/icons/creative.svg";
import planning from "../assets/icons/attire.svg";
import decor from "../assets/icons/decor.svg";
import concept from "../assets/icons/concept.svg";
import food from "../assets/icons/food.svg";
import video from "../assets/icons/video.svg";

import SelectedStory from "../components/ui/SelectedStory";
import ImageGallery from "../components/ui/ImageGallery";
import Testinomials from "../components/ui/Testinomials";
import FAQSection from "../components/ui/FAQSection";
import Footer from "../components/Footer";

const Home = () => {
  const services = [
    {
      icon: creative,
      title: "CREATIVE CONCEPT",
      description:
        "Our wedding organizers bring your dream wedding concept to life from thematic decorations to innovative layouts.",
    },
    {
      icon: planning,
      title: "EVENT PLANNING",
      description:
        "We handle logistics and vendor coordination to ensure your event runs smoothly from start to finish.",
    },
    {
      icon: decor,
      title: "FLORAL & DECOR",
      description:
        "From lush floral arrangements to elegant decor, we design spaces that reflect your unique style.",
    },
    {
      icon: concept,
      title: "CREATIVE CONCEPT",
      description:
        "Our wedding organizers bring your dream wedding concept to life from thematic decorations to innovative layouts.",
    },
    {
      icon: food,
      title: "EVENT PLANNING",
      description:
        "We handle logistics and vendor coordination to ensure your event runs smoothly from start to finish.",
    },
    {
      icon: video,
      title: "FLORAL & DECOR",
      description:
        "From lush floral arrangements to elegant decor, we design spaces that reflect your unique style.",
    },
  ];

  return (
    <div>
      <Hero />
      {/* Writeup */}
      <div class="founder-note">
        <div class="vertical-line"></div>

        <p class="founder-heading">
          WITH YEARS OF EXPERTISE IN WEDDING PLANNING, WE DEDICATED TO CREATING
          BEAUTIFULLY ORCHESTRATED EXPERIENCES.
        </p>
        <p class="founder-description">
          At Double S Enterprises, we don’t just design weddings — we curate
          unforgettable experiences. Every element, from exquisite mandaps and
          lush floral arrangements to bespoke wedding favors, is thoughtfully
          crafted to reflect your unique story.
        </p>
      </div>
      <HomeArt />
      {/* Our Services */}

      <div className="home-services">
        <h6 className="services-heading">Our Services</h6>

        {/* <ServiceCard /> */}
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
      {/* Selected Stories */}
      <div className="selected-stories">
        <h6 className="stories-heading">Selected Stories</h6>
        <SelectedStory />
      </div>

      {/* Writeup */}
      <div>
        <p className="end-writeup">
          We are true romantics at heart. We know when it comes to the matter of
          the heart, and that to for an occasion like weddings, we would have
          wanted the best for ourselves. And that’s the promise we go out with.
          Deliver the best and make dreams come true.
        </p>
      </div>

      {/* Image Carousel   */}
      <div>
        <h6 className="imagecarousel-heading">Recent Memories</h6>
        <ImageGallery />
      </div>

      {/* Writeup */}
      <div>
        <p className="end-writeup">
          We are true romantics at heart. We know when it comes to the matter of
          the heart, and that to for an occasion like weddings, we would have
          wanted the best for ourselves. And that’s the promise we go out with.
          Deliver the best and make dreams come true.
        </p>
      </div>

      {/* Testinomials */}
      <div>
        <h6 className="imagecarousel-heading">Hear from our clients</h6>

        <Testinomials />
      </div>

      {/* FAQ Section */}
      <div>
        <h6 className="imagecarousel-heading">Frequently asked questions</h6>

        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
