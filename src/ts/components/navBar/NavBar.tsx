import React from "react";

import "@scss/components/navBar/NavBar.scss";
import HamburgerMenu from "@components/hambugerMenu/HamburgerMenu";
import { LogoData } from "@data/LogoData";
import NavPageLinks from "../navPageLinks/NavPageLinks";

// TODO - verify nav bar container sizing is identical across pages / devices
export default function NavBar() {
  return (
    <nav className="nav-bar-container" id="id-nav-bar">
      <div className="nav-logo-container">
        <img className="nav-logo" src={LogoData.original} alt={LogoData.alt} />
      </div>
      <HamburgerMenu />
      <NavPageLinks />
    </nav>
  );
}
