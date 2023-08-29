import * as MyGalleryActionTypes from "ts/pages/myGallery/MyGalleryActionTypes";

export const updateElementVisibility = (
  isVisible: boolean
): MyGalleryActionTypes.UpdateElementVisibility => ({
  type: MyGalleryActionTypes.UPDATE_ELEMENT_VISIBILITY,
  payload: isVisible,
});
