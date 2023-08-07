import "../styles/css/MyGallery.css";
import "../styles/scss/image-gallery.scss";

import React from "react";
import { connect } from "react-redux";
import { AppState } from "types";
import ElementObserver from "ElementObserver";

import ImageGallery from "react-image-gallery";
interface AnotherComponentProps {
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

const AnotherComponent: React.FC<AnotherComponentProps> = ({
  isElementVisible,
}) => {
  return (
    <section className="app-react-image-gallery">
      <ElementObserver />
      <ImageGallery items={images} />
      {isElementVisible ? null : <div>Loading...</div>}
    </section>
  );
};

const mapStateToProps = (state: AppState) => ({
  isElementVisible: state.isElementVisible,
});

export default connect(mapStateToProps)(AnotherComponent);
