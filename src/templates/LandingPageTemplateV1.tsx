import '../styles/scss/LandingPageTemplateV1.scss'

import React from "react";

import Footer from "../components/Footer";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Pages from "../components/Pages";

export default function LandingPageTemplateV1() {
  return (
    <div className="page-template-v1">
      <Logo />
      <NavBar />
      <Pages />
      <Footer />
    </div>
  );
}
