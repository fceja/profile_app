import React from "react";

import "../styles/ImageSlider.css";

export default function ImageSlider() {
  return (
    <div className="img-slider-container">
      <div className="img-gradient-container">
        <div className="gradient"/>
        <img
          className="img-main"
          src={"/images/main.png"}
          alt="electrician"
        />
      </div>
      <div className="img-text">
        This is img text <br />
        More text
      </div>
    </div>
  );
}
