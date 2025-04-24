import React from "react";
import "./HomeArt.css";
import homeart1 from "../../assets/images/homeart1.png";
import homeart2 from "../../assets/images/homeart2.png";
import { motion } from "motion/react";

const HomeArt = () => {
  return (
    <div className="home-art">
      <motion.div
        initial={{ rotate: 0 }}
        whileInView={{ rotate: -30 }}
        viewport={{ margin: "-200px" }}
        transition={{ duration: 1 }}
        className="home-art-left"
      >
        <img src={homeart1} alt="" />
      </motion.div>
      {/* WriteUp */}
      <div className="home-art-writeup">
        <p>Your Journey to flawless moments </p>
        <p>
          "A wedding is a work of art, created with love, care, and a touch of
          magic."
        </p>
      </div>

      <motion.div
        initial={{ rotate: 0 }}
        whileInView={{ rotate: 30 }}
        viewport={{ margin: "-200px" }}
        transition={{ duration: 1 }}
        className="home-art-right"
      >
        <img src={homeart2} alt="" />
      </motion.div>
    </div>
  );
};

export default HomeArt;
