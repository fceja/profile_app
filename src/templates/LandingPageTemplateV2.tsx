import "../styles/LandingPageTemplateV2.css"

import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import React from "react";

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
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/about">About</Link>
      <Footer />
    </div>
  );
}
