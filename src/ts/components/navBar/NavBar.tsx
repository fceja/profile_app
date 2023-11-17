import React from "react";

import "@scss/components/navBar/NavBar.scss";
import HamburgerMenu from "@components/hambugerMenu/HamburgerMenu";
import { LogoData } from "@data/LogoData";
import NavPageLinks from "@components/navPageLinks/NavPageLinks";

const NavBar = () => {
  return (
    <nav className="nav-bar-container mt-4" id="id-nav-bar">
      <div className="nav-logo-container">
        <img className="nav-logo" src={LogoData.original} alt={LogoData.alt} />
      </div>
      <HamburgerMenu />
      <NavPageLinks />
    </nav>
  );
};

export default NavBar;
