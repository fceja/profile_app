import React from "react";

import "@scss/components/navBar/NavBar.scss";
import HamburgerMenu from "@components/hambugerMenu/HamburgerMenu";
import { LogoData } from "@/ts/data/LogoData";
import NavPageLinks from "../navPageLinks/NavPageLinks";

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
