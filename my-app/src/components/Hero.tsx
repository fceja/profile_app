import "../styles/Hero.css";

import React from "react";
import SetScrollVar from "../scripts/HeroScript";

export default function Hero() {
  SetScrollVar();

  return (
    <p className="hero-text">AB<br/> Company</p>
  )
}
