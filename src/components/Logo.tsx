import "../styles/css/Logo.css";

import React from "react";
import SetScrollVar from "../scripts/ScrollScript";

export default function Logo() {
  SetScrollVar();

  return (
    <div className="img-container">
      <img className="img-hero" src="images/PopsAndSonsLogo.png"/>
    </div>
  )
}
