import React from "react";
import "../styles/NikitaAndPhilippe.css";

import a1 from "/images/amisha/a1.jpg";
import a3 from "/images/amisha/a3.jpg";
import a4 from "/images/amisha/a4.jpg";
import a5 from "/images/amisha/a5.jpg";
import a6 from "/images/amisha/a6.jpg";
import a7 from "/images/amisha/a7.jpg";
import a8 from "/images/amisha/a8.jpg";
// import a9 from "/images/amisha/a9.jpg";
import a10 from "/images/amisha/a10.jpg";
import a11 from "/images/amisha/a11.jpg";
import a12 from "/images/amisha/a12.jpg";
import a13 from "/images/amisha/a13.jpg";
import a14 from "/images/amisha/a14.jpg";
import a15 from "/images/amisha/a15.jpg";
import a16 from "/images/amisha/a16.jpg";
import a17 from "/images/amisha/a17.jpg";
import a18 from "/images/amisha/a18.jpg";
import a19 from "/images/amisha/a19.jpg";
import a20 from "/images/amisha/a20.jpg";

const NikitaAndPhilippe = () => {
  return (
    <div>
      <div className="story-heading">
        <h6>A THOUSAND MILES TO YOU</h6>
        <p>ANISHA & WILL</p>
        <p>March 2023 | Udaipur, India</p>
      </div>

      {/* Front Image */}
      <div className="story-front-image">
        <img src={a1} alt="" />
      </div>

      {/* Story */}
      {/* Story */}
      <div className="story-blog">
        <p>
          Amisha and Will's love story is a testament to the strength of their
          connection, enduring the challenges of a long-distance relationship
          and flourishing through shared experiences across the globe. The
          foundation laid during their university days in a math class grew into
          a vibrant and adventurous romance between a shy Indian girl and a
          warm-hearted Western boy who wasted no time in asking her out on a
          first date.
        </p>

        <p>
          Despite the physical distance that separated them, Amisha and Will
          maintained their bond through late-night calls and surprise visits,
          proving that love knows no boundaries. Their shared passion for
          exploration fueled their travels, creating a tapestry of memories
          woven into the streets of New York, the landscapes of Japan, and many
          other destinations.
        </p>

        <p>
          The culmination of their journey was a vibrant Indian ceremony,
          surrounded by the love and warmth of family and friends. This
          celebration marked the beginning of a new chapter in their lives,
          symbolized by their vows and the fusion of their individual stories
          into a shared narrative.
        </p>

        <p>
          As they tied the knot, Amisha and Will embarked on a new adventure
          together, ready to face the future side by side. Their story is a
          reminder that love, commitment, and a shared sense of adventure can
          overcome any distance, and that the journey is just as important as
          the destination.
        </p>

        <p>
          Here's to Amisha and Will, and the many more chapters of their love
          story waiting to unfold.
        </p>
      </div>

      {/* Cute Writeup */}
      <div className="cute-writeup">
        <h6>
          “C’est cela l’amour, tout donner, tout sacrifier sans espoir de
          retour”
        </h6>
        <p>
          — That is love, to give away everything, to sacrifice everything,
          without waiting for anything in return
        </p>
      </div>

      {/* Large Gallery Container */}
      <div className="large-gallery-container">
        <img src={a3} alt="" />
        <img src={a4} alt="" />
        <img src={a5} alt="" />
        <img src={a6} alt="" />
        <img src={a7} alt="" />
      </div>

      {/* Small Gallery Container * */}
      <div className="small-gallery-container">
        <img src={a8} alt="" />
        <img src={a10} alt="" />
      </div>

      <div className="large-gallery-container">
        <img src={a11} alt="" />
        <img src={a12} alt="" />
        <img src={a13} alt="" />
      </div>

      <div className="quad-gallery-container">
        <img src={a14} alt="" />
        <img src={a15} alt="" />
        <img src={a16} alt="" />
        <img src={a17} alt="" />
      </div>

      <div className="large-gallery-container">
        <img src={a18} alt="" />
        <img src={a19} alt="" />
        <img src={a20} alt="" />
      </div>
    </div>
  );
};

export default NikitaAndPhilippe;
