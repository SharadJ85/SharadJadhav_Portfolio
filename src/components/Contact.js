import React from "react";

export default function Contact() {
    return (
      <div className="bg-dark-cyan py-10">
        <div>
          <div className="uppercase email text-5xl text-center email">Email</div>
          <form
            name="contactForm"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
            className="email"
          >
            <input
              name="name"
              type="text"
              className="feedback-input "
              placeholder="Name" 
            />
            <input
              name="email"
              type="email"
              className="feedback-input "
              placeholder="Email"
            />
            <textarea
              name="message"
              className="feedback-input email"
              placeholder="Message"
            ></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    );
  };
