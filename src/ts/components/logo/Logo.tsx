import React from "react";

import "styles/components/logo/Logo.scss";
import SetScrollVar from "ts/scripts/SetScrollVar";

const logoImage = require("assets/images/logo.png");

export default function Logo() {
  SetScrollVar();

  return (
    <div className="img-logo-container">
      <img className="img-logo-hero" src={logoImage} />
    </div>
  );
}
