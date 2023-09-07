import { connect } from "react-redux";

import MyImageGallery from "./MyImageGallery";

const MyImageGalleryContainer = connect()(MyImageGallery);
MyImageGalleryContainer.displayName = "MyImageGalleryContainer";

export default MyImageGalleryContainer;
