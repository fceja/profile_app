import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "styles/pages/imageGallery/ImageGallery.scss";
import ElementObserver from "ts/common/utils/observeElement/ElementObserver";
import ImageGallery from "react-image-gallery";
import { RootState } from "ts/store/ConfigureStore";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

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
