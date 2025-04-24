import React, { useState } from "react";
import "./SelectedStory.css";
import sidandsneha from "../../assets/images/sidandsneha.png";
import kartikandneha from "../../assets/images/kartikandneha.png";
import adiandpriya from "../../assets/images/adiandpriya.png";

const SelectedStory = () => {
  const storyImages = {
    s1: sidandsneha,
    s2: kartikandneha,
    s3: adiandpriya,
  };

  const storyLinks = {
    s1: "https://example.com/adi-and-priya",
    s2: "https://example.com/sid-and-archana",
    s3: "https://example.com/kartik-and-neha",
  };

  const [selectedStory, setSelectedStory] = useState("s1");

  const handleRedirect = (storyKey) => {
    window.location.href = storyLinks[storyKey];
    // Or open in new tab:
    // window.open(storyLinks[storyKey], "_blank");
  };

  return (
    <div className="selected-story">
      <div className="story-left">
        <img
          src={storyImages[selectedStory]}
          alt=""
          key={selectedStory} // This is important!
          className="story-image"
        />
      </div>

      <div className="story-right">
        <button
          class="storybutton"
          onMouseEnter={() => setSelectedStory("s1")}
          onClick={() => handleRedirect("s1")}
        >
          <h3>Adi and Priya</h3>
          <p>
            We loved Double S Enterprises! It turned our dream wedding into a
            stunning reality. Their attention to detail, creativity, and
            seamless execution exceeded all our expectations.
          </p>
        </button>
        <button
          class="storybutton"
          onMouseEnter={() => setSelectedStory("s2")}
          onClick={() => handleRedirect("s2")}
        >
          <h3>Sid and Archana</h3>
          <p>
            We loved Double S Enterprises! It turned our dream wedding into a
            stunning reality. Their attention to detail, creativity, and
            seamless execution exceeded all our expectations.
          </p>
        </button>
        <button
          class="storybutton"
          onMouseEnter={() => setSelectedStory("s3")}
          onClick={() => handleRedirect("s3")}
        >
          <h3>Kartik and Neha</h3>
          <p>
            We loved Double S Enterprises! It turned our dream wedding into a
            stunning reality. Their attention to detail, creativity, and
            seamless execution exceeded all our expectations.
          </p>
        </button>
      </div>
    </div>
  );
};

export default SelectedStory;
