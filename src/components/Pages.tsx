import "../styles/Pages.scss";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

import Contact from "../pages/contact/Contact";
import MyGallery from "../pages/mygallery/MyGallery";
import Home from "../pages/home/Home";

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
