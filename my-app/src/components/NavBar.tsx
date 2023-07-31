import "../styles/NavBar.css";

import React from "react";
import HamburgerMenu from './HamburgerMenu';
import TelNumber from "./TelNumber";

export default function NavBar () {
  return (
    <nav className="app-nav">
      <HamburgerMenu/>
      <TelNumber/>
    </nav>
  );
}
