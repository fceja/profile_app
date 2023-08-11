import "../styles/scss/Logo.scss";

import React from "react";
import SetScrollVar from "../scripts/ScrollScript";

export default function Logo() {
  SetScrollVar();

  return (
    <div className="img-container">
      {/* Testing */}
      <img className="img-hero" src="images/PopsAndSonsLogo.png"/>
    </div>
  )
}
