import React, { useState } from "react";
import "./SelectedStory.css";
import { useNavigate } from "react-router-dom";
import nikitaandphillipe from "../../assets/images/nikitaandphillipe.jpg";
import PashminaandKshiteesh from "../../assets/images/PashminaandKshiteesh.jpg";
import anisha from "../../assets/images/anisha.jpg";

import michalestory from "../../assets/images/michaelstory.jpg";
import nikunjstory from "../../assets/images/nikunjstory.jpg";

const SelectedStory = () => {
  const navigate = useNavigate();

  const storyImages = {
    s1: nikitaandphillipe,
    s2: anisha,
    s3: nikunjstory,
    s4: michalestory,
  };

  const storyRoutes = {
    s1: "/NikitaAndPhilippe",
    s2: "/AnishaAndWill",
    s3: "/AishwaryaAndNikunj",
    s4: "/VeeraliandMichale",
  };

  const [selectedStory, setSelectedStory] = useState("s1");

  const handleRedirect = (storyKey) => {
    navigate(storyRoutes[storyKey]);
  };

  return (
    <div className="selected-story">
      <div className="story-left">
        <img
          src={storyImages[selectedStory]}
          alt=""
          key={selectedStory}
          className="story-image"
        />
      </div>

      <div className="story-right">
        <button
          className="storybutton"
          onMouseEnter={() => setSelectedStory("s1")}
          onClick={() => handleRedirect("s1")}
        >
          <h3>Nikita and Philippe</h3>
          <p>
            From candle-lit Parisian strolls to vibrant Indian traditions,
            Nikita and Philippe's celebration blended two worlds into one
            timeless love story, full of laughter, color, and everlasting
            memories.
          </p>
        </button>
        <button
          className="storybutton"
          onMouseEnter={() => setSelectedStory("s2")}
          onClick={() => handleRedirect("s2")}
        >
          <h3>Anisha and Will</h3>
          <p>
            Anisha and Will's wedding was a perfect symphony of elegance and
            warmth—an intimate gathering where every glance, every vow, and
            every dance step echoed pure joy and deep connection.
          </p>
        </button>
        <button
          className="storybutton"
          onMouseEnter={() => setSelectedStory("s3")}
          onClick={() => handleRedirect("s3")}
        >
          <h3>Aishwarya and Nikunj</h3>
          <p>
            Childhood sweethearts turned soulmates, Aishwarya and Nikunj's grand
            wedding was a vibrant mosaic of heritage, heartfelt rituals, and
            moments that sparkled with boundless happiness.
          </p>
        </button>
        <button
          className="storybutton"
          onMouseEnter={() => setSelectedStory("s4")}
          onClick={() => handleRedirect("s4")}
        >
          <h3>Veerali and Michale</h3>
          <p>
            Beneath a sky full of stars and surrounded by loved ones, Veerali
            and Michale exchanged vows in a celebration that was as magical as
            their journey—graceful, soulful, and utterly unforgettable.
          </p>
        </button>
      </div>
    </div>
  );
};

export default SelectedStory;
