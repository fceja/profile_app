import { connect } from "react-redux";

import Contact from "./Contact";

const ContactContainer = connect()(Contact);
ContactContainer.displayName = "ContactContainer";

export default ContactContainer;
