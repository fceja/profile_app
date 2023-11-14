import { connect } from "react-redux";

import Contact from "@pages/contact/Contact";

const ContactContainer = connect()(Contact);
ContactContainer.displayName = "ContactContainer";

export default ContactContainer;
