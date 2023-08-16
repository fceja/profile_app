import React from "react";

import "../../../styles/components/contactInfo/ContactInfo.scss";
import ContactInfoEmail from "../contactInfoEmail/ContactInfoEmail";
import ContactInfoMap from "../contactInfoMap/ContactInfoMap";
import ContactInfoPhone from "../contactInfoPhone/ContactInfoPhone";
import ContactInfoSocial from "../contactInfoSocial/ContactInfoSocial";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <section className="sec-1">
        <ContactInfoPhone />
      </section>
      <section className="sec-2">
        <ContactInfoEmail />
      </section>
      <section className="sec-3">
        <ContactInfoSocial />
      </section>
      <section className="sec-4">
        <ContactInfoMap />
      </section>
    </div>
  );
}
