import "@scss/components/contactInfo/ContactInfo.scss";
import ContactInfoEmail from "@components/contactInfoEmail/ContactInfoEmail";
import ContactInfoMap from "@components/contactInfoMap/ContactInfoMap";
import ContactInfoPhone from "@components/contactInfoPhone/ContactInfoPhone";
import ContactInfoSocial from "@components/contactInfoSocial/ContactInfoSocial";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <ContactInfoPhone />
      <ContactInfoEmail />
      <ContactInfoSocial />
      <ContactInfoMap />
    </div>
  );
};

export default ContactInfo;
