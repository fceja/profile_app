import "../styles/Logo.scss";

import React from "react";

import SetScrollVar from "../ts/scripts/SetScrollVar";

export default function Logo() {
  SetScrollVar();

  return (
    <div className="img-logo-container">
      <img className="img-logo-hero" src="images/PopsAndSonsLogo.png"/>
    </div>
  )
}
