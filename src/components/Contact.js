import React from "react";

export default function Contact() {
    return (
      <div className="bg-dark-cyan py-10">
        <div>
          <div className="uppercase email text-5xl text-center email">Email</div>
          <form
            name="contactForm"
            action="POST"
            method="POST"
            netlify
            data-netlify="true"
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
            <div class="field">
            <div 
            data-netlify-recaptcha="true"></div>
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    );
  };
