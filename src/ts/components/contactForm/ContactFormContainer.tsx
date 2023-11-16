import { connect } from "react-redux";
import { Dispatch } from "redux";

import ContactForm from "@components/contactForm/ContactForm";
import {
  updateFormInputState,
  UpdateFormIsValid,
} from "@pages/contactPage/ContactPageActions";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateFormInputState: (name: string, isValid: boolean) =>
    dispatch(updateFormInputState(name, isValid)),
  updateFormIsValid: (formIsValid: boolean) =>
    dispatch(UpdateFormIsValid(formIsValid)),
});

const ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
ContactForm.displayName = "ContactFormContainer";

export default ContactFormContainer;
