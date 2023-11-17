import React from "react";

import "@scss/pages/galleryPage/GalleryPage.scss";
import { GalleryImageData } from "@data/GalleryData";
import ImageGallery from "react-image-gallery";

// TODO - will need to prepare proper aspect ratio for images, so that the
// size appears identical in the slider
const images = GalleryImageData;

const MyImageGallery: React.FC = () => {
  return (
    <section className="app-react-image-gallery mt-3 mb-3">
      <ImageGallery items={images} />
    </section>
  );
};

export default MyImageGallery;
