import { connect } from "react-redux";

import MyGallery from "./MyGallery";

const MyGalleryContainer = connect()(MyGallery);
MyGalleryContainer.displayName = "MyGalleryContainer";

export default MyGalleryContainer;
