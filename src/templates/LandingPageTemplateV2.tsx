import "../styles/LandingPageTemplateV2.scss";

import { Link } from "react-router-dom";
import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ScrollToTop from "scripts/ScrollToTop";

type LandingPageTemplateV2Props = {
  MainComponent: React.ComponentType;
  OptionalComponent?: React.ComponentType;
};

export default function LandingPageTemplateV2({
  MainComponent,
  OptionalComponent,
}: LandingPageTemplateV2Props) {

  return (
    <div className="page-template-v2">
      {OptionalComponent && <OptionalComponent />}
      <NavBar />
      <MainComponent />
      <Link to="/" className="bottom-link" onClick={ScrollToTop}>
        Home
      </Link>
      <Link to="/gallery" className="bottom-link" onClick={ScrollToTop}>
        Gallery
      </Link>
      <Link to="/contact" className="bottom-link" onClick={ScrollToTop}>
        Contact
      </Link>
      <Footer />
    </div>
  );
}
