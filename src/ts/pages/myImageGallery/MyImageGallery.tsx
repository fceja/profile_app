import React from "react";

import "@scss/pages/myImageGallery/MyImageGallery.scss";
import { MyImageGalleryData } from "@/ts/data/MyImageGalleryData";
import ImageGallery from "react-image-gallery";

// TODO - for mobile, images heights are dynamic
const images = MyImageGalleryData;

const MyImageGallery: React.FC = () => {
  return (
    <section className="app-react-image-gallery">
      <ImageGallery items={images} />
    </section>
  );
};

export default MyImageGallery;
