import React from "react";

import "@scss/pages/home/Home.scss";
import { MyImageGalleryData } from "@/ts/data/MyImageGalleryData";

const mainImage = MyImageGalleryData[0];

export default function Home() {
  return (
    <div className="home-img-container m-4">
      <div className="message-container text-center">
        <h1>This is title</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="img-bullets-container">
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
