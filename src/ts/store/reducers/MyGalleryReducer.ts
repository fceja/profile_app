import * as MyGalleryActionTypes from "../types/MyGalleryActionTypes";

interface InitialSate {
  isElementVisible: boolean;
}

const initialState: InitialSate = {
  isElementVisible: false,
};

const myGalleryReducer = (
  state = initialState,
  action: MyGalleryActionTypes.MyGalleryActionTypes
) => {
  switch (action.type) {
    case MyGalleryActionTypes.UPDATE_ELEMENT_VISIBILITY:
      return { ...state, isElementVisible: action.payload };
    default:
      return state;
  }
};

export default myGalleryReducer;
