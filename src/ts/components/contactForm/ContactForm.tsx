// import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";

import "../../../styles/components/contactForm/ContactForm.scss";

export default function ContactForm() {
  const formNameErrorMessage = "Name is required";
  const formEmailErrorMessage = "Email is required";

  const [isFormNameError, setFormNameError] = useState(true);
  const [isFormEmailError, setFormEmailError] = useState(true);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

    if (name === "name") {
      checkIfFormNameError({ value: value });
    } else if (name === "email") {
      checkIfFormEmailError({ value: value });
    }

    // reset until form submitted again
    setFormSubmitted(false);
  };

  const checkIfFormEmailError = ({ value }: { value: String }) => {
    if (value === "") {
      setFormEmailError(true);
    } else {
      setFormEmailError(false);
    }
  };

  const checkIfFormNameError = ({ value }: { value: String }) => {
    if (value === "") {
      setFormNameError(true);
    } else {
      setFormNameError(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setFormSubmitted(true);
    event.preventDefault();

    if (isFormNameError || isFormEmailError) {
      console.log("Not submitting");
    } else {
      console.log("Submitting");
    }
  };

  return (
    <div className="contact-form-container">
      <div className="form-title">Send us a message</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row-input">
          <div className="div-label">
            <label className="contact-form-label">Name:</label>
          </div>
          <div className="div-input">
            <input
              className="contact-form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {isFormSubmitted && isFormNameError && (
              <span className="error-name">{formNameErrorMessage}</span>
            )}
          </div>
        </div>
        <div className="form-row-input">
          <div className="div-label">
            <label className="contact-form-label">Email:</label>
          </div>
          <div className="div-input">
            <input
              className="contact-form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {isFormSubmitted && isFormEmailError && (
              <span className="error-email">{formEmailErrorMessage}</span>
            )}
          </div>
        </div>
        <div className="form-row-textarea">
          <div className="div-label">
            <label className="contact-form-label">Message:</label>
          </div>
          <div className="div-input">
            <textarea
              className="contact-form-input"
              name="message"
              // value={formData.message}
              // onChange={handleInputChange}
            />
            {/* {formErrors.message && (
              <span className="error-message">
                {formErrors.message}
              </span>
            )} */}
          </div>
        </div>
        <div className="form-row-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

// import axios from "axios";
// import React, { FormEvent, useState, ChangeEvent, useEffect } from "react";

// import "../../../styles/components/contactForm/ContactForm.scss";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     name: "nameError",
//     email: "",
//     message: "",

//   });

//   const [formSubmitted, setFormSubmitted] = useState(false);
//   useEffect(() => {
//     if (formSubmitted) {
//       console.log('form has been submitted')
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         name: formData.name.trim() === "" ? "Name is required" : "",
//         email: formData.email.trim() === "" ? "Email is required" : "",
//         message: formData.message.trim() === "" ? "Message is required" : "",
//       }));
//     }
//   }, [formData, formSubmitted]);

//   const handleInputChange = (
//     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });

//     // validate field and update formErrors
//     if (value.trim() === "") {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//       }));
//     } else {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//       }));
//     }

//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setFormSubmitted(true);

//     // check for form errors
//     const hasErrors = Object.values(formErrors).some((error) => error !== "");

//     if (hasErrors) {
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3020/email/send", {
//         contactName: formData.name,
//         contactEmail: formData.email,
//         contactEmailMessage: formData.message,
//       });

//       console.log("Response: ", response.data);
//     } catch (error) {
//     }
//   };

//   return (
//     <div className="contact-form-container">
//       <div className="form-title">Send us a message</div>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-row-input">
//           <div className="div-label">
//             <label className="contact-form-label">Name:</label>
//           </div>
//           <div className="div-input">
//             <input
//               className="contact-form-input"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//             {formErrors.name && (
//               <span className="error-name">{formErrors.name}</span>
//             )}
//           </div>
//         </div>
//         <div className="form-row-input">
//           <div className="div-label">
//             <label className="contact-form-label">Email:</label>
//           </div>
//           <div className="div-input">
//             <input
//               className="contact-form-input"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             {formErrors.email && (
//               <span className="error-email">{formErrors.email}</span>
//             )}
//           </div>
//         </div>
//         <div className="form-row-textarea">
//           <div className="div-label">
//             <label className="contact-form-label">Message:</label>
//           </div>
//           <div className="div-input">
//             <textarea
//               className="contact-form-input"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//             />
//             {formErrors.message && (
//               <span className="error-message">{formErrors.message}</span>
//             )}
//           </div>
//         </div>
//         <div className="form-row-btn">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }
