import React, { useState, useEffect } from "react";
import "./SelectedStory.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import nikitaandphillipe from "../../assets/images/nikitaandphillipe.jpg";
import PashminaandKshiteesh from "../../assets/images/PashminaandKshiteesh.jpg";
import anisha from "../../assets/images/anisha.jpg";
import michalestory from "../../assets/images/michaelstory.jpg";
import nikunjstory from "../../assets/images/nikunjstory.jpg";

const SelectedStory = () => {
  const navigate = useNavigate();

  const storyImages = {
    s1: { img: nikitaandphillipe, route: "/NikitaAndPhilippe" },
    s2: { img: anisha, route: "/AnishaAndWill" },
    s3: { img: nikunjstory, route: "/AishwaryaAndNikunj" },
    s4: { img: michalestory, route: "/VeeraliandMichale" },
  };

  const [selectedStory, setSelectedStory] = useState("s1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleRedirect = (storyKey) => {
    navigate(storyImages[storyKey].route);
  };

  const storiesContent = {
    s1: {
      title: "Nikita and Philippe",
      desc: "From candle-lit Parisian strolls to vibrant Indian traditions, Nikita and Philippe's celebration blended two worlds into one timeless love story, full of laughter, color, and everlasting memories.",
    },
    s2: {
      title: "Anisha and Will",
      desc: "Anisha and Will's wedding was a perfect symphony of elegance and warmth—an intimate gathering where every glance, every vow, and every dance step echoed pure joy and deep connection.",
    },
    s3: {
      title: "Aishwarya and Nikunj",
      desc: "Childhood sweethearts turned soulmates, Aishwarya and Nikunj's grand wedding was a vibrant mosaic of heritage, heartfelt rituals, and moments that sparkled with boundless happiness.",
    },
    s4: {
      title: "Veerali and Michale",
      desc: "Beneath a sky full of stars and surrounded by loved ones, Veerali and Michale exchanged vows in a celebration that was as magical as their journey—graceful, soulful, and utterly unforgettable.",
    },
  };

  return (
    <div className="selected-story">
      {!isMobile ? (
        <>
          <div className="story-left">
            <img
              src={storyImages[selectedStory].img}
              alt=""
              key={selectedStory}
              className="story-image"
            />
          </div>
          <div className="story-right">
            {Object.keys(storiesContent).map((key) => (
              <button
                key={key}
                className="storybutton"
                onMouseEnter={() => setSelectedStory(key)}
                onClick={() => handleRedirect(key)}
              >
                <h3>{storiesContent[key].title}</h3>
                <p>{storiesContent[key].desc}</p>
              </button>
            ))}
          </div>
        </>
      ) : (
        // MOBILE LAYOUT
        <motion.div
          className="mobile-stories-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {Object.keys(storiesContent).map((key, index) => (
            <motion.div
              key={key}
              className="mobile-story-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => handleRedirect(key)}
            >
              <img src={storyImages[key].img} alt={storiesContent[key].title} />
              <div className="mobile-story-text">
                <h3>{storiesContent[key].title}</h3>
                <p>{storiesContent[key].desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SelectedStory;
