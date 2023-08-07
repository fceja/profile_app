import "./styles/css/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import LandingPageTemplateV2 from "./templates/LandingPageTemplateV2";
import Logo from "./components/Logo";
import MyGallery from "./pages/MyGallery";


function App() {
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
            path="about"
            element={<LandingPageTemplateV2 MainComponent={About} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
