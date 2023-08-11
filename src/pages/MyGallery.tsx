import "../styles/third-party/image-gallery.scss";

import React, { useEffect } from "react";

import { AppState } from "redux/Types";
import { connect } from "react-redux";
import ElementObserver from "redux/utils/ElementObserver";
import ImageGallery from "react-image-gallery";
interface MyGalleryProps {
  isElementVisible: boolean;
}

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

const MyGallery: React.FC<MyGalleryProps> = ({ isElementVisible }) => {
  useEffect(() => {
    const swipeDiv = document.querySelector(".image-gallery-swipe");

    if (swipeDiv) {
      const loadingDiv = swipeDiv.querySelector(".loading-div");

      if (!isElementVisible && !loadingDiv) {
        const newLoadingDiv = document.createElement("div");
        newLoadingDiv.className = "loading-div";
        newLoadingDiv.textContent = "Loading...";
        swipeDiv.appendChild(newLoadingDiv);
      } else if (isElementVisible && loadingDiv) {
        swipeDiv.removeChild(loadingDiv);
      }
    }
  }, [isElementVisible]);

  return (
    <section className="app-react-image-gallery">
      <ElementObserver elemToObserve={elemToObserveStr} />
      <ImageGallery items={images} />
    </section>
  );
};

const mapStateToProps = (state: AppState) => ({
  isElementVisible: state.isElementVisible,
});

export default connect(mapStateToProps)(MyGallery);
