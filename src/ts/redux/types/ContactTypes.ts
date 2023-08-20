export const UPDATE_FORM_ERROR_STATE = "UPDATE_FORM_ERROR_STATE";

interface UpdateFormErrorState {
  type: typeof UPDATE_FORM_ERROR_STATE;
  name: string;
  errorState: boolean;
}

export type ContactAction = UpdateFormErrorState;
