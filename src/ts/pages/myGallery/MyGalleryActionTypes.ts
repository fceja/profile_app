export const UPDATE_ELEMENT_VISIBILITY = "UPDATE_ELEMENT_VISIBILITY";

export type UpdateElementVisibility = {
  type: typeof UPDATE_ELEMENT_VISIBILITY;
  payload: boolean;
};

export type MyGalleryActionTypes = UpdateElementVisibility;
