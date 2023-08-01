import "../styles/Hero.css";

import React from "react";
import SetScrollVar from "../scripts/HeroScript";

export default function Hero() {
  SetScrollVar();

  return (
    <div className="img-container">
      <img className="img-hero" src="images/PopsAndSonsLogo.png"/>
    </div>
  )
}
