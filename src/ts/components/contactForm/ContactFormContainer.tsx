import { connect } from "react-redux";
import { Dispatch } from "redux";

import ContactForm from "./ContactForm";
import { UpdateFormErrorState } from "ts/redux/actions/ContactActions";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateFormErrorState: (name: string, errorState: boolean) =>
    dispatch(UpdateFormErrorState(name, errorState)),
});

const ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
ContactForm.displayName = "ContactFormContainer";

export default ContactFormContainer;
