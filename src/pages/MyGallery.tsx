import "../styles/MyGallery.css"
import "../styles/image-gallery.scss"

import React from "react";
import ImageGallery from "react-image-gallery";

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

class MyGallery extends React.Component {
  _onPlay(index: number) {
    console.debug("playing from index", index);
  }

  render() {
    return (
      <section className="app-react-image-gallery">
        <ImageGallery
          items={images}
          // onPlay={this._onPlay.bind(this)}
        />
      </section>
    );
  }
}

export default MyGallery;
