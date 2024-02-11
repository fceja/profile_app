import { lazy, Suspense } from "react";

import "@scss/pages/contactPage/ContactPage.scss";
import Loading from "@common/components/Loading"

const ContactInfo = lazy(() => import("@components/contactInfo/ContactInfo"));
const ContactFormContainer = lazy(() => import("@components/contactForm/ContactFormContainer"));


export default function ContactPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="contact-info-form-container mt-3 mb-3 ">
        <ContactInfo />
        <ContactFormContainer />
      </div>
    </ Suspense>
  );
}
