import React, { FormEvent, useState, ChangeEvent } from "react";

export default function ContactForm() {
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
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form date: ', formData)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
    </form>)
}
