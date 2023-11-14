import React from "react";

import "@scss/components/logo/Logo.scss";
import { LogoData } from "@/ts/data/LogoData";
import SetScrollVar from "@/ts/utils/pageActions/SetScrollVar";

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
