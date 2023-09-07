import React from "react";

import "styles/components/logo/Logo.scss";
import { LogoData } from "ts/common/data/LogoData";
import SetScrollVar from "ts/utils/scripts/SetScrollVar";

export default function Logo() {
  SetScrollVar();

  return (
    <div className="img-logo-container">
      <img
        className="img-logo-hero"
        src={LogoData.original}
        alt={LogoData.alt}
      />
    </div>
  );
}
