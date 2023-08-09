import axios from "axios";
import React, { FormEvent, useState, ChangeEvent, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: formData.name.trim() === "" ? "Name is required" : "",
        email: formData.email.trim() === "" ? "Email is required" : "",
        message: formData.message.trim() === "" ? "Message is required" : "",
      }));
    }
  }, [formData, formSubmitted]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // validate field and update formErrors
    if (value.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name} is required`,
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);

    // check for form errors
    const hasErrors = Object.values(formErrors).some((error) => error !== "");

    if (hasErrors) {
      // has error, don't submit
      return;
    }

    try {
      const response = await axios.post("http://localhost:3020/email/send", {
        contactName: formData.name,
        contactEmail: formData.email,
        contactEmailMessage: formData.message,
      });

      console.log("Response: ", response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && (
          <span className="error-name">{formErrors.name}</span>
        )}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <span className="error-email">{formErrors.email}</span>
        )}
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        {formErrors.message && (
          <span className="error-message">{formErrors.message}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
