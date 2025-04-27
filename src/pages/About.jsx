import React from "react";
import "../styles/About.css";
import decorImage from "/images/wedding2.png"; // Replace with actual path
import creative from "../assets/icons/creative.svg";
import attire from "../assets/icons/attire.svg";
import food from "../assets/icons/food.svg";
import achievementsImage from "/images/wedding1.png";
import coverone from "/images/aboutus/coverone.png";
import covertwo from "/images/aboutus/cover2.png";
import Footer from "../components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Shezerine Udwadia",
      role: "Founder & Lead Wedding Planner",
      image: "/images/aboutus/person1.png", // replace with correct path
    },
    {
      name: "Shanaya Udwadia",
      role: "Vendor Logistics Coordinator",
      image: "/images/aboutus/person2.png", // replace with correct path
    },
  ];
  return (
    <div>
      {/* About Us Banner */}
      <div className="about-us-banner">
        <div className="overlay">
          <h1>ABOUT US</h1>
        </div>
      </div>
      {/* Our Story */}
      <div className="our-story-section">
        <div className="our-story-text">
          <h2>Our Story</h2>
          <p>
            Embark on a journey with the dynamic mother-daughter duo, Shehzarìn
            and Shanaya, whose collective expertise weaves an enchanting
            tapestry of hospitality and design. With an illustrious 23-year
            tenure in the hotel industry, Shehzarìn’s foray into the world of
            weddings was a natural evolution, marked by her leadership in a
            prominent wedding planning company.
          </p>
          <p>
            A maestro of perfectionism, Shehzarìn’s innate ability to
            orchestrate flawless celebrations prompted her to establish her own
            wedding planning venture. Her commitment to excellence and precision
            shines through every event she touches.
          </p>
        </div>
        <div className="our-story-image">
          <img src="/images/wedding1.png" alt="Shehzarìn and Shanaya" />
        </div>
      </div>
      {/* Team Section */}
      <section className="team-section">
        <div
          className="team-image-container"
          style={{ position: "relative", zIndex: 5 }}
        >
          <img src={decorImage} alt="wedding" className="team-image" />
        </div>

        <div className="team-text-container">
          <p>
            Complementing this seasoned matriarch is Shanaya the creative
            luminary. A true aficionado of décor, she breathes life into spaces
            with an unrivaled passion. A creative wonder child, Shanaya’s love
            for design was nurtured at a young age, endowing her with a wealth
            of experience that manifests in her meticulous attention to detail.
          </p>
        </div>
        {/* Achievments Secton */}
        <div className="achievements-section">
          <div className="stats">
            <div className="stat">
              <h2>
                250<span>+</span>
              </h2>
              <p>Wedding Couples</p>
            </div>
            <div className="stat">
              <h2>
                15<span>+</span>
              </h2>
              <p>Expert Members</p>
            </div>
            <div className="stat">
              <h2>
                90<span>%</span>
              </h2>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/tyBJioe8gOs?si=kmdXe3LKHKHbhdKz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Why we different Section */}
      <section className="different-from-others">
        <h1 className="different-heading">Why are we different from others</h1>
        <div className="different-section">
          {/* 1 */}
          <div className="service-card">
            <div className="servicecard-img">
              <img src={creative} alt="" />
            </div>
            <div className="servicecard-title">
              <p>CREATIVE CONCEPT</p>
            </div>
            <div className="servicecard-desc">
              <p>
                Our wedding organizers bring your dream wedding concept to life
                from thematic decorations to innovative layouts.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="service-card">
            <div className="servicecard-img">
              <img src={food} alt="" />
            </div>
            <div className="servicecard-title">
              <p>PERFECT ATTIRE</p>
            </div>
            <div className="servicecard-desc">
              <p>
                Our wedding organizers bring your dream wedding concept to life
                from thematic decorations to innovative layouts.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="service-card">
            <div className="servicecard-img">
              <img src={attire} alt="" />
            </div>
            <div className="servicecard-title">
              <p>DELICIOUS FOODS</p>
            </div>
            <div className="servicecard-desc">
              <p>
                Our wedding organizers bring your dream wedding concept to life
                from thematic decorations to innovative layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement 2 section */}
      <section className="achievement-section">
        <div className="achievements-container">
          <div className="achievements-image">
            <img src={achievementsImage} alt="Wedding Achievement" />
          </div>
          <div className="achievements-content">
            <h2>Our Achievements</h2>
            <table>
              <tbody>
                <tr>
                  <td>2023</td>
                  <td>Excellence in Event Planning</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>Customer Satisfaction Award</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>Innovating Wedding Design Award</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Writeup One */}
      <div>
        <p className="about-writeup-one">
          At Double S Enterprises , we don’t just design weddings we curate
          unforgettable experiences. Every element, from exquisite mandaps and
          lush floral arrangements to bespoke wedding favors, is thoughtfully
          crafted to reflect your unique story.
        </p>
      </div>
      {/* Magazine */}
      <div className="magazine-cover">
        <img src={coverone} alt="" />
        <img src={covertwo} alt="" />
      </div>
      {/* Writeup Two */}
      <div>
        <p className="about-writeup-one">
          Embark on a journey with the dynamic mother-daughter duo, Shehzarin
          and Shanaya, whose collective expertise weaves an enchanting tapestry
          of hospitality and design. With an illustrious 23-year tenure in the
          hotel industry, Shehzarin's foray into the world of weddings was a
          natural evolution, marked by her leadership in a prominent wedding
          planning company. A maestro of perfectionism, Shehzarin's innate
          ability to orchestrate flawless celebrations prompted her to establish
          her own wedding planning venture. Her commitment to excellence and
          precision shines through every event she touches.
        </p>
      </div>
      {/* Our Founders */}
      <section className="our-founders">
        <h6 className="founder-heading">Our Founders</h6>

        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-image"
                />
              </div>
              <div className="member-info">
                <p className="role">{member.role}</p>
                <p className="name">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ending */}
      <section>
        <h6 className="ending-heading">
          Your dream. Our expertise. A celebration like no other.
        </h6>
        <div className="ending">
          <div>
            <img src="/images/aboutus/ending1.png" alt="" />
          </div>
          <div className="ending-small">
            <img src="/images/aboutus/ending2.png" alt="" />
            <img src="/images/aboutus/ending3.png" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
