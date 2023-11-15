import React from "react";

import "@scss/pages/home/Home.scss";
import { MyImageGalleryData } from "@/ts/data/MyImageGalleryData";

const mainImage = MyImageGalleryData[0];

export default function Home() {
  return (
    <div className="home-img-container m-4">
      <div className="text-container text-center">
        <h1>This is title</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="img-text-container">
        <div className="img-gradient-container">
          <div className="gradient" />
          <img
            className="img-main"
            src={mainImage.original}
            alt={mainImage.alt}
          />
        </div>
        <div className="sub-text mt-3">
          <ul>
            <li>Residential</li>
            <li>Commercial</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
