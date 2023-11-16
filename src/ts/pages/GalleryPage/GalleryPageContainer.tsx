import { connect } from "react-redux";

import MyImageGallery from "@pages/GalleryPage/GalleryPage";

const MyImageGalleryContainer = connect()(MyImageGallery);
MyImageGalleryContainer.displayName = "MyImageGalleryContainer";

export default MyImageGalleryContainer;
