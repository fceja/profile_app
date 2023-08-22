import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "ts/redux/ConfigureStore";

interface ContactFormProps {
  updateFormErrorState: (name: string, errorState: boolean) => void;
  updateFormIsValid: (formIsValid: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  updateFormErrorState,
  updateFormIsValid,
}) => {
  const contactState = useSelector((state: RootState) => state.contactState);
  console.log("*************************************");
  console.log("initial render ContactForm 1", contactState);

  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    updateFormState();
  }, [formData]);

  useEffect(() => {
    isFormValid();
  }, [contactState.formErrorStates]);

  const isFormValid = () => {
    const hasError = Object.keys(contactState.formErrorStates).some(
      (key) =>
        contactState.formErrorStates[
          key as keyof typeof contactState.formErrorStates
        ] === true
    );

    if (hasError) {
      updateFormIsValid(false);
    } else {
      updateFormIsValid(true);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (contactState.formIsValid) {
      console.log("Submission NOT successful");
    } else {
      console.log("Submission successful");
    }
  };

  const updateFormState = () => {
    Object.keys(formData).forEach((key) => {
      let val = formData[key as keyof typeof formData];
      if (val === "") {
        updateFormErrorState(key, true);
      } else {
        updateFormErrorState(key, false);
      }
    });
  };

  return (
    <div className="contact-form-container">
      <div className="form-title">Send us a message</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row-input">
          <div className="div-label">
            <label className="contact-form-label">Name</label>
            {isFormSubmitted && contactState.formErrorStates.name && (
              <label className="contact-form-label">
                {contactState.formErrorMessage}
              </label>
            )}
          </div>
          <div className="div-input">
            <input
              className="contact-form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row-input">
          <div className="div-label">
            <label className="contact-form-label">Email</label>
            {isFormSubmitted && contactState.formErrorStates.email && (
              <label className="contact-form-label">
                {contactState.formErrorMessage}
              </label>
            )}
          </div>
          <div className="div-input">
            <input
              className="contact-form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row-textarea">
          <div className="div-label">
            <label className="contact-form-label">Message:</label>
            {isFormSubmitted && contactState.formErrorStates.message && (
              <label className="contact-form-label">
                {contactState.formErrorMessage}
              </label>
            )}
          </div>
          <div className="div-input">
            <textarea
              className="contact-form-input"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
