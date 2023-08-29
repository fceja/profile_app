import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "../../../styles/components/contactForm/ContactForm.scss";
import { RootState } from "ts/store/ConfigureStore";

interface ContactFormProps {
  updateFormInputState: (name: string, isEmpty: boolean) => void;
  updateFormIsValid: (formIsValid: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  updateFormInputState,
  updateFormIsValid,
}) => {
  const contactState = useSelector((state: RootState) => state.contactState);
  console.log("*************************************");
  console.log("initial render", contactState);

  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    isFormValid();
  }, [contactState.formInputStates]);

  const isFormValid = () => {
    const allValid = Object.values(contactState.formInputStates).every(
      (isValid) => isValid === true
    );

    if (allValid) {
      updateFormIsValid(true);
    } else if (contactState.formIsValid !== false) {
      updateFormIsValid(false);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    updateFormState(name, value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (contactState.formIsValid) {
      console.log("Submission successful");
      // TODO - ping endpoint
    } else {
      console.log("Submission NOT successful");
    }
  };

  const updateFormState = (name: string, value: string) => {
    if (value === "") {
      updateFormInputState(name, false);
    } else {
      updateFormInputState(name, true);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="form-title">Send us a message</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row-input-name">
          <div className="div-labels-name">
            <label className="contact-form-label">Name</label>
            {isFormSubmitted && !contactState.formInputStates.nameIsValid && (
              <label className="contact-form-label-error">
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
          <div className="div-label-email">
            <label className="contact-form-label">Email</label>
            {isFormSubmitted && !contactState.formInputStates.emailIsValid && (
              <label className="contact-form-label-error">
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
          <div className="div-label-message">
            <label className="contact-form-label">Message:</label>
            {isFormSubmitted &&
              !contactState.formInputStates.messageIsValid && (
                <label className="contact-form-label-error">
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
