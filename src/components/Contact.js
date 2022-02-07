import React from "react";

const Contact = () => {
  return (
    <section className="section-container">
      <div className="main-container">
        <h3 style={{ textAlign: "center", padding: "20px" }}>Get in Touch</h3>

        <form className="contact-form">
          <label>Name</label>
          <input className="input-field" type="text" name="name" />

          <label>Suject</label>
          <input className="input-field" type="text" name="subject" />

          <label>Email</label>
          <input className="input-field" type="text" name="email" />

          <label>Message</label>
          <textarea className="input-field" type="text" name="message">
            {" "}
          </textarea>

          <input className="submit-btn" type="submit" value="send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
