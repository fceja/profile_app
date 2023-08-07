import { SET_ELEMENT_VISIBILITY, SetElementVisibilityAction } from "./types";

export const setElementVisibility = (
  isVisible: boolean
): SetElementVisibilityAction => ({
  type: SET_ELEMENT_VISIBILITY,
  payload: isVisible,
});
