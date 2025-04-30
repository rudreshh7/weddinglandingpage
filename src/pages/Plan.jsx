import React from "react";
import "../styles/Plan.css";
import Footer from "../components/Footer";
const Plan = () => {
  const images = [
    "/images/plan/planend1.jpg", // Update with your actual image paths
    "/images/plan/planend2.jpg",
    "/images/plan/planend3.jpg",
  ];
  return (
    <div>
      {" "}
      <div className="plan-banner">
        <div className="overlay">
          <h1>Wedding Planning</h1>
        </div>
      </div>
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
      {/* Other sections */}
      <div className="intro-plan">
        <div className="intro-plan-large">
          <img src="/images/plan/planmain1.jpg" alt="" />
        </div>
        <div className="intro-plan-small">
          <img src="/images/plan/plan2.jpg" alt="" />
          <img src="/images/plan/plan3.jpg" alt="" />
          <img src="/images/plan/plan4.jpg" alt="" />
        </div>
      </div>
      {/* Writeup */}
      <div>
        <p className="plan-writeup">
          We are true romantics at heart. We know when it comes to the matter of
          the heart, and that to for an occasion like weddings, we would have
          wanted the best for ourselves. And that’s the promise we go out with.
          Deliver the best and make dreams come true.
        </p>
      </div>
      <div class="bell-divider">
        <hr class="line" />
        <div class="bow">
          <img src="bell.svg" alt="Bell Icon" />
        </div>
        <hr class="line" />
      </div>
      {/* Plan Heading big */}
      <div>
        <p class="founder-heading">
          DISCOVER THE PERFECT SETTING FOR YOUR LOVE STORY WITH OUR EXQUISITE
          VENUE SELECTION SERVICE
        </p>
      </div>
      {/* Wrtiteup */}
      <div>
        <p className="mid-writeup">
          At Double S Enterprises, we believe that the right venue sets the tone
          for your entire wedding. Whether you envision a grand palace, a serene
          beach, a lush garden, or a chic banquet hall, our Venue Selection
          Service ensures that your special day takes place in the perfect
          setting that reflects your love story.
        </p>
      </div>
      {/* Mid Writeup img */}
      <div className="mid-writeup-img">
        <img src="/images/plan/midwriteup.jpg" alt="" />
      </div>
      {/* Write para */}
      <div>
        <p className="mid-writeup">
          With a rich and extensive 23-year background in the hotel industry,
          Shehzarin transitioned seamlessly into the enchanting realm of wedding
          planning. Her journey led her to spearhead the wedding vertical of a
          prominent planning company, where her passion for creating
          unforgettable moments flourished. Fueled by a deep understanding of
          hospitality and an unwavering commitment to crafting seamless
          celebrations, Shehzarin embarked on a new chapter, founding her own
          company to bring distinct elegance and expertise to every wedding she
          touches. Welcome to a world where experience meets innovation, curated
          by a seasoned professional dedicated to turning your dream wedding
          into a timeless reality.
        </p>
      </div>
      {/* Our Work Process */}\
      <section className="work-process-section">
        <div className="work-process-text">
          <h2>Our Work Process</h2>
          <p>
            Uncover the artistry behind the magic of your wedding day from the
            initial consultation to the final dance.
          </p>
        </div>
        <div className="work-process-image">
          <img src="/images/plan/workprocess.jpg" alt="Wedding Dance" />
        </div>
      </section>
      {/* Last Plan  */}
      <div className="services-section">
        <div className="service-card">
          <h2>CONSULTATION</h2>
          <p>
            From your very first vision board to tailored vendor suggestions,
            our consultation sessions craft a personalized blueprint for your
            perfect day — turning your dreams into a detailed plan.
          </p>
        </div>
        <div className="service-card">
          <h2>COORDINATION</h2>
          <p>
            On the big day, our expert coordinators seamlessly connect every dot
            — synchronizing vendors, guests, and schedules so that you simply
            bask in the joy without worrying about the details.
          </p>
        </div>
        <div className="service-card">
          <h2>EXECUTION</h2>
          <p>
            Watch your vision unfold flawlessly as our team orchestrates every
            element, from the grand entrance to the final toast — ensuring an
            effortless, unforgettable celebration.
          </p>
        </div>
      </div>
      {/* End Images Plan */}
      <div className="gallery-container">
        {images.map((src, index) => (
          <div className="image-wrapper" key={index}>
            <img src={src} alt={`Flower Arrangement ${index + 1}`} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Plan;
