import * as ContactTypes from "../types/ContactTypes";

export const UpdateFormErrorState = (
  name: string,
  errorState: boolean
): ContactTypes.UpdateFormErrorState => ({
  type: ContactTypes.UPDATE_FORM_ERROR_STATE,
  name: name,
  errorState: errorState,
});

export const UpdateFormHasError = (
  formHasError: boolean
): ContactTypes.UpdateFormHasError => ({
  type: ContactTypes.UPDATE_FORM_HAS_ERROR,
  formHasError: formHasError,
});
