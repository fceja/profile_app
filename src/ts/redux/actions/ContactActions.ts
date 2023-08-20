import { ContactAction, UPDATE_FORM_ERROR_STATE } from "../types/ContactTypes";

export const updateFormErrorState = (
  name: string,
  errorState: boolean
): ContactAction => ({
  type: UPDATE_FORM_ERROR_STATE,
  name: name,
  errorState: errorState,
});
