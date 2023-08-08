import React from "react";

import ContactInfo from "components/ContactInfo";
import ContactForm from "components/ContactForm";

export default function Contact() {
    return(
        <div className="contact-info-form-container">
            <ContactInfo />
            <ContactForm />
        </div>
    )
}