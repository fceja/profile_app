import "../styles/Logo.scss";

import React from "react";

import SetScrollVar from "../ts/scripts/SetScrollVar";

export default function Logo() {
  SetScrollVar();

  return (
    <div className="img-container">
      <img className="img-hero" src="images/PopsAndSonsLogo.png"/>
    </div>
  )
}
