import React from "react";

import "styles/pages/home/Home.scss";
import { GalleryData } from "ts/common/GalleryData";

const mainImage = GalleryData[0];

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
