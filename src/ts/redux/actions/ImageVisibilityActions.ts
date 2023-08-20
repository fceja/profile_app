import {
  SET_ELEMENT_VISIBILITY,
  SetElementVisibilityAction,
} from "../types/Types";

export const setElementVisibility = (
  isVisible: boolean
): SetElementVisibilityAction => ({
  type: SET_ELEMENT_VISIBILITY,
  payload: isVisible,
});
