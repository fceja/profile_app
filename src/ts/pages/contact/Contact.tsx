import React from "react";

import "../../../styles/pages/contact/Contact.scss"
import ContactInfo from "ts/components/contactInfo/ContactInfo";
import ContactForm from "ts/components/contactForm/ContactForm";

export default function Contact() {
    return(
        <div className="contact-info-form-container">
            <ContactInfo />
            <ContactForm />
        </div>
    )
}