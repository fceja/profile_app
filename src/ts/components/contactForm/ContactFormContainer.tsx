import { connect } from "react-redux";
import { Dispatch } from "redux";

import ContactForm from "./ContactForm";
import {
  UpdateFormErrorState,
  UpdateFormHasError,
} from "ts/redux/actions/ContactActions";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateFormErrorState: (name: string, errorState: boolean) =>
    dispatch(UpdateFormErrorState(name, errorState)),
  updateFormHasError: (forHasError: boolean) =>
    dispatch(UpdateFormHasError(forHasError)),
});

const ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
ContactForm.displayName = "ContactFormContainer";

export default ContactFormContainer;
