import React from "react";

import "styles/pages/myImageGallery/MyImageGallery.scss";
import { MyImageGalleryData } from "ts/common/data/MyImageGalleryData";
import ImageGallery from "react-image-gallery";

const images = MyImageGalleryData;

const MyImageGallery: React.FC = () => {
  return (
    <section className="app-react-image-gallery">
      <ImageGallery items={images} />
    </section>
  );
};

export default MyImageGallery;