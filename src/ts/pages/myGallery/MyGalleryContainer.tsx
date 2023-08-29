import { connect } from "react-redux";
import { Dispatch } from "redux";

import MyGallery from "./MyGallery";
import { updateElementVisibility } from "ts/store/actions/MyGalleryActions";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateElementVisibility: (payload: boolean) =>
    dispatch(updateElementVisibility(payload)),
});

const MyGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGallery);
MyGalleryContainer.displayName = "MyGalleryContainer";

export default MyGalleryContainer;
