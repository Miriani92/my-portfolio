import React from "react";

const Contact = () => {
  const email = "https://formsubmit.co/mirian.tsintsadze1992@gmail.com";
  return (
    <section className="section-container">
      <div className="main-container">
        <h4 style={{ textAlign: "center", padding: "20px" }}>Get in Touch</h4>

        <form action={email} method="POST" className="contact-form">
          <label>Name</label>
          <input className="input-field" type="text" name="name" required />

          <label>Suject</label>
          <input className="input-field" type="text" name="subject" required />

          <label>Email</label>
          <input className="input-field" type="text" name="email" required />

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
