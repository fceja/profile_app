import "../styles/css/NavBar.css";

import HamburgerMenu from './HamburgerMenu';
import React from "react";
import TelNumber from "./TelNumber";

export default function NavBar () {
  return (
    <nav className="app-nav">
      <HamburgerMenu/>
      <TelNumber/>
    </nav>
  );
}
