import "../styles/scss/NavBar.scss";

import HamburgerMenu from './HamburgerMenu';
import React from "react";
import TelNumber from "./TelNumber";

export default function NavBar () {
  return (
    <nav className="nav-bar">
      <HamburgerMenu/>
      <TelNumber/>
    </nav>
  );
}
