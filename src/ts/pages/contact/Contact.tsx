import React from "react";

import "@scss/pages/contact/Contact.scss";
import ContactInfo from "@components/contactInfo/ContactInfo";
import ContactFormContainer from "@components/contactForm/ContactFormContainer";

export default function Contact() {
  return (
    <div className="contact-info-form-container">
      <ContactInfo />
      <ContactFormContainer />
    </div>
  );
}
