import React from "react";
import { Link } from "react-router-dom";

import "@scss/components/navPageLinks/NavPageLinks.scss";

const NavPageLinks: React.FC = () => {
  return (
    <div className="nav-page-links-container">
      <Link className="btn-link" to="/">
        Home
      </Link>
      <Link className="btn-link" to="/gallery">
        Gallery
      </Link>
      <Link className="btn-link" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default NavPageLinks;
