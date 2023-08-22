export const UPDATE_FORM_ERROR_STATE = "UPDATE_FORM_ERROR_STATE";
export const UPDATE_FORM_HAS_ERROR = "UPDATE_FORM_HAS_ERROR";

export type UpdateFormErrorState = {
  type: typeof UPDATE_FORM_ERROR_STATE;
  name: string;
  errorState: boolean;
};

export type UpdateFormHasError = {
  type: typeof UPDATE_FORM_HAS_ERROR;
  formHasError: boolean;
};

export type ContactActionTypes = UpdateFormErrorState | UpdateFormHasError;
