import { useEffect, useState, useRef } from "react";
import "./Testinomials.css";

const testimonials = [
  {
    quote:
      "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src: "/images/wedding2.png",
  },
  {
    quote:
      "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src: "/images/wedding1.png",
  },
  {
    quote:
      "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "/images/wedding3.png",
  },
];

export default function AnimatedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const updateIndex = (direction) => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex + direction + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => updateIndex(1), 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleUserClick = (direction) => {
    clearInterval(intervalRef.current);
    updateIndex(direction);
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        <div className="image-container">
          {testimonials.map((t, i) => {
            const offset = i - activeIndex;
            const absOffset = Math.abs(offset);
            const zIndex = testimonials.length - absOffset;
            const opacity = i === activeIndex ? 1 : 0.7;
            const scale = 1 - absOffset * 0.15;
            const translateY =
              offset === -1 ? "-20%" : offset === 1 ? "20%" : "0%";
            const rotateY =
              offset === -1 ? "15deg" : offset === 1 ? "-15deg" : "0deg";

            return (
              <img
                key={i}
                src={t.src}
                alt={t.name}
                className="testimonial-image"
                style={{
                  zIndex,
                  opacity,
                  transform: `translateY(${translateY}) scale(${scale}) rotateY(${rotateY})`,
                }}
              />
            );
          })}
        </div>
        <div className="testimonial-content">
          <div>
            <h3 className="name">{testimonials[activeIndex].name}</h3>
            <p className="designation">
              {testimonials[activeIndex].designation}
            </p>
            <p className="quote">
              {testimonials[activeIndex].quote.split(" ").map((word, i) => (
                <span className="word" key={i}>
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={() => handleUserClick(-1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              className="arrow-button next-button"
              onClick={() => handleUserClick(1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
