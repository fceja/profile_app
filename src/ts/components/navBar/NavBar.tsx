import "../../../styles/components/navBar/NavBar.scss";

import React from "react";

import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import TelNumber from "./telNumber/TelNumber";

export default function NavBar() {
  return (
    <nav className="nav-bar" id="id-nav-bar">
      <HamburgerMenu />
      <TelNumber />
    </nav>
  );
}
