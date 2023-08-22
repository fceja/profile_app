import * as ContactActionTypes from "../types/ContactActionTypes";

export const UpdateFormErrorState = (
  name: string,
  errorState: boolean
): ContactActionTypes.UpdateFormErrorState => ({
  type: ContactActionTypes.UPDATE_FORM_ERROR_STATE,
  name: name,
  errorState: errorState,
});

export const UpdateFormHasError = (
  formHasError: boolean
): ContactActionTypes.UpdateFormHasError => ({
  type: ContactActionTypes.UPDATE_FORM_HAS_ERROR,
  formHasError: formHasError,
});
