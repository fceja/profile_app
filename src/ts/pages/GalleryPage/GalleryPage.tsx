import React, { lazy, Suspense } from "react";

import "@scss/pages/galleryPage/GalleryPage.scss";
import { GalleryImageData } from "@data/GalleryData";
import Loading from "@common/components/Loading";

const ImageGallery = lazy(() => import("react-image-gallery"));

// TODO - for consistency, prepare images with identical aspect ratio

const MyImageGallery: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="app-react-image-gallery mt-3 mb-3">
          <ImageGallery items={GalleryImageData} />
        </section>
      </Suspense>
    </>
  );
};

export default MyImageGallery;
