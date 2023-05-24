import React from "react";
import "../index.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Print collected data to console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Send email
    const emailData = {
      to: "dev.harshmangal@gmail.com",
      subject: "New Contact Form Submission",
      body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email logic here (e.g., using a backend API or email service)

    // Reset form fields
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-content">
        <h1>Get in Touch</h1>
        <p>
          Have any questions or feedback? We'd love to hear from you! Fill out
          the form and we'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
