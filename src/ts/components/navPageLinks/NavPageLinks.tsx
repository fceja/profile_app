import React from "react";
import { Link } from "react-router-dom";

import "@scss/components/navPageLinks/NavPageLinks.scss";

// TODO - update spacing of buttons when screen resizes
const NavPageLinks: React.FC = () => {
  return (
    <div className="nav-page-links-container">
      <Link className="btn-link" to="/">
        Home
      </Link>
      <Link className="btn-link" to="/gallery">
        Gallery
      </Link>
      <Link className="btn-link btn-link-contact" to="/contact">
        Contact Us
      </Link>
    </div>
  );
};

export default NavPageLinks;
