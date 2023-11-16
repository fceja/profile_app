import { connect } from "react-redux";

import ContactPage from "@pages/contactPage/ContactPage";

const ContactContainer = connect()(ContactPage);
ContactContainer.displayName = "ContactContainer";

export default ContactContainer;
