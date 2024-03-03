import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import up from "./images/up.png";
import "./Contact.css";

function Contact() {
  const form = useRef(); // Create a ref for the form

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_40h6npj", "template_i3x6zxt", form.current, {
        publicKey: "RagNvUMKf6DzXfNbt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact" action="#">
        <br />
        <br />
        <br />
        <form ref={form} onSubmit={sendEmail}> {/* Assign the ref to the form */}
          <br />
          <br />
          <br />
          <h2 className="contactMe">
            Contact <span>Me!</span>
          </h2>
          <div className="input-box">
            <input type="text" placeholder="Full Name" name="to_name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name="message" // Add name attribute to textarea
            cols={30}
            rows={10}
            placeholder="Your Message"
            defaultValue={""}
          />
          <input type="submit" defaultValue="Send Message" className="btn" />
        </form>
      </div>
    </>
  );
}

export default Contact;
