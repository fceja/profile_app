import React from "react";

import "@scss/pages/home/Home.scss";
import { MyImageGalleryData } from "@data/MyImageGalleryData";

const mainImage = MyImageGalleryData[0];

export default function Home() {
  return (
    <div className="home-img-container">
      <div className="img-gradient-container">
        <div className="gradient" />
        <img
          className="img-main"
          src={mainImage.original}
          alt={mainImage.alt}
        />
      </div>
      <div className="img-text">
        <ul>
          <li>Residential</li>
          <li>Commercial</li>
        </ul>
      </div>
    </div>
  );
}
