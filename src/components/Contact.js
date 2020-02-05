import React from "react";

export default function Contact() {
  let msg=(()=>{alert("Thank you. I will get back to you as soon as possible!")})
    return (
      <div className="bg-dark-cyan py-10">
        <div>
          <div className="uppercase email text-5xl text-center email">Email</div>
          <form
            name="contact"
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
            <button type="submit" onClick={msg}>SEND</button>
          </form>
        </div>
      </div>
    );
  };
