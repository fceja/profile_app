import "../styles/css/Pages.css";

import Contact from "../pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyGallery from "../pages/MyGallery";
import Home from "../pages/Home";
import React from "react";

export default function Pages() {
  return (
    <div className="page-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<MyGallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </Router>
    </div>
  );
}
