import React from "react";
import { Link } from "react-router-dom";

import "@scss/components/navPageLinks/NavPageLinks.scss"

const NavPageLinks: React.FC = () => {
  return (
    <div className="nav-page-links-container">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default NavPageLinks;
