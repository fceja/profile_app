import React from "react";

import "@scss/components/navBar/NavBar.scss";
import HamburgerMenu from "@components/hambugerMenu/HamburgerMenu";
import TelNumber from "@components/telNumber/TelNumber";

export default function NavBar() {
  return (
    <nav className="nav-bar" id="id-nav-bar">
      <HamburgerMenu />
      <TelNumber />
    </nav>
  );
}
