import React from "react";

import "styles/components/contactInfo/ContactInfo.scss";
import ContactInfoEmail from "ts/components/contactInfoEmail/ContactInfoEmail";
import ContactInfoMap from "ts/components/contactInfoMap/ContactInfoMap";
import ContactInfoPhone from "ts/components/contactInfoPhone/ContactInfoPhone";
import ContactInfoSocial from "ts/components/contactInfoSocial/ContactInfoSocial";

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
