import React from "react";

import "../../../styles/components/contactInfo/ContactInfo.scss";
import ContactInfoEmail from "../contactInfoEmail/ContactInfoEmail";
import ContactInfoMap from "../contactInfoMap/ContactInfoMap";
import ContactInfoPhone from "../contactInfoPhone/ContactInfoPhone";
import ContactInfoSocial from "../contactInfoSocial/ContactInfoSocial";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <section>
        <ContactInfoPhone />
      </section>
      <section>
        <ContactInfoEmail />
      </section>
      <section>
        <ContactInfoSocial />
      </section>
      <section>
        <ContactInfoMap />
      </section>
    </div>
  );
}
