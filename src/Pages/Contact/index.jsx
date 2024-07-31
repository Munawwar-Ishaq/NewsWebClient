import React, { useState } from "react";
import "./style.css";
import Header from "../../Common/Header";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState("");

  console.log(process.env.REACT_APP_API_FORM_MESSAGE);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    axios
      .post(
        process.env.REACT_APP_API_FORM_MESSAGE,
        data
      )
      .then((res) => {
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setSuccess("Form submitted successfully!");
        setTimeout(() => {
          setSuccess('');
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setSubmitted(false);
      // alert("Form submitted!");
    }, 3000);
  };

  return (
    <>
      <Header showtab={true} tab={"contact"} />
      {success !== "" && (
        <div className="message">
          {success} <FontAwesomeIcon className="checkicon" icon={faCheckCircle} />
        </div>
      )}
      <div className="contact-container">
        <h1 className="fade-in">Contact Us</h1>
        <p className="contact-description fade-in">
          I value your feedback and am here to assist you with any questions,
          concerns, or suggestions you may have. Please feel free to reach out
          to me through any of the following methods, or use the contact form
          below. I will get back to you as soon as possible.
        </p>

        <div className="contact-info fade-in">
          <div className="contact-info-item">
            <h2>Contact Information</h2>
            <p>
              <strong>Address:</strong> Godhra Colony, Sector 11-G, New Karachi,
              Karachi, Pakistan
              <br />
              <strong>Phone:</strong> +92-314-1304783
              <br />
              <strong>Email:</strong> muhammadmunawwar124@gmail.com
            </p>
          </div>
        </div>

        <h2 className="fade-in">Contact Form</h2>
        <form
          className={`contact-form ${submitted ? "submitted" : ""}`}
          onSubmit={handleSubmit}
        >
          <div className="form-group fade-in">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="form-group fade-in">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="form-group fade-in">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="form-group fade-in">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button fade-in">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
