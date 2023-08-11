import "../styles/scss/NavBar.scss";

import React from "react";

import HamburgerMenu from "./HamburgerMenu";
import TelNumber from "./TelNumber";

export default function NavBar() {
  return (
    <nav className="nav-bar" id="id-nav-bar">
      <HamburgerMenu />
      <TelNumber />
    </nav>
  );
}
