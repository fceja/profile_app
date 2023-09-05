import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "styles/components/contactForm/ContactForm.scss";
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
    <Form onSubmit={handleSubmit}>
      <Form.Label className="sendMessageTitle">Send us a message</Form.Label>
      <Form.Group className="formName m-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        {isFormSubmitted && !contactState.formInputStates.nameIsValid && (
          <label className="form-label-error">
            {"\u00A0" + contactState.formErrorMessage}
          </label>
        )}
        <Form.Control
          aria-label="First name"
          name="name"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="formEmail m-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        {isFormSubmitted && !contactState.formInputStates.emailIsValid && (
          <label className="form-label-error">
            {"\u00A0" + contactState.formErrorMessage}
          </label>
        )}
        <Form.Control type="email" name="email" onChange={handleInputChange} />
        <Form.Text className="text-muted">
          We'll never share your email.
        </Form.Text>
      </Form.Group>

      <Form.Group className="formTextArea m-3" controlId="formTextArea">
        <Form.Label>Message</Form.Label>
        {isFormSubmitted && !contactState.formInputStates.messageIsValid && (
          <label className="form-label-error">
            {"\u00A0" + contactState.formErrorMessage}
          </label>
        )}
        <Form.Control
          as="textarea"
          className="textArea"
          rows={4}
          name="message"
          onChange={handleInputChange}
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="secondary" type="submit" className="formSubmitBtn">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
