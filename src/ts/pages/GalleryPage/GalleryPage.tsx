import React, { lazy, Suspense } from "react";

import "@scss/pages/galleryPage/GalleryPage.scss";
import { GalleryImageData } from "@data/GalleryData";
import Loading from "@common/components/Loading"

const ImageGallery = lazy(() => import("react-image-gallery"))


// TODO - will need to prepare proper aspect ratio for images, so that the
// size appears identical in the slider
const images = GalleryImageData;

const MyImageGallery: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section className="app-react-image-gallery mt-3 mb-3">
        <ImageGallery items={images} />
      </section>
    </Suspense>
  );
};

export default MyImageGallery;
