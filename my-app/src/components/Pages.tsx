import "../styles/Pages.css";

import About from "../pages/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import React from "react";

export default function Pages() {
  return (
    <div className="page-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
      </Router>
    </div>
  );
}
