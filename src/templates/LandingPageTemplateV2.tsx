import "../styles/css/LandingPageTemplateV2.css";

import { Link } from "react-router-dom";
import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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
