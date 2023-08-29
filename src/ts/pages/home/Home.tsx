import React from "react";

import "styles/pages/home/Home.scss";

export default function Home() {
  return (
    <div className="home-img-container">
      <div className="img-gradient-container">
        <div className="gradient" />
        <img className="img-main" src={"/images/main.png"} alt="electrician" />
      </div>
      <div className="img-text">
        <ul>
          <li>Residential</li>
          <li>Commercial</li>
          <li>Industrial</li>
        </ul>
      </div>
    </div>
  );
}
