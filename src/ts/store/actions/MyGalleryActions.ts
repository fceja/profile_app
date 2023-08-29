import * as MyGalleryActionTypes from "ts/store/types/MyGalleryActionTypes";

export const updateElementVisibility = (
  isVisible: boolean
): MyGalleryActionTypes.UpdateElementVisibility => ({
  type: MyGalleryActionTypes.UPDATE_ELEMENT_VISIBILITY,
  payload: isVisible,
});
