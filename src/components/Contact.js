import React from "react";

export default function Contact() {
  return (
    <div className="bg-dark-cyan py-10">
      <div>
        <div className="uppercase email text-5xl text-center email">
          Email
        </div>
      <form className="email">
        <input
          name="name"
          type="text" 
          class="feedback-input "
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          class="feedback-input "
          placeholder="Email"
        />
        <textarea
          name="text"
          class="feedback-input email"
          placeholder="Message"
        ></textarea>
        <input type="submit" value="SEND" />
      </form>
    </div>
    </div>
  );
}
