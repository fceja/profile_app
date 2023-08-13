import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import LandingPageTemplateV2 from "../templates/LandingPageTemplateV2";
import Logo from "./Logo";
import MyGallery from "../pages/mygallery/MyGallery";


function LandingPage() {
  return (
    <div className="landing-page" id="landing-page">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
            <LandingPageTemplateV2 MainComponent={Home} OptionalComponent={Logo}/>
            }
          />
          <Route
            path="gallery"
            element={<LandingPageTemplateV2 MainComponent={MyGallery} />}
          />
          <Route
            path="contact"
            element={<LandingPageTemplateV2 MainComponent={Contact} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default LandingPage;
