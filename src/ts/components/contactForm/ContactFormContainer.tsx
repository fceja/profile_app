import { connect } from "react-redux";
import { Dispatch } from "redux";

import ContactForm from "./ContactForm";
import { updateFormErrorState } from "ts/redux/actions/ContactActions";

const mapStateToProps = (state: any) => {
  console.log("ContactFormContainer - formstate", state);
  return {
    contactFormState: state,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateFormErrorState: (name: string, errorState: boolean) =>
    dispatch(updateFormErrorState(name, errorState)),
});

const ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);

export default ContactFormContainer;
