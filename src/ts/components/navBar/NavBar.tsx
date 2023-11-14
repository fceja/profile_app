import React from "react";

import "@scss/components/navBar/NavBar.scss";
import HamburgerMenu from "@components/hambugerMenu/HamburgerMenu";
import { LogoData } from "@/ts/data/LogoData";
import NavPageLinks from "../navPageLinks/NavPageLinks";

export default function NavBar() {
  return (
    <nav className="nav-bar-container" id="id-nav-bar">
      <img
        className="nav-logo-container"
        src={LogoData.original}
        alt={LogoData.alt}
      />
      <HamburgerMenu />
      <NavPageLinks />
    </nav>
  );
}
