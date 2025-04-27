import React from "react";
import "../styles/Decor.css";
const Decor = () => {
  const categories = [
    {
      title: "Traditional & Epic",
      image: "/images/decor/traditional.jpg",
    },
    {
      title: "Modern & Minimalist",
      image: "/images/decor/modern.jpg",
    },
    {
      title: "Royal & Luxury",
      image: "/images/decor/corporate.jpg",
    },
    {
      title: "Destination Weddings",
      image: "/images/decor/destination.jpg",
    },
    {
      title: "Rustic & Bohemian",
      image: "/images/decor/hall.jpg",
    },
    {
      title: "Professional",
      image: "/images/decor/corporate.jpg",
    },
  ];
  return (
    <div>
      {/* Banner */}
      <div className="about-us-banner">
        <div className="overlay">
          <h1>Decor</h1>
        </div>
      </div>
      {/* Decor Heading */}
      <div>
        <h3 className="decor-heading">
          “Transform your special moments with breathtaking decor that blends
          elegance, creativity, and your unique vision."
        </h3>
      </div>
      {/* Image and Writeup */}
      <div className="decor-main-writeup">
        <div className="decor-writeup">
          <p>
            At Double S Enterprises, we bring your dream events to life with
            stunning and bespoke decor. Whether it's a grand wedding, an elegant
            reception, or a corporate gala, our expert team crafts mesmerizing
            setups that reflect your style and vision. From enchanting floral
            arrangements and luxurious drapes to breathtaking themed
            installations, we create unforgettable atmospheres tailored to your
            special moments. Let us transform your venue into a
            masterpiece—where elegance meets creativity, and every detail tells
            a story.
          </p>
        </div>
        <div>
          <img src="/images/decor/writeup-decor.png" alt="" />
        </div>
      </div>
      <div className="decor-main-writeup">
        <div>
          <img src="/images/decor/writeup-decor.png" alt="" />
        </div>
        <div className="decor-writeup">
          <p>
            At Double S Enterprises, we bring your dream events to life with
            stunning and bespoke decor. Whether it's a grand wedding, an elegant
            reception, or a corporate gala, our expert team crafts mesmerizing
            setups that reflect your style and vision. From enchanting floral
            arrangements and luxurious drapes to breathtaking themed
            installations, we create unforgettable atmospheres tailored to your
            special moments. Let us transform your venue into a
            masterpiece—where elegance meets creativity, and every detail tells
            a story.
          </p>
        </div>
      </div>

      {/* Decor Themes */}
      <section>
        <h3 className="decor-heading">Decor Themes</h3>
        <div className="themes-container">
          {categories.map((category, index) => (
            <div key={index} className="themes-item">
              <img
                src={category.image}
                alt={category.title}
                className="themes-image"
              />
              <h3 className="themes-title">{category.title}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* Writeup */}

      <div>
        <p className="decor-writeup-end">
          We are true romantics at heart. We know when it comes to the matter of
          the heart, and that to for an occasion like weddings, we would have
          wanted the best for ourselves. And that’s the promise we go out with.
          Deliver the best and make dreams come true.
        </p>
      </div>

      {/* What we provide */}
      <div>
        {" "}
        <h3 className="decorend-heading">What we provide</h3>
        <div className="decor-section">
          {/* Left Image */}
          <div className="decor-image">
            <img src="/images/decor/decor-left.png" alt="Left Decor" />
          </div>

          {/* Center Text */}
          <div className="decor-text">
            <h2>WHAT WE PROVIDE IN DECOR</h2>
            <ul>
              <li>
                <strong>Floral Decor</strong> – Centerpieces, stage backdrops,
                aisle decorations.
              </li>
              <li>
                <strong>Lighting & Effects</strong> – LED lights, fairy lights,
                projection mapping.
              </li>
              <li>
                <strong>Table & Seating Arrangements</strong> – Luxe table
                settings, themed seating.
              </li>
              <li>
                <strong>Entrance & Mandap Decoration</strong> – Themed arches,
                customized mandaps.
              </li>
              <li>
                <strong>Themed Props & Installations</strong> – Photobooths,
                arches, sculptures.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="decor-image">
            <img src="/images/decor/decor-right.png" alt="Right Decor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decor;
