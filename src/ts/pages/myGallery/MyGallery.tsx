import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "styles/pages/imageGallery/ImageGallery.scss";
import ElementObserver from "ts/utils/observeElement/ElementObserver";
import { ImageData } from "ts/common/ImageData";
import ImageGallery from "react-image-gallery";
import { RootState } from "ts/store/ConfigureStore";

const images = ImageData;
const elemToObserveStr = ".image-gallery-slides";

const MyGallery: React.FC = () => {
  const myGalleryState = useSelector(
    (state: RootState) => state.myGalleryState
  );

  useEffect(() => {
    const swipeDiv = document.querySelector(".image-gallery-swipe");

    if (swipeDiv) {
      const loadingDiv = swipeDiv.querySelector(".loading-div");

      if (!myGalleryState.isElementVisible && !loadingDiv) {
        const newLoadingDiv = document.createElement("div");
        newLoadingDiv.className = "loading-div";
        newLoadingDiv.textContent = "Loading...";
        swipeDiv.appendChild(newLoadingDiv);
      } else if (myGalleryState.isElementVisible && loadingDiv) {
        swipeDiv.removeChild(loadingDiv);
      }
    }
  }, [myGalleryState.isElementVisible]);

  return (
    <section className="app-react-image-gallery">
      <ElementObserver elemToObserve={elemToObserveStr} />
      <ImageGallery items={images} />
    </section>
  );
};

export default MyGallery;
