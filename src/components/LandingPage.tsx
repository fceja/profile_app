import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import LandingPageTemplateV2 from "../templates/LandingPageTemplateV2";
import Logo from "./Logo";
import MyGallery from "../pages/MyGallery";


function LandingPage() {
  return (
    <div className="App">
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
