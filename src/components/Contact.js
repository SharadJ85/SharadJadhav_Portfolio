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
        >
          <div className="feedback-input ">
            <input name="name" type="text" placeholder="Name" />
          </div>
          <div className="feedback-input ">
            <input name="email" type="email" placeholder="Email" />
          </div>
          <div className="feedback-input email">
            <textarea
              name="message"
              className="feedback-input email"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="field">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <div>
            <input type="submit" value="SEND" />
          </div>
        </form>
      </div>
    </div>
  );
}
