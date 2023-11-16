import React from "react";

import "@scss/pages/contactPage/ContactPage.scss";
import ContactInfo from "@components/contactInfo/ContactInfo";
import ContactFormContainer from "@components/contactForm/ContactFormContainer";

export default function ContactPage() {
  return (
    <div className="contact-info-form-container pt-5">
      <ContactInfo />
      <ContactFormContainer />
    </div>
  );
}
