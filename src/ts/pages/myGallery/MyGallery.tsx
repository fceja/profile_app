import React from "react";

import "styles/pages/imageGallery/ImageGallery.scss";
import { GalleryData } from "ts/common/data/GalleryData";
import ImageGallery from "react-image-gallery";

const images = GalleryData;

const MyGallery: React.FC = () => {
  return (
    <section className="app-react-image-gallery">
      <ImageGallery items={images} />
    </section>
  );
};

export default MyGallery;
