import "@scss/pages/contactPage/ContactPage.scss";
import ContactInfo from "@components/contactInfo/ContactInfo";
import ContactFormContainer from "@components/contactForm/ContactFormContainer";

export default function ContactPage() {
  return (
    <div className="contact-info-form-container mt-3 mb-3 ">
      <ContactInfo />
      <ContactFormContainer />
    </div>
  );
}
