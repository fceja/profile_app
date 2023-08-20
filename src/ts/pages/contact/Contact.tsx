import React from "react";

import "../../../styles/pages/contact/Contact.scss";
import ContactInfo from "ts/components/contactInfo/ContactInfo";
import ContactFormContainer from "ts/components/contactForm/ContactFormContainer";

export default function Contact() {
  return (
    <div className="contact-info-form-container">
      <ContactInfo />
      <ContactFormContainer />
    </div>
  );
}
